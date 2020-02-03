import i18next from 'i18next';
import en from '../../locales/en';
import de from '../../locales/de';

function initI18n(lng = 'en') {
  i18next.init({
    lng,
    resources: {
      en,
      de
    },
    fallbackLng: {
      'de-CH': ['de'],
      'default': ['en']
    }
  });

  return i18next;
}

export default initI18n;