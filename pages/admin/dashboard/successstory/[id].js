import DashboardNavbar from "@/frontend/components/DashboardNavbar";
import DashboardSidebar from "@/frontend/components/DashboardSidebar";
import Loader from "@/frontend/components/Loader/Loader";
import {
  useGetSuccessStoryDetailsQuery,
  useUpdateSuccessStoryMutation,
} from "@/frontend/services/api";
import { Providers } from "@/frontend/services/provider";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { toast, Toaster } from "react-hot-toast";
import styles from '../../../../styles/CarouselAdd.module.css'

const SuccessStory = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, isError, isLoading } = useGetSuccessStoryDetailsQuery(id);
  const [
    updateSuccessStory,
    { isSuccess, isError: updateError, isLoading: updateLoading },
  ] = useUpdateSuccessStoryMutation();

  const [images, setImages] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [successData, setSuccessData] = useState({
    name: "",
  });
  const {name}=successData;
  useEffect(() => {
    if (data) {
      const { images, name } = data?.success;
      setSuccessData({ images, name });
      setImagePreview(images?.url);
    }

    if (isError) {
      toast.error("Error Fetching Data");
    }
    if (isSuccess) {
      toast.success("Successfully Updated");
      router.push("/admin/dashboard/successstory");
    }
    if (updateError) {
      toast.error("Something went wrong");
    }
  }, [data, isError, updateError, isSuccess]);
  const handleUpdate = (e) => {
    e.preventDefault();
    const data = {
      images,
      name,
    };

    updateSuccessStory({ id, data });
  };


  const onChange = (e) => {
    if (e.target.name === "images") {
      const profile = new FileReader();
      profile.onload = () => {
        if (profile.readyState === 2) {
          setImages(profile.result);
          setImagePreview(profile.result);
        }
      };
      profile.readAsDataURL(e.target.files[0]);
    } else setSuccessData({ ...successData, [e.target.name]: e.target.value });
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
            className={styles.card}
          >
            <form onSubmit={handleUpdate} encType={"multipart/form-data"} className={styles.form}>
              <h5>Update SuccessStory Data</h5>
              <Form.Control
                name="name"
                value={name}
                onChange={onChange}
              ></Form.Control>
              <input
              className="my-3"
                type="file"
                name="images"
                accept="image/*"
                onChange={onChange}
                multiple
              />

              <div id="createProductFormImage">
                <Image
                  src={imagePreview}
                  alt="SuccessImage"
                  width={100}
                  height={100}
                  className="my-3"
                />
                <Image
                  src={images}
                  alt="Product Preview"
                  width={100}
                  height={100}
                  className="my-3"
                />
              </div>

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

export default SuccessStory;
SuccessStory.getLayout = function PageLayout(page) {
  return (
    <>
      <Providers>
        <DashboardNavbar />
        <div style={{ display: "flex" }}>
          <DashboardSidebar />
          {page}
        </div>
      </Providers>
    </>
  );
};
