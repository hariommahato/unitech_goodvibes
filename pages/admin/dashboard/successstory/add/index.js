import DashboardSidebar from "@/frontend/components/DashboardSidebar";
import Loader from "@/frontend/components/Loader/Loader";
import { Providers } from "@/frontend/services/provider";
import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { toast, Toaster } from "react-hot-toast";
import styles from "../../../../../styles/CarouselAdd.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import DashboardNavbar from "@/frontend/components/DashboardNavbar";
import { useCreateSuccessStoryMutation } from "@/frontend/services/api";

const SuccessStory = () => {
  const [createSuccessStory, { isError, isLoading, isSuccess }] =
    useCreateSuccessStoryMutation();
  const router=useRouter()

  const [images, setImages] = useState("../favicon.io");
  const [imagePreview, setImagePreview] = useState("/favicon.io");

  useEffect(() => {
    if (isError) {
      toast.error(isError);
    }
    if (isSuccess) {
      toast.success("Created Successfully");
      router.push("/admin/dashboard/successstory")
    }
  });
  const submitHandler = (e) => {
    e.preventDefault();
    const data = {  images };
    createSuccessStory(data);
  };

  const onChange = (e) => {
    if (e.target.name === "images") {
      const profile = new FileReader();
      profile.onload = () => {
        if (profile.readyState === 2) {
          setImagePreview(profile.result);
          setImages(profile.result);
        }
      };
      profile.readAsDataURL(e.target.files[0]);
    } 
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
                Add SuccessStory Data
              </h5>

            
              <div className="my-3">
                <input
                  type="file"
                  name="images"
                  accept="image/*"
                  onChange={onChange}
                  multiple
                />
              </div>

              <div className={styles.imagePreview}>
                <Image
                  src={imagePreview}
                  alt="Product Preview"
                  width={50}
                  height={50}
                />
              </div>

              <Button
                id="createProductBtn"
                type="submit"
                disabled={isLoading ? true : false}
                
                style={{width:"100%",marginTop:"2rem"}}
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

export default SuccessStory;
SuccessStory.getLayout = function PageLayout(page) {
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
