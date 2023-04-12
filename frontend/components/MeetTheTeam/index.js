import Image from "next/image";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import styles from "../../../styles/MeetTheTeam.module.scss";
import firsthuman from "../../images/firsthuman.jpeg";

const MeetTheTeam = () => {
  return (
    <div className={styles.mainContainer}>
      <Container className={styles.container}>
        <h3 className="my-3 text-center">MEET THE TEAM</h3>
        <p className="my-3 text-center">
          NEC is a group of highly trained professionals in the field of
          education. We are proud to be associated with universities and
          colleges from USA, Canada, Australia, New Zealand and India, and help
          students find the right study program and career paths.
        </p>

        <Row>

          <Col sm={12} md={6} lg={4} style={{
            margin:"auto"
          }}>
            <Card className={styles.card}>
              <Card.Img
                src={"/maniram.jpg"}
                style={{ height: "100%", width: "100%" }}
              />
              <h5 className={styles.name}>Mr. Mani Ram Puri</h5>
              <p>LANGUAGE TEACHER AND SENIOR COUNSELOR</p>
              <p>JLPT N2 Level Holder</p>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4} style={{
            margin:"auto"
          }}>
            <Card className={styles.card}>
              <Card.Img
                src={"/khemraj.jpg"}
                style={{ height: "100%", width: "100%" }}
              />
              <h5 className={styles.name}>Mr.Khem Raj Giri</h5>
              <p>Managing Director</p>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MeetTheTeam;
