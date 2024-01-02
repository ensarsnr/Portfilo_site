import React from "react";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t, i18n } = useTranslation();

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
      img: require("../assets/img/game.jpeg"),
      tech: ["Flutter", "Dart", "Provider"],
      date: `${t("months.dec")} 17 - ${t("months.dec")} 30 - 2023`,
    },

    {
      title: "Beatiful React Hooks",
      desc: t("projects.brh"),
      URL: "https://github.com/antonioru/beautiful-react-hooks",
      img: require("../assets/img/chatapp.png"),
      tech: ["README.md"],
    },
    {
      title: "Project Management",
      desc: t("projects.pmanagement"),
      URL: "https://github.com/ensarsnr/project-management",
      img: require("../assets/img/chatapp.png"),
      tech: ["VueJS", "NodeJS", "MongoDB", "Tailwind"],
    },
  ];

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
          <div className="mt-5">
            <a
              href={project.URL}
              className="duration-200 hover:duration-200 hover:bg-gray-500 bg-gray-400 sm:px-4 sm:py-3 px-2 py-2 rounded-xl sm:text-lg text-sm font-bold"
            >
              {t("sourceCode")}
            </a>
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
              href="#"
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
                className="mx-auto -mt-36 md:-mt-36"
                src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
