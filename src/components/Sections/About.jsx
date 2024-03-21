import React from "react";
import aboutimg from "../../assets/images/about.jpg";
const About = () => {
  return (
    <div className="max-w-[1240px] mx-auto my-[70px] h-350px grid grid-cols-2 ">
      <div dir="rtl" className="col-span-1 w-[60%]">
        <img
          className="rounded-s-[50%] "
          src={aboutimg}
          alt="about"
        />
      </div>
      <div  className="col-span-1">
        <div className="text-4xl font-extrabold font-serif">About Me!</div>
        <div className="font-semibold text-blue-400">
          Hi! I am Tayyab Ur Rehman Khattak from Pakistan.
        </div>
      </div>
    </div>
  );
};

export default About;
