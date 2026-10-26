/** Title and intro line at the top of a home-page section. */
export function SectionHeading({ title, intro }: { title: string; intro?: string }) {
  return (
    <div className="flex max-w-[640px] flex-col gap-2.5">
      <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h2>
      {intro && <p className="text-base leading-relaxed font-medium text-ink-soft">{intro}</p>}
    </div>
  );
}
