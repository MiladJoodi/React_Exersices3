import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./en"
import fa from "./fa"
import tr from "./tr"

const resources = {
  en: {
    translation: en
  },
  fr: {
    translation: fa
  },
  tr: {
    translation: tr
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",

    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;