import React, { useContext } from "react";
import { FaInstagram, FaGithub, FaPhoneAlt } from "react-icons/fa";
import { CiLinkedin, CiFacebook } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { AppContext } from "../../context/AppContext";
const Contact = () => {
  const { form, sendEmail } = useContext(AppContext);
  return (
    <div className="bg-gradient-to-r to-cyan-500 from-blue-700">
      <div className="max-w-[1240px] mx-auto py-[100px]">
        <div className="md:grid grid-cols-2 gap-5 p-3">
          <div>
            <form
              className="max-w-md mx-auto text-white font-bold"
              ref={form}
              onSubmit={sendEmail}
            >
              <div className="relative z-0 w-full mb-5 group:">
                <input
                  type="email"
                  name="email"
                  id="floating_email"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="email"
                  className="peer-focus:font-medium absolute text-sm  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email address
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group:">
                <textarea
                  rows={4}
                  type="message"
                  name="message"
                  id="message"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer resize-none"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="message"
                  className="peer-focus:font-medium absolute text-sm  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Leave a Message
                </label>
              </div>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="first_name"
                    id="floating_first_name"
                    className="block py-2.5 px-0 w-full text-black text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="first_name"
                    className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    First name
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="last_name"
                    id="floating_last_name"
                    className="block py-2.5 px-0 w-full text-black text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="last_name"
                    className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Last name
                  </label>
                </div>
              </div>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className="block py-2.5 px-0 w-full text-black text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-non focus:outline-none focus:ring-0 focus:border-black peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="phone"
                    className="peer-focus:font-medium absolute text-sm  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Conatct No
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="company"
                    id="company"
                    className="block py-2.5 px-0 w-full text-black text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="company"
                    className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Company Name
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="text-black hover:text-white border bg-blue-200 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center duration-300"
                value="Send"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="p-5">
            <div className="text-3xl font-bold">Contact Us</div>
            <div className="flex gap-10 p-5 text-3xl">
              <a href="https://www.instagram.com/tayyab_.ktk/" target="_blank">
                <FaInstagram className="hover:text-fuchsia-700 hover:scale-125 duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/tayyab-khattak-7b6522225/"
                target="_blank"
              >
                <CiLinkedin className="hover:text-blue-800 hover:scale-125 duration-300" />
              </a>
              <a href="https://github.com/tayyab2002" target="_blank">
                <FaGithub className="hover:scale-125 duration-300" />
              </a>
              <a
                href="https://www.facebook.com/tayyab.ktk.921/"
                target="_blank"
              >
                <CiFacebook className="hover:text-blue-700 hover:scale-125 duration-300" />
              </a>
            </div>
            <div>
              <div className="text-lg underline">Contact Info</div>
              <div className="p-3">
                <MdEmail />
                Email: tayyabktk2002@gmail.com
                <FaPhoneAlt />
                <p>WhatsApp: +92-349-5336214</p>
                <FaLocationDot />
                <p>Location: Islamabad Capital, Pakistan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
