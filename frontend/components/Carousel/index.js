import { useGetHomeCarouselQuery } from "@/frontend/services/api";
import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";
import { FaUnsplash } from "react-icons/fa";
import styles from "../../../styles/Carousel.module.css";
import Loader from "../Loader/Loader";

function CarouselComponent() {
  const {data, isLoading } = useGetHomeCarouselQuery();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Carousel fade style={{ marginTop: "1rem" }}>
            {data?.carousel?.map((item, i) => {
              return item?.videos?.map((data) => {
                return (
                  <Carousel.Item
                    className={styles.carouselItem}
                    key={data?.url}
                  >
                    <video
                      src={data?.url}
                      muted
                      autoPlay
                      loop
                      style={{
                        width: "100%",
                      }}
                    />
                  </Carousel.Item>
                );
              });
            })}
          </Carousel>
        </>
      )}
    </>
  );
}

export default CarouselComponent;
