import i18next from 'i18next';
import en from '../../locales/en';
import de from '../../locales/de';
import fr from '../../locales/fr';
import sk from '../../locales/sk';
import sk from '../../locales/ru';

function initI18n(lng = 'en') {
  i18next.init({
    lng,
    resources: {
      en,
      de,
      fr,
      sk,
      ru
    },
    fallbackLng: {
      'de-CH': ['de'],
      'default': ['en']
    }
  });
  let lang = 'en';
  return i18next;
}

export default initI18n;
