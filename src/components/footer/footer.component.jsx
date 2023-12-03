import React from "react";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

import Logo from "../../assets/images/appLogo.png";

const Footer = () => {
  return (
    <div className="bg-[#fdf2ec] pt-24 pb-8 flex flex-col justify-center items-center">
      <div className="w-[90%] flex flex-col md:flex-row justify-between items-center pb-6 md:pb-24 border-b">
        <div className="flex flex-row justify-center md:justify-start items-center w-[100%] md:w-[25%]">
          <img src={Logo} alt="img" className="h-12 w-12" />
          <p className="text-black font-bold text-xl ml-2">ManageWise</p>
        </div>

        <div className="mt-8 md:mt-0">
          <ul className="text-md text-center font-semibold cursor-pointer">
            <li className="my-2 hover:text-[#aba7a6]">
              <a href="#features">Features</a>
            </li>
            <li className="my-2 hover:text-[#aba7a6]">
              <a href="#faq">FAQ</a>
            </li>
            <li className="my-2 hover:text-[#aba7a6]">
              <a href="#pricing">Pricing</a>
            </li>
            <li className="my-2 hover:text-[#aba7a6]">
              <a href="#testimonials">Testimonials</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-[90%] flex flex-col md:flex-row justify-between items-center pt-8">
        <div className="flex flex-row justify-center md:justify-start items-center w-[100%] md:w-[25%]">
          <p className="text-black text-md ml-2">© 2022 ManageWise, Inc.</p>
        </div>

        <div className="mt-8 md:mt-0">
          <div className="text-md font-semibold flex space-x-4 cursor-pointer">
            <a href="https://www.instagram.com/" target="_blank">
              <RiInstagramFill size={25} />
            </a>
            <a href="https://twitter.com/home" target="_blank">
              <FaSquareXTwitter size={25} />
            </a>
            <a href="https://www.linkedin.com/feed/" target="_blank">
              <FaLinkedinIn size={25} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
