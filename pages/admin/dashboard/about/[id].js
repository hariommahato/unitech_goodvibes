import DashboardNavbar from "@/frontend/components/DashboardNavbar";
import DashboardSidebar from "@/frontend/components/DashboardSidebar";
import Loader from "@/frontend/components/Loader/Loader";
import {
  useGetAboutDetailsQuery,
  useUpdateAboutMutation,
} from "@/frontend/services/api";
import { Providers } from "@/frontend/services/provider";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { toast, Toaster } from "react-hot-toast";

const About = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, isError, isLoading } = useGetAboutDetailsQuery(id);
  const [
    updateAbout,
    { isSuccess, isError: updateError, isLoading: updateLoading },
  ] = useUpdateAboutMutation();
  const [aboutData, setAboutData] = useState({
    message: "",
  });

  const { message } = aboutData;

  useEffect(() => {
    if (data) {
      const { message } = data?.aboutdata;
      setAboutData({ message });
    }
    if (isError) {
      toast.error("Error Fetching Data");
    }
    if (isSuccess) {
      toast.success("Successfully Updated");
      router.push("/admin/dashboard/about");
    }
    if (updateError) {
      toast.error("Something went wrong");
    }
  }, [data, isError, updateError, isSuccess]);
  const handleUpdate = (e) => {
    e.preventDefault();
    const data = {
      message,
    };

    updateAbout({ id, data });
  };
  const onChange = (e) => {
    setAboutData({ ...aboutData, [e.target.name]: e.target.value });
  };

  return (
    <>
      {isLoading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <Toaster />
          <div
            style={{
              border: "1px solid red",
              height: "auto",
              width: "80%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <form onSubmit={handleUpdate} encType={"multipart/form-data"}>
              <h5>Update About Data</h5>
              <Form.Control
                name="message"
                value={message}
                onChange={onChange}
                as={"textarea"}
              ></Form.Control>

              <Button
                id="createProductBtn"
                type="submit"
                disabled={updateLoading ? true : false}
                style={{
                  marginTop: "2rem",
                  width: "100%",
                }}
              >
                Update Data
              </Button>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default About;
About.getLayout = function PageLayout(page) {
  return (
    <>
      <Providers>
      <DashboardNavbar/>
        <div style={{ display: "flex" }}>
          <DashboardSidebar />
          {page}
        </div>
      </Providers>
    </>
  );
};
