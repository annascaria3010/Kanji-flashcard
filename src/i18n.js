import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        navbar: {
          home: "Home",
          flashCards: "Flash Cards",
          quiz: "Quiz",
          settings: "Settings"
        },
        header: {
          title: "Let's Go!",
          subtitle: "KANJI"
        }
      }
    },
    ja: {
      translation: {
        navbar: {
          home: "ホーム",
          flashCards: "フラッシュカード",
          quiz: "クイズ",
          settings: "設定"
        },
        header: {
          title: "行こう！",
          subtitle: "漢字"
        }
      }
    }
  },
  lng: "en", // Default language
  fallbackLng: "en", // Fallback language if translation is missing
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
