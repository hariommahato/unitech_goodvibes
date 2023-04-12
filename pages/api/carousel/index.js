import nextconnect from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import {
  createHomeCarousel,
  getAllCarousel,
} from "../../../backend/controller/homecarousel";
import cors from 'cors'
const handler = nextconnect();
dbConnect();
handler.post(createHomeCarousel).get(getAllCarousel).use(
  cors({
    origin: ["https://goodvibes.com.np","http://localhost:3000"]
  })
);
export const config = {
  api: {
      bodyParser: {
          sizeLimit: '30000000000' // Set desired value here
      }
  }
}
export default handler;
