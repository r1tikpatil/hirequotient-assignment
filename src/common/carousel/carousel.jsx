import React from "react";
import { motion } from "framer-motion";

const data = [
  {
    key: 1,
    name: "Alex",
    designation: "IT Manager",
    img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww",
    description:
      "I can't imagine running my business without this product. The automation features have saved me hours of manual work, allowing me to focus on strategic tasks.",
  },
  {
    key: 2,
    name: "David",
    designation: "Freelancer",
    description:
      "Using this product has been a game-changer for our team. The collaboration features and intuitive interface have greatly improved our productivity.",
    img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww",
  },
  {
    key: 3,
    name: "Sarah",
    designation: "Project Manager",
    description:
      "The customer support team behind this product is exceptional. They have been incredibly responsive and helpful, addressing any questions or concerns promptly.",
    img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww",
  },
  {
    key: 4,
    name: "Emily",
    designation: "Art Director",
    description:
      "Manage Wise transformed our team's productivity. The intuitive interface and powerful features have made a significant impact on our daily operations.",
    img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww",
  },
];

const CarouselComponent = () => {
  return (
    <div className="grid grid-rows-4 md:grid-rows-2 grid-flow-col md:gap-6 justify-evenly">
      {data.map((item) => {
        const { key, img, name, description, designation } = item;
        return (
          <motion.div
            initial={{ transform: "rotatey(-90deg)" }}
            whileInView={{ transform: "rotatey(0deg)" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            key={key}
            className="w-[95%] md:mt-0 mt-8 md:w-[27vw] border pt-12 pb-8 px-6 rounded-3xl"
          >
            <div className="w-full">
              <p className="text-xl text-left font-semibold">"{description}"</p>
            </div>

            <div className="flex flex-row mt-8">
              <div className="h-12 w-12 rounded-full">
                <img src={img} alt="img" className="rounded-full" />
              </div>
              <div className="flex flex-col ml-6 text-left">
                <p className="text-xl">{name}</p>
                <p className="text-md text-[#aba7a6]">{designation}</p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default CarouselComponent;
