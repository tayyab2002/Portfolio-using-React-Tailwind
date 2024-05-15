import { createContext, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FcServices,
  FcHome,
  FcPhone,
  FcInfo,
  FcEngineering,
  FcSurvey,
} from "react-icons/fc";
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [handler, setHnadler] = useState(false);
  const [menuHandler, setMenuHandler] = useState(false);
  const form = useRef();
  const iconsList = [
    {
      id: 1,
      icons: <FcHome />,
    },
    {
      id: 2,
      icons: <FcInfo />,
    },
    {
      id: 3,
      icons: <FcServices />,
    },
    {
      id: 4,
      icons: <FcEngineering />,
    },
    {
      id: 5,
      icons: <FcSurvey />,
    },
    {
      id: 6,
      icons: <FcPhone />,
    },
  ];
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_muaxqwp", "template_rbaqb2v", form.current, {
        publicKey: "xDHkF9w9ieV3j5OzB",
      })
      .then(
        () => {
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <AppContext.Provider
      value={{
        handler,
        setHnadler,
        menuHandler,
        setMenuHandler,
        sendEmail,
        form,
        iconsList
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
