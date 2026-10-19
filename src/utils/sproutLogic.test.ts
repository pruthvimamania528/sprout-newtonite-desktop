import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validatePAN,
  validateAadhaar,
  validateMobile,
  calculateCompoundingEstimate,
  filterFaqs,
  type FAQItem
} from './sproutLogic.ts';

test('validatePAN correctly identifies valid and invalid PAN numbers', () => {
  assert.equal(validatePAN('ABCDE1234F').isValid, true);
  assert.equal(validatePAN('abcde1234f').isValid, true); // handles casing
  assert.equal(validatePAN('12345ABCDE').isValid, false);
  assert.equal(validatePAN('ABCDE12345').isValid, false);
  assert.equal(validatePAN('').isValid, false);
});

test('validateAadhaar correctly checks 12 digits and formats', () => {
  const valid = validateAadhaar('123456789012');
  assert.equal(valid.isValid, true);
  assert.equal(valid.formatted, '1234 5678 9012');

  const spaced = validateAadhaar('1234 5678 9012');
  assert.equal(spaced.isValid, true);

  const short = validateAadhaar('12345');
  assert.equal(short.isValid, false);
});

test('validateMobile validates 10-digit Indian numbers', () => {
  const valid = validateMobile('9876543210');
  assert.equal(valid.isValid, true);
  assert.equal(valid.formatted, '+91 98765 43210');

  const withCode = validateMobile('+919876543210');
  assert.equal(withCode.isValid, true);

  const invalidPrefix = validateMobile('1234567890');
  assert.equal(invalidPrefix.isValid, false);
});

test('calculateCompoundingEstimate computes sensible compounding results', () => {
  const result = calculateCompoundingEstimate(100, 1, 12);
  assert.equal(result.totalInvested, 1200);
  assert.ok(result.totalValue > 1200);
  assert.ok(result.estimatedGains > 0);

  const zero = calculateCompoundingEstimate(0, 5);
  assert.equal(zero.totalInvested, 0);
  assert.equal(zero.totalValue, 0);
});

test('filterFaqs correctly matches keywords', () => {
  const faqs: FAQItem[] = [
    { id: '1', question: 'What do I need before starting KYC?', answer: 'PAN and Aadhaar' },
    { id: '2', question: 'Why are my identity details requested?', answer: 'SEBI and RBI regulations' },
  ];
  assert.equal(filterFaqs(faqs, 'KYC').length, 1);
  assert.equal(filterFaqs(faqs, 'regulations').length, 1);
  assert.equal(filterFaqs(faqs, 'xyz123').length, 0);
  assert.equal(filterFaqs(faqs, '').length, 2);
});
