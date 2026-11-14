# Public demo: verification and validation report

Date: 14 November 2026
Public address: https://cultural-explorer-roan.vercel.app
QR code files: `qr/cultural-explorer-qr.png` (code only), `qr/cultural-explorer-qr-poster.png` (with title and address)

## Result

| Check | Result |
|---|---|
| Local tests, six screen sizes | Pass: 0 failures |
| Public address serves all files without login | Pass |
| Published files identical to the tested files | Pass |
| Public address tests, six screen sizes | Pass: 0 failures, 0 console errors |
| QR code decodes to the public address | Pass, both images |
| Real phone | **Not tested.** Must be done by the team |

## 1. What was tested

One automated suite ran in the browser at each screen size. Touch was simulated with touch-type pointer events, and the phone sizes used a phone browser identity.

| Screen | Size | Checks | Local | Public address |
|---|---|---|---|---|
| Phone, portrait | 375×812 | 32 | 32 pass | 32 pass |
| Small phone | 360×640 | 32 | 32 pass | 32 pass |
| Phone, landscape | 812×375 | 32 | 32 pass | 32 pass |
| Tablet | 768×1024 | 32 | 32 pass | 32 pass |
| Laptop | 1366×768 | 34 | 34 pass | 34 pass |
| Desktop | 1920×1080 | 34 | 34 pass | 34 pass |

The two extra checks on wide screens cover the details panel sitting beside the book.

What the suite checks:

- **Loading:** 3D engine loads from the project's own file, 28 cover photos load, the scene fills the window.
- **First visit:** the welcome guide fits the screen and its start button can be reached.
- **Layout:** title, tool bar, search, minimap, walk buttons and the View button do not overlap and stay on screen, in Chinese and in English.
- **Walking:** keyboard and on-screen touch buttons move the camera.
- **Choosing a book:** the View button names the book ahead, or the book you turn to face, and opens it. Tapping a book in the scene opens it.
- **Flip book:** cover photo shows, the cover and page controls are on screen, tapping a page turns it, the book closes.
- **Author box:** opens on screen without turning the page.
- **English mode:** no placeholder text anywhere; the Chinese summary is shown with a note.
- **Catalogue:** fits the screen, lists 28 books, choosing one walks there and opens it.
- **Quiz:** fits the screen, the Next button can always be reached, a full six-question game ends with the right score.
- **Search:** finds 《跳蚤》 typed with book-title marks, and choosing it walks there and opens it.

Extra checks on the laptop size, before the suite:

- Walls and the doorway stop the camera.
- Flip-book arrow keys, Escape closing the author box first and then the book.
- Minimap click travels to the chosen book.
- The Centre's introduction opens from search.
- 3,000 generated quiz questions each had four different options and one correct answer.
- Language choice and "guide already seen" survive a reload.
- Real mouse clicks (not simulated) on the Catalogue button and a book row opened the book.
- Frame rate: 93 to 120 frames per second on this laptop.

## 2. Defects found and fixed

| # | Defect | Severity | Fix | Re-tested |
|---|---|---|---|---|
| 1 | After turning to face a book, the View button could name a different book across the corridor | Major | The book you look at (within about 30 degrees, up to 4 m) now wins | Pass, three direction checks per screen size |
| 2 | Tool buttons were 36 px tall on phones, close buttons 36 px, filter buttons 34 px | Minor | 44 px, 44 px and 40 px on phones | Pass |
| 3 | "Lorem ipsum" placeholder text shown in English mode and in every author box | Major for a public demo | Removed. English shows the Chinese summary with a "translation coming soon" note; author boxes show "introduction coming soon" and the author's books | Pass |
| 4 | The 3D engine came only from an outside server | Minor | A copy is stored with the app; the outside server is the fallback. The copy's SHA-512 hash equals the one published by cdnjs | Pass: normal load uses the local copy; with the copy removed, the fallback loaded |
| 5 | One pointer call could throw an error when no real pointer was active | Minor | Wrapped so it can never stop the handler | Pass: no new console errors |

