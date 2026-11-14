// Cultural Explorer business plan: every financial figure in BUSINESS_PLAN.md is computed here.
// Run:  node financials.js > financials_output.txt
// S = figure from a source opened on 14 Nov 2026 (see plan, Sources). U = [UNSOURCED ASSUMPTION].

const A = {
  // ---- market (sourced) ----
  sjkcSchools: 1303,            // S1 The Star, 20 Jan 2026 (Jiao Zong)
  sjkcPupils2024: 490514,       // S1
  sjkcPupilsDrop: 26526,        // S1
  sjkcShareUnder150: 0.5,       // S1 "half had fewer than 150 pupils"
  malayPupils: 41133,           // S2 The Star, 1 Jul 2026
  spmChinese2017: 60521,        // S4 The Star, 9 May 2026
  spmChinese2025: 46046,        // S4
  edtechLowUSDm: 300,           // S9 GlobalData, 2025 revenue (USD 0.3 billion)
  edtechHighUSDm: 1179.2,       // S8 IMARC, 2025 market size
  pandaiLiteMonthlyRM: 30,      // S11 Pandai blog, 2022
  pandaiPremiumMonthlyRM: 96,   // S11
  // ---- market (unsourced) ----
  indepSchools: 63,             // U  Dong Zong "60+3"; source PDF returned 404
  indepStudents: 82000,         // U  same
  usdToRm: 4.4,                 // U  exchange rate, used only for the top-down cross-check
  // ---- pricing (unsourced: our proposal) ----
  priceSjkc: 1200,              // U  RM per school per year
  priceIndep: 3600,             // U  RM per school per year
  priceRoom: 5000,              // U  RM per sponsored exhibition room, one-off
  // ---- costs (unsourced) ----
  hostingPerMonth: 30,          // U  static hosting and domain, RM
  contentOneOff: 3000,          // U  translation, proofreading, printing; spent evenly over months 1-3
  visitCost: 120,               // U  travel and materials per school visit, RM
  conversion: 0.2,              // U  paying schools per school visited
  contingency: 0.10,            // U  on all cash costs
  stipendPerMemberMonth: 500,   // U  sensitivity only: the plan assumes unpaid founders in year 1
  teamSize: 5,                  // contributors named by the team; git log shows 4 commit authors
  firstPayingMonth: 4           // months 1-3 are a free pilot term
};

const SCENARIOS = {            // U: paying customers by month 12
  conservative: {indep: 2, sjkc: 3, rooms: 0},
  base:         {indep: 5, sjkc: 10, rooms: 1},
  optimistic:   {indep: 10, sjkc: 25, rooms: 2}
};

const rm = n => 'RM ' + Math.round(n).toLocaleString('en-US');
const pct = (n, d = 1) => (n * 100).toFixed(d) + '%';
const out = [];
const p = (...s) => out.push(s.join(''));

// ---------- 1. Market ----------
const sjkcPupils = A.sjkcPupils2024 - A.sjkcPupilsDrop;
const sjkcPayable = Math.floor(A.sjkcSchools * (1 - A.sjkcShareUnder150));
const avgSjkc = sjkcPupils / A.sjkcSchools, avgIndep = A.indepStudents / A.indepSchools;
const tamSjkc = A.sjkcSchools * A.priceSjkc, tamIndep = A.indepSchools * A.priceIndep;
const samSjkc = sjkcPayable * A.priceSjkc, samIndep = tamIndep;
p('== 1. MARKET ==');
p('SJKC pupils 2025 = ', A.sjkcPupils2024.toLocaleString('en-US'), ' - ', A.sjkcPupilsDrop.toLocaleString('en-US'), ' = ', sjkcPupils.toLocaleString('en-US'));
p('SJKC enrolment change 2024 to 2025 = ', pct(-A.sjkcPupilsDrop / A.sjkcPupils2024));
p('Average pupils per SJKC = ', avgSjkc.toFixed(0));
p('SJKCs with 150+ pupils (payable tier) = floor(', A.sjkcSchools, ' x ', 1 - A.sjkcShareUnder150, ') = ', sjkcPayable);
p('Malay pupils in SJKC = ', A.malayPupils.toLocaleString('en-US'), ' (source states 9.01% of enrolment)');
p('SPM Chinese candidates 2017 to 2025 = ', A.spmChinese2017.toLocaleString('en-US'), ' to ', A.spmChinese2025.toLocaleString('en-US'),
  ' = ', pct((A.spmChinese2025 - A.spmChinese2017) / A.spmChinese2017));
p('[U] Average students per independent school = ', avgIndep.toFixed(0));
p('Implied price per pupil per year: SJKC ', (A.priceSjkc / avgSjkc).toFixed(2), ', independent ', (A.priceIndep / avgIndep).toFixed(2), ' (RM)');
p('Pandai Premium Lite for one student for a year = 12 x ', A.pandaiLiteMonthlyRM, ' = ', rm(12 * A.pandaiLiteMonthlyRM),
  '; our SJKC price per pupil is ', pct((A.priceSjkc / avgSjkc) / (12 * A.pandaiLiteMonthlyRM)), ' of that');
