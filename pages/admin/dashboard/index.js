import DashboardNavbar from "@/frontend/components/DashboardNavbar";
import DashboardSidebar from "@/frontend/components/DashboardSidebar";
import { Providers } from "@/frontend/services/provider";
import Head from "next/head";

const Dashboard = () => {
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
      ;
    </>
  );
};
export default Dashboard;
Dashboard.getLayout = function PageLayout(page) {
  return (
    <>
      <Providers>
        <DashboardNavbar />
        <DashboardSidebar />

        {page}
      </Providers>
    </>
  );
};
