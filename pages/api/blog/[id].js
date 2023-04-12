
import cors from 'cors'
import nextconnect  from 'next-connect'
import dbConnect from '@/backend/config/dbConnect'
import {updateBlog,deleteBlog,getBlogDetails} from '../../../backend/controller/blog'
const handler=nextconnect();
dbConnect();
handler.get(getBlogDetails).put(updateBlog).delete(deleteBlog).use(
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