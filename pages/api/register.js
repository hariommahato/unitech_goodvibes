import dbConnect from "@/backend/config/dbConnect";
import { registerUser } from "../../backend/controller/userController";
import nextConnect from "next-connect";
import cors from 'cors'

const handler = nextConnect();
dbConnect();
handler.post(registerUser).use(
  cors({
    origin: "https://goodvibes.com.np/",
  })
);
export default handler;
