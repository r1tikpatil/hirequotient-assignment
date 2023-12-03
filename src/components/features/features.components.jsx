import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import FeatureCard from "../../common/featureCard";

import Image2 from "../../assets/images/img2.png";
import Image3 from "../../assets/images/img3.png";
import Image4 from "../../assets/images/img4.png";
import Image5 from "../../assets/images/img5.png";

const Features = () => {
  const data = [
    {
      key: 1,
      img: Image2,
      heading: "Smart Task Management",
      title: "Say goodbye to chaos with our smart task management system",
    },
    {
      key: 1,
      img: Image3,
      heading: "Flexible Scheduling",
      title: "Stay productive with our flexible scheduling system",
    },
    {
      key: 1,
      img: Image4,
      heading: "Easy Communication",
      title: "Collaborate seamlessly with your team in real-time",
    },
    {
      key: 1,
      img: Image5,
      heading: "Analytics",
      title: "Gain valuable insights with our advanced analytics feature",
    },
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const [ref1, inView1] = useInView({
    triggerOnce: true,
  });

  return (
    <div className="pt-24 flex flex-col items-center bg-white pb-16">
      <p className="text-[#8247ff] text-[12px] border rounded-lg flex justify-center items-center align-center px-4 font-bold  align-center bg-white">
        <span className="mr-2 text-lg">🔥</span> PREMIER FEATURES
      </p>

      <motion.div
        ref={ref}
        initial={{ y: 25, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="flex w-[90%] md:w-[100%] mt-2 md:mt-6 flex-col items-center"
      >
        <p className="text-4xl md:text-[45px] text-center font-semibold">
          Discover our product's{" "}
          <span className="text-[#fe8162]">Capabilities</span>
        </p>
      </motion.div>

      <div className="flex w-[85%] mt-4 md:mt-6 text-[#aba7a6] text-center text-lg md:text-xl font-semibold flex-col items-center">
        <p>
          Don't settle for mediocrity embrace the future of management{" "}
          <span className="inline md:hidden"> with Manage Wise.</span>
        </p>
        <p className="md:block hidden ">with Manage Wise.</p>
      </div>

      <motion.div
        ref={ref1}
        initial={{ y: 25, opacity: 0 }}
        animate={inView1 ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="bg-[#ededfa] rounded-3xl h-1/2 w-[90%] md:w-2/5 p-8 pt-16 mt-16"
      >
        <span className=" rounded-2xl text-2xl md:text-3xl p-1 bg-white">
          ⭐️
        </span>

        <div className="w-[85%] mt-6">
          <p className="text-2xl md:text-4xl font-semibold leading-normal">
            Boost productivity and streamline workflow with us. Enjoy our
            intuitive interface and robust features.
          </p>
        </div>
      </motion.div>

      {data.map((item) => (
        <FeatureCard
          image={item.img}
          heading={item.heading}
          title={item.title}
        />
      ))}
    </div>
  );
};

export default Features;
