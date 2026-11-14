# Cultural Explorer: proposed business model

Team **Cultural Explorer** · SUC × FeedMe Startup Hackathon 2026

This is the short summary of [the detailed business plan](business-plan/BUSINESS_PLAN.md). It replaces the earlier three-year sketch. [PROJECT_STATUS.md](PROJECT_STATUS.md) is the current implementation reference; the market research remains the plan's original research snapshot.

## Current prototype and proposed product

The public prototype offers a 20-exhibit 3D gallery and a separate 38-record catalogue. It provides covers, summaries, publication/translation information, discovery controls, and a catalogue bookshelf. It does not provide complete book texts, a class quiz, teacher dashboards, saved class results, subscriptions or payments.

The **proposed** commercial model is a free discovery experience, with schools paying for future lesson packs and teacher tools, and sponsors paying for future commissioned exhibitions. These paid features are not implemented or validated with customers.

## Customers and pricing assumptions

| Segment / offer | Proposal | Evidence boundary |
| --- | --- | --- |
| Chinese independent secondary schools | First outreach target; RM 3,600 per school/year | School count and buyer demand remain assumptions as labelled in the detailed plan |
| SJKCs with sufficient enrolment | RM 1,200 per school/year | Pricing and willingness to pay are untested |
| Small-school/community access | Free or sponsored access | Sponsorship agreements are not established |
| Commissioned exhibition | RM 5,000 per room in the calculator | Future offer, not a shipped product or signed sale |

Partners named in the plan are intended collaborators, not confirmed partnerships. No customer interviews, school pilots, paid customers or written content-permission records are established by the repository.

## Financial model

The calculator in [business-plan/financials.js](business-plan/financials.js) and [recorded output](business-plan/financials_output.txt) are the source of financial arithmetic. Run `node financials.js` from `business-plan/`.

| Twelve-month scenario | Revenue | Cash costs | Net before student-team stipends |
| --- | ---: | ---: | ---: |
| Conservative | RM 10,800 | RM 6,996 | RM 3,804 |
| Base | RM 35,000 | RM 13,596 | RM 21,404 |
| Optimistic | RM 76,000 | RM 26,796 | RM 49,204 |

These are projections, not actual revenue. With the model's additional RM 30,000 annual stipend assumption, the base-case result becomes **RM -8,596**.

The calculator's full assumed SAM is RM 1,008,000/year; the SJKC-only calculation is RM 781,200/year. Do not describe the full SAM as independently verified: the detailed plan labels the independent-school inputs and adoption/conversion rates as assumptions. Grants are not included in projected revenue.

## Validation before commercial claims

1. Interview teachers and school decision-makers about preparation time, current teaching methods, device access, and purchasing authority.
2. Observe a trial using the currently available gallery/catalogue. A quiz-based pilot first requires an implemented and tested quiz; it is not available now.
3. Obtain written rights/permission for intended cover, excerpt and literary-content use.
4. Validate pricing and compare the proposed lesson offer with confirmed alternatives.
5. Record measured pilot/adoption results before revising forecasts or claiming educational impact.

See [the detailed plan](business-plan/BUSINESS_PLAN.md) for market sources, costs, scenarios, risks and roadmap, and [its verification report](business-plan/VNV_REPORT.md) for the original source-check scope. External source pages were not revalidated in this documentation refresh.
