import Lottie from "lottie-react";
import computer from "./assets/anims/computer.json";
import { useTranslation } from "react-i18next";
import TitleWriter from "./components/TitleWriter";
import { HiMiniLanguage } from "react-icons/hi2";
import { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function App() {
  const { t, i18n } = useTranslation();
  const [isTr, setIsTr] = useState(false);

  const clickChangeLang = async () => {
    setIsTr(!isTr);
    await i18n.changeLanguage(isTr ? "tr" : "en");
  };

  return (
    <div className="flex lg:grid lg:grid-cols-3 h-screen bg-[#092635]">
      <div className="lg:col-span-1 lg:block hidden bg-[#5C8374]">
        <div className="w-[600px] 2xl:w-[900px]">
          <Lottie animationData={computer} loop={true} />
        </div>
      </div>
      <div className="h-screen flex flex-col justify-evenly lg:w-3/4 p-5 sm:col-span-2 col-span-3 m-auto text-[#9EC8B9]">
        <div>
          <h1 className="text-5xl font-bold text-center">Name Surname 👋</h1>
          <div>
            <h1 className="text-2xl font-bold mt-5 text-[#5C8374] text-center">
              <TitleWriter />
            </h1>
          </div>
        </div>
        <div className="mt-5">
          <p className="">{t("about")}</p>
        </div>
        <div className="flex justify-evenly mt-5">
          <button>
            <FaGithub size={60} />
          </button>
          <button>
            <FaLinkedin size={60} />
          </button>
          <button onClick={clickChangeLang}>
            <HiMiniLanguage size={60} />
            <p className="text-center">{i18n.language}</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
