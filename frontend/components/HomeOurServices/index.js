import Image from "next/image";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import styles from "./HomeOurSection.module.css";

const HomeOurServices = () => {
  return (
    <Row className={styles.row}>
      <h2>
        Our <span style={{color:"#F55050"}}>Services</span>{" "}
      </h2>
    
         <Col sm={12} md={4} lg={3} className={styles.col}>
        <Image
          height="0"
          width="0"
          sizes="100vw"
          src={"/stvisa.png"}
          className={styles.image}
        />
        <h6>Student Visa</h6>
      </Col>
      <Col sm={12} md={4} lg={3} className={styles.col}>
        <Image
          height="0"
          width="0"
          sizes="100vw"
          src={"/nursing.jpeg"}
          className={styles.image}
        />
        <h6>Working Visa In Nursing</h6>
      </Col>
      <Col sm={12} md={4} lg={3} className={styles.col}>
        <Image
          height="0"
          width="0"
          sizes="100vw"
          src={"/arg.jpeg"}
          className={styles.image}
        />
        <h6>Working Visa In Agriculture</h6>
      </Col>
      <Col sm={12} md={4} lg={3} className={styles.col}>
        <Image
          height="0"
          width="0"
          sizes="100vw"
          src={"/foodservice.jpeg"}
          className={styles.image}
        />
        <h6>Working Visa In FoodService</h6>
      </Col>
    
    </Row>
  );
};

export default HomeOurServices;
