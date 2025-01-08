import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: require('./locales/en.json')
    },
    ja: {
      translation: require('./locales/ja.json')
    }
  },
  lng: 'en', // Default language
  fallbackLng: 'en', // Fallback language if a translation is missing
  interpolation: {
    escapeValue: false // React already protects against XSS
  }
});

export default i18n;
