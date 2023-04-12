import nextconnect  from 'next-connect'
import dbConnect from '@/backend/config/dbConnect'
import {updateProfile,deleteUser,getSingleUser} from '../../../backend/controller/adminController'
const handler=nextconnect();
import cors from 'cors'
dbConnect();
handler.get(getSingleUser).put(updateProfile).delete(deleteUser).use(
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