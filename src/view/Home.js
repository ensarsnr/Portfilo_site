import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ComputerAnim from "../components/home/ComputerAnim";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMiniLanguage } from "react-icons/hi2";
import Title from "../components/home/Title";
import TitleWriter from "../components/home/TitleWriter";

function Home() {
  const { t, i18n } = useTranslation();
  const [isTr, setIsTr] = useState(false);

  const clickChangeLang = async () => {
    setIsTr(!isTr);
    await i18n.changeLanguage(isTr ? "tr" : "en");
  };

  return (
    <>
      <div className="flex lg:grid lg:grid-cols-3 h-screen bg-[#2D3250]">
        <div className=" rounded-br-lg lg:col-span-1 lg:block hidden bg-[#7077A1]">
          <ComputerAnim />
        </div>
        <div className="h-screen flex flex-col justify-evenly lg:w-3/4 p-5 sm:col-span-2 col-span-3 m-auto text-[#9EC8B9]">
          <div>
            <Title />
          </div>
          <div className="mt-5">
            <h1 className="text-white font-extrabold text-2xl">
              <TitleWriter />
            </h1>
            <p className="text-start text-xl font-medium text-white">
              {t("about")}
            </p>
          </div>
          <div className="flex justify-evenly mt-5">
            <button>
              <FaGithub color="white" size={60} />
            </button>
            <button>
              <FaLinkedin size={60} color="white" />
            </button>
            <button onClick={clickChangeLang}>
              <HiMiniLanguage size={60} color="white" />
              <p className="text-center">{i18n.language}</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
