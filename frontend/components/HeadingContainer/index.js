import React from "react";

const HeadingContainer = ({ name }) => {
  return (
    <div
      style={{
        height: "6rem",
        color: "#7DB9B6",
        backgroundColor: "#ECF2FF",
      }}
    >
      <div
        style={{
          width: "70%",
          margin: "auto",
          padding: "1rem",
        }}
      >
        <h1>{name}</h1>
      </div>
    </div>
  );
};

export default HeadingContainer;
