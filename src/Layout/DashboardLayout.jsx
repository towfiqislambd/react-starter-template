import { Outlet, ScrollRestoration } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <>
      <ScrollRestoration />
      <Outlet />
    </>
  );
};

export default DashboardLayout;
