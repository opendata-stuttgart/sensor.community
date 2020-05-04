import {register, init} from 'svelte-i18n'

// asynchronous loading https://github.com/kaisermann/svelte-i18n/wiki#22-asynchronous
register('en', () => import('../../locales/en'));
register('de', () => import('../../locales/de'));
register('fr', () => import('../../locales/fr'));
register('sk', () => import('../../locales/sk'));
register('ru', () => import('../../locales/ru'));

init({
    fallbackLocale: 'en',
    // initialLocale: {
    //     navigator: true,
    // },
    initialLocale: 'en'
});
// locale.set('en');
// [lang].initialLocale = 'en';

