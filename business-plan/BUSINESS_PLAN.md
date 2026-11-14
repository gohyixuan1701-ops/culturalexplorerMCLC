# Cultural Explorer: Business Plan

**Malaysian Chinese Literature Center (马华文学馆)**
SUC × FeedMe Startup Hackathon 2026 · Team Cultural Explorer · 14 November 2026

How to read this plan:

- Section headings carry the rubric's criterion names from `JUDGING_CRITERIA.md`, so each can be scored directly.
- Product claims were refreshed against `main` at `189e0790d3866b469a0591a71ddc87fc99ade5ef` and the catalogue runtime published from Sites source `dda10f1916b65587d19fa9ecd6a95c17eff832a9` in PR #1. See [current status](../PROJECT_STATUS.md). The original financial assumptions and market-source research are retained; external pages were not revalidated in this refresh.
- A number followed by a source tag such as [S1] was confirmed on the original page on 14 November 2026. The list is in the Sources section.
- **[UNSOURCED ASSUMPTION]** marks a number with no confirmed source. These are our own estimates, with the arithmetic shown.
- Every financial figure is produced by `financials.js`; its output is in `financials_output.txt`.

---

## 1. Executive summary

**Problem.** Fewer young Malaysians are reaching Chinese literature. Candidates for SPM Chinese fell from 60,521 in 2017 to 46,046 in 2025, a drop of 23.9% [S4]. Chinese primary school enrolment fell by 26,526 in one year, to 463,988 [S1]. The country's only Malaysian Chinese literature centre is one location in Skudai, Johor [S6], which most students will never visit.

**Product.** Cultural Explorer provides a public browser-based gallery of 20 exhibits: 10 selected Centre publications and 10 translated works. Covers, summaries and publication details open as flip books. A separate catalogue offers all 38 bibliographic records, author information and a local bookshelf. Both experiences have Chinese/English interfaces. The former class quiz is removed; complete texts and paid teaching tools are not implemented.

**Proposed business model.** Keep discovery access free, then test school licences for future lesson material and commissioned exhibitions for sponsors. Neither paid teaching tools nor a purchasing/payment flow is implemented or validated.

**Market.** There are 1,303 Chinese primary schools [S1]. Half have fewer than 150 pupils [S1], so about 651 are realistic paying customers. At our proposed price that is RM 781,200 a year. Adding Chinese independent secondary schools brings it to about RM 1.0 million a year, but that part rests on an unsourced school count.

**Twelve-month projection.** RM 10,800 (conservative), RM 35,000 (base) or RM 76,000 (optimistic) in revenue. All three depend on prices and adoption rates that no customer has confirmed.

**Honest status.** We have a working prototype and sourced evidence of the problem. We have no customer interviews, no pilot, no revenue and no written permission for the content. Closing those four gaps is the plan for the first three months.

---

## 2. Problem & customer validation (25 marks): problem and target customer

### The problem

| Evidence | Figure | Source |
|---|---|---|
| Fewer students sit SPM Chinese | 60,521 candidates (2017), 48,420 (2020), 46,046 (2025): down 23.9% in eight years | [S4] |
| Chinese primary enrolment is shrinking | Fell by 26,526 from 490,514 in 2024, to 463,988: down 5.4% in one year | [S1] |
| Classrooms are no longer only Chinese-speaking | 41,133 Malay students, 9.01% of Chinese primary enrolment (31 May 2026). Non-Chinese share was about 20% by 2020 | [S2], [S5] |
| The literature has one physical home | The Centre, opened 26 April 1998 in Skudai, Johor, describes itself as the first and only Malaysian Chinese literature centre | [S6] |

Put together: the audience for Malaysian Chinese literature is shrinking and becoming more mixed in language, while the main collection sits in one room in Johor.

What we have **not** shown: that teachers feel this as a problem worth paying to solve. That is the main gap in this plan.

### Target customer

| | First target | Second target |
|---|---|---|
| Who | Chinese independent secondary schools | Chinese primary schools (SJKC) with 150 or more pupils |
| How many | About 63 **[UNSOURCED ASSUMPTION]** | About 651 (half of 1,303 [S1]) |
| Why | Few enough to contact all of them in one term; they teach secondary-level literature, which matches the Centre's poetry and fiction | Largest group; needs simpler content than we have today |
| User | Chinese-language teacher | Chinese-language teacher |
| Buyer | Principal or school board **[UNSOURCED ASSUMPTION]** | Principal, board or parent-teacher association **[UNSOURCED ASSUMPTION]** |

