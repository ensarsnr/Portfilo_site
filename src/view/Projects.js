import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { CiImageOn, CiParking1 } from "react-icons/ci";
import { IoCodeSlash } from "react-icons/io5";
import myCv from "../assets/download/CV.pdf";

function Projects() {
  const { t, i18n } = useTranslation();
  const [showImg, setSowImg] = useState(false);
  const [images, setImages] = useState("");

  const projects = [
    {
      title: "Docker Website",
      desc: t("projects.dockerWebsite"),
      URL: "https://github.com/ensarsnr/Docker-Website",
      img: require("../assets/img/dockerwebsite.png"),
      tech: ["ReactJS", "Tailwind", "NodeJS"],
      date: `${t("months.sep")} 5 - ${t("months.oct")} 8 - 2023`,
    },
    {
      title: "Chat App",
      desc: t("projects.chatApp"),
      URL: "https://github.com/ensarsnr/chat-app-frontend",
      img: require("../assets/img/chatapp.png"),
      tech: ["NextJS", "Tailwind", "MongoDB", "NodeJS"],
      date: `${t("months.nov")} 1 - ${t("months.dec")} 7 - 2023`,
    },
    {
      title: "Flutter Game",
      desc: t("projects.flutterGame"),
      URL: "https://github.com/ensarsnr/Flutter-Game",
      img: require("../assets/img/game.png"),
      tech: ["Flutter", "Dart", "Provider"],
      date: `${t("months.dec")} 17 - ${t("months.dec")} 30 - 2023`,
    },

    {
      title: "Beatiful React Hooks",
      desc: t("projects.brh"),
      URL: "https://github.com/antonioru/beautiful-react-hooks",
      img: require("../assets/img/logo.png"),
      tech: ["README.md"],
      date: `${t("months.oct")} 23 - 2023`,
    },
    // {
    //   title: "Project Management",
    //   desc: t("projects.pmanagement"),
    //   URL: "https://github.com/ensarsnr/project-management",
    //   img: require("../assets/img/chatapp.png"),
    //   tech: ["VueJS", "NodeJS", "MongoDB", "Tailwind"],
    //   date: `${t("months.nov")} 25 - Not Finished - 2023`,
    // },
  ];

  // Methods

  const openImage = (e) => {
    console.log(e.img);
    setSowImg(true);
    setImages(e.img);
  };

  const renderProjectTimeline = () => {
    return projects.map((project, index) => (
      <div
        key={index}
        className={`mb-8 flex justify-between ${
          index % 2 === 0 ? "flex-row-reverse" : "items-center"
        } w-full ${index % 2 === 0 ? "left-timeline" : "right-timeline"}`}
      >
        <div className="order-1 w-5/12"></div>
        <div
          className={`order-1 w-5/12 px-1 py-4 ${
            index % 2 === 0 ? "text-right" : "text-left"
          }`}
        >
          <p className="mb-3 text-base text-yellow-300">{project.date}</p>
          <h4 className="mb-3 font-bold text-lg md:text-2xl">
            {project.title}
          </h4>
          <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
            {project.desc}
          </p>
          <div
            className={`flex   ${
              index % 2 === 1 ? "flex-row-reverse" : "items-center"
            } mt-5`}
          >
            <button onClick={() => openImage(project)} className="m-auto :">
              <CiImageOn size={30} />
            </button>
            <div>
              <a href={project.URL}>
                <IoCodeSlash size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <section>
      <div className="bg-[#2D3250] text-white py-8">
        <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
          <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
            <p className="ml-2 text-yellow-300 uppercase tracking-loose">
              {t("workingProcess")}
            </p>
            <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">
              {t("workingTitle")}
            </p>
            <p className="text-sm md:text-base text-gray-50 mb-4">
              {t("workingInfo")}
            </p>
            <a
            target="_blank"
            href={myCv}
              download="myCv"
              className="bg-transparent mr-auto hover:bg-yellow-300 text-yellow-300 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
            >
              {t("cvDownload")}
            </a>
          </div>
          <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
            <div className="container mx-auto w-full h-full">
              <div className="relative wrap overflow-hidden p-10 h-full">
                <div
                  className="border-2-2 border-yellow-555 absolute h-full border"
                  style={{
                    right: "50%",
                    border: "2px solid #FFC100",
                    borderRadius: "1%",
                  }}
                ></div>
                <div
                  className="border-2-2 border-yellow-555 absolute h-full border"
                  style={{
                    left: "50%",
                    border: "2px solid #FFC100",
                    borderRadius: "1%",
                  }}
                ></div>

                {renderProjectTimeline()}
              </div>
              <img
                className="mx-auto -mt-36 md:-mt-20"
                src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
              />
            </div>
          </div>
        </div>
        {showImg && (
          <div
            id="modal"
            class="m-auto fixed   top-0 left-0 z-80 w-screen h-screen bg-black/70 flex justify-center items-center"          >
            <a
              class="fixed z-90 top-6 right-8 text-white text-5xl font-bold"
              href="javascript:void(0)"
              onClick={() => setSowImg(false)}
            >
              &times;
            </a>

            <img
              src={images}
              id="modal-img"
              class="h-auto sm:max-w-5xl max-w-sm rounded-lg"
            />
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
