import React from "react";
import { BsCodeSlash } from "react-icons/bs";
import { FaCodeFork } from "react-icons/fa6";
import { MdDeveloperMode } from "react-icons/md";
import { FaDatabase } from "react-icons/fa6";
function TechStack() {
  return (
    <div className="grid sm:grid-cols-3 grid-cols-1   sm:p-10 bg-[#0F1035] gap-4 sm:gap-36 p-2 sm:h-screen">
      <div className="bg-[#365486] m-auto  sm:h-3/4 h-full w-full rounded-lg shadow-lg flex flex-col">
        <div className="sm:h-1/4 h-2/6 w-full flex flex-col mt-5">
          <div className="m-auto bg-pink-500 p-4 rounded-full">
            <BsCodeSlash size={60} color="white" />
          </div>
          <div className="m-auto mt-5 text-white text-[25px] font-extrabold">
            Frontend Development
          </div>
        </div>
        <div className="w-full m-auto h-2/4 sm:h-3/6 flex flex-col justify-around">
          <div>
            <h1 className="text-center text-[#7f84a4] text-[50px] font-extrabold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              Tech Stack
            </h1>
          </div>
          <div className="grid grid-cols-4 p-2 text-start gap-2">
            <span className="p-2 text-white text-center font-extrabold  text-xs bg-[#7FC7D9] rounded-full">
              React
            </span>
            <span className="p-2 text-white text-center font-extrabold  text-xs bg-[#7FC7D9] rounded-full">
              Vue
            </span>
            <span className="p-2 text-white text-center font-extrabold  text-xs bg-[#7FC7D9] rounded-full">
              Tailwind
            </span>
            <span className="p-2 text-white text-center font-extrabold  text-xs bg-[#7FC7D9] rounded-full">
              Javascript
            </span>
            <span className="p-2 text-white text-center font-extrabold  text-xs bg-[#7FC7D9] rounded-full">
              Css
            </span>
            <span className="p-2 text-white text-center font-extrabold  text-xs bg-[#7FC7D9] rounded-full">
              Boostrap
            </span>
            <span className="p-2 text-white text-center font-extrabold  text-xs bg-[#7FC7D9] rounded-full">
              NextJS
            </span>
          </div>
        </div>
      </div>
      <div className="bg-[#365486] m-auto  sm:h-3/4 h-full w-full rounded-lg shadow-lg flex flex-col">
        <div className="sm:h-1/4 h-2/6 w-full flex flex-col mt-5">
          <div className="m-auto bg-pink-500 p-4 rounded-full">
            <FaCodeFork size={60} color="white" />
          </div>
          <div className="m-auto mt-5 text-[white] text-[25px] font-extrabold">
            Backend Development
          </div>
        </div>
        <div className="w-full m-auto h-2/4 sm:h-3/6 flex flex-col justify-around">
          <div>
            <h1 className="text-center text-[#7f84a4] text-[50px] font-extrabold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              Tech Stack
            </h1>
          </div>
          <div className="grid grid-cols-4 p-2 gap-2">
            <span className=" p-2 text-white text-center font-extrabold  text-xs bg-[#7FC7D9] rounded-full">
              NodeJS
            </span>
            <span className="p-2 text-white text-center font-extrabold  text-xs bg-[#7FC7D9] rounded-full">
              Express
            </span>
            <span className="p-2 text-white text-center font-extrabold  text-xs bg-[#7FC7D9] rounded-full">
              Javascript
            </span>
            <span className="p-2 text-white text-center font-extrabold  text-xs bg-[#7FC7D9] rounded-full">
              Docker
            </span>
          </div>
        </div>
      </div>
      <div className=" bg-[#365486] m-auto sm:h-3/4 h-full w-full rounded-lg shadow-lg flex flex-col">
        <div className="sm:h-1/4 h-2/6 w-full flex flex-col mt-5">
          <div className="m-auto flex bg-pink-500 p-4 rounded-full">
            <MdDeveloperMode size={60} color="white" />
            <FaDatabase size={60} color="white" />
          </div>
          <div className="m-auto mt-5 text-white text-[20px] font-extrabold">
            Mobile Development & Database
          </div>
        </div>
        <div className="w-full m-auto h-2/4 sm:h-3/6 flex flex-col justify-around">
          <div>
            <h1 className="text-center text-[#7f84a4] text-[50px] font-extrabold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              Tech Stack
            </h1>
          </div>
          <div className="grid grid-cols-4 p-2 gap-2">
            <span className="p-2 text-white text-center font-extrabold  text-xs bg-[#7FC7D9] rounded-full">
              Flutter
            </span>
            <span className="p-2 text-white text-center font-extrabold  text-xs bg-[#7FC7D9] rounded-full">
              Dart
            </span>
            <span className="p-2 text-white text-center font-extrabold  text-xs bg-[#7FC7D9] rounded-full">
              Android
            </span>
            <span className="p-2 text-white text-center font-extrabold  text-xs bg-[#7FC7D9] rounded-full">
              Firebase
            </span>
            <span className="p-2 text-white text-center font-extrabold  text-xs bg-[#7FC7D9] rounded-full">
              MongoDB
            </span>
            <span className="p-2 text-white text-center font-extrabold  text-xs bg-[#7FC7D9] rounded-full">
              MySQL
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechStack;