### Customer validation: status

**None done.** No teacher, student or school has been interviewed or has tried the product. We will not claim otherwise.

Validation plan for the two weeks after the hackathon:

1. Interview five Chinese-language teachers. Questions: how they teach this literature today, what digital material the school pays for and how much, who approves the purchase, whether they would use the product in a lesson after a five-minute trial, and what price is acceptable.
2. Ask the Centre for written permission to use covers and short excerpts, and for a statement of support.
3. Observe a classroom trial of the current browsing experience and record completion, accessibility issues and teacher feedback. An assessment/quiz trial requires a new implemented and tested feature; no quiz is currently available.

What would count as a pass: at least three of five teachers say they would use it in a lesson, and at least one school agrees to a free pilot term.

---

## 3. Solution & innovation (20 marks)

### What the product does today

- **Visit.** Navigate the standalone 20-exhibit 3D gallery using keyboard, mouse or touch; use its search, catalogue or minimap to discover books.
- **Inspect.** Open a cover, summary and publication/translation details. The flip book does not contain the literary work's full text.
- **Browse directly.** Use the separate 38-record catalogue, filters, grid/list views, sorting and pagination, or follow a feature link to the bundled gallery.
- **Choose a language.** The gallery has a toggle; the catalogue has a globe menu with Chinese/EN options. Ten translated records have English-edition information; untranslated Chinese records retain Chinese titles and summaries.
- **Discover authors.** The catalogue has 28 cards, including 7 sourced profiles. Other cards show catalogue edition years and genres; standalone author introductions remain notices.
- **Save locally.** The catalogue bookshelf stores personal bookmarks in the browser. It is not a teacher-results system or account service.

### Product position to validate

The prototype combines a self-guided exhibition with conventional catalogue browsing. Both are public static experiences without account creation. Its suitability for a class, older readers, and mixed-language audiences still needs observation with actual visitors. It does not establish that competitors lack comparable features or that schools will pay.

The gallery is generated from data, but reuse for a separate commissioned collection is still a proposal. Root gallery data, catalogue JSON and the bundled gallery copy do not synchronize automatically.

### Limits stated up front

- No complete literary texts, class quiz, lesson packs, teacher dashboards, subscriptions/payments, lending, saved class results or Malay.
- A standalone AI question area is only a future-feature label.
- English and author coverage is partial, not universally placeholder text and not universally complete.
- The galleries use local Three.js and cover files; a missing local engine invokes the network CDN fallback. Catalogue fonts may load externally, with fallback fonts available.
- Public access and file checks are implemented, but current catalogue geometry and real-device acceptance remain unverified.

---

## 4. Business model & market (20 marks): market

### Size

Bottom-up, at our proposed prices (see Pricing):

| Level | Definition | Schools | Value per year |
|---|---|---|---|
| TAM | Every Chinese primary school pays RM 1,200, every independent school pays RM 3,600 | 1,303 [S1] + 63 **[UNSOURCED ASSUMPTION]** | RM 1,563,600 + RM 226,800 = RM 1,790,400 |
| SAM | Chinese primary schools with 150 or more pupils, plus independent schools | 651 + 63 **[UNSOURCED ASSUMPTION]** | RM 781,200 + RM 226,800 = RM 1,008,000 |
| SAM, sourced school counts only | Chinese primary schools with 150 or more pupils | 651 | RM 781,200 |
| SOM, month 12 | Base case: 5 independent and 10 primary schools | 15 (2.1% of SAM schools) | RM 30,000 in licences |

Top-down cross-check: published estimates of Malaysia's whole education-technology market in 2025 range from USD 0.3 billion [S9] to USD 1,179.2 million [S8]. At an exchange rate of RM 4.4 to the dollar **[UNSOURCED ASSUMPTION]**, our SAM is between 0.019% and 0.076% of that market. The two estimates differ by a factor of four, so we use them only to show that our bottom-up figure is small against the whole and not inflated.

**This is a small market.** About RM 1 million a year is the ceiling for school licences alone. Growth beyond it has to come from sponsored rooms and from reusing the platform for other collections (see Revenue streams).

