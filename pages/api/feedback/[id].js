import nextconnect  from 'next-connect'
import dbConnect from '@/backend/config/dbConnect';
import {updateFeedback,deleteFeedback,getFeedbackDetails} from '../../../backend/controller/feedback'
import cors from 'cors'
const handler=nextconnect();
dbConnect();
handler.get(getFeedbackDetails).put(updateFeedback).delete(deleteFeedback).use(
    cors({
      origin: ["https://goodvibes.com.np","http://localhost:3000"]
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