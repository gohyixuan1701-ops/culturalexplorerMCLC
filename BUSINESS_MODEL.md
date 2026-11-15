# Cultural Explorer: membership business model

Malaysian Chinese Literature Center (马华文学馆) · Updated 15 November 2026 (Malaysia).

## Who it is for

**People engaged in Chinese studies and Malaysian Chinese literature research, including Chinese Studies undergraduates, lecturers, postgraduate students, scholars, and anyone who needs relevant literary documents and references for research.**

我们的主要服务对象是中文学习与研究群体，包括中文系学生、讲师、研究生、学者，以及需要查找马华文学文献和资料的人。

This positioning replaces the previous primary/secondary-school customer model. Cultural interest can bring people into the free tier; academic study and research are the central use cases.

## Membership offer

| Tier | Content entitlement | Definition |
| --- | --- | --- |
| Free membership | Free-level content only | A selected introductory collection and samples; the exact free collection must be defined before launch |
| Paid membership | All content offered on the platform | Access to the full platform collection and research materials included in membership |

There is one paid content tier in this proposal. Paid access means all content actually offered by the platform; it does not claim that complete books, unrestricted downloads, or third-party databases are already available. Publication permissions and any use conditions still apply.

The membership price, billing interval, free-content boundary, renewal rules and cancellation policy have not been fixed by the team. Survey price preferences are evidence to investigate, not an approved selling price.

## Current prototype and planned service

The current public demos offer a 38-record catalogue, a 20-exhibit gallery, summaries, edition metadata, source links, author information and a browser-local bookshelf. All catalogue gallery links use the [standalone gallery](https://cultural-explorer-roan.vercel.app/).

The demos do **not** implement membership accounts, payment, server-enforced free/paid permissions, full-text delivery or subscription management. The tier table describes the planned service. A static demo and a visible “paid” label are not access enforcement.

Research-oriented candidates include permission-cleared excerpts/documents, fuller author/context records and citation assistance. These are roadmap items to test, not promises of shipped functionality.

## Evidence and pricing

The existing pitch charts report 75% requesting excerpts, 50% “probably subscribe”, and 50% selecting RM30–60/year in an individual-student price question. See [SURVEY_EVIDENCE.md](business-plan/SURVEY_EVIDENCE.md) for all chart values and their source limits. These figures were read from existing slides, not verified against current Google Forms responses. They do not establish actual payment, renewal or lecturer/postgraduate pricing.

No numeric TAM/SAM/SOM or revenue forecast is approved for this revised audience. The earlier school-count estimates, school licence prices and sponsored-room revenue scenarios are retired. Current revenue logic is:

> Membership revenue = realised price × paid member-periods.

The [calculator](business-plan/financials.js) requires explicit membership and cost inputs for a scenario. Its no-input output intentionally makes no revenue forecast.

## Validation and delivery

1. Reconcile the survey questions, denominators, respondent roles and collection dates with the original responses, without editing the form.
2. Observe title-finding, reference-checking and document-discovery tasks with undergraduates, lecturers and postgraduates.
3. Define which materials are free and secure permission for the complete paid collection.
4. Test individual membership pricing, repeat usage, conversion and renewal intent across those groups.
5. Implement accounts, payment verification and server-enforced entitlements before selling access.

See the [detailed business plan](business-plan/BUSINESS_PLAN.md), [project status](PROJECT_STATUS.md) and [verification report](business-plan/VNV_REPORT.md).