### Segmentation

| Segment | Size | Fit today | Note |
|---|---|---|---|
| Chinese independent secondary schools | About 63 schools, about 82,000 students **[UNSOURCED ASSUMPTION]** | Best | Secondary-level literature |
| Chinese primary schools, 150+ pupils | 651 schools | Medium | Content must be simplified |
| Chinese primary schools, under 150 pupils | 652 schools; 13 have fewer than 10 pupils [S1] | Low ability to pay | Free tier, funded by sponsors |
| Cultural sponsors | Not sized | Unknown | Foundations, associations, publishers |

Not included: national-type secondary schools and universities. We could not confirm their numbers.

### Trends

- Chinese primary enrolment fell 5.4% in 2025 [S1]. The customer base is shrinking, which is a risk to a per-school licence.
- The share of non-Chinese pupils in these schools is rising [S2], [S5]. This supports a bilingual product and argues for adding Malay.
- The Ministry of Education's own platform, DELIMa, had 5.3 million users by November 2023 [S7]. Schools already use digital platforms, and a ministry platform is the default.

### Competitor and substitute comparison

| | What it is | Price | Gap for our customer |
|---|---|---|---|
| **Pandai** | Malaysian learning app with syllabus practice questions | RM 30 a month (Premium Lite) and RM 96 a month (Premium) per student in 2022 [S11]; yearly family plans of RM 800 to RM 960 shown in 2026 [S10] | General exam practice. We found no Malaysian Chinese literature content on the pages we read |
| **DELIMa** | Ministry of Education digital learning platform | Price not stated in the source; 5.3 million users [S7] | A platform for tools and classes, not a literature collection |
| **Google Arts & Culture** | Online collections from more than 2,000 cultural institutions [S12] | Described as non-commercial and accessible to anyone [S12] | A web search on 14 November 2026 found no partner page for the Centre. This was not an exhaustive collection or classroom-feature audit. |
| **Scanned 3D tours** (Matterport type) | A realistic walk through a real building, made by scanning it | Not confirmed | Needs a real exhibition room and scanning equipment. Shows the room, not the inside of a book |
| **Build-your-own virtual galleries** (Artsteps, Kunstmatrix) | A 3D room where anyone can hang pictures | Not confirmed | Tools for building virtual exhibitions; book-specific metadata, discovery and classroom-feature overlap were not confirmed. |
| **Literature museums online** (for example Taiwan's National Museum of Taiwan Literature) | A virtual museum and a 3D game built on its own collection | Not researched | Covers Taiwan literature, not Malaysian Chinese literature. We did not confirm how its virtual museum works today |
| **Online libraries and catalogues**, including the Centre's own publications page | Lists of books with search; some lend the full e-book | Not researched | Conventional book discovery is also part of our catalogue. Comparative 3D, lending and classroom capabilities need direct verification. |
| **Visiting the Centre in person** | The physical collection in Skudai, Johor [S6] | Travel cost not researched | One location; most schools are far away |
| **Textbook and teacher only** | The status quo | No added cost | No visual or interactive element |

We looked for prices for Ezhishi and KooBits and could not confirm any, so they are left out.

The four rows on virtual museums and online libraries were added on 14 November 2026 from web search results. Those pages were not opened one by one (two returned errors), so the rows quote no prices or figures and carry no source tags.

### Differentiation

A 3D walk-through is not new: virtual museums and gallery builders already offer one. The combination below is our proposed position; the research does not prove that no competitor offers it.

- **A museum where the exhibits open.** A virtual museum lets you look at objects, and an online library gives you a list. Here you walk past a book and then open it.
- **The same literature in two languages.** One wall shows works with no English translation; the other shows works published in English. The language button switches each translated work between its Chinese and English editions.
- **No room and no scanning needed.** The gallery is generated from a list of books, where a scanned tour needs a physical exhibition and equipment.
- **Single subject, done in depth.** The general platforms cover every subject thinly. We cover one collection as a place to visit.
- **Proposed group use.** A teacher can project the gallery/catalogue for discussion. A structured group lesson or assessment is future work; no team quiz is currently available.
- **Price position.** Our proposed price works out at about RM 3.37 per pupil per year. That is 0.9% of one year of Pandai Premium Lite for one student (12 × RM 30 = RM 360 [S11]). It is priced as a small add-on, not a platform.

Where we are weaker: the product is 3D in a browser, not headset VR; it shows covers, summaries and details, not the full text that an e-library lends; and its graphics are simpler than a scanned tour.

What would make this wrong: a ministry or Google collection that already includes the Centre's material, a virtual museum of Malaysian Chinese literature that our search missed, or teachers finding that the current discovery experience does not improve their lessons.

---

## 5. Business model & market (20 marks): business model

### Value proposition

- **Teacher:** a ready activity on Malaysian Chinese literature that needs no preparation and no installation.
- **Student:** a visit to a literature centre they cannot reach, with a game.
- **The Centre and sponsors:** their collection in front of students across the country.

### Customer segments

Paying: schools, then cultural sponsors. Using: teachers and students. Details are in section 2.

### Revenue streams and pricing

| Stream | Price | Status |
|---|---|---|
| School licence, primary | RM 1,200 per school per year **[UNSOURCED ASSUMPTION]** | Roadmap: lesson packs not built |
| School licence, independent secondary | RM 3,600 per school per year **[UNSOURCED ASSUMPTION]** | Roadmap: lesson packs not built |
| Sponsored exhibition room | RM 5,000 per room, one-off **[UNSOURCED ASSUMPTION]** | Roadmap: no second room built |
| Custom virtual centre for another collection | Not priced | Roadmap |
| Grants | Not counted in any projection | MDEC lists a Digital Content Grant for 2026, shown as closed [S13]. We could not confirm amounts or whether an education project qualifies |

How the licence price was set: about RM 3 per pupil per year, applied to an average primary school of 356 pupils (463,988 ÷ 1,303 [S1]) and an average independent school of about 1,302 students **[UNSOURCED ASSUMPTION]**. No teacher or principal has been asked whether this is acceptable.

The free walk-through stays free. It is the way teachers discover the product.

### Cost structure

All cost figures are **[UNSOURCED ASSUMPTION]**.

| Cost | Value | Note |
|---|---|---|
| Hosting and domain | RM 30 a month | The product is static files with no backend |
| Content (translation, proofreading, printing) | RM 3,000, months 1 to 3 | One-off |
| School visits | RM 120 per visit | Travel and materials |
| Contingency | 10% on all cash costs | |
| Team pay | RM 0 in year 1 | Five students working unpaid. A stipend sensitivity is shown below |

### Unit economics

| Measure | Value |
|---|---|
| Cost to sign one school | RM 120 per visit ÷ 20% conversion × 1.1 = RM 660 |
| First-year margin, primary school | RM 1,200 − RM 660 = RM 540 (45%) |
| First-year margin, independent school | RM 3,600 − RM 660 = RM 2,940 (82%) |
| Fixed cash costs for the year | RM 3,696 |
| Break-even | 7 primary schools, or 3 schools at the base-case mix |
| Break-even if five members drew RM 500 a month | 26 schools at the base-case mix |

The 20% conversion rate is the weakest number here. At 10% the cost to sign a school doubles to RM 1,320, which is more than a primary school pays in its first year. At 5% it is RM 2,640. The model only works for primary schools if conversion stays near 20% or schools renew for a second year. We have no renewal data.

### Channels

1. Direct visits and demonstrations to schools, starting with independent schools in Johor.
2. Teacher workshops hosted with the Centre and Southern University College. Not yet agreed with either.
3. Chinese education bodies such as Dong Zong and Jiao Zong. No contact made yet.
4. The free public link, shared in teacher groups. Roadmap: the product is not hosted publicly yet.

### Key partners

| Partner | Why | Status |
|---|---|---|
| Malaysian Chinese Literature Centre | Content rights and credibility | Not yet approached. Book data and cover photos come from its public website |
| Southern University College | Host institution of the Centre and of this team | No agreement |
| Authors and publishers | Permission for excerpts | Not yet approached |
| Sponsors | Fund rooms and the free tier | None identified |

### Go-to-market

| Period | Action | Result we need |
|---|---|---|
| Months 1 to 3 | Interviews, permission from the Centre, build lesson packs for five books, free pilot in three to five schools | Evidence that teachers use it; a confirmed price |
| Months 4 to 8 | Sell licences to independent schools, starting from pilot schools | First paying schools |
| Months 9 to 12 | Open sales to primary schools; approach sponsors for one room | Renewal intent from early schools |

### Twelve-month financial projection

Assumptions: months 1 to 3 are a free pilot; schools sign evenly from month 4 to month 12; a licence is counted as cash in the month it is signed; no grants; founders unpaid. Customer counts are **[UNSOURCED ASSUMPTION]**.

| | Conservative | Base | Optimistic |
|---|---|---|---|
| Independent schools paying by month 12 | 2 | 5 | 10 |
| Primary schools paying by month 12 | 3 | 10 | 25 |
| Sponsored rooms | 0 | 1 | 2 |
| Share of SAM schools signed | 0.70% | 2.10% | 4.90% |
| School visits needed at 20% conversion | 25 | 75 | 175 |
| Licence revenue | RM 10,800 | RM 30,000 | RM 66,000 |
| Sponsor revenue | RM 0 | RM 5,000 | RM 10,000 |
| **Total revenue** | **RM 10,800** | **RM 35,000** | **RM 76,000** |
| Cash costs | RM 6,996 | RM 13,596 | RM 26,796 |
| **Net cash** | **RM 3,804** | **RM 21,404** | **RM 49,204** |
| Lowest cumulative cash in the year | −RM 4,532 | −RM 5,874 | −RM 9,174 |
| Net if five members drew RM 500 a month | −RM 26,196 | −RM 8,596 | RM 19,204 |

Reading the table:

- The business needs about RM 5,000 to RM 9,000 of starting cash to cover the months before the first licences.
- It is cash-positive in year 1 only because nobody is paid. With modest stipends, the conservative and base cases lose money.
- The optimistic case needs 175 school visits in nine months, which is about 19 a month for a student team. Treat it as an upper bound.

What would make these wrong: a conversion rate below 20%, schools unwilling to pay the proposed price, or the lesson packs taking longer than three months.

---

## 6. Execution & prototype (20 marks): traction and product status

### Traction

The demos are public without login, while GitHub access remains private. The repository does not establish measured user adoption, completed school pilots, revenue, letters of intent or partnership agreements. Public availability must not be presented as customer traction.

### Product status

Current implementation is tracked in [PROJECT_STATUS.md](../PROJECT_STATUS.md). Symbol names replace line numbers, which changed as the application grew.

| Implemented capability | Evidence |
| --- | --- |
| Walkable entrance/gallery and device quality tiers | Root `cultural explorer.html`: renderer setup, `pickTier`, scene construction |
| 20 exhibits on mirrored walls | `LOCAL_PICK`, `LOCAL`, `TRANSLATED`, `ITEMS`; source retains 28 Centre + 10 translation records |
| Local rendering engine and cover photographs | `three.min.js`, `covers.js`, `covers-en.js`; CDN fallback for a missing engine |
| Flip books and publication details | `openPanel`, `openBook`, `showBook` |
| Bilingual history/Centre introduction | `openCentre`, `MAHUA`, `CENTRE` |
| Gallery search, minimap, travel, catalogue and guide | `runSearch`, `drawMap`, `travelTo`, `renderCat`, `renderGuide` |
| Chinese/English gallery interface and related-author works | `switchLang`, `openAuthor` |
| Standalone phone reading fixes | Portrait single-page/scrolling rules; versioned checks in `qr/VNV_REPORT.md` |
| 38-record conventional catalogue | `library/dist/books.json`, `app.js`, `styles.css` in PR #1 |
| Author cards, personal bookshelf and language menu | `renderAuthors`, `AUTHOR_PROFILES`, `toggleSave`, `chooseLanguage` |
| Manual feature board and shared height | `FEATURE_SLIDES`, `renderFeature`, `measureFeatureSlides` |
| Public demo and mock-up terms | README links; catalogue footer and terms dialog |

Not implemented: class quiz, complete texts, paid school features, saved classroom results, Malay or connected AI. Standalone author introductions are notices; the catalogue provides the sourced/derived facts documented above.

Verification: the documentation refresh reran catalogue logic checks and the financial calculator, and compared public deployment bytes with source. Historical gallery browser runs are in `qr/VNV_REPORT.md`; they are not fresh browser tests of this plan. Current catalogue geometry, gestures, performance and real-device behavior remain unverified.

Stack: static HTML/CSS/JavaScript, locally bundled Three.js r128 and cover assets. Catalogue book/profile data is separate. No backend, database or accounts.

---

## 7. Pitch & team (15 marks): roadmap, risks and mitigations, team

### Roadmap

The following outcomes remain unvalidated or unimplemented. Public links and the bundled 3D engine already exist and are not future milestones.

| When | Item |
|---|---|
| Months 1 to 3 | Teacher interviews and one classroom trial |
| Months 1 to 3 | Written permission from the Centre for covers and excerpts |
| Months 1 to 3 | Complete real-device/browser acceptance of the existing public links and local assets |
| Months 1 to 3 | Lesson packs for five books: excerpt, comprehension questions, worksheet |
| Months 1 to 3 | Finish missing author profiles/translations and synchronize catalogue/gallery data |
| Months 4 to 8 | School licence and payment; saved class results; teacher view |
| Months 4 to 8 | Malay interface |
| Months 9 to 12 | First sponsored exhibition room; second collection on the same platform |
| Not scheduled | AI question-and-answer about a book |

### Risks and mitigations

| Risk | Likelihood | Effect | Mitigation |
|---|---|---|---|
| No permission to use covers and texts. The repository has no licence or permission record, and the cover photos come from the Centre's website | High until asked | Rights clearance for broader distribution and commercial use remains unresolved | Ask the Centre first, before any sales. Fall back to drawn covers, which the code already supports |
| Teachers do not see the problem as worth paying for | Unknown | No revenue | Interviews and a free pilot before building paid features |
| The market is small (about RM 1 million a year) and shrinking (enrolment down 5.4%) | Certain | Caps licence revenue | Sponsored rooms and reuse for other collections |
| Schools prefer free ministry and Google tools | Medium | Slower sales | Position as an add-on at about RM 3 per pupil; keep the walk-through free |
| School visits convert below 20% | Medium | Primary-school licences lose money in year 1 | Sell to independent schools first, where the margin is 82% |
| Unreliable classroom connectivity or unsupported devices | Medium | External fonts/references or graphics may fail | Use the already-bundled engine/covers, verify local serving and device/browser fallbacks |
| A student team with limited time | High | Delays | Three-month scope limited to five books |

### Team

Team name: Cultural Explorer, Southern University College.

Commit authors and counts are not a verified team roster. Member count, names, courses and roles should be supplied by the team; the financial calculator's five-person stipend case is an assumption, not roster evidence.

**To be completed by the team before submission:** each member's full name, course, role in the project, and one relevant skill or experience. This plan does not invent them.

The repository records an evolving 3D prototype, cover photography, a bilingual interface and supporting documents. The separate catalogue adds conventional browsing and sourced author information. A quiz existed in an earlier build but was removed; it is not current execution evidence.

---

## Sources

Each page was opened on 14 November 2026 and the figure was found on it.

| Tag | Source | Year | What it supports |
|---|---|---|---|
| S1 | The Star, "Decline in Chinese school enrolment", citing Jiao Zong: https://www.thestar.com.my/news/nation/2026/01/20/decline-in-chinese-school-enrolment | 2026 | 1,303 schools; enrolment fell by 26,526 from 490,514; half have fewer than 150 pupils; 13 have fewer than 10 |
| S2 | The Star, parliamentary reply by the Education Minister: https://www.thestar.com.my/news/nation/2026/07/01/over-41000-malay-students-enrolled-in-chinese-vernacular-schools-this-year-says-fadhlina | 2026 | 41,133 Malay students, 9.01% of enrolment, as of 31 May 2026 |
| S3 | Wikipedia, Chinese national-type primary schools in Malaysia: https://en.wikipedia.org/wiki/Lists_of_Chinese_national-type_primary_schools_in_Malaysia | 2025 | 463,988 students as of 30 November 2025 (cross-check of S1 only) |
| S4 | The Star, "Report flags dual crises for SPM Chinese": https://www.thestar.com.my/news/nation/2026/05/09/report-flags-dual-crises-for-spm-chinese-fewer-candidates-fewer-top-scorers | 2026 | 60,521 candidates (2017), 48,420 (2020), 46,046 (2025) |
| S5 | ISEAS Perspective 2025/34: https://www.iseas.edu.sg/articles-commentaries/iseas-perspective/2025-34-malaysias-chinese-primary-schools-saved-yet-threatened-by-rising-inflows-of-malay-students-by-james-chai/ | 2025 | Non-Chinese enrolment share rose from 12% to 20% between 2010 and 2020 |
| S6 | Malaysian Chinese Literature Centre, About page: https://www.southern.edu.my/mclc/about.php | Undated | Opened 26 April 1998; Skudai, Johor; describes itself as first and only |
| S7 | Malay Mail: https://www.malaymail.com/news/malaysia/2023/11/27/education-ministry-53-million-users-access-delima-online-learning-platform-as-of-november-9/104499 | 2023 | 5.3 million DELIMa users |
| S8 | IMARC, Malaysia Edtech Market: https://www.imarcgroup.com/malaysia-edtech-market | 2026 | USD 1,179.2 million in 2025 |
| S9 | GlobalData, Malaysia EdTech Market: https://www.globaldata.com/store/report/malaysia-edtech-market-analysis/ | 2026 | USD 0.3 billion revenue in 2025 |
| S10 | Pandai pricing page: https://my.pandai.org/parents/pricing/ | 2026 | Yearly plans of RM 960, RM 880 and RM 800 by number of children |
| S11 | Pandai blog: https://blog.pandai.org/introducing-pandai-premium-lite-at-just-rm30-month/ | 2022 | RM 30 a month (Premium Lite), RM 96 a month (Premium) |
| S12 | Google Arts & Culture: https://about.artsandculture.google.com/ and https://about.artsandculture.google.com/partners | Undated | Non-commercial; more than 2,000 institutions |
| S13 | MDEC Digital Content Grant: https://www.mdec.my/grants/dcg | 2026 | A 2026 round exists and is shown as closed. Amounts and eligibility not confirmed |

---

## Appendix A: assumptions

| # | Assumption | Value | Source | Confidence |
|---|---|---|---|---|
| 1 | Chinese primary schools | 1,303 | S1 | High |
| 2 | Chinese primary pupils, 2025 | 463,988 | S1, cross-checked with S3 | High |
| 3 | Share of primary schools with fewer than 150 pupils | 50% ("half") | S1 | Medium: a rounded figure |
| 4 | Malay students in Chinese primary schools | 41,133 (9.01%) | S2 | High |
| 5 | SPM Chinese candidates | 60,521 (2017), 46,046 (2025) | S4 | High |
| 6 | Malaysia edtech market, 2025 | USD 0.3 billion to USD 1,179.2 million | S9, S8 | Low: two paid reports that disagree by four times; methods not visible |
| 7 | Pandai consumer price | RM 30 a month | S11 | Medium: from 2022 |
| 8 | Chinese independent secondary schools | 63 | [UNSOURCED]: the Dong Zong statistics file returned "not found" | Low |
| 9 | Independent school students | 82,000 | [UNSOURCED]: same | Low |
| 10 | Exchange rate | RM 4.4 per USD | [UNSOURCED] | Low |
| 11 | Licence price, primary school | RM 1,200 a year | [UNSOURCED]: our proposal, about RM 3 × 356 pupils | Low |
| 12 | Licence price, independent school | RM 3,600 a year | [UNSOURCED]: our proposal, about RM 3 × 1,302 students | Low |
| 13 | Sponsored room price | RM 5,000 | [UNSOURCED] | Low |
| 14 | Paying schools by month 12 | 5, 15 or 35 | [UNSOURCED] | Low |
| 15 | Conversion from school visit to paying school | 20% | [UNSOURCED] | Low |
| 16 | Cost per school visit | RM 120 | [UNSOURCED] | Low |
| 17 | Hosting and domain | RM 30 a month | [UNSOURCED] | Medium: static files are cheap to host |
| 18 | Content budget | RM 3,000 | [UNSOURCED] | Low |
| 19 | Contingency | 10% | [UNSOURCED] | Medium |
| 20 | Founders unpaid in year 1 | RM 0 | [UNSOURCED]: team decision | Medium |
| 21 | Buyer is the principal or school board | Not a number | [UNSOURCED] | Low |

## Appendix B: how the figures were calculated

Run `node financials.js > financials_output.txt` in this folder. The script holds every input from Appendix A and prints the market sizing, the month-by-month projection for each scenario, and the unit economics. No figure in this plan was calculated by hand.

