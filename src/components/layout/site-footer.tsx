import Link from "next/link";
import { LEGAL_LINKS } from "@/config/site";
import { addressLines, company } from "@/content/company";

// Legal name, address and policy links on every page. Meta's business
// verification checks that these are visible on the website.
export function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-on-navy">
      <div className="container-page flex flex-col gap-7 pt-12 pb-8">
        <div className="flex flex-wrap justify-between gap-8">
          <div className="flex max-w-[420px] flex-col gap-2 text-sm leading-relaxed font-medium">
            <span className="text-lg font-extrabold text-white">{company.name}</span>
            <span>Building materials trading and export.</span>
            <address className="not-italic">
              {addressLines.map((line) => (
                <span key={line} className="block">{line}</span>
              ))}
            </address>
            {company.gstin && <span>GSTIN: {company.gstin}</span>}
          </div>
          <nav aria-label="Legal" className="flex flex-col text-sm font-bold">
            {LEGAL_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="py-2.5 text-white hover:underline">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <span className="border-t border-white/15 pt-5 text-[13px] font-medium">
          © {company.name}. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
