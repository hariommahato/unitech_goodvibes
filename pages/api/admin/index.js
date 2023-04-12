import nextconnect from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import { getUsers } from "../../../backend/controller/adminController";
import cors from 'cors'
const handler = nextconnect();
dbConnect();
handler.get(getUsers).use(
    cors({
      origin: "https://goodvibes.com.np",
    })
  );

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '300000000mb' // Set desired value here
        }
    }
  }
export default handler;
