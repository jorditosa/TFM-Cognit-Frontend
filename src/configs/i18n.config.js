import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ca from '../locales/ca/translation.json';
import es from '../locales/es/translation.json';

const resources = {
  es: {
    translation: es,
  },
  ca: {
    translation: ca,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'es',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;