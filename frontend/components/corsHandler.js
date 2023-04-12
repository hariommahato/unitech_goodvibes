import React from "react";
import NextCors from "nextjs-cors";

const corsHandler = async () => {
  await NextCors(req, res, {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });
  console.log("Workign")
};

export default corsHandler;
