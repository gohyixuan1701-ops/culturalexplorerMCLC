# Verification and validation report

> **Scope update:** the report below records checks against `a6d089c`, not the current prototype or the revised plan. Product statements such as 28 exhibited books, a shipped quiz, universal placeholders, no public demo and CDN-only rendering are historical. Use [PROJECT_STATUS.md](../PROJECT_STATUS.md) and the updated plan for current implementation.
>
> In this documentation refresh, `financials.js` was rerun and matched `financials_output.txt` ignoring trailing whitespace. Its assumptions were not changed. The standalone source now exhibits 20 records; the separate catalogue contains 38. Public file comparisons and catalogue logic checks passed, but no new browser/device checks or external market-source verification were performed. The original rubric rating and source checks below have not been re-certified for the revised plan.

For `BUSINESS_PLAN.md`, run on 14 November 2026 against repository commit `a6d089c` (`origin/main`).

Result in one line: 5 checks pass, 1 passes with a caveat, and the rubric coverage has 1 Strong, 3 Partial and 1 Missing-in-part criterion that cannot be fixed by writing.

## Verification

### a. Arithmetic re-run and reconciliation: PASS

- `node financials.js` was run a second time and the output compared with `financials_output.txt` using `diff`. Result: identical.
- A script checked 44 figures quoted in the plan against the script output (market sizes, prices, margins, all three scenarios, percentages). Result: `checked 44 figures; mismatches 0`.
- Visits (25, 75, 175) and break-even counts (7, 3, 26 schools) were matched separately. Result: all found in the output.
- Two figures in the plan are simple derivations not printed by the script: "about 19 visits a month" (175 ÷ 9 = 19.4) and "652 schools under 150 pupils" (1,303 − 651). Both were checked with code.

### b. Sources re-opened: PASS, with one caveat

All 13 cited pages were opened again after the draft was written, and each claim was compared with the page text.

| Tag | Result | Evidence on the page |
|---|---|---|
| S1 | Pass | "fell by 26,526 last year from a total of 490,514 in 2024"; "half had fewer than 150 pupils and 13 of these schools had fewer than 10 pupils" |
| S2 | Pass | "As of 31 May 2026, 41,133 Malay students, or 9.01% of total SJKC enrolment" |
| S3 | Pass | "As of 30 November 2025, there are 1,303 Chinese primary schools ... with a total of 463,988 students" |
| S4 | Pass | "60,521 candidates in 2017, dropping to 48,420 in 2020 and 46,046 in 2025" |
| S5 | Pass | "non-Chinese enrolment percentage rose from 12% to 20% in the same period" |
| S6 | Pass | Chinese text states 26 April 1998, first and to date only such centre; address in Skudai, Johor. This is the Centre's own description, not independently confirmed |
| S7 | Pass | "a total of 5.3 million users of various levels" |
| S8 | Pass | "reached USD 1,179.2 Million in 2025" |
| S9 | Pass | "recorded a revenue of $0.3 billion in 2025" |
| S10 | Partly | The three yearly prices (RM 960, RM 880, RM 800) are on the page. Which price applies to how many children is not in the text we could read |
| S11 | Pass | "just RM30/month"; "Pandai Premium only at RM96/month"; post dated 1 June 2022 |
| S12 | Pass | "more than 2000 cultural institutions"; "a non-commercial initiative" |
| S13 | Pass | "Digital Content Grant (DCG2026)"; "APPLICATION CLOSED" |

Sources that could **not** be opened, and what was done:

| Intended claim | Problem | Action in the plan |
|---|---|---|
| Independent school count (63) and students (about 82,000), from Dong Zong statistics | Both report files returned "not found" | Marked [UNSOURCED ASSUMPTION] everywhere; a sourced-only SAM is shown beside the full one |
| Pandai sponsorship price of RM 60 to RM 80 per student | Page not found; the replacement pages show no price | Removed. The price comparison now uses the RM 30 a month consumer price (S11) |
| MDEC grant ceiling of RM 150,000 | Page not found; the main grant page shows no amounts | Removed. Grants are not counted in any projection |
| Non-Chinese share of 18.52% in 2024 | Not on the ISEAS page | Replaced with the 12% to 20% figure that is on the page |
| Prices for Ezhishi, KooBits, Artsteps | Not shown in page text | Left out of the competitor table |

