import type { LegalDocument } from "@/content/legal/legal-document";

/** Shared layout of the Privacy Policy, Terms and WhatsApp policy pages. */
export function LegalPage({ document }: { document: LegalDocument }) {
  return (
    <article className="container-page flex max-w-[820px] flex-col gap-8 py-16">
      <header className="flex flex-col gap-3">
        <h1 className="text-4xl font-extrabold tracking-tight">{document.title}</h1>
        <p className="text-lg font-medium text-ink-soft">{document.summary}</p>
        <p className="text-sm font-bold text-muted">Last updated {document.lastUpdated}</p>
      </header>
      {document.sections.map((section) => (
        <section key={section.heading} className="flex flex-col gap-3">
          <h2 className="text-xl font-extrabold">{section.heading}</h2>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-base leading-[1.7] font-medium text-ink-soft">{paragraph}</p>
          ))}
        </section>
      ))}
    </article>
  );
}
