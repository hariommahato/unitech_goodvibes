import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../../styles/Testimonial.module.scss";
import { Card, Container } from "react-bootstrap";
import Image from "next/image";
import { useGetFeedbacksQuery } from "@/frontend/services/api";
const Testimonial = () => {
  const { data } = useGetFeedbacksQuery();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={styles.mainDiv}>
      <Container className={styles.container}>
        <h3 className="text-center my-3">Students Feedbacks</h3>
        {}
        <Slider {...settings}>
          {data?.feedback?.map((item, i) => {
            return (
              <div key={i}>
                <Card className={styles.card}>
                  <p>{item?.message}</p>
                  <div className={styles.userContainer}>
                    <Image src={item?.images?.url} width={100} height={100} style={{
                      borderRadius:"20%"
                    }}/>
                    <div>
                      <h5>{item?.fullname}</h5>
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
        </Slider>
      </Container>
    </div>
  );
};

export default Testimonial;
