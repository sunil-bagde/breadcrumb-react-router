import { Outlet } from "react-router-dom";
import { Header } from "../components";
import { Breadcrumbs } from "../breadcrumbs";
const GuestLayout = () => {
  return (
    <>
      <div className="    mx-auto max-w-screen-xl">
        <Header />
        <div className="flex flex-wrap  items-center mx-auto max-w-screen-xl">
          <Breadcrumbs>
            <Breadcrumbs.Root />
            {/*<Breadcrumbs.CrumbItem  > </Breadcrumbs.CrumbItem>*/}
            <Breadcrumbs.CrumbList />
          </Breadcrumbs>
        </div>
        <div className="w-full h-10" />
        <Outlet />
      </div>
    </>
  );
};

export default GuestLayout;
