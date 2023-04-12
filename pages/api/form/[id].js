import nextconnect  from 'next-connect'
import dbConnect from '@/backend/config/dbConnect';
import {updateFormData,deleteFormData,getFormDetails} from '../../../backend/controller/form'
import cors from 'cors'
const handler=nextconnect();
dbConnect();
handler.get(getFormDetails).put(updateFormData).delete(deleteFormData).use(
    cors({
      origin: "https://goodvibes.com.np/",
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