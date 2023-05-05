// import { useState } from "react";
import { Link } from "react-router-dom";
import {
  AiFillHome,
  AiFillMessage,
  AiFillQuestionCircle,
  AiFillSetting,
  AiFillLock,
} from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { RiLogoutCircleFill } from "react-icons/ri";

const SideBar = () => {
  const logo = require("../assets/logo.png");

  const sideBarLists = [
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
  return (
    <>
      <div
        className="w-1/6 bg-custblue fixed z-20 text-white rounded-s-[50px] mb-5"
        style={{ height: "-webkit-fill-available" }}
      >
        <div className="flex items-center p-5 justify-center">
          <div className="p-2.5 basis-1/4">
            <img className="rounded-circle" src={logo} alt="..." />
          </div>
          <div className="p-2.5 font-bold">Brand Name</div>
        </div>
        <ul className="flex-col flex items-start">
          {sideBarLists.map((item, index) => (
            <li
              className="flex flex-row items-center justify-start hover:bg-white hover:text-custblue hover:rounded-s-[50px] px-6"
              key={index}
              style={{ width: "210.5px" }}
            >
              {item.icon}
              <Link to={item.url} className="p-5 font-semibold">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/*  Hamburger code not working fine!*/}
      {/* <div
        className={
          click
            ? "main-container w-64 bg-custblue fixed z-20 max-w-8xl text-white rounded-s-[50px] mb-5"
            : "w-64 bg-custblue fixed z-20 max-w-8xl text-white rounded-s-[50px] mb-5"
        }
        onClick={() => Close()}
      />
      <nav className="navbar" onClick={(e) => e.stopPropagation()}>
        <div className="nav-container">
          <ul
            className={
              click
                ? "nav-menu active flex-col flex items-start"
                : "nav-menu flex-col flex items-start"
            }
          >
            {sideBarLists.map((item, index) => (
              <li
                className="nav-item flex flex-row items-center justify-center pr-8 ml-4 pl-4 hover:bg-white hover:text-custblue hover:rounded-s-[50px]"
                key={index}
              >
                {item.icon}
                <Link
                  to={item.url}
                  className="nav-links active p-5 font-semibold"
                  onClick={() => (click ? handleClick : null)}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav> */}
    </>
  );
};

export default SideBar;
