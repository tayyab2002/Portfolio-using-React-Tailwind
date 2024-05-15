import React, { useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import Banner from "../Sections/Banner";
import About from "../Sections/About";
import Contact from "../Sections/Contact";
import Projects from "../Sections/Projects";
import Services from "../Sections/Services";
import Skills from "../Sections/Skills";
import Footerr from "../Sections/Footerr";
import { Link } from "react-scroll";

import { AppContext } from "../../context/AppContext";
const Root = () => {
  const {menuHandler , setMenuHandler , iconsList} = useContext(AppContext)
  const menuItemsList = [
    "Home",
    "About",
    "Services",
    "Skills",
    "Projects",
    "ContactUs",
  ];
  

  return (
    <div>
      <div
        className="h-[20%] bg-blue-300 fixed right-0 top-[30%] md:top-[40%] z-[9999] flex flex-col justify-center rounded-l-lg cursor-pointer px-1 border-l-2 border-black"
        onClick={() => setMenuHandler(!menuHandler)}
      >
        {menuHandler ? (
          <IoMdClose className="text-[15px] md:text-[25px] text-black hover:scale-125 "/>
        ) : (
          <GiHamburgerMenu className="text-[15px] md:text-[25px] text-white hover:scale-110" />
        )}
      </div>
      <div
        className={`${
          menuHandler ? "right-[25px]" : "right-[-100%]"
        } duration-300 h-[40%] top-[20%] md:top-0 md:h-full bg-blue-400 md:bg-blue-300 right-4 fixed z-50 flex flex-col justify-center px-2 rounded-full font-google`}
      >
        <div className="text-white top-[38%]">
          {iconsList.map((items, index) => {
            return (
              <Link to={menuItemsList[index]} key={items.id} onClick={()=>setMenuHandler(!menuHandler)} smooth={true}>
                <div className="flex text-[10px] md:text-[20px] my-6 cursor-pointer hover:scale-110 duration-500">
                  <div className=" text-[20px] md:text-[25px]"> {items.icons}</div>
                  <div className="hover:text-black">
                    {menuItemsList[index] && <div>{menuItemsList[index]}</div>}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div id="Home">
        <Banner />
      </div>
      <div>
        <div id="About">
          <About />
        </div>
        <div id="Services">
          <Services />
        </div>
        <div id="Skills">
          <Skills />
        </div>
        <div id="Projects">
          <Projects />
        </div>
        <div id="ContactUs">
          <Contact />
        </div>
        <div>
          <Footerr />
        </div>
      </div>
    </div>
  );
};

export default Root;
