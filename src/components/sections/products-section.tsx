import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { productCategories } from "@/content/product-categories";

export function ProductsSection() {
  return (
    <section id="products" className="container-page flex flex-col gap-8 pb-24">
      <SectionHeading
        title="Our products"
        intro="Stocked for contractors, builders and home projects. Sizes and makes not listed here are available on request."
      />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
        {productCategories.map((category) => (
          <article key={category.name} className="flex flex-col overflow-hidden rounded-[22px] border border-line bg-white">
            <Image
              src={category.image.src}
              alt={category.image.alt}
              width={category.image.width}
              height={category.image.height}
              sizes="(min-width: 1024px) 285px, (min-width: 640px) 50vw, 100vw"
              className="h-[180px] w-full object-cover"
            />
            <div className="flex flex-col gap-2 p-5">
              <h3 className="text-[19px] font-extrabold">{category.name}</h3>
              <p className="text-sm leading-normal font-medium text-ink-soft">{category.items}</p>
            </div>
          </article>
        ))}

        <article className="flex flex-col justify-between gap-5 rounded-[22px] bg-brand p-6 text-white">
          <div className="flex flex-col gap-2">
            <h3 className="text-[22px] font-extrabold">Need something else?</h3>
            <p className="text-[15px] leading-normal font-medium">Send us your list. We reply with stock and rates for each item.</p>
          </div>
          <Link href="/#whatsapp" className="inline-flex h-12 items-center self-start rounded-[14px] bg-white px-5 text-[15px] font-extrabold text-brand">
            Ask for a quotation
          </Link>
        </article>
      </div>
    </section>
  );
}
