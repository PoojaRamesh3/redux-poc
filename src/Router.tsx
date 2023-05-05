import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./screens/Dashboard";
import Customers from "./screens/Customers";
import Messages from "./screens/Messages";
import Help from "./screens/Help";
import Setting from "./screens/Setting";
import Password from "./screens/Password";
import Login from "./screens/Login";
import Layout from "./components/Layout";

const Router = () => {
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
