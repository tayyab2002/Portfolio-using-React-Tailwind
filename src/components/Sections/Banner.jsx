import React from "react";
import { ReactTyped } from "react-typed";
const Banner = () => {
  return (
    <div className="w-full pt-[120px] pb-10 bg-transparent">
      <div className="max-w-[1240px]  text-white  mx-auto font-bold p-3 md:p-5">
        <div className="font-light text-[25px] md:text-4xl">Hi I'm</div>
        <div className="mt-3 text-blue-400 font-bold font-mono text-[30px] md:text-[50px]">
          Tayyab Khattak
        </div>
        <div className="mt-4 font-mono text-[30px] md:text-[30px]">
          <ReactTyped
            strings={["Web Developer", "UI/UX Designer"]}
            typeSpeed={100}
            backDelay={1000}
            backSpeed={20}
            loop
          />
        </div>
        <div className="mt-2 md:mt-5">
          <p className=" text-[20px] md:text-3xl">From Pakistan</p>
        </div>
        <div className=" mt-5 md:mt-16 text-black">
          <button className="border border-black p-3 px-10 rounded-3xl hover:bg-blue-400 hover:border-white hover:text-white duration-1000">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
