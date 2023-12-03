import React from "react";
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

  return (
    <div className="pt-24 flex flex-col items-center bg-white w-screen pb-16">
      <p className="text-[#8247ff] text-[12px] border rounded-lg flex justify-center items-center align-center px-4 font-bold  align-center bg-white">
        <span className="mr-2 text-lg">💲</span> PRICING
      </p>

      <div className="flex mt-2 flex-col items-center">
        <p className="text-[45px] font-semibold">
          Select your ideal <span className="text-[#fe8162]">Pricing </span>{" "}
          plan
        </p>
      </div>

      <div className="flex text-[#aba7a6]  text-xl mt-2 font-semibold flex-col items-center">
        <p>At Manage Wise, we believe in providing you with </p>
        <p>pricing plans that adapt to your unique needs.</p>
      </div>

      <div>
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
