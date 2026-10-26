// DRAFT wording. Written to match Meta's WhatsApp Business opt-in rules:
// say who is messaging, what will be sent, and how to stop.
import { company } from "../company";
import { LEGAL_LAST_UPDATED, type LegalDocument } from "./legal-document";

export const whatsappPolicy: LegalDocument = {
  title: "WhatsApp messaging and opt-out",
  summary: `What ${company.name} sends on WhatsApp, how you agree to it, and how to stop.`,
  lastUpdated: LEGAL_LAST_UPDATED,
  sections: [
    {
      heading: "Messages come only from us, and only if you agree",
      paragraphs: [
        `${company.name} sends WhatsApp messages only to people who have opted in. You opt in by ticking the consent box on the sign-up form on this website, or by asking us to send you something on WhatsApp. The box is never ticked for you.`,
        "We keep a record of when and how you agreed, and the wording you agreed to.",
      ],
    },
    {
      heading: "What we send",
      paragraphs: [
        "Quotations, quotation PDFs, price lists and product rates you have asked for.",
        "Invoices and copies of documents for your own orders.",
        "Order and shipment updates for your own orders.",
        "Payment reminders for your own invoices.",
        "How often you hear from us depends on your enquiries and orders. We do not send promotional messages unless you have separately agreed to receive them.",
      ],
    },
    {
      heading: "How to stop",
      paragraphs: [
        "Reply STOP to any message from us and we will stop sending WhatsApp updates to that number.",
        `You can also ask us to stop by emailing ${company.email} or calling ${company.phones[0].display}.`,
        "You can block our number in WhatsApp at any time. If you change your mind later, sign up again on this website.",
      ],
    },
    {
      heading: "Cost and your number",
      paragraphs: [
        "We do not charge for these messages. Your mobile operator's usual data charges may apply.",
        "We use your number only to send the messages above and never share it for anyone else's marketing. See our Privacy Policy for how we handle your information.",
      ],
    },
  ],
};
