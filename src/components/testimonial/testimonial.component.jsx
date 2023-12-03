import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import CarouselComponent from "../../common/carousel/carousel";

const Testimonial = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div id="testimonials" className="px-8 md:px-16 pt-8 bg-white">
      <div className="w-full flex justify-start items-center">
        <p className="text-[#8247ff] text-[12px] border rounded-lg px-2  font-bold bg-white inline-block">
          <span className="mr-1 text-lg">🧡</span> TESTIMONIALS
        </p>
      </div>

      <motion.div
        ref={ref}
        initial={{ y: 25, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="text-black text-4xl md:text-[40px] mt-4 font-semibold"
      >
        <p>
          Hear from our{" "}
          <span className="text-[#fe8162] mt-[-15px]">Satisfied</span> clients
        </p>
      </motion.div>

      <div className="text-[#aba7a6] text-lg md:text-xl mt-4 mb-8 font-semibold">
        <p>
          Discover why our clients love working with us. Read their{" "}
          <span className="inline md:hidden">
            testimonials and learn how we has helped businesses.
          </span>
        </p>
        <p className="hidden md:block">
          testimonials and learn how we has helped businesses.
        </p>
      </div>

      <CarouselComponent />
    </div>
  );
};

export default Testimonial;
