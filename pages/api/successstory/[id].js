
import cors from 'cors'
import nextconnect  from 'next-connect'
import dbConnect from '@/backend/config/dbConnect'
import {updateSuccessStory,deleteSuccessStory,getSuccessStoryDetails} from '../../../backend/controller/successstory'
const handler=nextconnect();
dbConnect();
handler.get(getSuccessStoryDetails).put(updateSuccessStory).delete(deleteSuccessStory).use(
    cors({
      origin: ["https://goodvibes.com.np","http://localhost:3000"]
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