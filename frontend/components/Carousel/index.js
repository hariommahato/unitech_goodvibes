import Carousel from "react-bootstrap/Carousel";
import styles from "../../../styles/Carousel.module.css";
import Loader from "../Loader/Loader";
function CarouselComponent() {
  return (
    <Carousel fade>
      <Carousel.Item className={styles.carouselItem}>
        <video
          src={"/carousel.mp4"}
          muted
          autoPlay
          loop
          style={{
            width: "100%",
          }}
        />
      </Carousel.Item>
      <Carousel.Item className={styles.carouselItem}>
        <video
          src={"/carousel2.mp4"}
          muted
          autoPlay
          loop
          style={{
            width: "100%",
          }}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