p('');
p('TAM (every school pays): SJKC ', rm(tamSjkc), ' + independent [U] ', rm(tamIndep), ' = ', rm(tamSjkc + tamIndep), ' per year');
p('SAM (SJKC with 150+ pupils, plus independent): ', rm(samSjkc), ' + [U] ', rm(samIndep), ' = ', rm(samSjkc + samIndep), ' per year');
p('SAM using sourced school counts only (SJKC): ', rm(samSjkc), ' per year');
const samTotal = samSjkc + samIndep;
p('Top-down cross-check [U rate ', A.usdToRm, ']: Malaysia edtech 2025 = ', rm(A.edtechLowUSDm * 1e6 * A.usdToRm), ' to ', rm(A.edtechHighUSDm * 1e6 * A.usdToRm));
p('SAM as share of edtech market = ', pct(samTotal / (A.edtechHighUSDm * 1e6 * A.usdToRm), 3), ' to ', pct(samTotal / (A.edtechLowUSDm * 1e6 * A.usdToRm), 3));

// ---------- 2. Twelve-month projection ----------
// Customers sign evenly from firstPayingMonth to month 12. Licence and room fees are counted as cash in the month signed.
function schedule(total){
  const months = 12 - A.firstPayingMonth + 1, s = Array(12).fill(0); let done = 0;
  for (let k = 1; k <= months; k++) { const cum = Math.round(total * k / months); s[A.firstPayingMonth - 1 + k - 1] = cum - done; done = cum; }
  return s;
}
const results = {};
p(''); p('== 2. TWELVE-MONTH PROJECTION (cash basis) ==');
for (const [name, sc] of Object.entries(SCENARIOS)) {
  const sIndep = schedule(sc.indep), sSjkc = schedule(sc.sjkc), sRoom = schedule(sc.rooms);
  const schools = sc.indep + sc.sjkc, visits = Math.ceil(schools / A.conversion), visitsPerMonth = visits / 12;
  let revenue = 0, cost = 0, cash = 0, low = 0; const rows = [];
  for (let m = 0; m < 12; m++) {
    const rev = sIndep[m] * A.priceIndep + sSjkc[m] * A.priceSjkc + sRoom[m] * A.priceRoom;
    const c = (A.hostingPerMonth + (m < 3 ? A.contentOneOff / 3 : 0) + visitsPerMonth * A.visitCost) * (1 + A.contingency);
    revenue += rev; cost += c; cash += rev - c; low = Math.min(low, cash);
    rows.push(`  M${String(m + 1).padStart(2)}  revenue ${rm(rev).padStart(9)}  cost ${rm(c).padStart(8)}  cumulative ${rm(cash).padStart(10)}`);
  }
  const licence = sc.indep * A.priceIndep + sc.sjkc * A.priceSjkc, rooms = sc.rooms * A.priceRoom;
  const stipends = A.teamSize * A.stipendPerMemberMonth * 12;
  results[name] = {schools, visits, licence, rooms, revenue, cost, net: revenue - cost, low, stipends};
  p(''); p(`-- ${name}: ${sc.indep} independent + ${sc.sjkc} SJKC paying by month 12, ${sc.rooms} sponsored room(s) --`);
  rows.forEach(r => p(r));
  p(`  Licence revenue ${rm(licence)} + sponsor revenue ${rm(rooms)} = ${rm(revenue)}`);
  p(`  School visits needed at ${pct(A.conversion, 0)} conversion = ${visits}`);
  p(`  Cash costs ${rm(cost)}; net ${rm(revenue - cost)}; lowest cumulative cash ${rm(low)}`);
  p(`  Share of SAM schools signed = ${pct(schools / (sjkcPayable + A.indepSchools), 2)}`);
  p(`  Sensitivity, if ${A.teamSize} members drew ${rm(A.stipendPerMemberMonth)} a month: stipends ${rm(stipends)}, net ${rm(revenue - cost - stipends)}`);
}

// ---------- 3. Unit economics ----------
const cac = A.visitCost / A.conversion * (1 + A.contingency);
const fixed = (A.hostingPerMonth * 12 + A.contentOneOff) * (1 + A.contingency);
const blended = (5 * A.priceIndep + 10 * A.priceSjkc) / 15;     // base-case mix
p(''); p('== 3. UNIT ECONOMICS ==');
p('Cost to sign one school = visit cost / conversion x (1 + contingency) = ', A.visitCost, ' / ', A.conversion, ' x ', 1 + A.contingency, ' = ', rm(cac));
p('First-year margin per SJKC = ', rm(A.priceSjkc - cac), ' (', pct((A.priceSjkc - cac) / A.priceSjkc, 0), '); per independent school = ', rm(A.priceIndep - cac),
  ' (', pct((A.priceIndep - cac) / A.priceIndep, 0), ')');
p('Fixed cash costs for the year (hosting + content, with contingency) = ', rm(fixed));
p('Break-even, SJKC only = ', Math.ceil(fixed / (A.priceSjkc - cac)), ' schools; at the base-case mix (blended price ', rm(blended), ') = ',
  Math.ceil(fixed / (blended - cac)), ' schools');
p('Break-even with stipends of ', rm(A.teamSize * A.stipendPerMemberMonth * 12), ' at the base-case mix = ',
  Math.ceil((fixed + A.teamSize * A.stipendPerMemberMonth * 12) / (blended - cac)), ' schools');
p('Conversion sensitivity (cost to sign one school): ', [0.05, 0.1, 0.2, 0.3].map(c => `${pct(c, 0)} -> ${rm(A.visitCost / c * (1 + A.contingency))}`).join(', '));

p(''); p('== 4. MACHINE-READABLE SUMMARY =='); p(JSON.stringify({sjkcPupils, sjkcPayable, tam: tamSjkc + tamIndep, sam: samTotal, samSjkc, results, cac, fixed}, null, 1));
console.log(out.join('\n'));
