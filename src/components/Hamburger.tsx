import { sideBarLists } from "../config/menuObj";
import { Link } from "react-router-dom";

const Hamburger = () => {
  return (
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
  );
};

export default Hamburger;
