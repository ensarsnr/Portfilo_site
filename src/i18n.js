import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  tr: {
    translation: {
      welcome: "Hoş geldiniz!",
    },
  },
  en: {
    translation: {
      welcome: "Welcome!",
    },
  },
};

i18n.use(initReactI18next).init({
  lng: "en",
  resources,
});
