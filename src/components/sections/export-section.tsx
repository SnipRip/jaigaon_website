import { SectionHeading } from "@/components/ui/section-heading";
import { exportSteps } from "@/content/export-steps";

export function ExportSection() {
  return (
    <section id="export" className="border-y border-line bg-white">
      <div className="container-page flex flex-col gap-9 py-20">
        <SectionHeading
          title="Ordering for Bhutan"
          intro="Jaigaon sits on the border with Phuentsholing. We quote, load and prepare the export documents for your order."
        />
        <ol className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-5">
          {exportSteps.map((step, index) => (
            <li key={step.title} className="flex flex-col gap-2.5 rounded-[20px] bg-ground p-6">
              <span className="text-sm font-extrabold text-brand">Step {index + 1}</span>
              <h3 className="text-lg font-extrabold">{step.title}</h3>
              <p className="text-sm leading-normal font-medium text-ink-soft">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
