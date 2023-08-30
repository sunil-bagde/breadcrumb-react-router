import { Outlet } from "react-router-dom";
import { Header } from "../components";
import { Breadcrumbs } from "../breadcrumbs";
const GuestLayout = () => {
  return (
    <>
      <Header />
       <div className="w-full container mx-auto bg-gray-50 shadow">
        <Breadcrumbs />
      </div>
      <Outlet />
    </>
  );
};

export default GuestLayout;
