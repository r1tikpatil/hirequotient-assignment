import React from "react";

import FAQCard from "../../common/faqCard";

const FAQ = () => {
  const data = [
    {
      key: 1,
      question: "What is Manage Wise and what does it offer?",
      ans: "Manage Wise is a comprehensive management platform designed to streamline your business operations, enhance productivity, and drive success. It offers a range of features including task management, scheduling, communication tools, analytics, and more.",
    },
    {
      key: 2,
      question:
        "Is Manage Wise suitable for small businesses and larger enterprises alike?",
      ans: "Yes, Manage Wise is designed to cater to the needs of both small businesses and larger enterprises. Its scalable features and customizable options make it versatile for various business sizes.",
    },
    {
      key: 3,
      question:
        "Can I access Manage Wise from different devices and platforms?",
      ans: "Yes, Manage Wise offers cross-platform compatibility, allowing you to access and use the platform seamlessly on desktops, web browsers, and mobile devices.",
    },
    {
      key: 4,
      question: "What kind of support options do you offer to users?",
      ans: "We provide responsive customer support via chat and email to assist you with any inquiries, issues, or guidance you may need while using Manage.",
    },
    {
      key: 5,
      question: "How secure is the data stored within Manage Wise?",
      ans: "Your data's security is a top priority. Manage Wise employs robust data encryption and follows industry best practices to ensure your sensitive information is safe and protected.",
    },
  ];

  return (
    <div className="w-screen px-16 pt-24 bg-white">
      <p className="text-[#8247ff] text-[12px] border rounded-lg px-2  flex justify-center items-center font-bold bg-white w-[80px]">
        <span className="mr-2 text-lg">🙋‍♀️</span> FAQ
      </p>

      <div className="text-black text-[40px] mt-4 font-semibold">
        <p>Need</p>
        <p className="text-[#fe8162] mt-[-15px]">Answers?</p>
      </div>

      <div className="text-[#aba7a6] text-xl mt-4 mb-8 font-semibold">
        <p>Check out our most commonly asked questions below to</p>
        <p>find the information you need.</p>
      </div>

      <div>
        {data.map((item) => (
          <FAQCard question={item.question} answer={item.ans} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
