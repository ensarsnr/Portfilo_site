import React from "react";
import { useTranslation } from "react-i18next";
import italyImg from "../assets/images/italy/img13.jpg"
function GallerySelect() {

  const { t, i18n } = useTranslation();

  return (
    <div className=" bg-[#7077A1] mt-10 sm:mt-0 sm:p-10 p-0 grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
      <a
        href="#"
        className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
      >
        <img
          src={italyImg}
          loading="lazy"
          alt="Photo by Minh Pham"
          className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

        <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
          {t("countries.IT")}
        </span>
      </a>

      <a
        href="#"
        className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
      >
        <img
          src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=1000"
          loading="lazy"
          alt="Photo by Magicle"
          className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

        <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
          {t("countries.RS")}
        </span>
      </a>

      <a
        href="#"
        className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
      >
        <img
          src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=1000"
          loading="lazy"
          alt="Photo by Martin Sanchez"
          className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

        <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
          {t("countries.ME")}
        </span>
      </a>

      <a
        href="#"
        className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
      >
        <img
          src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600"
          loading="lazy"
          alt="Photo by Lorenzo Herrera"
          className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

        <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
          {t("countries.BA")}
        </span>
      </a>
    </div>
  );
}

export default GallerySelect;