## 3. Publication checks

| Check | Evidence |
|---|---|
| Address is public | `/`, `/cultural%20explorer.html`, `/covers.js`, `/three.min.js` each returned HTTP 200 with no login |
| Short address works | `/` redirects to the app page |
| Published app equals tested app | SHA-256 of the published app page and `covers.js` equals the local files; SHA-512 of `three.min.js` equals the cdnjs value |
| Only app files are public | The deploy folder holds four files: `index.html`, `cultural explorer.html`, `covers.js`, `three.min.js`. No business documents |
| QR code | Version 4, error correction level Q. Both images were decoded by a QR reader in code and returned `https://cultural-explorer-roan.vercel.app` |

## 4. What was not tested

- **A real phone.** Everything above ran on one laptop (Chromium, AMD Radeon 780M graphics) with phone-sized screens and simulated touch. Real phones differ in graphics speed, browser bars and touch handling.
- **iPhone Safari and other browsers** such as Firefox or WeChat's built-in browser. A QR code scanned inside WeChat opens WeChat's browser, which is the most likely place for a surprise.
- **Slow mobile data.** The first load is about 1.8 MB.
- **Many people at once.** The app is static files, so this is low risk, but it was not load-tested.
- **Scanning the printed or projected QR code with a phone camera.** It was decoded from the image file only.

## 5. Before the event: team checklist

1. Scan the QR code with an Android phone and an iPhone. Walk in, open a book, play one quiz.
2. Scan it from inside WeChat as well, if participants are likely to use WeChat.
3. Check it on the venue's Wi-Fi and on mobile data.
4. On a slide, make the QR code large. A common rule of thumb is a code at least one tenth as wide as the scanning distance, for example 50 cm wide on the projected screen for people 5 m away. Test it from the back of the room.

## 6. Known limits of the demo

- English book summaries and author introductions are not written; a note says so.
- Cover photos come from the Centre's website and there is no written permission yet. The team chose to publish with them.
- The published copy is a snapshot. Later changes to the repository do not appear at the public address until it is deployed again.

## Update: redeployed at commit `f66e347` (14 November 2026, 17:17)

The sections above describe the first deployment (14:05). The app changed a lot afterwards: the class quiz was removed, the collection became 20 books (10 Centre publications and 10 English translations, with `covers-en.js`), the scene was rebuilt with device tiers, and on a mouse the View button now follows the book under the cursor. The public address was redeployed with the current version and tested again.

| Check | Result |
|---|---|
| Published files identical to the repository at `f66e347` | Pass: SHA-256 matches for `index.html`, `cultural explorer.html`, `covers.js`, `covers-en.js`, `three.min.js`; each returns HTTP 200 with no login |
| QR code | Unchanged, because the address is the same. Both images decode to `https://cultural-explorer-roan.vercel.app` |
| Console errors on the public address | None |

Suite adapted to the new version (no quiz checks; book choice tested by cursor in mouse mode and by position in touch mode):

| Screen | Size | Mode, quality tier | Local | Public address |
|---|---|---|---|---|
| Laptop | 1366×768 | mouse, high | 32 of 32 pass | 32 of 32 pass |
| Desktop | 1920×1080 | mouse, high | 32 of 32 pass | not run |
| Phone, portrait | 375×812 | touch, low | 31 of 31 pass | 31 of 31 pass |
| Small phone | 360×640 | touch, low | 31 of 31 pass | not run |
| Phone, landscape | 740×360 | touch, low | 31 of 31 pass | 31 of 31 pass |
| Tablet | 768×1024 | touch, low | not run | 31 of 31 pass |

Still not tested: a real phone, iPhone Safari, WeChat's built-in browser, slow mobile data, and scanning the printed or projected code with a camera. The team checklist in section 5 still applies, without the quiz step.
