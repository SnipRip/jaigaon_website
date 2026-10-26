import type { ReactNode } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { addressLines, company } from "@/content/company";

function ContactCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-2 rounded-[22px] border border-line bg-white p-6">
      <h3 className="text-sm font-extrabold text-brand">{title}</h3>
      <div className="flex flex-col text-base leading-relaxed font-bold [overflow-wrap:anywhere]">{children}</div>
    </div>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="container-page flex flex-col gap-8 py-24">
      <SectionHeading title="Contact us" />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-5">
        <ContactCard title="Registered office">
          <address className="not-italic">
            {addressLines.map((line) => (
              <span key={line} className="block">{line}</span>
            ))}
          </address>
        </ContactCard>
        <ContactCard title="Phone and WhatsApp">
          {company.phones.map((phone) => (
            <span key={phone.e164}>
              {phone.label}: <a href={`tel:${phone.e164}`} className="text-brand hover:underline">{phone.display}</a>
            </span>
          ))}
        </ContactCard>
        <ContactCard title="Email">
          <a href={`mailto:${company.email}`} className="text-brand hover:underline">{company.email}</a>
          {company.businessHours && <span>{company.businessHours}</span>}
        </ContactCard>
      </div>
    </section>
  );
}
