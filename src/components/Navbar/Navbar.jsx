import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
const Navbar = () => {
  const menuItems = ["Home", "About", "Services", "Projects", "Contact Us"];
  const [menuHandler, setMenuHandler] = useState(false);
  return (
    <>
      <div className="p-3 ">
        <div className="max-w-[1240px] items-center flex justify-between mx-auto">
          <div>
            <img
              className="rounded-full"
              src={logo}
              alt=""
              width="70px"
              height="40px"
            />
          </div>
          {menuHandler ? (
            <IoMdClose
              className="text-3xl md:hidden block"
              onClick={() => setMenuHandler(!menuHandler)}
            />
          ) : (
            <GiHamburgerMenu
              className="text-3xl md:hidden block"
              onClick={() => setMenuHandler(!menuHandler)}
            />
          )}
          <ul className="hidden md:flex  gap-10 font-bold">
            {menuItems.map((items, index) => {
              return <li className="hover:text-blue-400 duration-500 text-[17px]" key={index}>{items}</li>;
            })}
          </ul>
          <ul
            className={`duration-500 md:hidden fixed font-bold w-full h-screen bg-slate-950 text-white top-[92px] 
          ${menuHandler ? "left-[0]" : "left-[-100%]"}`}
          >
            {menuItems.map((items, index) => {
              return (
                <li key={index} className=" duration-300 p-6 border-b-2 border-b-zinc-500 hover:bg-slate-800">
                  {items}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
