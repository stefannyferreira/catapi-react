import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import headerPt from "./components/Header/locales/pt-BR.json";
import headerEn from "./components/Header/locales/en.json";
import headerEs from "./components/Header/locales/es.json";

import catCardPt from "./components/CatCard/locales/pt-BR.json";
import catCardEn from "./components/CatCard/locales/en.json";
import catCardEs from "./components/CatCard/locales/es.json";

import controlsBarPt from "./components/ControlsBar/locales/pt-BR.json";
import controlsBarEn from "./components/ControlsBar/locales/en.json";
import controlsBarEs from "./components/ControlsBar/locales/es.json";

import errorSnackbarPt from "./components/ErrorSnackbar/locales/pt-BR.json";
import errorSnackbarEn from "./components/ErrorSnackbar/locales/en.json";
import errorSnackbarEs from "./components/ErrorSnackbar/locales/es.json";

import favoritesModalPt from "./components/FavoritesModal/locales/pt-BR.json";
import favoritesModalEn from "./components/FavoritesModal/locales/en.json";
import favoritesModalEs from "./components/FavoritesModal/locales/es.json";

import favoritesPanelPt from "./components/FavoritesPanel/locales/pt-BR.json";
import favoritesPanelEn from "./components/FavoritesPanel/locales/en.json";
import favoritesPanelEs from "./components/FavoritesPanel/locales/es.json";

i18n.use(initReactI18next).init({
  resources: {
    "pt-BR": {
      Header: headerPt,
      CatCard: catCardPt,
      ControlsBar: controlsBarPt,
      ErrorSnackbar: errorSnackbarPt,
      FavoritesModal: favoritesModalPt,
      FavoritesPanel: favoritesPanelPt,
    },
    en: {
      Header: headerEn,
      CatCard: catCardEn,
      ControlsBar: controlsBarEn,
      ErrorSnackbar: errorSnackbarEn,
      FavoritesModal: favoritesModalEn,
      FavoritesPanel: favoritesPanelEn,
    },
    es: {
      Header: headerEs,
      CatCard: catCardEs,
      ControlsBar: controlsBarEs,
      ErrorSnackbar: errorSnackbarEs,
      FavoritesModal: favoritesModalEs,
      FavoritesPanel: favoritesPanelEs,
    },
  },
  lng: "pt-BR",
  fallbackLng: "pt-BR",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
