import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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

  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const [ref1, inView1] = useInView({
    triggerOnce: true,
  });

  return (
    <div
      id="faq"
      className="px-8 md:px-16 pt-24 bg-white flex flex-col items-center md:items-start"
    >
      <p className="text-[#8247ff] text-[12px] border rounded-lg px-2 flex justify-center items-center font-bold bg-white w-[80px]">
        <span className="mr-2 text-lg">🙋‍♀️</span> FAQ
      </p>

      <motion.div
        ref={ref}
        initial={{ y: 25, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="text-black md:text-left text-center text-4xl md:text-[40px] mt-4 font-semibold"
      >
        <p>Need</p>
        <p className="text-[#fe8162]">Answers?</p>
      </motion.div>

      <div className="text-[#aba7a6] md:text-left text-center text-lg md:text-xl mt-4 mb-8 font-semibold">
        <p>
          Check out our most commonly asked questions below to{" "}
          <span className="md:hidden inline">
            find the information you need.
          </span>
        </p>
        <p className="md:block hidden">find the information you need.</p>
      </div>

      <motion.div
        ref={ref1}
        initial={{ y: 85, opacity: 0 }}
        animate={inView1 ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="w-full"
      >
        {data.map((item) => (
          <FAQCard question={item.question} answer={item.ans} />
        ))}
      </motion.div>
    </div>
  );
};

export default FAQ;
