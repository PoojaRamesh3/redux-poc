import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const pooja = require("../assets/pooja.jfif");

  return (
    <div className="p-5 flex justify-around items-center sticky top-0 z-50">
      <GiHamburgerMenu
        style={{ width: "30px", height: "30px" }}
        className="md:hidden"
      />
      <input
        type="text"
        name=""
        placeholder="Search here"
        className="h-[40px] w-6/12 rounded-[25px] p-5 outline-none border"
      />
      <img
        src={pooja}
        alt="Profile"
        width={45}
        height={45}
        className="rounded-full"
        style={{ borderRadius: "50%" }}
      />
    </div>
  );
};

export default Header;
