import HeadingContainer from "@/frontend/components/HeadingContainer";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/About.module.scss";
import ProgressBar from "react-bootstrap/ProgressBar";
import WhatMakeUsBest from "@/frontend/components/About/WhatMakeUsBest";
import WorkingTogetherSection from "@/frontend/components/About/WorkingTogetherSection";
import MeetTheTeam from "@/frontend/components/MeetTheTeam";
import Testimonial from "@/frontend/components/Testimonial";
import { useGetAboutQuery } from "@/frontend/services/api";
const About = () => {
  const { data, isLoading } = useGetAboutQuery();
  return (
    <div>
      <HeadingContainer name={"About Us"} />
      <Container>
        <Row className={styles.row}>
          <Col sm={12} md={6} lg={8} className={styles.topColumn}>
            <h4>Welcome to our Consultancy</h4>
            {data?.aboutdata?.map((item, i) => {
              return (
                <p className={styles.text} key={i}>
                  {item?.message}
                </p>
              );
            })}
          </Col>
          <Col sm={12} md={6} lg={4}>
            <h4>Our Specialization</h4>
            <div className={styles.progressContainer}>
              <div>
                <ProgressBar
                  variant="success"
                  now={100}
                  className={styles.progressBar}
                  label="Counselling"
                />
              </div>
              <div>
                <ProgressBar
                  variant="info"
                  now={100}
                  className={styles.progressBar}
                  label="Visa Success"
                />
              </div>
              <div>
                <ProgressBar
                  variant="warning"
                  now={100}
                  className={styles.progressBar}
                  label="Financial Documentation Guidance"
                />
              </div>
              <div>
                <ProgressBar
                  variant="danger"
                  now={100}
                  label="Languages"
                  className={styles.progressBar}
                />
              </div>
              <div>
                <ProgressBar
                  variant="warning"
                  now={100}
                  className={styles.progressBar}
                  label="Pre Departure Guidance"
                />
              </div>
              <div>
                <ProgressBar
                  variant="danger"
                  now={100}
                  className={styles.progressBar}
                  label="Student Support"
                />
              </div>
            </div>
          </Col>
        </Row>
        <hr></hr>
      </Container>
      <WhatMakeUsBest />
    
      <MeetTheTeam />
    </div>
  );
};

export default About;
