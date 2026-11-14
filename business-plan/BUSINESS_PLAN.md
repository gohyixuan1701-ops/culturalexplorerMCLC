# Cultural Explorer: Business Plan

**Malaysian Chinese Literature Center (马华文学馆)**  
SUC × FeedMe Startup Hackathon 2026 · Team Cultural Explorer  
Positioning revision: 15 November 2026 (Malaysia)

This plan follows the [judging criteria](../JUDGING_CRITERIA.md). Runtime scope was reviewed against GitHub main at `492bc68544ba548f3ae8bd2571dcf08e1e6d3a6b`. The audience and membership direction below were specified by the team. They replace the previous school-licence plan.

## 1. Executive summary

**Audience.** People engaged in Chinese studies and Malaysian Chinese literature research: Chinese Studies undergraduates, lecturers, postgraduate students, scholars, and others who need relevant literary documents and references for research.

**Need to validate.** Users need to identify relevant works, inspect author/publication context, and locate materials for further reading and research. Remote discovery can help them decide what to consult next. These are product hypotheses until observed with the relevant users.

**Product today.** A public 38-record catalogue and a 20-exhibit browser gallery, with Chinese/English interfaces, summaries, metadata and source links. The catalogue also has 28 author cards, seven sourced profiles and a local bookshelf. Gallery buttons open the standalone Vercel gallery. Full texts and membership transactions are not implemented.

**Business direction.** Free members access only free-level content. Paid members access all content offered on the platform. Pricing, billing and the precise free collection remain to be defined. There is no current paying-member or revenue claim.

**Evidence.** Existing pitch charts contain exploratory product and membership feedback. Their numbers are transcribed in [SURVEY_EVIDENCE.md](SURVEY_EVIDENCE.md). Current Forms questions/responses, sample size and respondent mix have not been verified in this revision.

## 2. Problem & customer validation — 25 marks

### Audience and research tasks

| Group | Typical task to validate | What to observe |
| --- | --- | --- |
| Chinese Studies undergraduates | Find a work/author for an assignment or reading list | Can they find a relevant record and verify its source? |
| Lecturers | Locate texts and publication context for teaching and research | Are the metadata, sources and document coverage useful and credible? |
| Postgraduate students | Explore a topic, author, edition or translation | Can they identify materials for a literature review and follow up on originals? |
| Scholars and other research users | Trace relevant Malaysian Chinese literary documents remotely | Does the collection support repeat research use? |

A reader may hold several roles. Do not count the same person repeatedly in market sizing. Institutions and the Centre may be collaborators or discovery channels; no institutional buying agreement is established.

### Problem statement

Relevant literary records, contextual information and materials can require searching across several sources or consulting a physical collection. Our hypothesis is that a focused catalogue, source links and an optional exhibition make that initial discovery easier.

The platform is a starting point for source discovery. It does not currently replace original documents, a full academic database, a research library or the physical collection.

### What the survey supports

Existing slides show a strong request for book excerpts and mixed stated willingness to subscribe. These are exploratory signals, not proof of market-wide demand or an observed purchase rate. Age distribution is not evidence of occupation; the individual-student price question cannot establish acceptable prices for lecturers or postgraduates.

See the evidence register for chart labels, values and missing verification. No form, response, chart denominator or respondent role has been changed or invented.

### Next validation

- Reconcile current Forms data: exact wording/options, sample size, per-question response counts, collection dates and respondent roles.
- Interview and observe users from each main audience group, using the same research tasks.
- Measure task completion, source-verification accuracy, time to a useful record and return intent.
- Test whether permission-cleared materials create enough value for a paid membership.
- Keep usability, content preference, willingness to pay and actual paid adoption as separate measures.

## 3. Solution & innovation — 20 marks

### Implemented

