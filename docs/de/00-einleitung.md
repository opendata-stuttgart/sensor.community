---
title: Einleitung
---

### Bevor wir anfangen

> Sapper ist in der frühen Entwicklungsphase, und einige Dinge können sich ändern, bevor wir die Version 1.0 erreichen. Dieses Dokument ist ein work-in-progress. Wenn Du nicht weiterkommst, wende Dich an Hilfe im [Zwietrachts-Chatroom] (https://svelte.dev/chat).
>
> Siehe die [Migrationsanleitungen](migrieren) für Hilfe beim Upgrade von älteren Versionen.

### Was ist Sapper?

Sapper ist ein Framework zur Erstellung von extrem leistungsfähigen Webanwendungen. Sie sehen gerade eine vor sich! Es gibt zwei grundlegende Konzepte:

* Jede Seite Ihrer App ist eine [Svelte](https://svelte.dev) Komponente
* Sie erstellen Seiten, indem Sie Dateien in das `src/routes` Verzeichnis Ihres Projektes hinzufügen. Diese werden auf dem Server gerendert, so dass der erste Besuch eines Benutzers in Ihrer Anwendung so schnell wie möglich erfolgt, dann übernimmt eine clientseitige Anwendung

Die Erstellung einer Anwendung mit allen modernen Best Practices - Code-Splitting, Offline-Unterstützung, Server-Rendered Views mit Client-seitiger Hydratisierung - ist teuflisch kompliziert. Sapper macht all die langweiligen Sachen für Sie, damit Sie mit dem kreativen Teil weitermachen können.

Sie müssen Svelte nicht kennen, um den Rest dieser Anleitung zu verstehen, aber es wird Ihnen helfen. Kurz gesagt, es ist ein UI-Framework, das Ihre Komponenten zu hochoptimiertem Vanille-JavaScript kompiliert. Lesen Sie den [einleitenden Blog-Post](https://svelte.dev/blog/svelte-3-rethinking-reactivity) und das [Tutorial](https://svelte.dev/tutorial), um mehr zu erfahren.


Übersetzt mit www.DeepL.com/Translator (kostenlose Version)

### Why the name?

In war, the soldiers who build bridges, repair roads, clear minefields and conduct demolitions — all under combat conditions — are known as *sappers*.

For web developers, the stakes are generally lower than for combat engineers. But we face our own hostile environment: underpowered devices, poor network connections, and the complexity inherent in front-end engineering. Sapper, which is short for <b>S</b>velte <b>app</b> mak<b>er</b>, is your courageous and dutiful ally.


### Comparison with Next.js

[Next.js](https://github.com/zeit/next.js) is a React framework from [Zeit](https://zeit.co), and is the inspiration for Sapper. There are a few notable differences, however:

* Sapper is powered by Svelte instead of React, so it's faster and your apps are smaller
* Instead of route masking, we encode route parameters in filenames (see the [routing](docs#Routing) section below)
* As well as *pages*, you can create *server routes* in your `src/routes` directory. This makes it very easy to, for example, add a JSON API such as the one powering this very page (try visiting [/docs.json](/docs.json))
* Links are just `<a>` elements, rather than framework-specific `<Link>` components. That means, for example, that [this link right here](/), despite being inside a blob of markdown, works with the router as you'd expect


### Getting started

The easiest way to start building a Sapper app is to clone the [sapper-template](https://github.com/sveltejs/sapper-template) repo with [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit "sveltejs/sapper-template#rollup" my-app
# or: npx degit "sveltejs/sapper-template#webpack" my-app
cd my-app
npm install
npm run dev
```

This will scaffold a new project in the `my-app` directory, install its dependencies, and start a server on [localhost:3000](http://localhost:3000). Try editing the files to get a feel for how everything works – you may not need to bother reading the rest of this guide!
