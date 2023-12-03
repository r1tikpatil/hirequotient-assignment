import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AddMoreCard from "../../common/addMoreCard";

import Image6 from "../../assets/images/img6.png";

const AddMore = () => {
  const data = [
    {
      key: 1,
      heading: "Cross-Platform Compatibilityt",
      title:
        "Enjoy the flexibility of cross-platform compatibility. Our product works seamlessly across desktop, web, and mobile devices, allowing you to work from your preferred device.",
    },
    {
      key: 2,
      heading: "Stay Informed with Essential Notifications",
      title:
        "Automate support from first customer contact to closing the ticket. Drastically improve time to resolution.Automate support from first customer contact to closing the ticket.",
    },
    {
      key: 3,
      heading: "Secure Data Encryption at all times",
      title:
        "Trust in our robust data encryption to keep your sensitive information safe and secure. Rest easy knowing your data is protected at all times.",
    },
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const [ref1, inView1] = useInView({
    triggerOnce: true,
  });

  return (
    <motion.div
      initial={{ transform: "scale(0.3" }}
      animate={{ transform: "scale(1)" }}
      className="bg-[#1c1c1c] px-8 md:px-16 pt-16 md:pt-24 overflow-hidden"
    >
      <p className="text-[#8247ff] text-[12px] border rounded-lg px-2  flex justify-center items-center font-bold bg-white w-[140px]">
        <span className="mr-2 text-lg">🤩</span> AND MORE...
      </p>

      <motion.div
        ref={ref}
        initial={{ y: 15, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="text-white text-4xl md:text-[40px] mt-4 font-semibold"
      >
        <p>
          Explore an array of features that elevate your{" "}
          <span className="text-[#fe8162]">Productivity</span> to
        </p>
        <p>new heights</p>
      </motion.div>

      <div className="text-[#aba7a6] text-lg md:text-xl mt-4 mb-8 md:font-semibold">
        <p className="">
          Discover the tools that will revolutionize the way you{" "}
          <span className="md:hidden">manage and optimize your operations</span>
        </p>
        <p className="hidden md:block">manage and optimize your operations</p>
      </div>

      <div className="mt-8">
        {data.map((item) => (
          <AddMoreCard
            keys={item.key}
            heading={item.heading}
            title={item.title}
          />
        ))}
      </div>

      <div className="flex justify-center items-center mt-16 ">
        <p className="text-[#8247ff] text-[12px] border font-bold rounded-lg px-2 flex justify-center items-center  bg-white w-[140px]">
          <span className="mr-2 text-lg">🛠</span> INTEGRATIONS
        </p>
      </div>

      <div className="text-white text-4xl md:text-[40px] text-center flex-col mt-4 w-full font-semibold flex justify-center items-center">
        <p>
          Enable <span className="text-[#fe8162]">integration</span> with other
        </p>
        <p>popular tools and platforms</p>
      </div>

      <div className="text-[#aba7a6] text-center text-xl mt-4 mb-8 font-semibold flex justify-center items-center flex-col">
        <p>
          Seamlessly connect and amplify your workflow{" "}
          <span className="md:hidden">
            by enabling integration with a diverse array of widely-used tools
            and platforms.
          </span>
        </p>
        <p className="hidden md:block">
          by enabling integration with a diverse array of{" "}
        </p>
        <p className="hidden md:block">widely-used tools and platforms.</p>
      </div>

      <motion.div
        ref={ref1}
        initial={{ y: 25, opacity: 0 }}
        animate={inView1 ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="w-full mt-12 mb-[-5px] flex justify-center items-center "
      >
        <img src={Image6} alt="img" className="h-1/2 w-[95%] md:w-1/2 " />
      </motion.div>
    </motion.div>
  );
};

export default AddMore;
