import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./Success.module.css";
import Image from "next/image";
import { useGetSuccessStoryQuery } from "@/frontend/services/api";
import Link from "next/link";

const SuccessStory = () => {
  const { data } = useGetSuccessStoryQuery();
  return (
    <Container fluid>
      {" "}
      <h2 className="text-center">Our Success Story</h2>
      <Row className={styles.row}>
        {data?.success?.map((item, i) => {
          return (
            <Col lg={3} md={4} sm={12} className="my-2">
            <Link href={item?.images?.url}>
            <Image
                src={item?.images?.url}
                height={"0"}
                width={"0"}
                sizes="100vw"
                className={styles.image}
              />
            </Link>
             
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default SuccessStory;
