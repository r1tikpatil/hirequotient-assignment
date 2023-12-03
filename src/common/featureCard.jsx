const FeatureCard = ({ image, heading, title }) => {
  return (
    <div className="h-1/2 w-[90%] md:w-2/5 rounded-3xl mt-12 border py-6">
      <div className=" mt-[-15px]">
        <img src={image} alt="img" className="h-full w-full" />
      </div>

      <div className="mt-4 md:mt-6 w-full px-6">
        <p className="text-2xl font-semibold">{heading}</p>
        <p className="text-md mt-2 font-semibold text-[#aba7a6]">{title}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
