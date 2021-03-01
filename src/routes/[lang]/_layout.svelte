<script context="module">
    const LANGUAGES = ["en", "de", "fr", "it", "sk", "ru", "cz", "bg", "pl", "nl", "es", "ua", "se", "pt"];
    const DEFAULT_LANGUAGE = "en";

    export async function preload(page) {
        const {lang} = page.params;

        if (!lang || LANGUAGES.indexOf(lang) === -1) {
            return this.redirect(302, `/${DEFAULT_LANGUAGE}`);
        }

        return;
    }
</script>

<slot/>
