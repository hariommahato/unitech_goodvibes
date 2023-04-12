import Loader from "@/frontend/components/Loader/Loader";
import { useGetBlogQuery } from "@/frontend/services/api";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import styles from  '../../styles/Blog.module.scss'
const Blog = () => {
  const router = useRouter();
  const { keyword } = router.query;

  const { data, isLoading } = useGetBlogQuery(keyword);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div
         className={styles.mainDiv}
        >
          <Container>
            <h1
              style={{
                padding: "1rem",
              }}
            >
              BLOGS
            </h1>
            <Row
              
            >
              {data?.blog?.map((item, i) => {
                return (
                  <Col sm={12} md={6} lg={3} key={i}>
                    <Card
                    className={styles.card}
                   
                      
                    >
                      <Card.Img variant="top" src={item?.images?.url} />
                      <Card.Body>
                        <Card.Title>
                          {item?.name?.slice(1, 20)}..........
                        </Card.Title>
                        <Card.Text>
                          {item?.description?.slice(1, 80)}..........
                        </Card.Text>
                        <Button
                          variant="primary"
                          as={Link}
                          href={`/blog/${item?._id}`}
                        >
                          {" "}
                          Read More
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </div>
      )}
    </>
  );
};

export default Blog;
