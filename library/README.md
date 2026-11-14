# Malaysian Chinese Literature Center catalogue — 马华文学馆

A bilingual library-style companion to the 3D literature exhibition, built by **Cultural Explorer** for the **FeedMe Hackathon**.

- [Public catalogue](https://mahua-literature-library.thngyh.chatgpt.site/) — no login required.
- [Bundled 3D gallery](https://mahua-literature-library.thngyh.chatgpt.site/gallery/).
- Runtime snapshot: Sites source `dda10f1916b65587d19fa9ecd6a95c17eff832a9`.

The public URL retains its original slug. Visible English wording uses “Malaysian Chinese literature” and the formal institutional name. The header displays the full name once, with bold, seal-coloured M/C/L/C initials and a smaller `by Cultural Explorer` credit.

## Features

- **38 records** and cover images: 28 Centre publications + 10 published English translations. Edition records can refer to overlapping literary works.
- Title/author/publisher/ISBN search; genre, collection and edition filters; sorting; pagination; grid/list views. Supported romanized author names are searchable; this catalogue does not implement the gallery's Pinyin-character search.
- A globe menu offering 中文 and EN. Language selection is saved in the current browser.
- Book-summary and publication-detail dialogs, source links, and a local saved bookshelf.
- **28 author cards** of equal dimensions. Seven sourced profiles provide brief biographical/award information; other cards display catalogue edition years and genres. Each card has source access.
- Three manual feature pages: complete collection, 3D literary visit, and English translations. Previous/next buttons, dots, arrow keys and touch swipes switch pages. The pages do not auto-advance.
- Shared panel height measured across the three pages in both languages, recalculated after font loading and viewport changes. Book artwork, side lettering and captions use separate layout tracks.
- Larger readable text, bold titles/options, responsive card columns, larger touch targets, and a wrapping mobile header.
- The separate bundled 20-book gallery and bilingual mock-up/T&C dialogs. The bundled gallery is an earlier copy, not a live view of the root gallery.

## Run and check

From the repository root:

```bash
python3 -m http.server 8765 --bind 127.0.0.1
```

Open [the catalogue](http://localhost:8765/library/dist/) or [its bundled gallery](http://localhost:8765/library/dist/gallery/). Alternatively, serve `library/dist/` as the server root.

There is no package installation or build step. Use an HTTP server: the catalogue fetches `books.json` and cannot be reliably opened using `file://`.

For logic checks, with Node.js installed:

```bash
cd library
node check.cjs
```

The check uses Node's built-in modules and a simulated document. It verifies catalogue/feature/language logic, not real browser geometry, touch behavior, or performance. See [VNV_REPORT.md](VNV_REPORT.md).

## Editing

| File | Purpose |
| --- | --- |
| `dist/books.json` | Book records, edition metadata, genres, series, and author-name mappings |
| `dist/author-profiles.js` | Concise author facts, translations, and supporting source URLs |
| `dist/assets/` | 38 JPEG covers plus the favicon; book `image` paths point here |
| `dist/app.js` | Search, filters, books, authors, language menu, bookshelf, feature board, about/T&C dialogs |
| `dist/styles.css` | Typography, seal colour, responsive layout, feature board and shared-height rules |
| `dist/index.html` | Page structure, formal wordmark, globe icon/menu and versioned asset URLs |
| `dist/gallery/` | Separate bundled Three.js gallery and its three companion JavaScript files |

`FEATURE_SLIDES` defines the feature pages. Use genuine available content/links; no live event feed or event-registration service is connected. `AUTHOR_PROFILES` contains sourced facts; the fallback years describe catalogue editions rather than an author's lifespan.

Data was initially extracted from root-gallery snapshot `b5047501577f98450a8995062ce023070522d870`. The root gallery has since changed. There is no automatic data/gallery synchronization or committed cover-generation tool. When updating a record, keep its cover path, translation metadata, identifiers, author names and source links consistent, and check both applications separately.

## Publication and storage

Publish only `library/dist/` to the existing Site. The Site's hosting identity and managed source repository are maintained separately; a GitHub push is not a deployment. Preserve the existing public address and audience, refresh versioned stylesheet/script references after changes, compare served assets with the intended source, and record the result in the verification report.

Saved book IDs and language preference use local storage in the current browser. There are no accounts, cross-device synchronization, loan records, payments or saved class results. Google Fonts may be requested, with local font fallbacks. External references require internet access.

## Limits and attribution

Book details provide summaries and metadata, not complete literary texts. Untranslated Chinese records keep their original titles/summaries. Neither the catalogue nor the current gallery includes a class quiz or connected AI service.

The catalogue is a Hackathon mock-up, not an official library transaction system. Footer terms identify team Cultural Explorer and the FeedMe Hackathon. Cover images and literary materials remain with their respective rights holders; the prototype does not establish institutional endorsement or permission to redistribute them.

The catalogue layout, uniform panel heights and touch interactions still need a recorded real-device/browser acceptance pass. Do not transfer the root gallery's historical browser results to this bundled snapshot. See [project status](../PROJECT_STATUS.md) for the source/version distinction.
