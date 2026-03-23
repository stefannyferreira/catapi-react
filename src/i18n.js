import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import catCardPt from "./components/CatCard/locales/pt-BR.json";
import catCardEn from "./components/CatCard/locales/en.json";
import catCardEs from "./components/CatCard/locales/es.json";

i18n.use(initReactI18next).init({
  resources: {
    "pt-BR": {
      CatCard: catCardPt,
    },
    en: {
      CatCard: catCardEn,
    },
    es: {
      CatCard: catCardEs,
    },
  },
  lng: "pt-BR",
  fallbackLng: "pt-BR",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