Limit of this check: pages were read through a text-extraction tool. Two long pages (S3, S5) were cut short, but the quoted sentences were in the part that was read.

### c. Length and format: PASS

- Format: Markdown, as agreed. Length: no limit was set. The plan is about 4,560 words.
- Section order follows the brief. Every rubric criterion name appears in a heading.
- A scan found 0 em or en dashes.

## Validation

### d. Rubric coverage

Criteria and marks are from `JUDGING_CRITERIA.md` (commit `a6d089c`).

| Criterion | Marks | Section | Rating | Reason |
|---|---|---|---|---|
| Problem & customer validation | 25 | 2 | Partial | The problem has four sourced facts. Customer validation is missing: no interviews, no pilot. Writing cannot fix this |
| Solution & innovation | 20 | 3 | Partial | The solution is real and described from the code. The innovation claim (a walkable class activity) is reasoned but untested with users, and the reuse claim is unproven |
| Business model & market | 20 | 4, 5 | Partial | Complete model with a bottom-up size, a top-down cross-check, three scenarios and unit economics. Prices, adoption and independent-school counts are unsourced |
| Execution & prototype | 20 | 6 | Strong | Thirteen shipped features, each tied to a line or commit. Limits are stated |
| Pitch & team | 15 | 7 | Missing in part | Roadmap and risks are covered. Team names, roles and skills are not in the repository and were not invented. The pitch itself is outside this document |

Fixed during validation: the price anchor was changed to a source that could be opened; a sourced-only SAM row was added; a stipend sensitivity was added so "profitable in year 1" is not overstated; a "Solution & innovation" section was added because the brief's section list had no heading for that criterion.

Cannot be fixed by writing: customer validation, permission from the Centre, team details.

### e. Product claims against the repository: PASS

Each feature in section 6 was located in `cultural explorer.html` at `origin/main` by searching for its function or rule. All 13 were found at the line numbers given.

Other checks:

- 28 books: 28 entries in `ITEMS` carry a `cover` field, and `covers.js` holds 28 images. The counts match; the file names were not matched one by one.
- Quiz of 6 or 10 questions: buttons at lines 1554 and 1555.
- Placeholder text (line 381) and the AI label (line 434) are reported as not real content.
- Lesson packs, payments, saved results, Malay, offline use, a public link, sponsored rooms and AI chat appear only under Roadmap.
- "No traction" matches the repository: no user data, analytics or pilot records exist.

Not checked: the features were confirmed to exist in the code at this commit, but the app was not run again at `a6d089c`. The last run in a browser was at commit `15ce670`, before the cover-photo change.

### f. Five questions a skeptical judge is likely to ask

| Question | The plan's answer | Gap |
|---|---|---|
| 1. Has any teacher said they want this, or would pay? | No. Section 2 says so and gives a two-week interview plan | Full gap. This is the largest risk to the score on the 25-mark criterion |
| 2. Do you have the right to use these books and covers? | No written permission. Section 7 lists it as the top risk, with drawn covers as a fallback | Full gap until the Centre is asked |
| 3. The market is about RM 1 million a year and shrinking. Why is this a business? | Section 4 states the ceiling and the 5.4% decline, and points to sponsored rooms and reuse for other collections | Partial: the growth streams are unpriced and unbuilt |
| 4. Where does RM 1,200 come from? | About RM 3 per pupil, 0.9% of a year of Pandai Premium Lite. Marked as unsourced | Partial: reasoned but not tested with a buyer |
| 5. Schools get DELIMa and Google tools for nothing. Why pay you? | Section 4 argues depth on one subject and whole-class use | Partial: we did not confirm that DELIMa is free or whether the Centre is on Google Arts & Culture |

## What was not checked

- The app at the latest commit in a browser.
- Whether the repository on GitHub has changed since `a6d089c` was fetched.
- Any cost figure against a real quote.
- The independent-school figures against any source.
- Whether judges can open the repository. The README says it is private.

