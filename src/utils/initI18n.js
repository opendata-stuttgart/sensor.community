import i18next from 'i18next';
import en from '../../locales/en';
import de from '../../locales/de';
import fr from '../../locales/fr';
import it from '../../locales/it';
import sk from '../../locales/sk';
import ru from '../../locales/ru';
import cz from '../../locales/cz';
import bg from '../../locales/bg';
import pl from '../../locales/pl';
import nl from '../../locales/nl';
import es from '../../locales/es';


function initI18n(lng = 'en') {
  i18next.init({
    lng,
    resources: {
      en,
      de,
      fr,
      it,
      sk,
      cz,
      bg,
      pl,
      nl,
      ru,
      es
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
