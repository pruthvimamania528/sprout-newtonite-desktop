export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

/**
 * Validates Indian PAN (Permanent Account Number):
 * 10 characters: 5 uppercase letters, 4 digits, 1 uppercase letter.
 */
export function validatePAN(pan: string): { isValid: boolean; message?: string } {
  const cleaned = pan.trim().toUpperCase();
  if (!cleaned) {
    return { isValid: false, message: 'PAN number is required' };
  }
  const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
  if (!panRegex.test(cleaned)) {
    return { isValid: false, message: 'Invalid PAN format. Must be 5 letters, 4 digits, 1 letter (e.g., ABCDE1234F)' };
  }
  return { isValid: true };
}

/**
 * Validates Indian Aadhaar Number:
 * 12 digits, optional spacing every 4 digits.
 */
export function validateAadhaar(aadhaar: string): { isValid: boolean; formatted: string; message?: string } {
  const digitsOnly = aadhaar.replace(/\D/g, '');
  if (!digitsOnly) {
    return { isValid: false, formatted: '', message: 'Aadhaar number is required' };
  }
  if (digitsOnly.length !== 12) {
    return { isValid: false, formatted: digitsOnly, message: 'Aadhaar must be exactly 12 digits' };
  }
  const formatted = `${digitsOnly.slice(0, 4)} ${digitsOnly.slice(4, 8)} ${digitsOnly.slice(8, 12)}`;
  return { isValid: true, formatted };
}

/**
 * Validates 10-digit Indian mobile number, allowing optional +91 or 0 prefix.
 */
export function validateMobile(mobile: string): { isValid: boolean; formatted: string; message?: string } {
  const cleaned = mobile.trim().replace(/[\s-]/g, '');
  const digitsOnly = cleaned.startsWith('+91')
    ? cleaned.slice(3)
    : cleaned.startsWith('0')
    ? cleaned.slice(1)
    : cleaned;

  if (!digitsOnly) {
    return { isValid: false, formatted: '', message: 'Mobile number is required' };
  }
  if (!/^[6-9]\d{9}$/.test(digitsOnly)) {
    return { isValid: false, formatted: digitsOnly, message: 'Must be a valid 10-digit Indian mobile number starting with 6, 7, 8, or 9' };
  }
  return { isValid: true, formatted: `+91 ${digitsOnly.slice(0, 5)} ${digitsOnly.slice(5)}` };
}

/**
 * Calculate expected SIP wealth compounding.
 * Formula: M = P * ({[1 + i]^n - 1} / i) * (1 + i)
 * where P = monthly investment, i = monthly interest rate, n = total months
 */
export function calculateCompoundingEstimate(
  monthlyAmount: number,
  years: number,
  annualReturnRatePct = 12
): { totalInvested: number; estimatedGains: number; totalValue: number } {
  if (monthlyAmount <= 0 || years <= 0) {
    return { totalInvested: 0, estimatedGains: 0, totalValue: 0 };
  }
  const months = Math.round(years * 12);
  const monthlyRate = annualReturnRatePct / 12 / 100;
  const totalInvested = monthlyAmount * months;

  const totalValue =
    monthlyAmount * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);

  const estimatedGains = Math.max(0, Math.round(totalValue - totalInvested));

  return {
    totalInvested: Math.round(totalInvested),
    estimatedGains,
    totalValue: Math.round(totalValue),
  };
}

/**
 * Filters FAQs matching search term
 */
export function filterFaqs(faqs: FAQItem[], query: string): FAQItem[] {
  const q = query.trim().toLowerCase();
  if (!q) return faqs;
  return faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(q) ||
      faq.answer.toLowerCase().includes(q) ||
      (faq.category && faq.category.toLowerCase().includes(q))
  );
}
