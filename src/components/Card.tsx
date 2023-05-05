import { BsFillEyeFill, BsCartFill } from "react-icons/bs";
import { AiOutlineWechat } from "react-icons/ai";
import { BiMoney } from "react-icons/bi";

const Card = () => {
  const cardLists = [
    {
      id: 1,
      count: 1504,
      text: "Daily Views",
      icon: <BsFillEyeFill />,
    },
    {
      id: 2,
      count: 80,
      text: "Sales",
      icon: <BsCartFill />,
    },
    { id: 3, count: 284, text: "Comments", icon: <AiOutlineWechat /> },
    { id: 4, count: 7584, text: "Earning", icon: <BiMoney /> },
  ];

  return (
    <div className="flex items-center justify-around p-3">
      {cardLists.map((item, index) => (
        <div
          className="flex items-center justify-between bg-white p-5 max-w-[250px] rounded-[25px] m-3 shadow-2xl min-w-[215px] hover:bg-custblue hover:text-white text-custblue hover-cust"
          key={index}
        >
          <div>
            <h2 className="text-[3.052rem] font-semibold ">{item.count}</h2>
            <h6 className="text-gray">{item.text}</h6>
          </div>
          <div className="text-gray">{item.icon}</div>
        </div>
      ))}
    </div>
  );
};

export default Card;
