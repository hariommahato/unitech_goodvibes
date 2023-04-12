import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import styles from "../../../../styles/WhatMakesUsBest.module.scss";


const WhatMakeUsBest = () => {
  return (
    <div>
      <Container className={styles.container}>
        <h3>WHY CHOOSE US ?</h3>
        <Row>
          <Col sm={12} md={6} lg={4}>
            <Image src={'/superior.png'} height={150} width={150} />
            <p>Best Counselling</p>
          </Col>

          <Col sm={12} md={6} lg={4}>
            <Image src={'/ieltstoef.png'} height={150} width={150} />
            <p>Documentation Preperation</p>
          </Col>

          <Col sm={12} md={6} lg={4}>
            <Image src={'/high.png'} height={150} width={150} />
            <p>High Visa Success Rate</p>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={6} lg={4}>
            <Image
              src={'/university.jpg'}
              height={150}
              width={150}
              style={{ borderRadius: "50%" }}
            />
            <p>University Meet Up</p>
          </Col>

          <Col sm={12} md={6} lg={4}>
            <Image
              src={'/time.jpg'}
              height={150}
              width={150}
              style={{ borderRadius: "50%" }}
            />
            <p>Genuine Timing </p>
          </Col>

          <Col sm={12} md={6} lg={4}>
            <Image
              src={'/working.jpg'}
              height={150}
              width={150}
              style={{ borderRadius: "50%" }}
            />
            <p>Working Visa</p>
          </Col>
        </Row>

        <Row>
          <Col sm={12} md={6} lg={4}>
            <Image
              src={'/time.jpg'}
              height={150}
              width={150}
              style={{ borderRadius: "50%" }}
            />
            <p>Part Time Job</p>
          </Col>

          <Col sm={12} md={6} lg={4}>
            <Image
              src={'/period.jpg'}
              height={150}
              width={150}
              style={{ borderRadius: "50%" }}
            />
            <p>Genuine Period </p>
          </Col>

          <Col sm={12} md={6} lg={4}>
            <Image
              src={'/japan.jpg'}
              height={150}
              width={150}
              style={{ borderRadius: "50%" }}
            />
            <p>Japanese Classes /SSW Classes</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WhatMakeUsBest;
