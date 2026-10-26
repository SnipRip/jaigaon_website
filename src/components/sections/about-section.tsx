import Image from "next/image";
import { company } from "@/content/company";

const PARAGRAPH = "text-base leading-[1.65] font-medium text-ink-soft";

// About text is condensed from the "About Us" page of the company brochure.
export function AboutSection() {
  return (
    <section id="about" className="container-page flex flex-wrap items-center gap-12 py-24">
      <Image
        src="/images/steel-angles.jpg"
        alt="Stacked mild steel angles"
        width={770}
        height={471}
        sizes="(min-width: 1024px) 560px, 100vw"
        className="h-[400px] min-w-0 flex-[1_1_380px] rounded-[28px] object-cover"
      />
      <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-[18px]">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">About {company.name}</h2>
        <p className={PARAGRAPH}>
          We are your trusted partner in quality hardware supplies, providing tools, building materials and hardware
          essentials to contractors, builders and DIY customers. With a strong focus on durability, performance and
          customer satisfaction, we stock a wide range of products from leading brands.
        </p>
        <p className={PARAGRAPH}>
          Our staff bring years of industry experience to help you find the right products. We believe in building
          more than structures: we build trust and long-term relationships with our customers.
        </p>
        <div className="flex flex-col gap-3 border-t border-line pt-[18px]">
          <h3 className="text-[15px] font-extrabold">Authorised dealer for leading brands</h3>
          <ul className="flex flex-wrap gap-2.5 text-sm font-extrabold">
            {company.brands.map((brand) => (
              <li key={brand} className="rounded-xl border border-line bg-white px-4 py-2.5">{brand}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
