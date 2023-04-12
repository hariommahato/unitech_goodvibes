import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useCreateFeedbackMutation } from "@/frontend/services/api";
import Image from "next/image";
import { toast, Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
import styles from "../../styles/Feedback.module.scss";
const Feedback = () => {
  const [createFeedback, { isError, isLoading, isSuccess }] =
    useCreateFeedbackMutation();
  const router = useRouter();
  const [feedbackdata, setFeedbackData] = useState({
    fullname: "",
    message: "",
  });
  const { fullname, message } = feedbackdata;
  const [images, setImages] = useState("../favicon.io");
  const [imagePreview, setImagePreview] = useState("/favicon.io");

  useEffect(() => {
    if (isError) {
      toast.error(isError);
    }
    if (isSuccess) {
      toast.success("Created Successfully");
      router.push("/");
    }
  });
  const submitHandler = (e) => {
    e.preventDefault();
    const data = { fullname, message, images };
    
    createFeedback(data);
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
    } else {
      setFeedbackData({ ...feedbackdata, [e.target.name]: e.target.value });
    }
  };
  return (
    <div>
      <Toaster />
      <div className={styles.mainDiv}>
        <h2 className="text-center">We were happy to hear from you</h2>
        <Form onSubmit={submitHandler}>
          <div>
            <Form.Label>FullName</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter FullName"
              name="fullname"
              value={fullname}
              onChange={onChange}
            />
          </div>
          <div>
            <Form.Label>Mesage</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Message"
              name="message"
              value={message}
              onChange={onChange}
            />
          </div>
          <div>
            <Form.Label>Upload Your Image</Form.Label>
            <Form.Control
              type="file"
              multiple
              accept="image/*"
              onChange={onChange}
              name="images"
            />
          </div>
          <div>
            <Image
              src={imagePreview}
              alt="Product Preview"
              width={50}
              height={50}
            />
          </div>
          <div className="my-3 text-center">
            <Button
              style={{
                width: "100%",
              }}
              onClick={submitHandler}
            >
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Feedback;
