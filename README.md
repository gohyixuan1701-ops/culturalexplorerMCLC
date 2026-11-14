# Malaysian Chinese Literature Center — 马华文学馆

A browser-based Malaysian Chinese literature prototype by **Cultural Explorer**, built for the **SUC × FeedMe Startup Hackathon 2026**. Visitors can explore a 3D exhibition or browse a conventional library catalogue.

## Open the demos

| Experience | Public link | Contents |
| --- | --- | --- |
| Standalone 3D literature gallery | [Open the gallery](https://cultural-explorer-roan.vercel.app/) | 20 exhibits: 10 selected Centre publications and 10 English translations |
| Library catalogue | [Browse the catalogue](https://mahua-literature-library.thngyh.chatgpt.site/) | 38 bibliographic records, filters, author information, and a local bookshelf |
| Gallery bundled with the catalogue | [Enter the bundled gallery](https://mahua-literature-library.thngyh.chatgpt.site/gallery/) | The catalogue's separate 20-exhibit gallery snapshot |

Both deployments are publicly accessible without login. The repository itself is private. A public demo is not evidence of customer adoption, institutional endorsement, or content-rights clearance.

**Source status:** this documentation was reviewed against `main` at `189e0790d3866b469a0591a71ddc87fc99ade5ef` and the catalogue source published from Sites commit `dda10f1916b65587d19fa9ecd6a95c17eff832a9`. The `library/` source is introduced in [PR #1](https://github.com/gohyixuan1701-ops/culturalexplorerMCLC/pull/1); it was not yet merged into `main` at that review. Use a checkout containing `library/` for the catalogue instructions below.

## What is implemented

### Standalone gallery

- A walkable 3D entrance and gallery, built with bundled Three.js r128.
- Mirrored exhibition walls: 10 selected Centre publications on the left and 10 translated works on the right. The source retains 28 Centre records and 10 translation records; only the selected 20 are exhibited.
- Cover photographs, flip-book summaries, publication details, and edition-source links. Flip books do not contain the complete literary texts.
- Chinese and English interfaces; translated works can show their published English editions. Untranslated Centre titles and summaries remain Chinese.
- Search by title, author, supported Pinyin readings, genre, year, translator, publisher, and ISBN; genre-filtered catalogue; minimap and automatic travel.
- A first-visit guide, author-related-work panels, literature history, Centre milestones, and keyboard/mouse/touch controls.
- Portrait-phone single-page reading and scrollable long pages in the latest standalone gallery. See [recorded deployment checks](qr/VNV_REPORT.md) for the exact snapshots tested.

### Library catalogue

- All **38 records**, with cover images, grid/list layouts, search, genre/collection/edition filters, sorting, and pagination.
- A globe language selector offering 中文 and EN, with browser-local language preference.
- **28 author cards**. Seven authors have concise sourced profiles; other cards show clearly labelled catalogue edition years and genres. Source links are available from the cards.
- A browser-local saved bookshelf. These are personal bookmarks, not borrowing records or saved classroom results.
- A manual three-page feature board: collection overview, 3D visit, and English translations. Buttons, position dots, arrow keys, and touch swipes switch pages. The layout calculates a shared height across the pages and languages.
- Larger readable type and touch targets; the full formal wordmark uses bold, seal-coloured M/C/L/C initials; the credit reads `by Cultural Explorer`.
- Book-detail and source dialogs, the bundled gallery, and bilingual FeedMe Hackathon/mock-up terms in the footer.

See [catalogue setup and editing](library/README.md) and [current project status](PROJECT_STATUS.md).

## Run locally

Requirements: GitHub repository access, Python 3 for the local server, and a modern browser. WebGL is required for the galleries. Node.js is used only for the optional logic and financial checks.

```bash
git clone https://github.com/gohyixuan1701-ops/culturalexplorerMCLC.git
cd culturalexplorerMCLC
python3 -m http.server 8765 --bind 127.0.0.1
```

Open:

- [Standalone gallery](http://localhost:8765/) — `index.html` redirects to `cultural explorer.html`.
- [Catalogue](http://localhost:8765/library/dist/) — requires a checkout containing `library/`.
- [Bundled gallery](http://localhost:8765/library/dist/gallery/).

If your checkout does not contain the catalogue yet:

```bash
git fetch origin feat/mclc-library-mockup-20261114
git switch --track origin/feat/mclc-library-mockup-20261114
```

There is no dependency-installation or build step. Serve the catalogue over HTTP because it fetches `books.json`; opening its HTML directly from the filesystem is insufficient. The standalone gallery can also be opened directly with its three companion JavaScript files beside it.

### Checks

From the repository root:

```bash
cd library
node check.cjs
```

In a separate terminal, or after returning to the repository root:

```bash
cd business-plan
node financials.js
```

The catalogue checks exercise application logic with a simulated document. They do not launch a browser or verify rendered dimensions, real touches, performance, or device compatibility. Financial output is a projection, not actual revenue.

## Gallery controls

| Action | Control |
| --- | --- |
| Walk | W / S or up / down arrows |
| Turn | A / D, left / right arrows, or horizontal dragging |
| Move on a touch screen | On-screen arrow buttons |
| Open the highlighted exhibit | Enter, E, or the View button |
| Open a book from the in-gallery catalogue | Select its catalogue entry |
| Travel to an exhibit | Search result, minimap, or scene selection |
| Focus gallery search | / while exploring |
| Turn an open book's pages | Page controls, left / right arrows, or page taps |
| Close a book or overlay | Escape or its close control |
| Reopen the welcome guide | ? button |

The standalone gallery uses a language toggle. The catalogue uses a globe menu; its bundled gallery retains its own gallery controls.

## Source structure

```text
culturalexplorerMCLC/
├── index.html                    # Standalone gallery entry point
├── cultural explorer.html        # Standalone app, data, scene, and interactions
├── three.min.js                  # Bundled Three.js r128
├── covers.js                     # Chinese cover data
├── covers-en.js                  # English cover data
├── library/
│   ├── README.md                 # Catalogue setup, editing, and snapshot notes
│   ├── VNV_REPORT.md             # Catalogue checks and their limits
│   ├── check.cjs                 # Catalogue/feature/language logic checks
│   └── dist/                     # Static catalogue deployment directory
│       ├── index.html
│       ├── app.js
│       ├── styles.css
│       ├── books.json
│       ├── author-profiles.js
│       ├── assets/               # 38 JPEG covers and favicon
│       └── gallery/              # Separate bundled gallery snapshot
├── PROJECT_STATUS.md             # Current feature and verification scope
├── BUSINESS_MODEL.md             # Proposal summary; links to detailed plan
├── EVALUATION.md                 # Current assessment and historical development log
├── JUDGING_CRITERIA.md            # Hackathon rubric
├── business-plan/                # Plan, financial calculator, recorded output/report
└── qr/                           # QR images/generator and gallery deployment history
```

## Editing and deployment

The standalone data is in `cultural explorer.html`: `MCLC_BOOKS`, `LOCAL_PICK`, `TRANSLATED`, `AUTHOR_EN`, `TEXT`, `PINYIN`, `MAHUA`, and `CENTRE`. Cover data is in `window.COVERS` / `window.COVERS_EN`. Comments mention `make-covers.py`, which is not included.

The catalogue uses `library/dist/books.json`, `author-profiles.js`, and JPEG files in `assets/`. The two gallery copies and catalogue data are **not automatically synchronized**. Changing root gallery data does not update the catalogue or its bundled gallery. See [the catalogue README](library/README.md) before updating them.

Pushing to GitHub does not automatically publish either demo:

- **Vercel gallery:** deploy only `index.html`, `cultural explorer.html`, `three.min.js`, `covers.js`, and `covers-en.js` to the existing project behind the public gallery address. Do not publish the entire repository. Compare served-file hashes and record the result in [qr/VNV_REPORT.md](qr/VNV_REPORT.md).
- **Catalogue:** publish `library/dist/` to the existing Site. Its managed hosting identity and source repository are maintained separately from this GitHub repository. Preserve its public audience and address; verify the deployed assets and record checks in [library/VNV_REPORT.md](library/VNV_REPORT.md).
- The current QR images point to the **standalone Vercel gallery**, not the catalogue. Changing a deployment's files does not retarget the QR code.

## Limits and supporting documents

Neither experience implements a class quiz, full-text reading, Malay, accounts, lending, payments, teacher dashboards, or saved class results. The standalone AI question area is a label with no connected service. Its author introductions remain notices rather than biographies; the catalogue has the sourced profiles described above.

The latest catalogue layout and shared-height behavior still require browser geometry and real-device checks. Historical browser reports apply only to their named snapshots. Public HTTP access and matching file hashes do not prove visual correctness.

- [Project status](PROJECT_STATUS.md): current features, source versions, and evidence boundaries.
- [Business model](BUSINESS_MODEL.md) and [detailed plan](business-plan/BUSINESS_PLAN.md): proposed customers, pricing, forecasts, and roadmap.
- [Financial verification](business-plan/VNV_REPORT.md): arithmetic and the original source-check record.
- [Development notes](EVALUATION.md): current gaps and labelled historical rounds.
- [Judging criteria](JUDGING_CRITERIA.md): unchanged hackathon scoring rubric.

Prices, adoption rates, and forecasts are proposals. The repository does not establish completed customer interviews, school pilots, paid users, or formal partnerships.

## Sources and rights

Centre records and Chinese covers are attributed to the Malaysian Chinese Literature Center at Southern University College: [publications](https://www.southern.edu.my/mclc/chuban.php), [about](https://www.southern.edu.my/mclc/about.php), and [history](https://www.southern.edu.my/mclc/history/history.php). Translated editions and author profiles link to their individual sources.

No project licence or written third-party permission record is included. Cover and literary-content rights remain with their respective holders. The footer's mock-up terms do not grant redistribution rights or imply institutional endorsement.
