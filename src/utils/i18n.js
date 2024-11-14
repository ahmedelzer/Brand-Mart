import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

const resources = {
  en: {
    translation: {
      "Welcome to React": "Welcome to React and react-i18next",
    },
  },
  fr: {
    translation: {
      "Welcome to React": "Bienvenue à React et react-i18next",
    },
  },
  ar: {
    translation: {
      "Welcome to React": "مرحبا",
    },
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    resources,
    detection: {
      order: ["htmlTag", "cookie", "localStorage", "sessionStorage"],
      caches: ["cookie"],
    },
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    backend: {},
    fallbackLng: "en",
  });

export default i18n;
