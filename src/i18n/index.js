import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import English from './en';
import Ukrainian from './ua';
import Italian from './ita';
import Chinese from './chi';

export const resources = {
  Ukrainian: { translation: Ukrainian },
  English: { translation: English },
  Italian: { translation: Italian },
  Chinese: { translation: Chinese },
};

export const appLocales = Object.keys(resources);

const options = {
  order: ['localStorage'],
  lookupLocalStorage: 'i18nLng',
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'English', 
    react: {
      useSuspense: true,
    },
    detection: options,
  });

export default i18n;
