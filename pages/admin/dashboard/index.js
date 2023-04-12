import DashboardNavbar from "@/frontend/components/DashboardNavbar";
import DashboardSidebar from "@/frontend/components/DashboardSidebar";
import { Providers } from "@/frontend/services/provider";

const Dashboard = () => {
  return <></>;
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
