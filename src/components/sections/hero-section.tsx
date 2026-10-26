import Image from "next/image";
import Link from "next/link";

const CTA = "inline-flex h-[54px] items-center rounded-2xl px-6 text-base font-extrabold";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Soft brand-colour fields behind the hero, which the glass navbar blurs. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-56 -right-28 size-[680px] rounded-full bg-[#2b5fd9] opacity-20 blur-[120px]" />
        <div className="absolute top-64 -left-52 size-[520px] rounded-full bg-[#2e9e5b] opacity-15 blur-[120px]" />
      </div>

      <div className="container-page relative flex flex-wrap items-center gap-12 pt-16 pb-20 lg:pt-20 lg:pb-24">
        <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-5">
          <span className="self-start rounded-full bg-brand-tint px-3.5 py-1.5 text-[13px] font-extrabold text-brand-strong">
            Building materials · Jaigaon, on the India–Bhutan border
          </span>
          <h1 className="text-4xl leading-[1.05] font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Quality building materials, supplied across India and into Bhutan
          </h1>
          <p className="max-w-[540px] text-lg leading-relaxed font-medium text-ink-soft">
            Iron and steel, bricks and AAC blocks, plywood, hardware, sanitary, electricals and crusher parts from
            leading brands, under one roof on M.G. Road, Jaigaon.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/#whatsapp" className={`${CTA} bg-brand text-white shadow-[0_12px_28px_rgb(11_77_187/0.3)] hover:bg-brand-strong`}>
              Get today&apos;s rates on WhatsApp
            </Link>
            <Link href="/#products" className={`${CTA} border border-ink/20 bg-white/70 text-ink hover:bg-white`}>
              View products
            </Link>
          </div>
        </div>

        <div className="relative min-w-0 flex-[1_1_420px]">
          <Image
            src="/images/hero-site-worker.jpg"
            alt="A builder at work on a construction site in Bhutan"
            width={952}
            height={462}
            priority
            sizes="(min-width: 1024px) 560px, 100vw"
            className="h-[440px] w-full rounded-[28px] object-cover"
          />
          {/* The white under the glass keeps the text readable over the photo. */}
          <div className="glass absolute inset-x-4 bottom-4 bg-white/50 flex flex-wrap gap-x-6 gap-y-1.5 rounded-[18px] px-[18px] py-4 text-sm font-extrabold">
            <span>Authorised dealer for leading brands</span>
            <span className="text-success-strong">Export paperwork prepared for Bhutan orders</span>
          </div>
        </div>
      </div>
    </section>
  );
}
