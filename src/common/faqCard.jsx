import React, { useState } from "react";

const FAQCard = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      onClick={handleClick}
      className={`my-4 py-4 px-8 rounded-3xl bg-[#f7f8fd] box-border transition-all duration-300 ease-in-out ${
        isOpen ? "h-[150px] " : "h-[70px] "
      }`}
    >
      <div
        className={`flex justify-between items-center text-2xl font-semibold hover:cursor-pointer ${
          isOpen ? "text-[#8247ff]" : "text-black"
        }`}
      >
        <p>{question}</p>
        <p
          className={`text-[#8247ff] text-4xl transform transition-transform ${
            isOpen ? "rotate-45" : "rotate-0"
          } `}
        >
          +
        </p>
      </div>

      <div
        className={`cursor-default mt-4 ${
          isOpen ? "opacity-100" : "opacity-0"
        } transition-all duration-600 ease-in-out `}
      >
        <p className="text-[#aba7a6] text-lg font-semibold">{answer}</p>
      </div>
    </div>
  );
};

export default FAQCard;
