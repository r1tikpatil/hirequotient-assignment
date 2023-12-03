import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaPlayCircle } from "react-icons/fa";

import Image1 from "../../assets/images/img1.png";

const DashBoard = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const [ref1, inView1] = useInView({
    triggerOnce: true,
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true,
  });
  const [ref3, inView3] = useInView({
    triggerOnce: true,
  });
  const [ref4, inView4] = useInView({
    triggerOnce: true,
  });
  return (
    <div
      id="dashboard"
      className="bg-gradient-to-b pt-16 md:pt-24 pb-4 flex flex-col items-center from-[#fdf2ec] via-white"
    >
      <motion.p
        ref={ref1}
        initial={{ y: 35, opacity: 0 }}
        animate={inView1 ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.4, ease: "easeInOut", delay: 0.3 }}
        className="text-[#8247ff] text-[12px] border rounded-lg flex justify-center items-center align-center px-4 font-bold  align-center bg-white"
      >
        <span className="mr-2 text-lg">👋</span> WELCOME TO MANAGE WISE!
      </motion.p>

      <motion.div
        ref={ref2}
        initial={{ y: 35, opacity: 0 }}
        animate={inView2 ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.4, ease: "easeInOut", delay: 0.3 }}
        className="w-[80%] text-center mt-[10px] flex-col items-center"
      >
        <p className="text-5xl md:text-[78px] font-semibold">
          Empower your business with
        </p>
        <p className="text-5xl md:text-[78px] font-semibold">
          <span className="text-[#fe8162]">Strategic</span> insights
        </p>
      </motion.div>

      <motion.div
        ref={ref3}
        initial={{ y: 25, opacity: 0 }}
        animate={inView3 ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.4, ease: "easeInOut", delay: 0.4 }}
        className="w-[70%] flex text-[#aba7a6] mt-4 md:mt-12 text-md text-center md:text-xl font-semibold flex-col items-center"
      >
        <p>
          Powerful management platform designed to streamline your business{" "}
        </p>
        <p>operations, boost productivity, and drive success</p>
      </motion.div>

      <motion.div
        ref={ref4}
        initial={{ y: 25, opacity: 0 }}
        animate={inView4 ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="flex mt-6  py-2 flex-col md:flex-row justify-evenly items-center w-[85%] md:w-2/5 align-center"
      >
        <div className="flex bg-[#8247ff] justify-center items-center  text-white box-content border border-gray-300 transition-all duration-500 ease-in-out font-bold md:font-semibold text:lg md:text-xl hover:border-black  px-6 py-3 rounded-2xl w-[85%] md:w-[160px] h-6 md:h-8">
          <p>Get Started</p>
        </div>

        <div className="hover:cursor-pointer flex justify-center items-center  bg-white box-content border border-gray-300 transition-all duration-500 ease-in-out text-black font-bold md:font-semibold text:lg md:text-xl hover:border-black px-6 py-3 rounded-2xl w-[85%] md:w-[160px] h-6 md:h-8 mt-4 md:mt-0">
          <p className="mr-2">Watch Demo</p>
          <FaPlayCircle />
        </div>
      </motion.div>

      <motion.div
        ref={ref}
        initial={{ transform: "rotateX(50deg) " }}
        animate={inView ? { transform: "rotateX(0deg)" } : {}}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="w-[90%]  mt-12 md:mt-16 shadow-lg flex justify-center items-center"
      >
        <img src={Image1} alt="img" className="h-full w-full md:w-1/2" />
      </motion.div>
    </div>
  );
};

export default DashBoard;
