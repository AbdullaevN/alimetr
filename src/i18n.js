// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";

import translationRU from "./locales/ru.json";
import translationKY from "./locales/ky.json";

// i18n.use(initReactI18next).init({
//   resources: {
//     ru: { translation: translationRU },
//     ky: { translation: translationKY },
//   },
//   lng: "ru", // Язык по умолчанию
//   fallbackLng: "ru",
//   interpolation: { escapeValue: false },
// });

// export default i18n;
import i18n from "i18next";
import { initReactI18next } from "react-i18next";


 

const resources = {

  ru: { translation: translationRU },
  ky: { translation: translationKY },
  // en: {
  //   translation: {
  //     "welcome": "Welcome",
  //     "about": "About us",
  //     "contact": "Contact",
  //   }
  // },
  // ru: {
  //   translation: {
  //     "welcome": "Добро пожаловать",
  //     "about": "О нас",
  //     "contact": "Контакты",
  //     "1":"Онлайн-калькулятор",
  //     "2":"Генератор заявлений",
  //     "3":"Полезная информация"
  //   }
  //  },


  //   kg: {
  //     translation: {
  //       "Онлайн-калькулятор":"Онлайн-калькулятор",
  //       "2":"Билдирүү генератору",
  //       "3":"Пайдалуу маалымат"

  //   }
  // }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem("language") || "ru", // Сохраняем язык
    fallbackLng: "ru",
    interpolation: { escapeValue: false },
  });

export default i18n;
