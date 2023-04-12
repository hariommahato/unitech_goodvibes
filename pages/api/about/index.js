import nextconnect from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import cors from "cors";
import {
  createAboutData,
  getAllAbout,
} from "../../../backend/controller/about";

const handler = nextconnect();
dbConnect();
handler
  .post(createAboutData)
  .get(getAllAbout)
  .use(
    cors({
      origin: "https://goodvibes.com.np",
    })
  );

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "30000000mb", // Set desired value here
    },
  },
};

export default handler;
