import React from "react";
import Navbar from "./Navbar/Navbar";
import Banner from "./Sections/Banner";
import bannerImg from "../assets/images/banner.jpg";
import About from './Sections/About'
const MainPath = () => {
  return (
    <div>
      <div
        className="bg-fixed bg-cover bg-center "
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <Navbar />
        <Banner />
      </div>
      <About/>
    </div>
  );
};

export default MainPath;
