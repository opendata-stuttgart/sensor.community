import {register, init} from 'svelte-i18n'

// asynchronous loading https://github.com/kaisermann/svelte-i18n/wiki#22-asynchronous
register('en', () => import('../../locales/en'));
register('de', () => import('../../locales/de'));
register('fr', () => import('../../locales/fr'));

init({
    fallbackLocale: 'en',
    // initialLocale: {
    //     navigator: true,
    // },
    initialLocale: 'en'
});
// locale.set('en');
// [lang].initialLocale = 'en';

