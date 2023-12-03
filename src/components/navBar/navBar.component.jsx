import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

import Logo from "../../assets/images/appLogo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleCLick = () => setOpen((p) => !p);

  return (
    <nav
      className={`${
        open ? "bg-white" : "bg-[#fdf2ec]"
      } border-b h-16 md:h-20 transition-all  duration-300 ease-in-out`}
    >
      <div className="flex justify-between items-center h-full w-full ">
        <div className="ml-4 md:ml-8 flex justify-center items-center">
          <img src={Logo} alt="Logo" className="h-8 w-8 md:h-12 md:w-12" />
          <div className="md:hidden font-bold ml-2">ManageWise</div>
        </div>

        <div className="md:flex hidden w-1/2 h-full mr-8">
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
            <div className="flex justify-center items-center hover:cursor-pointer box-content">
              <li className="bg-white box-content border border-gray-300 transition-all duration-300 ease-in-out text-black font-bold text-lg hover:border-black px-4 py-2 rounded-xl">
                Buy Template
              </li>
            </div>
          </ul>
        </div>

        <div className="md:hidden mr-4" onClick={handleCLick}>
          {open ? <RxCross2 size={30} /> : <IoMenu size={30} />}
        </div>
        <div
          className={`transition-all top-16 duration-300 ease-in-out ${
            open ? "h-[100vh]" : "h-0"
          } absolute w-screen bg-white`}
        >
          <div
            className={`${
              open ? "flex" : "hidden"
            } flex-col justify-center items-center transition-all  duration-500 ease-in-out`}
          >
            <p className="my-6 text-sm">Features</p>
            <p className="my-6 text-sm">FAQ</p>
            <p className="my-6 text-sm">Pricing</p>
            <p className="my-6 text-sm">Testimonials</p>
            <div className="flex mt-6 w-[90vw] justify-center items-center hover:cursor-pointer box-content">
              <p className="bg-[#8247ff] box-content border border-gray-300 text-white font-bold flex justify-center items-center  w-[90vw] text-md  px-4 py-2 rounded-xl">
                Buy Template
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
