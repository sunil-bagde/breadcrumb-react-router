import { Outlet, Link } from "react-router-dom";
import {Header} from "../components";
const AppLayout = () => {
  return (
    <>
      <Header />

      <Outlet />
    </>
  );
};

export default AppLayout;
