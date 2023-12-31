import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PricingCard from "../../common/pricingCard";

const Pricing = () => {
  const data = [
    {
      key: 1,
      plan: "FREE",
      rupees: "0",
      points: [
        "Access to all basic features",
        "Reporting and analytics",
        "Up to 5 individual users",
        "Chat and email suppor",
      ],
    },
    {
      key: 2,
      plan: "STANDARD",
      rupees: "25",
      points: [
        "Access to all basic features",
        "Reporting and analytics",
        "Up to 5 individual users",
        "Chat and email suppor",
        "3+ integrations",
        "Account performance reporting",
      ],
    },
    {
      key: 3,
      plan: "BUSINESS",
      rupees: "42",
      points: [
        "Access to all basic features",
        "Reporting and analytics",
        "Up to 5 individual users",
        "Chat and email suppor",
        "3+ integrations",
      ],
    },
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div
      id="pricing"
      className="pt-24 flex flex-col items-center justify-center bg-white pb-16"
    >
      <p className="text-[#8247ff] text-[12px] border rounded-lg flex justify-center items-center align-center px-4 font-bold  align-center bg-white">
        <span className="mr-2 text-lg">💲</span> PRICING
      </p>

      <motion.div
        ref={ref}
        initial={{ y: 25, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="flex w-[90%] mt-2 md:mt-6 text-center flex-col items-center"
      >
        <p className="text-4xl md:text-[45px] font-semibold">
          Select your ideal <span className="text-[#fe8162]">Pricing </span>{" "}
          plan
        </p>
      </motion.div>

      <div className="flex w-[90%] text-center text-[#aba7a6] text-lg md:text-xl mt-3 md:mt-6 font-semibold flex-col items-center">
        <p>
          At Manage Wise, we believe in providing you with{" "}
          <span className="inline md:hidden">
            pricing plans that adapt to your unique needs.
          </span>{" "}
        </p>
        <p className="hidden md:block">
          pricing plans that adapt to your unique needs.
        </p>
      </div>

      <div className="w-full flex flex-col justify-center items-center md:mt-6">
        {data.map((item) => (
          <PricingCard
            keys={item.key}
            plan={item.plan}
            rupees={item.rupees}
            points={item.points}
          />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
