import React from "react";
import { FaCheck } from "react-icons/fa";

const PricingCard = ({ keys, plan, rupees, points }) => {
  return (
    <div
      className={`${
        keys % 2 !== 0 ? "bg-[#ededfa]" : "bg-[#1c1c1c]"
      } h-[70vh] w-[35vw] my-8 rounded-3xl p-12 flex flex-col items-center relative`}
    >
      <div className="w-full rounded-lg">
        <p className="text-[#fe8162] text-[12px] rounded-lg px-3 font-bold bg-white inline-block">
          {plan}
        </p>
      </div>

      <div
        className={`${
          keys % 2 === 0 ? "text-[white]" : "text-[#1c1c1c]"
        } w-full mt-4 flex flex-row items-end`}
      >
        <p className="text-5xl font-semibold ">${rupees}</p>
        <p className="text-lg ml-1">/month</p>
      </div>

      <div className="w-full flex flex-col items-start mt-6">
        {points.map((item) => (
          <div className="flex flex-row justify-center items-center mt-2">
            <FaCheck color="lightgreen" />
            <p className="ml-4 text-[#aba7a6] text-md font-semibold">{item}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center box-content cursor-pointer absolute bottom-8 left-12">
        <div
          className={`${
            keys % 2 !== 0 ? "bg-white" : "bg-[#8247ff]"
          } box-content  border transition-all duration-300 ease-in-out ${
            keys % 2 === 0 ? "text-[white]" : "text-[#1c1c1c]"
          }  font-bold text-lg ${
            keys % 2 === 0 ? "hover:border-white" : "hover:border-[#1c1c1c]"
          } ${
            keys % 2 === 0 ? "border-[#1c1c1c]" : "border-white"
          } px-4 py-2 rounded-xl`}
        >
          Get Started
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
