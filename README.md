# Malaysian Chinese Literature Center — 马华文学馆

A browser-based Malaysian Chinese literature prototype by **Cultural Explorer**, built for the **SUC × FeedMe Startup Hackathon 2026**. Visitors can explore a 3D exhibition or browse a conventional library catalogue.

## Open the demos

| Experience | Public link | Contents |
| --- | --- | --- |
| Standalone 3D literature gallery | [Open the gallery](https://cultural-explorer-roan.vercel.app/) | 20 exhibits: 10 selected Centre publications and 10 English translations |
| Library catalogue | [Browse the catalogue](https://mahua-literature-library.thngyh.chatgpt.site/) | 38 bibliographic records, filters, author information, and a local bookshelf |

Both deployments are publicly accessible without login. The repository itself is private. A public demo is not evidence of customer adoption, institutional endorsement, or content-rights clearance.

All catalogue “3D gallery” buttons open the standalone Vercel gallery above. The former catalogue `/gallery/` address redirects there, so visitors use one current gallery.

**Source status:** the catalogue and documentation are included in `main` following [PR #3](https://github.com/gohyixuan1701-ops/culturalexplorerMCLC/pull/3). This link update builds on `main` at `3b685cc48f2c4a289a2e8379f60fb5bfbeb2ae07`; the standalone gallery runtime is unchanged.

## Who it is for

**People engaged in Chinese studies and Malaysian Chinese literature research, including Chinese Studies undergraduates, lecturers, postgraduate students, scholars, and anyone who needs relevant literary documents and references for research.**

服务对象为中文学习与研究群体，包括中文系学生、讲师、研究生、学者，以及需要查找马华文学文献资料的人。

## Membership direction

| Membership | Access |
| --- | --- |
| Free | Free-level content only |
| Paid | All content offered on the platform |

The exact free collection, price and billing terms remain to be defined. This is the planned business model: current demos are public prototypes without accounts, payment or enforced membership permissions. They currently provide summaries and metadata, not full literary texts.

See [BUSINESS_MODEL.md](BUSINESS_MODEL.md), the [detailed plan](business-plan/BUSINESS_PLAN.md), and [survey evidence and limits](business-plan/SURVEY_EVIDENCE.md).

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
- A browser-local saved bookshelf. These are personal bookmarks, not borrowing records or cross-device research records.
- A manual three-page feature board: collection overview, 3D visit, and English translations. Buttons, position dots, arrow keys, and touch swipes switch pages. The layout calculates a shared height across the pages and languages.
- Larger readable type and touch targets; the full formal wordmark uses bold, seal-coloured M/C/L/C initials; the credit reads `by Cultural Explorer`.
- Book-detail and source dialogs, direct links to the standalone gallery, and bilingual FeedMe Hackathon/mock-up terms in the footer.

See [catalogue setup and editing](library/README.md) and [current project status](PROJECT_STATUS.md).

## Run locally

Requirements: GitHub repository access, Python 3 for the local server, and a modern browser. WebGL is required for the gallery. Node.js is used only for the optional logic and financial checks.

```bash
git clone https://github.com/gohyixuan1701-ops/culturalexplorerMCLC.git
cd culturalexplorerMCLC
python3 -m http.server 8765 --bind 127.0.0.1
```

Open:

- [Standalone gallery](http://localhost:8765/) — `index.html` redirects to `cultural explorer.html`.
- [Catalogue](http://localhost:8765/library/dist/).

The catalogue's gallery links open the public standalone gallery and require internet access. To work on the gallery locally, use the root address above.

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

The standalone gallery uses a language toggle. The catalogue uses a globe menu and links directly to that gallery.

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
│       └── gallery/              # Legacy address redirects to the standalone gallery
├── PROJECT_STATUS.md             # Current feature and verification scope
├── BUSINESS_MODEL.md             # Proposal summary; links to detailed plan
├── EVALUATION.md                 # Current assessment and historical development log
├── JUDGING_CRITERIA.md            # Hackathon rubric
├── business-plan/                # Plan, financial calculator, recorded output/report
└── qr/                           # QR images/generator and gallery deployment history
```

## Editing and deployment

The standalone data is in `cultural explorer.html`: `MCLC_BOOKS`, `LOCAL_PICK`, `TRANSLATED`, `AUTHOR_EN`, `TEXT`, `PINYIN`, `MAHUA`, and `CENTRE`. Cover data is in `window.COVERS` / `window.COVERS_EN`. Comments mention `make-covers.py`, which is not included.

The catalogue uses `library/dist/books.json`, `author-profiles.js`, and JPEG files in `assets/`. Its gallery buttons link directly to `https://cultural-explorer-roan.vercel.app/`; `library/dist/gallery/index.html` redirects old links to the same destination. The older companion JavaScript files in that directory are retained but no longer loaded. Catalogue book data is **not automatically synchronized** with root gallery data. See [the catalogue README](library/README.md) before updating records.

Pushing to GitHub does not automatically publish either demo:

- **Vercel gallery:** deploy only `index.html`, `cultural explorer.html`, `three.min.js`, `covers.js`, and `covers-en.js` to the existing project behind the public gallery address. Do not publish the entire repository. Compare served-file hashes and record the result in [qr/VNV_REPORT.md](qr/VNV_REPORT.md).
- **Catalogue:** publish `library/dist/` to the existing Site. Its managed hosting identity and source repository are maintained separately from this GitHub repository. Preserve its public audience and address; verify the deployed assets and record checks in [library/VNV_REPORT.md](library/VNV_REPORT.md).
- The current QR images point to the **standalone Vercel gallery**, not the catalogue. Changing a deployment's files does not retarget the QR code.

## Limits and supporting documents

Neither experience implements membership accounts, free/paid access enforcement, payments, full-text reading, citation export, lending, Malay or a class quiz. The standalone AI question area is a label with no connected service. Its author introductions remain notices rather than biographies; the catalogue has the sourced profiles described above.

The latest catalogue layout and shared-height behavior still require browser geometry and real-device checks. Historical browser reports apply only to their named snapshots. Public HTTP access and matching file hashes do not prove visual correctness.

- [Project status](PROJECT_STATUS.md): current features, source versions, and evidence boundaries.
- [Business model](BUSINESS_MODEL.md) and [detailed plan](business-plan/BUSINESS_PLAN.md): proposed customers, pricing, forecasts, and roadmap.
- [Financial verification](business-plan/VNV_REPORT.md): arithmetic and the original source-check record.
- [Development notes](EVALUATION.md): current gaps and labelled historical rounds.
- [Judging criteria](JUDGING_CRITERIA.md): unchanged hackathon scoring rubric.

Prices, adoption rates, and forecasts are proposals. The repository does not establish a verified research-user population, completed research-use pilots, paid members, or formal partnerships. Existing survey-chart feedback is documented separately from actual paid adoption.

## Sources and rights

Centre records and Chinese covers are attributed to the Malaysian Chinese Literature Center at Southern University College: [publications](https://www.southern.edu.my/mclc/chuban.php), [about](https://www.southern.edu.my/mclc/about.php), and [history](https://www.southern.edu.my/mclc/history/history.php). Translated editions and author profiles link to their individual sources.

No project licence or written third-party permission record is included. Cover and literary-content rights remain with their respective holders. The footer's mock-up terms do not grant redistribution rights or imply institutional endorsement.
