import DashboardSidebar from "@/frontend/components/DashboardSidebar";
import Loader from "@/frontend/components/Loader/Loader";
import { Providers } from "@/frontend/services/provider";
import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { toast, Toaster } from "react-hot-toast";
import styles from "../../../../../styles/CarouselAdd.module.css";
import { useRouter } from "next/router";
import { useCreateFaqMutation } from "@/frontend/services/api";
import DashboardNavbar from "@/frontend/components/DashboardNavbar";
const Faq = () => {
  const [createFaq, { isError, isLoading, isSuccess }] = useCreateFaqMutation();
  const [faqData, setFaqData] = useState({
    title: "",
    description: "",
  });
  const { title, description } = faqData;
  const router = useRouter();
  useEffect(() => {
    if (isError) {
      toast.error(isError);
    }
    if (isSuccess) {
      toast.success("Created Successfully");
      router.push("/admin/dashboard/faq");
    }
  },[isError,isSuccess]);
  const submitHandler = (e) => {
    e.preventDefault();
    const data = { title, description };
    createFaq(data);
  };

  const onChange = (e) => {
    setFaqData({ ...faqData, [e.target.name]: e.target.value });
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Toaster />
          <div className={styles.card}>
            <form onSubmit={submitHandler} className={styles.form}>
              <h3 className="text-center">
                Add FAQ Data
              </h3>

              <div>
                <Form.Control
                  type="text"
                  placeholder="Enter Title"
                  name="title"
                  value={title}
                  as={"textarea"}
                  onChange={onChange}
                />
              </div>
              <div className="my-3">
                <Form.Control
                  type="text"
                  placeholder="Enter Description"
                  name="description"
                  value={description}
                  as={"textarea"}
                  onChange={onChange}
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

export default Faq;
Faq.getLayout = function PageLayout(page) {
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
