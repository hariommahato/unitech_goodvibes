import Head from "next/head";
import { Inter } from "next/font/google";
import CarouselComponent from "../frontend/components/Carousel";
import HomeAbout from "@/frontend/components/HomeAbout";
import Maps from "@/frontend/components/maps";
import OurUniversityPartner from "@/frontend/components/OurUniversityPartner";
import Testimonial from "@/frontend/components/Testimonial";
import WhatMakeUsBest from "@/frontend/components/About/WhatMakeUsBest";
import HomeOurServices from "@/frontend/components/HomeOurServices";
import CeoMessage from "@/frontend/components/CeoMessage";
const inter = Inter({ subsets: ["latin"] });

function Home() {
  return (
    <>
      <Head>
        <title>Goodvibes Education Consultancy</title>
        <meta
          name="description"
          content="Good vibe Education Consultancy is one of the best consultancy in the nepal"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      
      <CarouselComponent  />
      <HomeAbout  />
      <HomeOurServices/>
      <CeoMessage/>
      <WhatMakeUsBest/>

      <Maps />
      <OurUniversityPartner />
      <Testimonial />
    </>
  );
}

export default Home;
