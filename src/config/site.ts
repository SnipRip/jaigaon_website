// Public address of the site, used for canonical URLs, the sitemap and
// social previews. Set NEXT_PUBLIC_SITE_URL in production.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3001";

/** In-page sections of the home page, in navbar order. */
export const NAV_LINKS = [
  { href: "/#products", label: "Products" },
  { href: "/#export", label: "Export to Bhutan" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export const LEGAL_LINKS = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/whatsapp-policy", label: "WhatsApp messaging and opt-out" },
];
