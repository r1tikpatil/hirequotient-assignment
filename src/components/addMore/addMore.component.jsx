import React from "react";
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

  return (
    <div className="bg-[#1c1c1c] w-screen px-16 pt-24">
      <p className="text-[#8247ff] text-[12px] border rounded-lg px-2  flex justify-center items-center font-bold bg-white w-[140px]">
        <span className="mr-2 text-lg">🤩</span> AND MORE...
      </p>

      <div className="text-white text-[40px] mt-4 font-semibold">
        <p>
          Explore an array of features that elevate your{" "}
          <span className="text-[#fe8162]">Productivity</span> to
        </p>
        <p className="mt-[-15px]">new heights</p>
      </div>

      <div className="text-[#aba7a6] text-xl mt-4 mb-8 font-semibold">
        <p>Discover the tools that will revolutionize the way you</p>
        <p>manage and optimize your operations</p>
      </div>

      {data.map((item) => (
        <AddMoreCard
          keys={item.key}
          heading={item.heading}
          title={item.title}
        />
      ))}

      <div className="flex justify-center items-center mt-16 ">
        <p className="text-[#8247ff] text-[12px] border font-bold rounded-lg px-2 flex justify-center items-center  bg-white w-[140px]">
          <span className="mr-2 text-lg">🛠</span> INTEGRATIONS
        </p>
      </div>

      <div className="text-white text-[40px] flex-col mt-4 w-full font-semibold flex justify-center items-center">
        <p>
          Enable <span className="text-[#fe8162]">integration</span> with other
        </p>
        <p className="mt-[-15px]">popular tools and platforms</p>
      </div>

      <div className="text-[#aba7a6] text-xl mt-4 mb-8 font-semibold flex justify-center items-center flex-col">
        <p>Seamlessly connect and amplify your workflow </p>
        <p>by enabling integration with a diverse array of </p>
        <p>widely-used tools and platforms.</p>
      </div>

      <div className="w-full mt-8 flex justify-center items-center">
        <img src={Image6} alt="img" className="h-1/2 w-1/2" />
      </div>
    </div>
  );
};

export default AddMore;
