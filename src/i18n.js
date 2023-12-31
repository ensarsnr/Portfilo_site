import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  tr: {
    translation: {
      welcome: "Hoş geldiniz!",
      about: `Türkçe lorem ipsum olacak burasıda...`,
    },
  },
  en: {
    translation: {
      welcome: "Welcome!",
      about: `Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text
      ever since the 1500s, when an unknown printer took a galley of type
      and scrambled it to make a type specimen book. It has survived not
      only five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged.`,
    },
  },
};

i18n.use(initReactI18next).init({
  lng: "en",
  resources,
});
