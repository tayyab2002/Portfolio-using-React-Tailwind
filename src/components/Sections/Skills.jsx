import React from "react";
// ===============================================================================
// languages icons
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt, FaReact } from "react-icons/fa6";
import { TbBrandJavascript, TbBrandNextjs } from "react-icons/tb";
import { SiMui, SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";
import { IoLogoAngular } from "react-icons/io";
import { FaNode, FaBootstrap, FaPhp  } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
// ================================================================================
import skillsProgressData from "../../data/details.json";
const Skills = () => {
  return (
    <div className="max-w-[1240px] p-10  mx-auto py-5">
      <div className="text-center font-bold font-mono text-4xl">Skills</div>
      <div className=" text-[50px] px-3 md:text-[100px] py-6">
        <div className="grid grid-cols-3 md:grid md:grid-cols-5 gap-16">
          <TiHtml5 className="hover:text-orange-600 hover:scale-105 duration-500" />
          <FaCss3Alt className="hover:text-blue-400 hover:scale-105 duration-500" />
          <FaBootstrap className="hover:text-purple-900 hover:scale-105 duration-500" />
          <TbBrandJavascript className="hover:text-yellow-500 hover:scale-105 duration-500" />
          <SiTailwindcss className="hover:text-blue-500 hover:scale-105 duration-500" />
          <SiMui className="hover:text-blue-800 hover:scale-105 duration-500" />
          <FaReact className="hover:text-blue-300 hover:scale-105 duration-500" />
          <TbBrandNextjs className="hover:scale-105 duration-300" />
          <IoLogoAngular className="hover:text-red-700 hover:scale-105 duration-300" />
          <FaNode className="hover:text-green-800 hover:scale-105 duration-300" />
          <SiExpress className="hover:scale-105 duration-300" />
          <SiMongodb className="hover:text-green-800 hover:scale-105 duration-300" />
          <FaPhp className="hover:text-blue-900 hover:scale-105 duration-300"/>
          <SiMysql className="hover:text-blue-700 hover:scale-105 duration-300"/>
        </div>
      </div>
      <div className=" text-[20px] text-center font-mono md:text-3xl font-bold underline">
        Understanding Level
      </div>
      <div className="max-w-[1240px] mx-auto py-10 grid grid-cols-1 gap-x-16 sm:grid-cols-2 ">
        {skillsProgressData.skillsProgress.map((items) => {
          return (
            <div key={items.id} className="p-2 md:p-4 m-2">
              <div className="text-[15px] font-mono">{items.name}</div>
              <div className="m-1 md:w-80 bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-400 text-[10px] font-medium text-center h-2.5 leading-none rounded-full"
                  style={{ width: `${items.progress}` }}
                >
                  {items.progress}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
