import {
  useGetBlogDetailsQuery,
  useGetBlogQuery,
} from "@/frontend/services/api";
import { useRouter } from "next/router";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
const Blog = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useGetBlogDetailsQuery(id);

  return (
    <div
      style={{
        width: "80%",
        margin: "auto",
      }}
    >
      <Carousel variant="dark">
        <Carousel.Item key={data?.description}>
          <img
            className="d-block w-100"
            src={data?.blog?.images?.url}
            alt="First slide"
            style={{
              height: "40vmax",
              objectFit: "cover",
              backgroundPosition: "center",
            }}
          />
        </Carousel.Item>
      </Carousel>

      <div>
        <h1>{data?.blog?.name}</h1>
      </div>
      <div>
        <p>
          {data?.blog?.description}
        </p>
      </div>
    </div>
  );
};

export default Blog;
