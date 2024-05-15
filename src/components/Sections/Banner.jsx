import React from "react";
import { ReactTyped } from "react-typed";
import { FaDownload } from "react-icons/fa6";
const Banner = () => {
  return (
    <div className="w-full pt-[130px] h-[80vh] md:h-[100vh] md:pb-10 setImg">
      <div className="max-w-[1240px] text-white  mx-auto font-bold p-3 md:p-5">
        <div className="font-light text-[25px] md:text-4xl">Hi I'm</div>
        <div className="mt-3 text-blue-400 font-bold font-mono text-[30px] md:text-[50px]">
          Tayyab Khattak
        </div>
        <div className="mt-4 font-mono text-[23px] md:text-[30px]">
          <ReactTyped
            strings={[
              "Web Developer",
              "React,NextJs",
              "Node,Express",
              "UI/UX Designer",
            ]}
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
          <a href="doc CV-N.pdf" download="CV-N.pdf">
            <button
              className="
            border 
          border-white
          text-white
          hover:text-black 
            text-[10px]
            px-3
            p-1
            rounded-3xl
            flex flex-row items-center gap-2
            hover:bg-blue-400 
            duration-1000
            md:p-3 
            md:px-9 
            md:text-[17px]"
            >
              Download CV
              <FaDownload className="md:text-[23px]" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
