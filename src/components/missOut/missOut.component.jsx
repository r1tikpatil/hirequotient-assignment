import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image7 from "../../assets/images/img7.png";

const MissOut = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const [ref1, inView1] = useInView({
    triggerOnce: true,
  });
  return (
    <motion.div
      ref={ref1}
      initial={{ transform: "rotateX(50deg)" }}
      animate={inView1 ? { transform: "rotateX(0deg)" } : {}}
      transition={{ duration: 0.4, ease: "easeInOut", delay: 1 }}
      className="bg-gradient-to-b pt-24 pb-4 flex flex-col justify-center items-center via-[#fdf2ec] bg-[#fdf2ec] from-white "
    >
      <div className="border rounded-3xl w-[90%] bg-white px-8 py-16">
        <div className="flex justify-center items-center ">
          <p className="text-[#8247ff] text-[12px] border rounded-lg align-center px-4 font-bold  align-center bg-white inline-block">
            <span className="mr-2 text-lg">👋</span> DON'T MISS OUT
          </p>
        </div>

        <motion.div
          ref={ref}
          initial={{ y: 25, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="text-center flex mt-2 md:mt-6 flex-col items-center justify-center"
        >
          <p className="text-center text-4xl md:text-[45px] font-semibold">
            Unleash your <span className="text-[#fe8162]">Potential </span> with
            us
          </p>
        </motion.div>

        <div className="flex text-center text-[#aba7a6] text-lg md:text-xl mt-4 md:mt-8 font-semibold flex-col items-center">
          <p>
            Join our community of ambitious individuals and organizations{" "}
            <span className="inline md:hidden">
              eager to make a difference.
            </span>{" "}
          </p>
          <p className="hidden md:block">eager to make a difference.</p>
        </div>

        <div className="flex w-full justify-center items-center mt-6">
          <div className="flex bg-[#8247ff] justify-center items-center  text-white box-content border border-gray-300 transition-all duration-500 ease-in-out  font-semibold text-xl hover:border-black  px-6 py-3 rounded-2xl w-[160px] h-8 hover:cursor-pointer">
            <p>Try out now</p>
          </div>
        </div>

        <div className="flex w-full justify-center items-center mt-12 md:mt-16 ">
          <div className="flex bg-white justify-center items-center shadow-lg text-black box-content border border-gray-300 font-bold text-2xl px-6 py-3 rounded-2xl">
            <p>
              <span className="text-[#8247ff]"> 200+</span> Happy users
            </p>
          </div>
        </div>

        <div className="flex w-full justify-center items-center mt-16 ">
          <div className="overflow-hidden">
            <img src={Image7} alt="img" className="md:scale-100 scale-150" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MissOut;
