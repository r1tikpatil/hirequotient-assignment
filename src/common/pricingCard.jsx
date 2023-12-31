import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaCheck } from "react-icons/fa";

const PricingCard = ({ keys, plan, rupees, points }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  return (
    <motion.div
      ref={ref}
      initial={{ y: 35, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className={`${
        keys % 2 !== 0 ? "bg-[#ededfa]" : "bg-[#1c1c1c]"
      } h-[50vh] md:h-[70vh] w-[90%] md:w-[35vw] my-4 md:my-8 rounded-3xl p-8 md:p-12 flex flex-col items-center relative`}
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

      <div className="w-full flex flex-col items-start mt-2 md:mt-6">
        {points.map((item) => (
          <div className="flex flex-row justify-center items-center mt-2">
            <FaCheck color="lightgreen" />
            <p className="ml-4 text-[#aba7a6] text-sm md:text-md font-semibold">
              {item}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center box-content cursor-pointer absolute bottom-4 md:bottom-8 left-12">
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
    </motion.div>
  );
};

export default PricingCard;
