# Cultural Explorer: Business Plan

**The Digital Malaysian Chinese Literature Centre (马华文学馆)**
SUC × FeedMe Startup Hackathon 2026 · Team Cultural Explorer · 14 November 2026

How to read this plan:

- Section headings carry the rubric's criterion names from `JUDGING_CRITERIA.md`, so each can be scored directly.
- The product is described as it exists at commit `a6d089c` on `main`. Anything not built is listed under Roadmap.
- A number followed by a source tag such as [S1] was confirmed on the original page on 14 November 2026. The list is in the Sources section.
- **[UNSOURCED ASSUMPTION]** marks a number with no confirmed source. These are our own estimates, with the arithmetic shown.
- Every financial figure is produced by `financials.js`; its output is in `financials_output.txt`.

---

## 1. Executive summary

**Problem.** Fewer young Malaysians are reaching Chinese literature. Candidates for SPM Chinese fell from 60,521 in 2017 to 46,046 in 2025, a drop of 23.9% [S4]. Chinese primary school enrolment fell by 26,526 in one year, to 463,988 [S1]. The country's only Malaysian Chinese literature centre is one location in Skudai, Johor [S6], which most students will never visit.

**Product.** Cultural Explorer is a 3D literature centre that runs in a browser. A class walks a gallery of 28 books published by the Centre, opens each one as a flip book, and competes in a two-team quiz. It works in Chinese and English. A working prototype is in the repository.

**Business model.** The walk-through is free. Schools pay a yearly licence for lesson material built on it, and cultural sponsors pay to add exhibition rooms. The lesson material is not built yet (Roadmap).

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
3. Run one classroom trial of the team quiz and record how many students finish it and what the teacher says.

What would count as a pass: at least three of five teachers say they would use it in a lesson, and at least one school agrees to a free pilot term.

---

## 3. Solution & innovation (20 marks)

### What the product does today

A teacher opens one web page on the classroom projector. There is nothing to install and no account.

- **Walk in.** A 3D entrance and gallery corridor that the class moves through with the keyboard, mouse or touch.
- **Find a book.** Search, a catalogue with genre filters, and a clickable minimap. Selecting a book walks you to it.
- **Open it.** Each book opens as a flip book with its cover photo, summary and publication details.
- **Compete.** A red-team and blue-team quiz with 6 or 10 questions, generated from the book data.
- **Two languages.** The interface switches between Chinese and English.

### What is new about it

- **A place, not a list.** The usual way to put a collection online is a web page of titles. This is a room a class can walk through together, which suits a projector and a group.
- **Built for a lesson.** The quiz turns browsing into a class activity with two teams and a score.
- **No barrier to entry.** One HTML file plus a cover-image file. No build step, no backend, no login.
- **Reusable.** The gallery is generated from a list of books in the code. A different collection can be loaded by changing that list. We have not yet done this for a second collection.

### Limits we state up front

