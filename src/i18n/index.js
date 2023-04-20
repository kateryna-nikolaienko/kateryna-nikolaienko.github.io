import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
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

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'English',
    fallbackLng: appLocales,
    react: {
      useSuspense: true,
    },
  });

export default i18n;
