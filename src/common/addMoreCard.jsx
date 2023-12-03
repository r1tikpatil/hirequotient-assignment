import { FaMobile, FaFire } from "react-icons/fa";
import { GoBellFill } from "react-icons/go";

const AddMoreCard = ({ keys, heading, title }) => {
  return (
    <div className="w-full border mt-8 bg-[#212121] px-8 md:px-16 h-[55vh] md:h-[40vh] rounded-3xl flex flex-col justify-center items-center">
      <div className="bg-[#8247ff] p-4 rounded-3xl">
        {keys === 1 && <FaMobile color={"white"} size={32} />}
        {keys === 2 && <GoBellFill color={"white"} size={32} />}
        {keys === 3 && <FaFire color={"white"} size={32} />}
      </div>
      <p className="text-white mt-6 text-xl text-center md:text-2xl font-bold">
        {heading}
      </p>
      <p className="text-[#aba7a6] text-center mt-4 font-semibold">{title}</p>
    </div>
  );
};

export default AddMoreCard;
