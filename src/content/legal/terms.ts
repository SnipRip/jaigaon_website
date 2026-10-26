// DRAFT wording. Have it reviewed by the business owner or a legal adviser
// before the site goes live.
import { company } from "../company";
import { LEGAL_LAST_UPDATED, type LegalDocument } from "./legal-document";

export const terms: LegalDocument = {
  title: "Terms of Service",
  summary: `The terms that apply when you use this website or ask ${company.name} for rates.`,
  lastUpdated: LEGAL_LAST_UPDATED,
  sections: [
    {
      heading: "About this website",
      paragraphs: [
        `This website is run by ${company.name}. It describes the building materials we supply and lets you contact us and sign up for WhatsApp updates. By using it you agree to these terms.`,
      ],
    },
    {
      heading: "Product information",
      paragraphs: [
        "Product descriptions, sizes and photographs are for general guidance. Makes, sizes and availability change with stock. Please confirm the exact specification with us before ordering.",
      ],
    },
    {
      heading: "Rates and quotations",
      paragraphs: [
        "No prices are published on this website. Rates are given in a written quotation, which states the items, quantities, rates and the date until which it is valid. A quotation is not a confirmed order, and rates may change once it has expired.",
        "An order is confirmed only when we accept it. Supply is subject to stock, and to the payment and delivery terms agreed for that order.",
      ],
    },
    {
      heading: "Export orders",
      paragraphs: [
        "Orders for Bhutan are subject to the export, customs and border rules in force at the time. Clearance times are outside our control. Duties and charges payable in the destination country are the buyer's responsibility unless we agree otherwise in writing.",
      ],
    },
    {
      heading: "WhatsApp updates",
      paragraphs: [
        "If you sign up for WhatsApp updates, you agree to receive the messages described on our WhatsApp messaging page. You can opt out at any time by replying STOP.",
      ],
    },
    {
      heading: "Use of the website",
      paragraphs: [
        "Please do not misuse the website: do not attempt to disrupt it, gain access you are not entitled to, or submit false information or another person's phone number.",
        `The content of this website, including the ${company.name} name and logo, belongs to us or is used with permission. Brand names shown belong to their owners.`,
      ],
    },
    {
      heading: "Liability",
      paragraphs: [
        "We take care to keep this website accurate, but we provide it as it is and do not promise that it is free of errors or always available. To the extent the law allows, we are not liable for loss arising from reliance on the website alone.",
      ],
    },
    {
      heading: "Governing law and contact",
      paragraphs: [
        `These terms are governed by the laws of India, and the courts with jurisdiction over ${company.address.district}, ${company.address.state} will hear any dispute.`,
        `Questions about these terms: email ${company.email} or call ${company.phones[0].display}.`,
      ],
    },
  ],
};
