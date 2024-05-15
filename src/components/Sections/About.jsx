import { useContext } from "react";
import aboutimg from "../../assets/images/about.jpg";
import educationHistory from "../../data/details.json";
import { FaInstagram ,FaHiking, FaBookReader,FaChess, FaPaintBrush, FaWhatsapp} from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { IoFootball ,IoGameController,IoExtensionPuzzleSharp,IoBicycle } from "react-icons/io5";
import {AppContext} from "../../context/AppContext";
const About = () => {
  const {handler , setHnadler} = useContext(AppContext)
  const hobbies = [
    {
      id:1,
      icon:<IoFootball/>,
      name:'Football'
    },
    {
      id:2,
      icon:<IoGameController/>,
      name:"Games"
    },
    {
      id:3,
      icon:<FaHiking/>,
      name:"Traveling"
    },
    {
      id:4,
      icon:<IoBicycle />,
      name:"Cycling"
    },
    {
      id:5,
      icon:<FaBookReader/>,
      name:"Reading"
    },
    {
      id:6,
      icon:<FaPaintBrush/>,
      name:"Painting"
    },
    {
      id:7,
      icon:<FaChess/>,
      name:"Chess"
    },
    {
      id:8,
      icon:<IoExtensionPuzzleSharp/>,
      name:"Puzzle"
    },
  ]
  return (
    <div className=" border-b-2 border-gray-500" id="about">
      <div className="max-w-[1240px] mx-auto my-[60px] h-350px p-5 md:grid grid-cols-2 ">
        <div className="col-span-1 flex justify-center items-center">
          <img
            className=" rounded-b-[50%] w-[50%] md:rounded-3xl md:w-[60%]"
            src={aboutimg}
            alt="about image not found!"
          />
        </div>
        <div className="p-5 col-span-1">
          <div className=" text-2xl md:text-4xl font-extrabold font-serif mb-2">
            About Me!
          </div>
          <div className="font-semibold text-gray-400 text-justify text-[13px] md:text-[18px]">
            Tayyab-Ur-Rehman Khattak, a web developer from Pakistan, passionate
            about creating exceptional online experiences. With one year of
            professional experience, skilled in crafting diverse websites
            blending creativity and functionality. Proficient in CSS frameworks
            like Bootstrap, MUI, and Tailwind CSS, as well as JavaScript
            frameworks like React.js and Angular.js for robust backend
            development. Equipped with a strong foundation in HTML, CSS,
            JavaScript, and various frameworks, committed to staying updated
            with industry trends to deliver cutting-edge solutions. Ready to
            collaborate and bring your vision to life.
          </div>
          <div className="mt-10 flex">
            <div>
              <button
                onClick={() => setHnadler(!handler)}
                className="border border-gray-500 text-[10px] px-4 p-2 rounded-md hover:bg-blue-400 hover:border-white hover:text-white 
                duration-1000 md:p-2 md:px-6 md:text-[17px]"
              >
                Contact
              </button>
            </div>
            <div
              className={`${
                handler
                  ? "visible right-[33%] text-[30px] md:text-[40px]"
                  : "hidden"
              }`}
            >
              <div className="flex ">
                <div className="pl-2">
                  <a
                    href="https://www.instagram.com/tayyab_.ktk/"
                    target="_blank"
                  >
                    <FaInstagram className="hover:text-fuchsia-700 hover:scale-125 duration-300" />
                  </a>
                </div>
                <div className="pl-2">
                <a
                href="https://wa.me/923495336214 "
                target="_blank"
              >
                <FaWhatsapp className="hover:text-green-700 hover:scale-125 duration-300" />
              </a>
                </div>
                <div className="pl-2">
                <a
                href="https://www.facebook.com/tayyab.ktk.921/"
                target="_blank"
              >
                <CiFacebook className="hover:text-blue-700 hover:scale-125 duration-300" />
              </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black p-2">
        <div className=" max-w-[1240px] mx-auto md:grid grid-cols-2 p-2 text-white">
          <div className="border-2 border-dashed border-blue-400 p-2">
            <div className="text-center pb-7 text-2xl font-bold">
              <p>Academic Background</p>
            </div>
            {educationHistory.educationHistory.map((items) => {
              return (
                <div key={items.id} className="grid md:grid-cols-2 pb-2">
                  <div className="order-2 md:order-none text-[13px] pb-2">
                    <p className="font-bold font-google">{items.level}</p>
                    <p>
                      <strong>Name</strong> : {items.name}
                    </p>
                    <p>
                      <strong>Location</strong> : {items.location}
                    </p>
                  </div>
                  <div className="order-2 md:order-none">
                    <img
                      src={items.img}
                      alt="Coolage img not Found!"
                      className="rounded-md "
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="border-2 border-dashed border-blue-400">
            <div>
              <div>
                <p className="text-center py-3 text-2xl font-bold">Hobbies & Interests</p>
              </div>
              <div className=" p-5 md:p-10">
                <div className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-14">
                  {
                    hobbies.map((items)=>{
                      return(
                        <div key={items.id} className="flex flex-col text-center cursor-pointer">
                          <div className="border border-dashed border-white p-7 md:p-6 text-2xl md:text-4xl flex justify-center rounded-full text-blue-400">
                          {items.icon}
                          </div>
                          <div className="text-[12px] p-1">
                            {items.name}
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
