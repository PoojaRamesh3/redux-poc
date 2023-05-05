import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";

const Layout = () => {
  return (
    <div className="bg-slate-100 relative min-h-screen">
      <div
        className="flex justify-between m-5 bg-white rounded-r-[50px] rounded-s-[50px]"
        style={{ height: "-webkit-fill-available" }}
      >
        <div className="w-1/6 hidden md:block min-h-screen">
          <SideBar />
        </div>
        <div className="w-5/6">
          <Header />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
