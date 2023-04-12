import DashboardNavbar from "@/frontend/components/DashboardNavbar";
import DashboardSidebar from "@/frontend/components/DashboardSidebar";
import Loader from "@/frontend/components/Loader/Loader";
import { useGetFormDetailsQuery, useUpdateFormMutation } from "@/frontend/services/api";
import { Providers } from "@/frontend/services/provider";

import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { toast, Toaster } from "react-hot-toast";

const Contact = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data, isError, isLoading } = useGetFormDetailsQuery(id);
  const [
    updateForm,
    { isSuccess, isError: updateError, isLoading: updateLoading },
  ] = useUpdateFormMutation();
  const [formdata, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    number: "",
    edulevel: "",
    course: "",
  });

  const { firstname, lastname, email, number, edulevel, course } = formdata;

  useEffect(() => {
    if (data) {
      const { firstname, lastname, email, number, edulevel, course } =
        data?.formdata;
      setFormData({firstname,lastname, email, number, edulevel, course });
    }
    if (isError) {
      toast.error("Error Fetching Data");
    }
    if (isSuccess) {
      toast.success("Successfully Updated");
      router.push("/admin/dashboard/form");
    }
    if (updateError) {
      toast.error("Something went wrong");
    }
  }, [data, isError, updateError, isSuccess]);
  const handleUpdate = (e) => {
    e.preventDefault();
    const data = {
      firstname,
      lastname,
      email,
      number,
      edulevel,
      course,
    };

    updateForm({ id, data });
  };

  const onChange = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
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

          <Card
            style={{
              width: "80%",
              //   margin: "auto",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <form onSubmit={handleUpdate} encType={"multipart/form-data"}>
              <h5>Update Student Form Data</h5>
              <Form.Control
                type="text"
                name="firstname"
                value={firstname}
                onChange={onChange}
              ></Form.Control>
               <Form.Control
                type="text"
                name="lastname"
                value={lastname}
                onChange={onChange}
              ></Form.Control>
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={onChange}
                className="my-3"
              ></Form.Control>
              <Form.Control
                type="number"
                name="number"
                value={number}
                onChange={onChange}
                className="my-3"
              ></Form.Control>
              <Form.Control
                type="text"
                name="edulevel"
                value={edulevel}
                onChange={onChange}
                className="my-3"
              ></Form.Control>
              <Form.Control
                type="text"
                name="course"
                value={course}
                onChange={onChange}
                className="my-3"
              ></Form.Control>

              <Button
                id="createProductBtn"
                type="submit"
                disabled={updateLoading ? true : false}
                className="my-3"
                style={{
                  width: "100%",
                }}
              >
                Update Data
              </Button>
            </form>
          </Card>
        </>
      )}
    </>
  );
};

export default Contact;
Contact.getLayout = function PageLayout(page) {
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
