# Cultural Explorer: evaluation and business notes

Project: The Digital Malaysian Chinese Literature Centre (马华文学馆).
Goal: help the younger generation discover and inherit Malaysian Chinese culture through an interactive digital literature centre that teachers can use in class.

Written 14 November 2026 against `cultural explorer.html`. Every number marked **assumption** is a placeholder for the pitch, not measured data.

## 1. What the app does today

- A walk-through corridor with 28 books published by the Malaysian Chinese Literature Centre, plus the Centre's own introduction and history on the end wall.
- Each book opens as a flip book with a details panel.
- Search bar, minimap with click-to-go, keyboard, mouse and touch controls.
- Book catalogue, welcome guide and a two-team class quiz (new).
- Chinese / English switch (new).
- Clickable author names that open an author box (new, placeholder text).

## 2. What changed in this round

| Item from the group chat | Change | Checked in the browser |
|---|---|---|
| Direction keys should follow the camera, not the road | Forward and back now move the way the camera faces. You can walk across the corridor, and walls and the doorway stop you. | Facing left and walking forward moved x from 0 to -1 with z unchanged; the wall stopped it at 1.6 |
| Map click: walk straight, then turn | On a long trip the camera faces the walking direction and turns to the book only in the last 1.5 m. Top speed went from 7 to 5 m/s and the head bob is off while gliding, to reduce motion sickness. | Entrance to book 11: yaw stayed 0° until z = -16.2, then turned to 89° and the book opened |
| Book centres after the details panel closes | Already worked; no code change. | At 1280 px: book centre 540 with the panel open, 640 (screen centre) after closing |
| Author name opens an author detail box | Names on the title page, details page and panel are links. The box shows lorem text and the author's other books in the collection, which you can open from there. | Clicking the name opened the box and did not turn the page |
| Search with symbols | Matching now ignores case, full-width or half-width forms, spaces and punctuation. A symbols-only query is matched as typed. | `《跳蚤》`, `声声慢:`, `2013 2023` and `·` each found the right book; `<script>`, `(.*)` and `\` returned "no match" with no error |
| Bilingual display | 中文 / English button above the arrow buttons. It switches the interface, series names and genres. The choice is remembered on that device. | Switched to English and back; labels, page names and search results followed |
| (found while testing) 3D view was cropped on high-DPI screens | The canvas was drawn at 2× the window size on a screen with device pixel ratio 2, so only the top-left quarter showed and clicks on books missed. One CSS line now makes it fill the window. | Canvas was 1482×1452 in a 741×726 window before, 741×726 after |

### Second round: finding books, learning the controls, class interaction

| Need | Change | Checked in the browser |
|---|---|---|
| Users cannot tell which books exist | 书目 / Catalogue button lists all 28 books grouped by series, with genre filters. Clicking a book walks you to it. | 28 rows listed; the 小说集 filter showed 3 books; clicking one from the plaza walked through the door and opened it |
| Users do not know how to use it | A welcome guide with four steps opens on the first visit and reopens with the "?" button. It has its own language button. It replaces the small help text in the corner. | Opened on a fresh load; switched language inside the guide; closed with the start button |
| Nothing engaging for a class | 课堂问答 / Class quiz: red team against blue team, taking turns, 6 or 10 multiple-choice questions, live scoreboard and a winner screen. Questions (author, year, genre, "which book is by…") are generated from the book data, so no answers are hand-written. After each answer the book's summary is shown (Chinese mode). | Played a full 6-question game: score ended 3–0 and the winner screen showed. 3,000 generated questions were checked against the data: each had 4 different options and exactly one correct answer |

Limits of the quiz: questions test facts about the books (who, when, what kind), not understanding of the texts, because the app holds no book content yet. Scores are not saved.

### Third round: 3D scene quality

The version before this round is kept as the git tag `backup-before-3d-upgrade` (commit `320801b`).

Evaluation of the old scene: flat untextured planes for floor, walls and ceiling; books were flat pictures in frames; no reflections, no tone mapping, no depth cues; the entrance was plain boxes against a black background.

| Area | Change |
|---|---|
| Rendering | Colour-managed output with filmic tone mapping, and a reflection environment so brass, lacquer, porcelain and the polished floor reflect light |
| Corridor | Timber plank floor, red carpet runner with gold border, plaster walls shaded toward the ceiling, timber wainscot, dado rail, skirting, pilasters with brass bands, ceiling beams |
| Light | Hanging lanterns that sway, glow halos, drifting dust, darker floor edges in place of real-time shadows |
| Exhibits | Each book is a 3D book (cover, spine, page edges) leaning on a shelf, on a timber display board with cloth in the series colour, a brass frame, a caption plate and a picture light |
| End wall | Signboard, ink-wash mountain painting, couplet banners (薪火相传 / 文脉长流), console table and two porcelain vases |
| Entrance | Dusk sky with stars and moon, tree line, stone plaza with lamp posts, curved canopy roof on red pillars, lattice windows, red lanterns, studded door |
| Safety net | A clear message appears if the 3D engine cannot be loaded (no internet) |

Everything is still drawn by code in the one HTML file: no image or model files and no new libraries.

Checked in the browser: 120 frames per second at about 655 draw calls on an AMD Radeon 780M laptop graphics chip; travel, clicking a 3D book, the flip-book cover, catalogue and quiz all still work; no console errors. Not checked: phones, tablets, older classroom PCs.

### Fourth round: interface (UI) quality

Evaluation of the old interface, and why it read as cheap:

| Problem | Example |
|---|---|
| No system | Nine different corner sizes, four font stacks, the same thin gold outline on every button |
| Scattered layout | Tool buttons floated above the walk buttons; the title was bare text over the scene |
| Stock symbols | Unicode triangles for arrows, emoji in labels |
| No feedback | No hover, press or keyboard-focus states; pop-ups appeared with no transition |
| Weak hierarchy | The main action ("view this book") looked the same as every other button |
| Hard to read | Bare text over a bright 3D wall; bullet lists for label and value pairs |

What changed:

| Area | Change |
|---|---|
| System | One set of tokens: one accent (brass gold, matching the scene), two fonts (a brush-style display face for titles, a clean sans for text), one corner rule (controls are pills or circles, panels are 16 to 20px) |
| Layout | Brand lockup with a red seal mark at top left, search in the middle, one grouped tool bar at top right, minimap at bottom left, walk buttons at bottom right |
| Hierarchy | "View this book" and "Class quiz" are solid gold; everything else is quiet glass |
| Controls | Drawn chevrons in place of triangle characters, a `/` hint in the search bar, an `Enter` hint on the view button |
| Panels | Frosted glass with soft shadows; book details as a label and value grid; pop-ups ease in; page controls under the book are one grouped bar |
| Feedback | Hover, press and keyboard-focus states on every control |
| Access | Pinch-zoom is no longer blocked; motion is reduced for people who ask their device for that |
| Phones | Tool bar and search stack under the brand; the view button sits above the walk buttons |
| Text | Emoji and decorative dashes removed |

Checked in the browser at 1366×768 and at phone size (375×812): layout, search results, book with details panel, catalogue, quiz, no console errors. Frame rate is 103 per second on this laptop (120 before; the frosted glass costs a little). Not checked: a real phone, and keyboard-only use from start to finish.

Not done on purpose: English summaries, English text for the Centre's history, and author biographies are placeholders (lorem), as agreed for the hackathon.

## 3. Evaluation

### Strengths
- Real content with a stated source (the Centre's publications page), so it is credible in front of judges and teachers.
- One HTML file, no install and no build step. A teacher can open it on any classroom PC.
- The corridor, flip book and minimap make a strong first impression in a demo.

### Gaps against the pitch
| Gap | Why it matters | Severity |
|---|---|---|
| Teaching features are thin: a team quiz exists, but no worksheet, lesson view or saved results | The business case is "teaching material used in class". The quiz covers facts about the books only | Major |
| Content is 28 books from one publisher's list | The title says "culture museum"; the content is one bookshelf. Judges may ask where the culture is | Major |
| No book excerpts or real covers | Students can read about a book but not read any of it. Needs permission from the Centre and the authors | Major |
| English and author text are placeholders | Fine for the demo, must be replaced before any school sees it | Minor for the hackathon |
| No Malay | Schools outside the Chinese stream need it | Minor for the hackathon |
| three.js is loaded from the internet | The app shows a blank screen with no connection, which is common in classrooms | Minor, a quick fix |
| The "AI chat" box is only a "coming next" label | Do not present it as a feature | Minor |
| Not deployed, and the file name has a space | There is no public link to hand to judges | Minor, a quick fix |
| No automated tests | Checks in section 2 were done by hand in one desktop browser. Phones and tablets were not tested | Minor |

## 4. Suggested next steps (most valuable first)

1. **Deeper classroom content.** The team quiz is in. Next: one "lesson" per book with a short excerpt, comprehension questions, a discussion prompt and a printable worksheet. This is what turns the demo into the product you are pitching.
2. **Deploy a public link.** Rename the file to `index.html` and publish it (GitHub Pages or Vercel).
3. **Bundle three.js locally** so the app works offline.
4. **Replace the placeholders** with real author introductions and English summaries.
5. **Ask the Centre for permission** to use covers and short excerpts. Bring this up in the pitch as a partnership, not as a risk.
6. **Add Malay** as a third language.

## 5. Business plan sketch

**Superseded.** This first sketch used assumed numbers. Use [BUSINESS_MODEL.md](BUSINESS_MODEL.md), which has sourced market figures and a reasoned price. The text below is kept only as a record.

### Customer and problem
- **Who pays:** schools (Chinese primary schools, Chinese independent secondary schools, national schools with Chinese classes), and the associations and foundations that fund Chinese education.
- **Who uses:** Chinese-language and literature teachers, and their students.
- **Problem:** Malaysian Chinese literature is in the syllabus but the material is text on paper. The only literature centre is one room in Johor that most students will never visit.

### Product
A virtual literature centre that a teacher projects in class or assigns as homework, with a ready-made lesson for each exhibit.

### Revenue streams
| Stream | How it works |
|---|---|
| School licence | Yearly fee per school for the lesson packs, quizzes and teacher dashboard. The walk-through stays free as the showcase. |
| Sponsored exhibition rooms | A foundation, clan association or publisher pays to add a themed room (an author, a festival, a dialect group). |
| Custom virtual museums | Build the same thing for other small museums and cultural centres that cannot afford their own. |
| Grants | Cultural and education grants to cover the first year's content work. |

### Revenue expectation (illustration only)
Formula: schools signed × yearly licence fee + rooms sponsored × fee per room.

| Scenario | Schools signed | Licence per school per year | Sponsored rooms | Fee per room | Yearly revenue |
|---|---|---|---|---|---|
| Year 1 pilot | 10 | RM 1,000 | 1 | RM 5,000 | RM 15,000 |
| Year 2 | 50 | RM 1,000 | 3 | RM 5,000 | RM 65,000 |
| Year 3 | 150 | RM 1,000 | 6 | RM 5,000 | RM 180,000 |

All four inputs are **assumptions** chosen to show the model. Before the pitch, replace them with numbers you can defend: ask two or three teachers what their school pays for digital teaching material today.

Market size for the slide: Malaysia has roughly 1,300 Chinese primary schools and about 60 Chinese independent secondary schools. These figures are from memory and **unverified**; check them against Ministry of Education and Dong Zong sources before quoting.

### Costs
Hosting is close to free at this size (one static page). The real costs are content work (writing lessons, translation, permissions) and school outreach.

### Risks
| Risk | Response |
|---|---|
| Copyright on covers and excerpts | Partner with the Centre and publishers; start with summaries and author-approved excerpts |
| Schools have little budget | Lead with sponsors and grants so pilot schools pay nothing in year 1 |
| Teachers do not adopt it | Build lessons that fit one 30-minute period and need no preparation |
