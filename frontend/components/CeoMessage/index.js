import Image from "next/image";
import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import styles from "./CeoMessage.module.css";
import { useRouter } from "next/router";

const CeoMessage = () => {
  const router = useRouter();
  return (
    <Row className={styles.row}>
      <Col lg={4} md={6} sm={12} className={styles.column}>
        <div className={styles.card}>
        <Image
            src={"/director.jpg"}
            height={"0"}
            width={"0"}
            sizes="100vw"
            className={styles.image}
          />
          <div className="text-center py-2">
            <h5>Mr. Bhakta Kumar Puri</h5>
            <h6>CEO</h6>
          </div>
        </div>
      </Col>
      <Col lg={6} md={6} sm={12} className={styles.column} >
        <div className={styles.detailContainer}>
          <h2 className={styles.heading}>
          Welcome to Good Vibes Education Consultancy
          </h2>
          <p>
            Dear Students and Parents Studying abroad is a good opportunity,
            most students who travel to foreign countries get impacted in a good
            way, such as their Success, personality, and the way they interact
            with others. Students who study abroad will benefit more than they
            suffer, even though leaving home could be hard, it is the best
            challenge students face to encourage them to get back with
            achievements, personal independence, and open-minded.
          </p>
          <Button
            className={styles.button}
            variant="outline-danger"
            onClick={() => {
              router.push("/about");
            }}
          >
            Read More
          </Button>
        </div>
      </Col>
    </Row>
  );
};

export default CeoMessage;
