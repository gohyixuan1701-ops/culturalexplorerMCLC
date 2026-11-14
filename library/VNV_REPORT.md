# Catalogue verification and validation

## Standalone gallery routing update

All five catalogue gallery entry points now use `https://cultural-explorer-roan.vercel.app/`. The former `/gallery/` page redirects to that address with JavaScript and an HTML refresh; a visible link remains as a fallback. The script URL is versioned to refresh cached catalogue code.

Published source commit: `46ddaa86e15644bef2452c0b1365a787e0e2d0f9` in the managed Sites repository. The existing catalogue logic check now expects the standalone destination and passes. All five link destinations, redirect/fallback source, and JavaScript syntax were checked; the standalone address returned HTTP 200. A new browser/device acceptance pass is not claimed. The snapshot checks below describe the earlier bundled-gallery version.

## Scope

Catalogue runtime source: `dda10f1916b65587d19fa9ecd6a95c17eff832a9` in the managed Sites source repository. GitHub source is introduced through [PR #1](https://github.com/gohyixuan1701-ops/culturalexplorerMCLC/pull/1).

Public URLs: [catalogue](https://mahua-literature-library.thngyh.chatgpt.site/) and [bundled gallery](https://mahua-literature-library.thngyh.chatgpt.site/gallery/). Both are intended to be public without login.

## Checks in this documentation refresh

| Check | Result / scope |
| --- | --- |
| Catalogue logic | `node check.cjs` passes: filtering, search, sort, shelf, pagination, metadata and author rendering |
| Feature logic | Gallery link, English-translation destination, page wrapping, bilingual copy, position counter and selected indicator pass |
| Language logic | Explicit Chinese/EN selection, menu close state and unsupported-language rejection pass |
| Formal English wording | Interface and feature-copy checks pass |
| Data inventory | 38 unique record IDs, 38 cover paths, 28 Centre records, 10 translated editions, 20 gallery selections |
| Author inventory | 28 distinct author names and 7 sourced profiles; other facts are catalogue-derived |
| Public source comparison | HTML, script, stylesheet, `books.json`, and author-profile data returned HTTP 200 without login and matched the published local source bytes |
| Complete checkout | Required scripts, data, covers, favicon and bundled gallery files are included in the repaired PR tree; the tree is checked against the local source inventory |

The script uses a simulated document. Its pass message explicitly excludes browser layout and interaction verification.

## Not established by these checks

- Rendered dimensions, including equal carousel height after fonts load, or absence of overlaps on every viewport.
- Actual globe-menu clicks, keyboard focus, swipes, modal scrolling, or browser text-enlargement behavior.
- Real Android/iOS/Safari/WeChat compatibility, graphics performance, or research-workflow usability.
- User adoption, educational effectiveness, official endorsement or rights clearance.

User-supplied phone screenshots exposed earlier catalogue layout defects. Fixes include an intrinsic-height header, larger typography/touch targets, separate book-art/text tracks, and measured shared carousel height. These are implemented changes, not a completed real-device acceptance pass.

## Next acceptance pass

Use both languages on real phones, tablet and desktop: open/close the globe menu, visit all three feature pages and compare their bounds, follow each destination, search/filter/sort, open a long book record, view author sources, save/remove a book and reload. Check browser text enlargement and portrait/landscape transitions. Test the bundled 3D gallery separately from the root Vercel version.

Record viewport, browser/device, source/deployment version and observed results before marking these checks passed. Updating a source file or successfully deploying it is not visual verification.
