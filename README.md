# Cultural Explorer — 马华文学馆

Cultural Explorer is a browser-based 3D gallery introducing Malaysian Chinese literature through the publications of the Malaysian Chinese Literature Centre (马华文学馆). The repository is named `feedme`.

Students and teachers can walk through a virtual exhibition, discover books, open animated book previews, and play a two-team classroom quiz.

## Current features

- A 3D entrance plaza and exhibition corridor built with Three.js.
- 28 books across three series: MCLC Publications (6), Creative Writing Series (20), and MCLC Academic Series (2).
- Embedded cover photographs, with generated covers as a fallback.
- Animated flip-book previews containing titles, summaries, authors, publication years, genres, and publishers. These previews do not contain the full books.
- A searchable catalogue with genre filters, plus a clickable minimap and automatic travel to exhibits.
- An introduction to the Centre and its history, accessible from the end-wall signboard.
- Chinese and English interface options. Book titles remain in Chinese; content translation is incomplete.
- Clickable author names with links to their other books in the collection. Biographies are placeholders.
- A red-team versus blue-team quiz with 6 or 10 questions generated from book metadata.
- A first-visit guide, keyboard controls, mouse/touch interaction, and responsive interface layouts.

## Run locally

### Requirements

- A modern browser with WebGL enabled.
- Internet access to load Three.js r128 from cdnjs.
- Git to clone the repository, or download its ZIP from GitHub.
- Python 3 if using the local server below.

The repository is private, so cloning requires a GitHub account with access.

```bash
git clone https://github.com/gohyixuan1701-ops/feedme.git
cd feedme
python3 -m http.server 8000 --bind 127.0.0.1
```

Open [Cultural Explorer locally](http://localhost:8000/cultural%20explorer.html).

There is no package installation or build step. You can also open `cultural explorer.html` directly in a browser. Keep `covers.js` beside it so the cover photographs can load. Internet access is still required for Three.js.

## Controls

| Action | Control |
| --- | --- |
| Walk forward / backward | `W` / `S` or up / down arrow keys |
| Turn left / right | `A` / `D`, left / right arrow keys, or drag horizontally on the scene |
| Move or turn on a touch screen | On-screen arrow buttons |
| Open the nearby highlighted exhibit | `Enter`, `E`, or the view button |
| Travel to an exhibit | Select a book in search, the catalogue, the minimap, or the 3D scene |
| Focus search | `/` while exploring |
| Turn book pages | Left / right arrow keys or the book's page controls |
| Close an active book or overlay | `Esc` or its close button |
| Reopen the welcome guide | `?` button |

Search supports titles, authors, years, genres, and series. It normalizes case, full-width characters, spaces, and punctuation.

## Repository contents

```text
feedme/
├── cultural explorer.html  # App markup, styles, book data, scene, and interaction logic
├── covers.js               # Embedded cover photographs in window.COVERS
├── BUSINESS_MODEL.md       # Proposed customers, pricing, revenue, and validation plan
├── EVALUATION.md           # Development notes, reported checks, gaps, and next steps
└── README.md               # Project overview and usage guide
```

The app uses HTML, CSS, vanilla JavaScript, Three.js r128, and the Canvas API. No backend, account system, or database is included. Language preference and welcome-guide completion are stored in browser local storage. Quiz scores are held in memory and are not saved after reload.

## Editing content

- Edit `ITEMS` in `cultural explorer.html` to update books and their metadata. Exhibit positions are calculated from that list.
- Edit `TYPES`, `GENRE_EN`, and `TEXT` to update series information, translated genres, and interface labels.
- Update the Centre information in the same HTML file when its history or facilities change.
- Cover photographs are stored as image data URLs in `covers.js`, keyed by each book's `cover` filename. Source comments refer to a generator named `make-covers.py`, but that script is not included in this repository.

## Prototype limits

- English summaries and author biographies contain placeholder text. English Centre content is incomplete, and Malay is not implemented.
- The AI chat area is a future-feature label; no AI service is connected.
- Quizzes test book metadata, rather than comprehension of the literary texts.
- Lesson packs, printable worksheets, teacher dashboards, saved class results, subscriptions, and payments are proposed features rather than implemented functionality.
- Full offline use requires bundling Three.js locally and changing its script reference.
- No automated tests or CI configuration are included. `EVALUATION.md` records earlier browser checks; those results should be rechecked on target devices.
- Some evaluation notes predate the cover-photo implementation. Use the current source as the reference for implemented behavior.

## Documentation and direction

See [EVALUATION.md](EVALUATION.md) for development notes and [BUSINESS_MODEL.md](BUSINESS_MODEL.md) for the proposed school-licensing and sponsored-exhibition model. Pricing and adoption targets are proposals. The business document also notes that its cited market figures need confirmation against the original sources before external use.

Suggested priorities are replacing placeholder content, securing permission for literary excerpts, adding classroom lesson materials, testing real classroom devices, and publishing a hosted demo. A conventional static-site entry point would be `index.html`; the current entry point is `cultural explorer.html`.

## Content sources and rights

Book metadata and cover photographs are attributed in the code to the Malaysian Chinese Literature Centre at Southern University College:

- [Publications](https://www.southern.edu.my/mclc/chuban.php)
- [About the Centre](https://www.southern.edu.my/mclc/about.php)
- [Centre history](https://www.southern.edu.my/mclc/history/history.php)

The repository does not include a licence file or documentation of permission to redistribute third-party covers or literary content. Confirm those permissions before broader publication or reuse.
