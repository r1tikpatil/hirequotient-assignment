import React from "react";
import Logo from "../../assets/images/appLogo.png";

const Navbar = () => {
  return (
    <nav className="bg-[#fdf2ec] border-b h-20">
      <div className="flex justify-between items-center h-full w-full ">
        <div className="w-[100px] flex justify-center items-center">
          <img src={Logo} alt="Logo" className="h-12 w-12" />
        </div>

        <div className="w-1/2 h-full flex mr-8">
          <ul className="flex  justify-center space-x-8  w-full h-full">
            <div className=" flex justify-center items-center">
              <li className="text-gray-700 font-semibold hover:text-blue-700 hover:cursor-pointer">
                Features
              </li>
            </div>
            <div className="mt-4">
              <li className="text-gray-400 text-2xl font-bold">.</li>
            </div>
            <div className="flex justify-center items-center">
              <li className="text-gray-700 font-semibold hover:text-blue-700 hover:cursor-pointer">
                FAQ
              </li>
            </div>
            <div className="mt-4">
              <li className="text-gray-400 text-2xl font-bold">.</li>
            </div>
            <div className=" flex justify-center items-center">
              <li className="text-gray-700 font-semibold hover:text-blue-700 hover:cursor-pointer">
                Pricing
              </li>
            </div>
            <div className="mt-4">
              <li className="text-gray-400 text-2xl font-bold">.</li>
            </div>
            <div className="flex justify-center items-center">
              <li className="text-gray-700 font-semibold hover:text-blue-700 hover:cursor-pointer">
                Testimonials
              </li>
            </div>
            <div className="flex justify-center items-center box-content">
              <li className="bg-white box-content border border-gray-300 transition-all duration-300 ease-in-out text-black font-bold text-lg hover:border-black px-4 py-2 rounded-xl">
                Buy Template
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
