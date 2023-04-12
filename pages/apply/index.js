import HomeForm from "@/frontend/components/HomeForm";
import React from "react";
import { Button, Form } from "react-bootstrap";
import styles from "../../styles/ApplyNow.module.scss";
const ApplyNow = () => {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.detailContainer}>
        <h1>Apply Online</h1>
        <h6 className={styles.text}>
          If you are as a student seeking our services you can fill in the form
          below. Basic information like your academic background and what
          courses you are seeking will be useful to answer your question
          precisely:
        </h6>
      </div>
     <div className={styles.formContainer}>
      <HomeForm/>
     </div>
    </div>
  );
};

export default ApplyNow;
