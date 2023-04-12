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
  const [successData, setSuccessData] = useState();
  useEffect(() => {
    if (data) {
      const { images } = data?.success;
      setSuccessData({ images });
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
    };

    updateSuccessStory({ id, data });
  };
  {
    console.log(images);
  }
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
    }
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
              <h5>Update SuccessStory Data</h5>

              <input
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
