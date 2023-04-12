import DashboardSidebar from "@/frontend/components/DashboardSidebar";
import Loader from "@/frontend/components/Loader/Loader";
import { Providers } from "@/frontend/services/provider";
import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { toast, Toaster } from "react-hot-toast";
import styles from "../../../../../styles/CarouselAdd.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { useCreateAboutMutation } from "@/frontend/services/api";
import DashboardNavbar from "@/frontend/components/DashboardNavbar";


const About = () => {
  const [createAbout, { isError, isLoading, isSuccess }] =
    useCreateAboutMutation();
  const [aboutData, setAboutData] = useState({
    message: "",
  });
  const { message } = aboutData;
  const [images, setImages] = useState("../favicon.io");
  const router = useRouter();
  const [imagePreview, setImagePreview] = useState("/favicon.io");

  useEffect(() => {
    if (isError) {
      toast.error(isError);
    }
    if (isSuccess) {
      toast.success("Created Successfully");
      router.push("/admin/dashboard/about");
    }
  });
  const submitHandler = (e) => {
    e.preventDefault();
    const data = { message, images };
    createAbout(data);
  };

  const onChange = (e) => {
    setAboutData({ ...aboutData, [e.target.name]: e.target.value });
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Toaster />
          <div className={styles.card}>
            <form onSubmit={submitHandler}>
              <h5 style={{ textAlign: "center", padding: "1rem" }}>
                Add About Data
              </h5>

              <div>
                <Form.Control
                  type="text"
                  placeholder="Enter Message About Company"
                  name="message"
                  value={message}
                  onChange={onChange}
                  as={"textarea"}
                />
              </div>

            
              <Button
                id="createProductBtn"
                type="submit"
                disabled={isLoading ? true : false}
                style={{ width: "100%", marginTop: "2rem" }}
              >
                submit
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
