import { useGetAboutQuery } from "@/frontend/services/api";
import React from "react";
import styles from "../../../styles/HomeAbout.module.scss";
import Loader from "../Loader/Loader";
const HomeAbout = () => {
  const { data, isLoading } = useGetAboutQuery();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.homeAboutContainer}>
        <h2 className={styles.heading}>GoodVibes Education Consultancy</h2>
          <h5 className={styles.subheading} >Best Education Consultancy in Nepal</h5>
          {data?.aboutdata?.map((item, i) => {
            return <p key={i}>{item?.message}</p>;
          })}
        </div>
      )}
    </>
  );
};

export default HomeAbout;
