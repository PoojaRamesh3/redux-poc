import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Dashboard from "./screens/Dashboard";
import Customers from "./screens/Customers";
import Messages from "./screens/Messages";
import Help from "./screens/Help";
import Setting from "./screens/Setting";
import Password from "./screens/Password";
import Login from "./screens/Login";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

const Router = () => {
  const Layout = () => (
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

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/message" element={<Messages />} />
          <Route path="/help" element={<Help />} />
          <Route path="/settings" element={<Setting />} />
          <Route path="/password" element={<Password />} />
        </Route>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
