// DRAFT wording. Have it reviewed by the business owner or a legal adviser
// before the site goes live and before submitting it to Meta.
import { company } from "../company";
import { LEGAL_LAST_UPDATED, type LegalDocument } from "./legal-document";

export const privacyPolicy: LegalDocument = {
  title: "Privacy Policy",
  summary: `How ${company.name} collects, uses and protects your information.`,
  lastUpdated: LEGAL_LAST_UPDATED,
  sections: [
    {
      heading: "Who we are",
      paragraphs: [
        `${company.name} is a building materials trading and export business with its registered office at ${company.address.street}, ${company.address.city} ${company.address.postalCode}, District ${company.address.district}, ${company.address.state}, ${company.address.country}. We are responsible for the information described in this policy.`,
      ],
    },
    {
      heading: "Information we collect",
      paragraphs: [
        "When you sign up for WhatsApp updates on this website we collect your name, your business name if you give one, and your WhatsApp number. We also record the date and time you agreed, the wording you agreed to, and the IP address and browser used, as proof of your consent.",
        "When you contact us by phone, email or WhatsApp we keep the messages and the contact details you share so that we can respond.",
        "When you buy from us we keep the business records needed for quotations, invoices, delivery and export documents, and payments.",
      ],
    },
    {
      heading: "How we use it",
      paragraphs: [
        "We use your information to send the quotations, price lists and product rates you ask for, to send invoices, document copies, order and shipment updates, to send payment reminders for your own invoices, and to answer your questions.",
        "We do not sell your information, and we do not use it for advertising by anyone else.",
      ],
    },
    {
      heading: "WhatsApp messages",
      paragraphs: [
        "We message you on WhatsApp only if you have agreed to it. Messages are sent through the WhatsApp Business Platform operated by Meta, so your number and the messages are processed by Meta under its own terms and privacy policy.",
        "You can withdraw your consent at any time by replying STOP to any message, or by contacting us using the details below. See our WhatsApp messaging page for details.",
      ],
    },
    {
      heading: "Who we share it with",
      paragraphs: [
        "We share information only where it is needed to serve you: with Meta to deliver WhatsApp messages, with transporters and customs or border authorities to deliver and export your order, with our bank and accountants, and with the companies that host our website and business software. We also disclose information when the law requires it.",
      ],
    },
    {
      heading: "How long we keep it",
      paragraphs: [
        "We keep WhatsApp consent records for as long as you remain subscribed and for a reasonable period afterwards as proof of consent. We keep business and tax records for as long as the law requires.",
      ],
    },
    {
      heading: "How we protect it",
      paragraphs: [
        "Information is stored in access-controlled systems, sent over encrypted connections, and available only to staff who need it for their work.",
      ],
    },
    {
      heading: "Your choices",
      paragraphs: [
        "You can ask us for a copy of the information we hold about you, ask us to correct it, or ask us to delete it where we are not required to keep it. You can stop WhatsApp messages at any time.",
      ],
    },
    {
      heading: "Contact us",
      paragraphs: [
        `For any question about this policy or your information, email ${company.email} or call ${company.phones[0].display}.`,
        "We may update this policy. The date at the top shows when it last changed.",
      ],
    },
  ],
};
