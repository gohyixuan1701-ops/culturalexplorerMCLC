# MCLC · 马华文学馆

A working, bilingual catalogue mock-up for Cultural Explorer's 3D Malaysian Chinese literature gallery. Built with plain HTML, CSS, and JavaScript.

## Features

- All 38 book records from the original project: 28 Centre publications and 10 English translations.
- Genre categories, collection and edition filters, title/author/publisher/ISBN search, sorting, pagination, and grid/list views.
- Accessible book-detail dialogs, author directory, and browser-local saved bookshelf.
- Original 20-book Three.js gallery at `/gallery/`, with a return link to the catalogue.
- English/Chinese interface. Untranslated Chinese titles and summaries retain their source language.

## Run locally

From the repository root:

```bash
cd library/dist
python3 -m http.server 8765 --bind 127.0.0.1
```

Open http://localhost:8765/ to browse MCLC, and select **Enter 3D gallery** to open the bundled gallery. Static hosting serves `library/dist/`. No package installation or build is required.

To run the catalogue logic checks, use Node.js from the repository root:

```bash
cd library
node check.cjs
```

The logic checks do not verify browser layout or real-device performance.

## Published snapshot

- Private mock-up: https://mahua-literature-library.thngyh.chatgpt.site
- Published source commit: `e64f3ebee5f3e85177b1ae099a6378ed6693b6e5` in the Sites source repository.
- The app files in `dist/` match that published snapshot. This directory is self-contained and does not change the existing repository gallery.


## Content

`dist/books.json` was extracted from the Cultural Explorer repository reviewed at main commit `b5047501577f98450a8995062ce023070522d870`. Covers are extracted from its bundled cover data. The 3D app is copied from that project with a catalogue return link. Source: https://github.com/gohyixuan1701-ops/culturalexplorerMCLC

Catalogue categories are inspired by the Malaysian Chinese Literature Digital Library: https://mcldl.com/Products/

This is a demonstration, with no lending, account system, full-text reading, or backend database. Book covers remain the property of their rights holders. Bookshelf and language preferences are stored only in the visitor's browser. Font loading uses Google Fonts with local fallbacks.

## Identity and demonstration notice

Display name: 马华文学馆 / MCLC (Malaysian Chinese Literature Center). Built by team Cultural Explorer for the FeedMe Hackathon. The existing footer includes a bilingual T&C and mock-up notice. Author cards have a fixed height, enlarged names, and concise sourced facts; other author details are derived from catalogue edition years and genres. Profile citations are available through each card’s Sources control.
