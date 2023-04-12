import nextconnect from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import { createFaq, getAllFaq } from "../../../backend/controller/faq";
import cors from 'cors'
const handler = nextconnect();
dbConnect();
handler.post(createFaq).get(getAllFaq).use(
    cors({
      origin: "https://goodvibes.com.np",
    })
  );

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '30000000mb' // Set desired value here
        }
    }
  }
export default handler;
