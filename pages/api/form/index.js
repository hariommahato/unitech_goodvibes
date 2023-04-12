import nextconnect from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import {
  createFormData,
  getAllFormData,
} from "../../../backend/controller/form";
import cors from "cors";
const handler = nextconnect();
dbConnect();
handler
  .post(createFormData)
  .get(getAllFormData)
  .use(
    cors({
      origin: "https://goodvibes.com.np/",
    })
  );

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "300000000mb", // Set desired value here
    },
  },
};
export default handler;
