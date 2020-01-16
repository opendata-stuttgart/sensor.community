# sensor.community website

:sparkles: new shiny website for dust and noise measuring project :point_right: sensor.community

## How to install
### Prerequisites

* [Node.js (v11+)](https://nodejs.org/)
* [Yarn (optional)](yarnpkg.com)

## Get started

inside the folder install the dependencies...

```bash
npm install
```

or with yarn

```bash
yarn install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev or sapper dev
```

alternative use yarn
```bash
yarn install
yarn run dev or sapper dev
```

Navigate to [localhost:3000](http://localhost:3000). 
You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.

### Getting started with Svelte & Sapper
Website is based on [Svelte 3](https://svelte.dev) and [Sapper](https://sapper.svelte.dev).
Please consider reading the documentation.

## Translation
1. Create locale file

```bash    
npx i18next-svelte-scanner -s src -o ./locales/<language>.json
```

```bash
npx i18next-svelte-scanner -s src -o ./locales/fr.json
```
2. Add it to the i18n.js
```javascript
register('fr', () => import('../locales/fr.json'));
```

## Bugs and feedback
The website is in early development, and may have the odd rough edge here and there. 

## Deployment
### TODO

Happy coding :tadaraised_hands: