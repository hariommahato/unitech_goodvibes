import { useCreateFormDataMutation } from "@/frontend/services/api";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { toast, Toaster } from "react-hot-toast";
import styles from "../../../styles/HomeForm.module.scss";
const HomeForm = () => {
  const [createFormData, { isError, isLoading, isSuccess }] =
    useCreateFormDataMutation();
  const router = useRouter();
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
    if (isError) {
      toast.error(isError);
    }
    if (isSuccess) {
      toast.success("Submitted Successfully");
      router.push("/");
    }
  });
  const submitHandler = (e) => {
    e.preventDefault();
    const data = { firstname, lastname, email, number, edulevel, course };
    {
      console.log(data);
    }
    createFormData(data);
  };
  const onChange = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div style={{ width: "100%",}}>
        <Card>
          <div className={styles.contentContainer}>
            <h5>Interested in studying abroad?</h5>
            <h6>Fill in your details and we’ll call you back!</h6>
          </div>
          <div className={styles.formcontainer}>
            <Form>
              <div className={styles.basicForm}>
                <Form.Control
                  type="text"
                  placeholder="FirstName"
                  name="firstname"
                  value={firstname}
                  onChange={onChange}
                ></Form.Control>
                <Form.Control
                  type="text"
                  placeholder="LastName"
                  name="lastname"
                  value={lastname}
                  onChange={onChange}
                ></Form.Control>
              </div>
              <div className="my-2">
                <Form.Control
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  value={email}
                  onChange={onChange}
                ></Form.Control>
              </div>
              <div className="my-2">
                <Form.Control
                  type="number"
                  placeholder="Mobile Number"
                  name="number"
                  value={number}
                  onChange={onChange}
                ></Form.Control>
              </div>
              <div>
                <Form.Label htmlFor="disabledTextInput">
                  Education Level
                </Form.Label>

                <Form.Control
                  type="text"
                  placeholder="Education level"
                  name="edulevel"
                  value={edulevel}
                  onChange={onChange}
                ></Form.Control>
              </div>
              <div>
                <Form.Label htmlFor="disabledTextInput">Course</Form.Label>
                <Form.Control
                  type="string"
                  placeholder="Course"
                  name="course"
                  value={course}
                  onChange={onChange}
                ></Form.Control>
              </div>
            </Form>
          </div>
          <div className={styles.buttonContainer}>
            <Button onClick={submitHandler}>Help Me Study Abroad</Button>
          </div>
        </Card>
      </div>
    </>
  );
};

export default HomeForm;
