import nextconnect from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import {
  updateAbout,
  deleteAbout,
  getAboutDetails,
} from "../../../backend/controller/about";
import cors from "cors";
const handler = nextconnect();
dbConnect();
handler
  .get(getAboutDetails)
  .put(updateAbout)
  .delete(deleteAbout)
  .use(
    cors({
      origin: "https://goodvibes.com.np",
      
    })
  );
export const config = {
  api: {
    bodyParser: {
      sizeLimit: "3000000mb", // Set desired value here
    },
  },
};

export default handler;
