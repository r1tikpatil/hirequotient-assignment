import React from "react";

import Image1 from "../../assets/images/img1.png";

const DashBoard = () => {
  return (
    <div className="bg-gradient-to-b pt-24 from-[#fdf2ec] via-white">
      <p className="text-black">👋 WELCOME TO MANAGE WISE!</p>
      <img src={Image1} alt="img" />
    </div>
  );
};

export default DashBoard;
