import { company } from "@/content/company";

// The exact wording a person agrees to. It is stored with every opt-in as
// proof of consent, so bump CONSENT_VERSION whenever the text changes.
export const CONSENT_VERSION = "2026-10-13";

export const CONSENT_TEXT = `I agree to receive quotations, price lists, invoices, order and shipment updates and payment reminders from ${company.name} on WhatsApp at this number. Message frequency varies. I can reply STOP at any time to opt out.`;

/** What subscribers receive, listed beside the form. */
export const MESSAGE_TYPES = [
  "Quotations, price lists and product rates you request",
  "Invoices, document copies, order and shipment updates",
  "Payment reminders for your own invoices",
];
