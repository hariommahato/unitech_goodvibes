import nextconnect  from 'next-connect'
import dbConnect from '@/backend/config/dbConnect';
import {updateFaq,deletFaq,getfaqDetails} from '../../../backend/controller/faq'
import cors from 'cors'
const handler=nextconnect();
dbConnect();
handler.get(getfaqDetails).put(updateFaq).delete(deletFaq).use(
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