- The books cannot be read in the product. Only titles, summaries and publication details are shown.
- The quiz tests facts about the books (author, year, genre), not understanding of the texts.
- English summaries and author introductions are placeholder text.
- It needs an internet connection to load the 3D engine.

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
| **Google Arts & Culture** | Online collections from more than 2,000 cultural institutions [S12] | Described as non-commercial and accessible to anyone [S12] | Look-only. A web search on 14 November 2026 found no partner page for the Centre; this was a search, not a full check of the site. No class quiz |
| **Scanned 3D tours** (Matterport type) | A realistic walk through a real building, made by scanning it | Not confirmed | Needs a real exhibition room and scanning equipment. Shows the room, not the inside of a book |
| **Build-your-own virtual galleries** (Artsteps, Kunstmatrix) | A 3D room where anyone can hang pictures | Not confirmed | Made for pictures on walls. No book data, search, language switch or quiz |
| **Literature museums online** (for example Taiwan's National Museum of Taiwan Literature) | A virtual museum and a 3D game built on its own collection | Not researched | Covers Taiwan literature, not Malaysian Chinese literature. We did not confirm how its virtual museum works today |
| **Online libraries and catalogues**, including the Centre's own publications page | Lists of books with search; some lend the full e-book | Not researched | A list and a search box. No place to walk through and nothing for a class to do together |
| **Visiting the Centre in person** | The physical collection in Skudai, Johor [S6] | Travel cost not researched | One location; most schools are far away |
| **Textbook and teacher only** | The status quo | No added cost | No visual or interactive element |

We looked for prices for Ezhishi and KooBits and could not confirm any, so they are left out.

The four rows on virtual museums and online libraries were added on 14 November 2026 from web search results. Those pages were not opened one by one (two returned errors), so the rows quote no prices or figures and carry no source tags.

### Differentiation

A 3D walk-through is not new: virtual museums and gallery builders already offer one. What we found nowhere else is the combination below.

- **A museum where the exhibits open.** A virtual museum lets you look at objects, and an online library gives you a list. Here you walk past a book and then open it.
- **The same literature in two languages.** One wall shows works with no English translation; the other shows works published in English. The language button switches each translated work between its Chinese and English editions.
- **No room and no scanning needed.** The gallery is generated from a list of books, where a scanned tour needs a physical exhibition and equipment.
- **Single subject, done in depth.** The general platforms cover every subject thinly. We cover one collection as a place to visit.
- **Group use.** The team quiz is designed for one projector and a whole class, where most learning apps assume one student per device.
- **Price position.** Our proposed price works out at about RM 3.37 per pupil per year. That is 0.9% of one year of Pandai Premium Lite for one student (12 × RM 30 = RM 360 [S11]). It is priced as a small add-on, not a platform.

Where we are weaker: the product is 3D in a browser, not headset VR; it shows covers, summaries and details, not the full text that an e-library lends; and its graphics are simpler than a scanned tour.

What would make this wrong: a ministry or Google collection that already includes the Centre's material, a virtual museum of Malaysian Chinese literature that our search missed, or teachers telling us a quiz on book facts is not useful in a lesson.

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

No users, no pilots, no revenue, no letters of intent, no partnership agreements. The repository is private, so the product has had no public exposure.

### Product status

Shipped, with evidence at commit `a6d089c`. Line numbers refer to `cultural explorer.html`.

| Feature | Evidence |
|---|---|
| 3D entrance and gallery with tone-mapped rendering | Line 482; scene rebuilt in commit `15ce670` |
| 28 books in three series | `ITEMS` list; original data in commit `48308d4` |
| Cover photographs for the books | `covers.js` (commit `8731baf`), used at line 1282 (commit `0cee968`) |
| Flip book and details panel | `showBook`, line 1331 |
| Introduction to the Centre and its history | `openCentre`, line 1391 |
| Search that ignores case, spacing and punctuation | `runSearch`, line 1165; commit `1caf522` |
| Clickable minimap and automatic travel | `drawMap`, line 1626; `travelTo`, line 1088 |
| Catalogue with genre filters | `renderCat`, line 1502; commit `0c19a6d` |
| Welcome guide on first visit | `renderGuide`, line 1490; commit `0c19a6d` |
| Two-team quiz, 6 or 10 generated questions | `buildQuestions`, line 1531; commit `0c19a6d` |
| Chinese and English interface | `switchLang`, line 1606; commit `1caf522` |
| Author box listing the author's other books | `openAuthor`, line 1447; commit `1caf522` |
| Phone layout | Style rule at line 240; commit `15ce670` |

In the product but not real content:

- Author introductions and English book summaries are placeholder text (line 381).
- The "ask a question about this book" area is a label only. No AI service is connected (line 434).

Testing: the team's notes in `EVALUATION.md` record manual checks in one desktop browser and one phone-sized window. There are no automated tests. It has not been tried on a real phone or in a classroom.

Stack: one HTML file, one cover-image file, Three.js r128 loaded from a public CDN. No backend, database or accounts.

---

## 7. Pitch & team (15 marks): roadmap, risks and mitigations, team

### Roadmap

Nothing in this table is built.

| When | Item |
|---|---|
| Months 1 to 3 | Teacher interviews and one classroom trial |
| Months 1 to 3 | Written permission from the Centre for covers and excerpts |
| Months 1 to 3 | Public hosted link; bundle the 3D engine for offline use |
| Months 1 to 3 | Lesson packs for five books: excerpt, comprehension questions, worksheet |
| Months 1 to 3 | Replace placeholder author introductions and English summaries |
| Months 4 to 8 | School licence and payment; saved class results; teacher view |
| Months 4 to 8 | Malay interface |
| Months 9 to 12 | First sponsored exhibition room; second collection on the same platform |
| Not scheduled | AI question-and-answer about a book |

### Risks and mitigations

| Risk | Likelihood | Effect | Mitigation |
|---|---|---|---|
| No permission to use covers and texts. The repository has no licence or permission record, and the cover photos come from the Centre's website | High until asked | The product cannot be published or sold | Ask the Centre first, before any sales. Fall back to drawn covers, which the code already supports |
| Teachers do not see the problem as worth paying for | Unknown | No revenue | Interviews and a free pilot before building paid features |
| The market is small (about RM 1 million a year) and shrinking (enrolment down 5.4%) | Certain | Caps licence revenue | Sponsored rooms and reuse for other collections |
| Schools prefer free ministry and Google tools | Medium | Slower sales | Position as an add-on at about RM 3 per pupil; keep the walk-through free |
| School visits convert below 20% | Medium | Primary-school licences lose money in year 1 | Sell to independent schools first, where the margin is 82% |
| No internet in the classroom | Medium | Demo fails | Bundle the 3D engine locally |
| A student team with limited time | High | Delays | Three-month scope limited to five books |

### Team

Team name: Cultural Explorer, Southern University College.

The repository shows four commit authors on `main`: Chia Yi Yu (4 commits), yxyy7788 (4), Lim Lu Haw (2) and Thngyh (2). The team has five members.

**To be completed by the team before submission:** each member's full name, course, role in the project, and one relevant skill or experience. This plan does not invent them.

What the commit history does show: within two days the team shipped a working 3D prototype, cover photography for all listed books, a class quiz, a bilingual interface, a README and this plan's supporting documents.

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
