import React from "react";
import { FaPlayCircle } from "react-icons/fa";
import Image1 from "../../assets/images/img1.png";

const DashBoard = () => {
  return (
    <div className="bg-gradient-to-b pt-16 md:pt-24 pb-4 flex flex-col items-center from-[#fdf2ec] via-white">
      <p className="text-[#8247ff] text-[12px] border rounded-lg flex justify-center items-center align-center px-4 font-bold  align-center bg-white">
        <span className="mr-2 text-lg">👋</span> WELCOME TO MANAGE WISE!
      </p>

      <div className="w-[80%] text-center flex mt-[5px] flex-col items-center">
        <p className="text-5xl md:text-[78px] font-semibold">
          Empower your business with
        </p>
        <p className="text-5xl md:text-[78px] font-semibold">
          <span className="text-[#fe8162]">Strategic</span> insights
        </p>
      </div>

      <div className="w-[70%] flex text-[#aba7a6] mt-4 text-md text-center md:text-xl font-semibold flex-col items-center">
        <p>
          Powerful management platform designed to streamline your business{" "}
        </p>
        <p>operations, boost productivity, and drive success</p>
      </div>

      <div className="flex mt-6  py-2 flex-col md:flex-row justify-evenly items-center w-[85%] md:w-2/5 align-center">
        <div className="flex bg-[#8247ff] justify-center items-center  text-white box-content border border-gray-300 transition-all duration-500 ease-in-out font-bold md:font-semibold text:lg md:text-xl hover:border-black  px-6 py-3 rounded-2xl w-[85%] md:w-[160px] h-6 md:h-8">
          <p>Get Started</p>
        </div>

        <div className="hover:cursor-pointer flex justify-center items-center  bg-white box-content border border-gray-300 transition-all duration-500 ease-in-out text-black font-bold md:font-semibold text:lg md:text-xl hover:border-black px-6 py-3 rounded-2xl w-[85%] md:w-[160px] h-6 md:h-8 mt-4 md:mt-0">
          <p className="mr-2">Watch Demo</p>
          <FaPlayCircle />
        </div>
      </div>

      <div className="w-[90%] md:w-1/2 mt-12 md:mt-16 shadow-lg">
        <img src={Image1} alt="img" className="h-full w-full" />
      </div>
    </div>
  );
};

export default DashBoard;
