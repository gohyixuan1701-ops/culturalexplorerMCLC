# Current project status

This status separates the standalone gallery from the catalogue and preserves the scope of earlier reports.

## Reviewed sources

- Standalone gallery and existing documents: `main` at `189e0790d3866b469a0591a71ddc87fc99ade5ef`.
- Catalogue runtime: standalone-routing Sites source `46ddaa86e15644bef2452c0b1365a787e0e2d0f9`. The initial catalogue was introduced into GitHub through [PR #1](https://github.com/gohyixuan1701-ops/culturalexplorerMCLC/pull/1).
- The catalogue and documentation were merged through [PR #3](https://github.com/gohyixuan1701-ops/culturalexplorerMCLC/pull/3), at `3b685cc48f2c4a289a2e8379f60fb5bfbeb2ae07`.
- Subsequent routing update: all catalogue gallery buttons open the standalone Vercel gallery. The legacy `/gallery/` address redirects there; the embedded snapshot is no longer served.

The standalone UI currently says “The Digital Malaysian Chinese Literature Centre”. The catalogue wordmark is “Malaysian Chinese Literature Center”, with bold, seal-coloured M/C/L/C initials and `by Cultural Explorer`. These are separate runtime snapshots.

## Audience and membership direction

For Chinese studies and Malaysian Chinese literature research: undergraduates, lecturers, postgraduates, scholars and other users who need relevant documents/references. Free members may use only free-level content; paid members may use all content offered on the platform. The exact free selection, price and billing terms remain undecided.

This describes the proposed service. Both current demos remain public discovery prototypes, with no account, payment, membership enforcement or full-text delivery. See [BUSINESS_MODEL.md](BUSINESS_MODEL.md) and [survey evidence](business-plan/SURVEY_EVIDENCE.md).

## Implemented behavior

| Capability | Standalone gallery | Catalogue |
| --- | --- | --- |
| Public entry | [Vercel](https://cultural-explorer-roan.vercel.app/) | [Catalogue](https://mahua-literature-library.thngyh.chatgpt.site/); gallery buttons open Vercel |
| Displayed collection | 20 exhibits: 10 selected Centre records + 10 translations | 38 catalogue records: 28 Centre records + 10 translations |
| Wall arrangement | Mirrored positions on both walls | Uses the standalone gallery |
| Discovery | In-gallery catalogue, search including supported Pinyin, minimap, auto-travel | Search, genre/collection/edition filters, sorting, pagination, grid/list views |
| Language control | Chinese/English toggle | Globe menu with Chinese/EN options; the linked gallery has its own toggle |
| Book content | Cover, summary, metadata, edition sources | Cover, summary, metadata, edition sources; no full texts |
| Author information | Introduction-coming-soon notice and related displayed works | 28 cards; 7 sourced profiles, others with labelled catalogue years/genres |
| Personal bookmarks | None | Local browser bookshelf; no account or cross-device sync |
| Feature board | None | 3 manual bilingual pages; buttons, dots, arrows, swipes; shared height measured across all pages/languages |
| Gallery reading on phones | Portrait single-page reading and long-page scrolling in current root app | Uses the standalone gallery |
| First-visit guide | Included | Available in the linked gallery |
| Class quiz | Removed | Not included |
| AI questions | Future-feature label only | No connected AI service |
| Membership accounts/enforcement, payments, citation export, lending, cross-device research records, Malay | Not implemented | Not implemented |

Counts are bibliographic records/editions, not a claim of 38 unique literary works. The current commercial direction is individual free/paid membership; earlier school-licence market and revenue scenarios are retired.

## Checks performed for this documentation refresh

- Read the latest `main` tree, source app, and all Markdown documentation, plus the catalogue branch/source snapshot.
- Evaluated the standalone data definitions: 28 Centre records, 10 translations, 10 selected Centre records, 20 exhibits; left and right exhibit Z positions match.
- Fetched the standalone deployment's five runtime files without login; each returned HTTP 200 and its Git blob hash matched the reviewed `main` file.
- Fetched catalogue HTML, JavaScript, stylesheet, book data, and author-profile data without login; each matched the local published source bytes.
- Reran `library/check.cjs`: catalogue, feature-board, language-selection, and formal-copy logic checks passed. This uses a simulated document, not a browser.
- Reran the financial calculator: output matches `business-plan/financials_output.txt` after ignoring the file's trailing blank line.
- Checked the complete catalogue source inventory while restoring the PR: required data, scripts, 38 covers, favicon, and bundled gallery files must all be present. Commit/tree verification is part of the documentation update.

No new browser session, rendered-layout measurement, device-performance test, real touch test, QR decoding, or external market-source revalidation was performed in this refresh. User-supplied phone screenshots informed catalogue fixes, but they are not a recorded full real-device acceptance pass.

## Historical reports

- [Gallery deployment history](qr/VNV_REPORT.md) contains multiple versions, including an initial 28-book/quiz build. Later dated sections supersede earlier current-state claims.
- [Business-plan verification](business-plan/VNV_REPORT.md) records checks against `a6d089c`. Its original product-feature checklist is historical; the new scope note separates it from the updated plan.
- [Evaluation](EVALUATION.md) preserves development rounds, including removed features and earlier performance figures.
- [Catalogue verification](library/VNV_REPORT.md) states what is checked by its source/logic checks and what remains unverified.

## Remaining validation

1. Test both public experiences on actual Android and iOS browsers, including browser text enlargement and orientation changes.
2. Check globe-menu selection, all feature pages at equal dimensions, long book details, author sources, and bookmarks after reload.
3. Test the standalone gallery's walking and phone flip-book controls, catalogue gallery links, and redirect from old gallery bookmarks.
4. Scan the existing QR images from a real print/projected slide and test venue Wi-Fi/mobile data.
5. Obtain content permissions and collect customer/pilot evidence before claiming institutional support, research effectiveness, or commercial traction.
