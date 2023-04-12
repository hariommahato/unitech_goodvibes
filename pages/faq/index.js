import { useGetFaqQuery } from "@/frontend/services/api";
import React from "react";
import { Accordion } from "react-bootstrap";

const Faqs = () => {
  const {data}=useGetFaqQuery()
  return (
    <div>
      <div
        style={{
          width: "70%",
          margin: "auto",
          marginTop:"3rem",
          height:"60vh"
        }}
      >
      <h1>FAQS</h1>
        <Accordion defaultActiveKey="0">
        {data?.faqdata?.map((item, i) => {
            return (
              <Accordion.Item eventKey={i}>
                <Accordion.Header>{item?.title}</Accordion.Header>
                <Accordion.Body>{item?.description}</Accordion.Body>
              </Accordion.Item>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
};

export default Faqs;
