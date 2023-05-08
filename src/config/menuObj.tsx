import {
  AiFillHome,
  AiFillMessage,
  AiFillQuestionCircle,
  AiFillSetting,
  AiFillLock,
} from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { RiLogoutCircleFill } from "react-icons/ri";

export const sideBarLists = [
  {
    id: 1,
    title: "Dashboard",
    url: "/dashboard",
    icon: <AiFillHome />,
  },
  {
    id: 2,
    title: "Customers",
    url: "/customers",
    icon: <FaUsers />,
  },
  {
    id: 3,
    title: "Message",
    url: "/message",
    icon: <AiFillMessage />,
  },
  {
    id: 4,
    title: "Help",
    url: "/help",
    icon: <AiFillQuestionCircle />,
  },
  {
    id: 5,
    title: "Settings",
    url: "/settings",
    icon: <AiFillSetting />,
  },
  {
    id: 6,
    title: "Password",
    url: "/password",
    icon: <AiFillLock />,
  },
  {
    id: 7,
    title: "Sign Out",
    url: "/",
    icon: <RiLogoutCircleFill />,
  },
];
