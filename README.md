# Cultural Explorer — 马华文学馆

Cultural Explorer is a browser-based 3D exhibition of Malaysian Chinese literature. Visitors can walk through a virtual gallery, discover books and their English editions, and explore the history of Mahua literature.

Built for the **SUC × FeedMe Startup Hackathon 2026**. The repository is named `feedme`.

## Explore the gallery

The current exhibition displays **20 books across two walls**:

| Wall | Collection |
| --- | --- |
| Left | 10 selected publications from the Malaysian Chinese Literature Centre |
| Right | 10 works of Malaysian Chinese literature published in English translation |

The source retains the Centre's larger publication list; `LOCAL_PICK` selects the 10 displayed on the left wall.

### Features

- A walkable 3D entrance and gallery with lighting, lanterns, display shelves, and book-cover photographs.
- Animated flip-book previews with summaries and publication details.
- English-edition information including translators, publishers, publication years, ISBNs, and source links.
- Chinese and English interface options. Translated works show their English titles, summaries, and covers in English mode.
- Search by Chinese or English title, author, Hanyu Pinyin, genre, year, series, translator, publisher, or ISBN.
- A catalogue with genre filters for opening books directly, plus a clickable minimap and automatic travel through the gallery.
- Author panels listing other displayed works by the same author.
- A bilingual introduction to Mahua literature from 1919 onward, followed by the Centre's story and milestones.
- A first-visit guide, keyboard controls, mouse and touch interaction, and responsive layouts.

The flip books present information about each work; they do not contain the full literary texts.

## Public demo

[Open Cultural Explorer](https://cultural-explorer-roan.vercel.app/)

The hosted demo is a deployment snapshot and may lag behind `main`. Use the local instructions below to inspect the repository version. QR images for the public address are in `qr/`.

## Run locally

You need a modern browser with WebGL enabled. GitHub access is required to clone this private repository. Python 3 is needed only for the local-server command.

```bash
git clone https://github.com/gohyixuan1701-ops/feedme.git
cd feedme
python3 -m http.server 8765 --bind 127.0.0.1
```

Open [http://localhost:8765/](http://localhost:8765/). The entry page redirects to `cultural explorer.html`.

There is no package installation or build step. You can also open the app HTML file directly. Keep `three.min.js`, `covers.js`, and `covers-en.js` beside it.

Three.js r128 is bundled locally, with cdnjs as a fallback if the local copy is missing. With all app files downloaded, the gallery does not require the CDN. External source links still require internet access.

## Controls

| Action | Control |
| --- | --- |
| Walk forward / backward | `W` / `S` or up / down arrow keys |
| Turn left / right | `A` / `D`, left / right arrow keys, or horizontal dragging |
| Move or turn on a touch screen | On-screen arrow buttons |
| Open the nearby highlighted exhibit | `Enter`, `E`, or the view button |
| Open a book directly | Select it in the catalogue |
| Travel to an exhibit | Select it in search, the minimap, or the scene |
| Focus search | `/` while exploring |
| Turn book pages | Left / right arrow keys, page buttons, or tapping a page |
| Close the active book or overlay | `Esc` or its close control |
| Reopen the welcome guide | `?` button |

Search normalizes case, full-width characters, spaces, and punctuation. Pinyin matching uses a character map maintained in the source.

## Project structure

```text
feedme/
├── index.html                   # Hosting entry point
├── cultural explorer.html       # App, styles, book data, history, and interactions
├── three.min.js                 # Bundled Three.js r128
├── covers.js                    # Chinese-edition cover photographs
├── covers-en.js                 # English-edition cover photographs
├── README.md                    # Project overview and usage
├── JUDGING_CRITERIA.md           # Hackathon assessment rubric
├── BUSINESS_MODEL.md             # Earlier business-model notes
├── EVALUATION.md                 # Earlier development and evaluation notes
├── business-plan/
│   ├── BUSINESS_PLAN.md          # Detailed business plan
│   ├── financials.js             # Financial assumptions and calculations
│   ├── financials_output.txt     # Recorded calculation output
│   └── VNV_REPORT.md             # Business-plan verification report
└── qr/
    ├── make_qr.py                # QR image generator
    ├── cultural-explorer-qr.png
    ├── cultural-explorer-qr-poster.png
    └── VNV_REPORT.md             # Deployment and browser-check report
```

The app uses HTML, CSS, vanilla JavaScript, Three.js, and the Canvas API. Language preference and welcome-guide completion are stored in browser local storage. No backend, account system, or database is included.

## Editing the exhibition

The app data and rendering logic live in `cultural explorer.html`:

| Data or setting | Purpose |
| --- | --- |
| `MCLC_BOOKS` | Centre publications and Chinese summaries |
| `LOCAL_PICK` | Selects the 10 Centre publications displayed |
| `TRANSLATED` | Translated works and their English-edition metadata |
| `ITEMS` | Exhibition list generated from the two collections |
| `AUTHOR_EN` | English names used when available |
| `TYPES`, `GENRE_EN`, `TEXT` | Series information, translated genres, and interface labels |
| `PINYIN` | Character readings used by Pinyin search |
| `MAHUA`, `CENTRE` | Literature history and Centre information |

Cover images are embedded as data URLs in `window.COVERS` and `window.COVERS_EN`. Match their keys to each book's `cover` or `en.cover` field.

Source comments refer to `make-covers.py`, but that generator is not included in this repository.

## Current limits

- The 10 selected Centre publications retain Chinese titles and summaries when English translations are unavailable.
- Author biographies are not written yet; panels show an introduction-coming-soon notice and related works.
- The AI question area is a future-feature label with no connected service.
- Malay, full-text reading, lesson packs, teacher dashboards, subscriptions, and payments are not implemented.
- Phone-sized browser checks are documented, but real-device and classroom validation remain necessary.
- Verification reports refer to particular snapshots. Their results should be checked against the version being demonstrated.

## Supporting documents

- [Business plan](business-plan/BUSINESS_PLAN.md): target customers, proposed pricing, market analysis, costs, and roadmap.
- [Financial calculations](business-plan/financials.js): run `node financials.js` from `business-plan/` using Node.js to reproduce the projections.
- [Business-plan verification](business-plan/VNV_REPORT.md): arithmetic checks, source checks, and unresolved assumptions.
- [Demo verification](qr/VNV_REPORT.md): recorded deployment checks and testing limits.
- [Judging criteria](JUDGING_CRITERIA.md): hackathon scoring rubric.

Pricing, adoption rates, and financial projections are proposals rather than measured customer results. Earlier root-level business and evaluation documents describe previous versions.

## Sources and rights

Centre publications and Chinese cover photographs are attributed to the Malaysian Chinese Literature Centre at Southern University College:

- [Publications](https://www.southern.edu.my/mclc/chuban.php)
- [About the Centre](https://www.southern.edu.my/mclc/about.php)
- [Centre history](https://www.southern.edu.my/mclc/history/history.php)

Translated works include publisher or edition-source links in their records. The literature-history section includes its own further-reading sources.

No project licence file or written permission record for third-party covers and literary content is included. Confirm usage rights before broader redistribution.
