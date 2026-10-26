// Company facts shown across the site. Taken from the company brochure.
// Fields set to null are not known yet and are simply not rendered:
// fill them in here and they appear in the footer and contact section.
export const company = {
  name: "Jaigaon Quality Enterprise",
  description:
    "Building materials trading and export: iron and steel, bricks and AAC blocks, plywood, hardware, sanitary, electricals and crusher parts.",
  address: {
    street: "M.G. Road",
    city: "Jaigaon",
    postalCode: "736182",
    district: "Alipurduar",
    state: "West Bengal",
    country: "India",
  },
  phones: [
    { label: "India", display: "+91 96353 12988", e164: "+919635312988" },
    { label: "Bhutan (TashiCell)", display: "+975 7766 7493", e164: "+97577667493" },
  ],
  email: "jaigaonquality.ent@gmail.com",
  /** Opens a WhatsApp chat with the India number. */
  whatsappUrl: "https://wa.me/919635312988",
  gstin: null as string | null,
  businessHours: null as string | null,
  /** Brands the brochure lists the company as an authorised dealer for. */
  brands: ["Hind Steel", "Bosch", "Asian Paints"],
};

export const addressLines = [
  `${company.address.street}, ${company.address.city} ${company.address.postalCode}`,
  `District ${company.address.district}, ${company.address.state}, ${company.address.country}`,
];
