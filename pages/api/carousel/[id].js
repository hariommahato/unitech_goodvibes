import nextconnect  from 'next-connect'
import dbConnect from '@/backend/config/dbConnect'
import {updateCarousel,deleteCarousel,getCarouselDetails} from '../../../backend/controller/homecarousel'
import cors from 'cors'
const handler=nextconnect();

dbConnect();
handler.get(getCarouselDetails).put(updateCarousel).delete(deleteCarousel).use(
  cors({
    origin: ["https://goodvibes.com.np","http://localhost:3000"]
  })
);
export const config = {
    api: {
        bodyParser: {
            sizeLimit: '30000000000mb' 
        }
    }
  }
export default handler;