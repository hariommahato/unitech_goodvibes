import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../../styles/OurUniversityPartner.module.scss";
import curtin from "../../images/curtin.png";
import insearch from "../../images/insearch.png";
import edith from "../../images/edith.png";
import federation from "../../images/federation.png";
import murdoch from "../../images/murdoch.png";
import southern from "../../images/southerb.png";

const OurUniversityPartner = () => {
  return (
    <Container className={styles.container}>
      <h3 className="text-center">Our University Partner</h3>
      <Row style={{
        textAlign:"center",
        marginTop:"2vmax"
      }}>
        <Col sm={4} md={6} lg={3}>
          <Image src={"/p1.png"} width={100} height={100} />
          <p>Tohoku Tabunka Academy Foundation</p>
        </Col>
        <Col sm={4} md={6} lg={3}>
          <Image src={"/p2.png"} width={100} height={100} />
          <p>城東日本語学校 Joto Japanese School</p>
        </Col>
        <Col sm={4} md={6} lg={3}>
          <Image src={"/p3.png"} width={100} height={100} />
          <p>Toshin Japanese Language School</p>
        </Col>
        <Col sm={4} md={6} lg={3}>
          <Image src={"/p4.png"} width={100} height={100} />
          <p>Kobe Foreign Language Education Academy</p>
        </Col>
      </Row>
    </Container>
  );
};

export default OurUniversityPartner;
