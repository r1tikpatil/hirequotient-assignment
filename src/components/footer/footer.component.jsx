import React from "react";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

import Logo from "../../assets/images/appLogo.png";

const Footer = () => {
  return (
    <div className="w-screen bg-[#fdf2ec] pt-24 pb-8 flex flex-col justify-center items-center">
      <div className="w-[90%] flex justify-between items-center pb-24 border-b">
        <div className="flex flex-row justify-start items-center w-[25%]">
          <img src={Logo} alt="img" className="h-12 w-12" />
          <p className="text-black font-bold text-xl ml-2">ManageWise</p>
        </div>

        <div>
          <ul className="text-md font-semibold cursor-pointer">
            <li className="my-2 hover:text-[#aba7a6]">Features</li>
            <li className="my-2 hover:text-[#aba7a6]">FAQ</li>
            <li className="my-2 hover:text-[#aba7a6]">Pricing</li>
            <li className="my-2 hover:text-[#aba7a6]">Testimonials</li>
          </ul>
        </div>
      </div>

      <div className="w-[90%] flex justify-between items-center pt-8">
        <div className="flex flex-row justify-start items-center w-[25%]">
          <p className="text-black text-md ml-2">© 2022 ManageWise, Inc.</p>
        </div>

        <div>
          <div className="text-md font-semibold flex space-x-4 cursor-pointer">
            <RiInstagramFill size={25} />
            <FaSquareXTwitter size={25} />
            <FaLinkedinIn size={25} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
