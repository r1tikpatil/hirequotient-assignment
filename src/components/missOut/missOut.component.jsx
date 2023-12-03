import React from "react";

import Image7 from "../../assets/images/img7.png";

const MissOut = () => {
  return (
    <div className="bg-gradient-to-b pt-24 pb-4 flex flex-col items-center via-[#fdf2ec] bg-[#fdf2ec] from-white w-screen">
      <div className="border rounded-3xl w-[90%] bg-white py-16">
        <div className="flex justify-center items-center ">
          <p className="text-[#8247ff] text-[12px] border rounded-lg align-center px-4 font-bold  align-center bg-white inline-block">
            <span className="mr-2 text-lg">👋</span> DON'T MISS OUT
          </p>
        </div>

        <div className="flex mt-2 flex-col items-center">
          <p className="text-[45px] font-semibold">
            Unleash your <span className="text-[#fe8162]">Potential </span> with
            us
          </p>
        </div>

        <div className="flex text-[#aba7a6]  text-xl mt-2 font-semibold flex-col items-center">
          <p>Join our community of ambitious individuals and organizations </p>
          <p>eager to make a difference.</p>
        </div>

        <div className="flex w-full justify-center items-center mt-6">
          <div className="flex bg-[#8247ff] justify-center items-center  text-white box-content border border-gray-300 transition-all duration-500 ease-in-out  font-semibold text-xl hover:border-black  px-6 py-3 rounded-2xl w-[160px] h-8 hover:cursor-pointer">
            <p>Try out now</p>
          </div>
        </div>

        <div className="flex w-full justify-center items-center mt-16 ">
          <div className="flex bg-white justify-center items-center shadow-lg text-black box-content border border-gray-300 font-bold text-2xl px-6 py-3 rounded-2xl">
            <p>
              <span className="text-[#8247ff]"> 200+</span> Happy users
            </p>
          </div>
        </div>

        <div className="flex w-full justify-center items-center mt-16 ">
          <div className="">
            <img src={Image7} alt="" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissOut;
