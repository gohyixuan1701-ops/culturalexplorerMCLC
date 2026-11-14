// Cultural Explorer: optional membership scenario calculator.
// No default prices, audience counts or forecasts are assumed.
// Run: node financials.js [scenario.json]
'use strict';
const fs = require('node:fs');
const FIELDS = ['annualPriceRM', 'paidMemberYears', 'fixedCostsRM', 'variableCostPerMemberYearRM', 'paymentFeeRate'];

function calculate(input) {
  if (!input || Array.isArray(input) || typeof input !== 'object') throw new Error('Scenario must be an object.');
  const unknown = Object.keys(input).filter(key => !FIELDS.includes(key));
  if (unknown.length) throw new Error('Unknown inputs: ' + unknown.join(', '));
  for (const key of FIELDS) {
    if (typeof input[key] !== 'number' || !Number.isFinite(input[key]) || input[key] < 0) {
      throw new Error(key + ' must be an explicit finite non-negative number.');
    }
  }
  if (input.annualPriceRM <= 0) throw new Error('annualPriceRM must be greater than zero.');
  if (input.paymentFeeRate > 1) throw new Error('paymentFeeRate must be between 0 and 1.');
  const revenueRM = input.annualPriceRM * input.paidMemberYears;
  const paymentFeesRM = revenueRM * input.paymentFeeRate;
  const variableCostsRM = input.variableCostPerMemberYearRM * input.paidMemberYears;
  const totalCostsRM = input.fixedCostsRM + variableCostsRM + paymentFeesRM;
  const contributionPerMemberYearRM = input.annualPriceRM * (1 - input.paymentFeeRate) - input.variableCostPerMemberYearRM;
  const result = {
    inputs: input,
    revenueRM,
    paymentFeesRM,
    variableCostsRM,
    totalCostsRM,
    netRM: revenueRM - totalCostsRM,
    contributionPerMemberYearRM,
    breakEvenMemberYears: contributionPerMemberYearRM > 0 ? input.fixedCostsRM / contributionPerMemberYearRM : null,
    breakEvenWholeAnnualMemberships: contributionPerMemberYearRM > 0 ? Math.ceil(input.fixedCostsRM / contributionPerMemberYearRM) : null
  };
  if (Object.values(result).some(value => typeof value === 'number' && !Number.isFinite(value))) {
    throw new Error('Scenario exceeds the supported numeric range.');
  }
  return result;
}

function main(args) {
  if (!args.length) {
    console.log([
      'CULTURAL EXPLORER — MEMBERSHIP MODEL',
      'Audience: Chinese studies and Malaysian Chinese literature research users.',
      'Free membership: free-level content only.',
      'Paid membership: all content offered on the platform.',
      '',
      'No numeric forecast: membership price, paid member-periods and costs are not approved inputs.',
      'The previous school-licence market and revenue scenarios are retired.',
      '',
      'Optional scenario: node financials.js scenario.json',
      'Required numeric inputs: ' + FIELDS.join(', '),
      'paidMemberYears is the sum of paid service periods expressed in years, not a year-end headcount.',
      'Revenue = annualPriceRM x paidMemberYears.',
      'Costs = fixedCostsRM + variableCostPerMemberYearRM x paidMemberYears + revenue x paymentFeeRate.',
      'This is a scenario calculation, not actual sales, TAM/SAM/SOM, subscriber growth, cash flow or tax advice.'
    ].join('\n'));
    return;
  }
  if (args.length !== 1) throw new Error('Usage: node financials.js [scenario.json]');
  const result = calculate(JSON.parse(fs.readFileSync(args[0], 'utf8')));
  console.log('USER-SUPPLIED MEMBERSHIP SCENARIO — NOT AN APPROVED FORECAST');
  console.log(JSON.stringify(result, null, 2));
}

module.exports = { calculate };
if (require.main === module) {
  try { main(process.argv.slice(2)); }
  catch (error) { console.error('Error: ' + error.message); process.exitCode = 1; }
}
