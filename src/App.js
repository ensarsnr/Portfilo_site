import Lottie from "lottie-react";
import computer from "./assets/anims/computer.json";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  const clickChangeLang = async (lang) => {
    await i18n.changeLanguage(lang);
  };

  return (
    <div className="grid grid-cols-3 h-screen bg-[#092635]">
      <div className="lg:col-span-1 lg:block hidden  bg-[#5C8374]">
        <div class="w-[600px] 2xl:w-[900px]">
          <Lottie animationData={computer} loop={true} />
        </div>
      </div>
      <div className=" sm:col-span-2 col-span-3  m-auto text-[#9EC8B9]">
        <h2 className="text-4xl font-bold mb-5">{t("welcome")} 👋</h2>
        <h1 className="text-5xl font-bold text-start">Name Surname</h1>
        <div>
          {/* Burası sürekli değişebilir.. */}
          <h1 className="text-5xl font-bold mt-5 text-[#5C8374] text-center">
            Developer
          </h1>
        </div>
        <div className="flex justify-between mt-5">
          <div>github</div>
          <div>linkedin</div>
          <div>selectlang</div>
        </div>
      </div>
    </div>
  );
}

export default App;
