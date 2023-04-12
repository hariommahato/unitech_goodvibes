import HeadingContainer from "@/frontend/components/HeadingContainer";
import Image from "next/image";
import React from "react";
import styles from "./Services.module.css";

const Services = () => {
  return (
    <div>
      <div>
        <HeadingContainer name={"Our Services"} />
        <div className={styles.mainDiv}>
          <Image
            src={"https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1794&q=80"}
            height={"0"}
            width={"0"}
            sizes="100vw"
            className={styles.image}
          />
          <h1>Student Visa</h1>
          <p>
            um is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of um is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of
          </p>
        </div>{" "}
        <div
          style={{
            width: "70%",
            margin: "auto",
          }}
        >
          <div>
            {" "}
            <Image
              src={"https://images.unsplash.com/photo-1494515426402-f1980ace7a9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"}
              height={"0"}
              width={"0"}
              sizes="100vw"
              className={styles.image}
            />
            <h1>Working Visa</h1>
            <p>
              um is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of um is simply dummy text
              of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of
            </p>
          </div>

          <div>
            <h3>Differernt Working Visa</h3>
            <ul>
              <li>Nursing</li>
              <li>Agriculture</li>
              <li>Food Service</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