- Search and browse 38 bibliographic records; filter by genre, collection and edition; sort and use grid/list views.
- Inspect covers, summaries, author/publication information and edition-source links.
- Explore 20 selected exhibits in the [standalone gallery](https://cultural-explorer-roan.vercel.app/), with search, minimap and automatic travel.
- Choose Chinese or English interfaces. English edition coverage is partial; untranslated records retain Chinese text.
- Save catalogue bookmarks in the current browser.
- Explore three feature panels, 28 author cards and the bilingual mock-up terms.

### Research value to develop

Permission-cleared excerpts/documents, more complete author/context information and citation assistance are candidates for a membership service. Each needs content permissions, metadata review and user testing. They are not presented as implemented.

### Limits

No membership accounts, payment, renewal/cancellation, free/paid enforcement, full-text library, cross-device bookshelf, citation export or connected AI service is implemented. The historical quiz is removed. Real-device acceptance remains incomplete.

All catalogue gallery entry points now use one standalone gallery. The legacy catalogue `/gallery/` address redirects there. Catalogue data and root-gallery data still require separate maintenance.

### Alternatives and differentiation

| Alternative | User benefit | Our comparison to test |
| --- | --- | --- |
| Academic databases and library catalogues | Established metadata, sources and sometimes full texts | Focused Malaysian Chinese literature coverage and a simpler discovery path |
| Centre/publisher publications pages | Authoritative edition and availability information | Cross-record browsing and contextual discovery with links back to sources |
| Digital archives and cultural collections | Access to digitised heritage | Literature-specific documents and metadata; do not claim unique coverage without an audit |
| Virtual exhibitions | Visual exploration and cultural context | An optional 3D entry alongside direct catalogue browsing |

The 3D visit is optional. Research users should be able to reach useful records directly. No competitor feature, price or institutional coverage audit was performed in this revision.

## 4. Business model & market — 20 marks

### Membership

| Tier | Access |
| --- | --- |
| Free membership | Only the items designated as free-level content |
| Paid membership | All content made available on the platform |

The exact free selection, approved paid catalogue, membership fee, billing interval and renewal terms remain product decisions. There are no additional paid tiers in this plan.

Paid membership does not override copyright or imply that full books or unrestricted downloads are currently provided. Content must be permission-cleared for the intended paid use. Entitlements will need server enforcement; hiding static page links is insufficient.

### Market sizing

The market is people with relevant Chinese studies and literary research needs. A numerical estimate requires sources aligned with that audience.

| Measure | Definition | Current status |
| --- | --- | --- |
| TAM | Deduplicated people with relevant Chinese studies/research needs in a defined geography | Population data and geography not yet established |
| SAM | Those reachable through supported language, licensed coverage, institutions and channels | Requires a programme/community and content-coverage inventory |
| SOM | Members plausibly acquired and retained within a stated period | Requires observed reach, activation, paid conversion and retention |

Start with verified Chinese Studies programme directories, lecturer/researcher lists where appropriate, postgraduate communities, research associations and relevant readership communities. Deduplicate roles and institutions. Do not convert respondent percentages into national market shares.

Previous primary/secondary-school population counts, per-school prices and school-licence market values do not size this audience and are withdrawn from the current plan.

### Pricing evidence

The existing pitch reports individual-student annual preferences: free-only 37.5%, RM30–60 50%, RM61–120 12.5%, above RM120 0%. This is a price-testing signal, not a price decision. A majority price band within a small unverified sample is not a guaranteed conversion rate.

Test the value of the actual permitted content, acceptable billing periods, cancellation expectations and willingness to renew across the intended audience. Do not apply a student question to every research-user segment.

### Revenue and costs

Membership is the core commercial model. No commissioned-room, school-licence or grant revenue is included in the current model.

For monthly pricing:

> Revenue = sum of active paid members in each month × realised monthly price.

For annual pricing:

> Cash receipts = annual memberships purchased × realised annual price; recognised revenue depends on the service period and accounting policy.

Track content acquisition/licensing, digitisation, metadata/citation review, hosting/storage, payment fees, support, outreach and team compensation. Prices and costs require explicit inputs; no numeric launch forecast is claimed.

The optional [financial calculator](financials.js) uses annual member-equivalents to model a stated scenario. It is not a subscriber growth, renewal, tax, cash-flow or revenue-recognition forecast. Its default [output](financials_output.txt) states which inputs are missing.

### Acquisition and retention

1. Share the free tier through Chinese Studies programmes, postgraduate/research communities and literature associations, with their permission.
2. Demonstrate a concrete research task using the catalogue; keep the gallery as an optional introduction.
3. Offer a clearly bounded free collection and explain what full membership unlocks.
4. Measure return usage and content usefulness before expanding paid acquisition.
5. Test paid conversion and renewal when the content, accounts, permissions and payments are ready.

Potential institutions, publishers, authors and the Centre are intended collaborators, not confirmed partners or endorsers.

## 5. Execution & prototype — 20 marks

Public demos:

- [Catalogue](https://mahua-literature-library.thngyh.chatgpt.site/)
- [Standalone gallery](https://cultural-explorer-roan.vercel.app/)

The prototype demonstrates discovery and presentation. It does not demonstrate an operational paid membership service. Public availability and positive survey ratings do not establish revenue, academic effectiveness or institutional adoption.

See [PROJECT_STATUS.md](../PROJECT_STATUS.md) for implementation and verification boundaries. No application runtime or survey changes are part of this documentation revision.

## 6. Pitch & team — 15 marks

### Roadmap

| Stage | Work | Evidence needed |
| --- | --- | --- |
| Discovery | Reconcile survey and observe research tasks | Denominators, audience roles, task outcomes and recurring needs |
| Content | Define the free collection and secure paid-content permissions | Content inventory, licence scope, metadata review |
| Membership pilot | Implement accounts, entitlements and payment lifecycle | Access tests, payment/cancellation tests and usable content |
| Evaluation | Test usefulness, repeat use and paid uptake | Activation, paid member-periods, retention and support/cost data |
| Expansion | Add coverage based on demonstrated research needs | Repeat demand, sustainable costs and permissions |

No dates or customer counts in this roadmap are promises.

### Risks and responses

| Risk | Response |
| --- | --- |
| Content does not support meaningful research | Observe real tasks and prioritise requested, permission-cleared materials |
| Free alternatives are sufficient | Test incremental value and repeat use before committing to a price |
| Paid access is bypassable | Enforce entitlements and document delivery on the server |
| Copyright or paid-use permission is incomplete | Secure explicit licences before placing materials in the paid collection |
| Narrow survey sample or stale charts | Verify raw responses and report the sample honestly |
| Small or unclear market | Build a sourced, deduplicated audience estimate; avoid school proxies |
| Incomplete mobile accessibility | Test text enlargement, navigation and research tasks on actual devices |

### Team

Team Cultural Explorer, Southern University College. Existing pitch lists leader Goh Yi Xuan and members Lim Wet Jie, Chia Yi Yu, Lim Lu Haw and Thng Yi Hui. Verify spelling, responsibilities and relevant experience before final submission; no role claims are inferred from commit counts.

### Pitch structure

Use [PITCH_OUTLINE.md](PITCH_OUTLINE.md): audience and research task → exploratory evidence → product demo → membership access → market method → validation and next milestone. Remove school prices, school-count market charts and classroom-pilot requests.

## Sources and evidence boundaries

- Product: [README](../README.md) and [PROJECT_STATUS](../PROJECT_STATUS.md), based on the reviewed GitHub source.
- Team direction: explicit audience and membership instructions on 15 November 2026 (Malaysia).
- Existing pitch: [user-provided Canva deck](https://canva.link/hbtbbd8u39r9h41); chart transcriptions and their original-slide sources are in [SURVEY_EVIDENCE.md](SURVEY_EVIDENCE.md).
- Form: [team survey](https://docs.google.com/forms/d/1Au1FF90kzQSeSepXLT7Hf9abHnTn_Es31u1qwcrvDTE/edit#responses), read-only intent; current questions/responses could not be retrieved in this revision.
- Institutional context and publication attribution: [MCLC About](https://www.southern.edu.my/mclc/about.php) and [publications](https://www.southern.edu.my/mclc/chuban.php). These source links are not evidence of permission or partnership.

Earlier school-model calculations and source-check records remain accessible in Git history before this revision. They are not current market or financial evidence. No new market-source, content-rights, paid-demand or browser/device validation is claimed here.
