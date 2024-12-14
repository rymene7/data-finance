import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="uppercase font-bold p-2 text-[#00df9a]">
          growing with data analytics
        </p>
        <h1 className="font-bold md:text-7xl md:py-6 sm:text-6xl text-4xl">
          Grow with data.
        </h1>
        <div className="flex justify-center items-center py-4">
          <p className="font-bold md:text-4xl sm:text-3xl text-xl md:pr-4 pr-2">
            Fast, Flexible financing for
          </p>
          <ReactTyped
            className="font-bold md:text-4xl sm:text-3xl text-xl"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          ></ReactTyped>
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Monitor your data analytics to increase revenue for BTB, BTC, & SASS
          platforms.
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
