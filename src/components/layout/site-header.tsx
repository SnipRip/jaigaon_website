"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { WhatsAppLink } from "@/components/ui/whatsapp-link";
import { NAV_LINKS } from "@/config/site";
import { BrandLogo } from "./brand-logo";

const NAV_LINK = "rounded-full px-4 py-3 text-sm font-bold text-ink hover:bg-white/70";

// Floating glass navbar. On small screens the section links move into a
// panel opened with the menu button.
export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-10 px-4 pt-4">
      <nav aria-label="Primary" className="glass mx-auto max-w-[1200px] rounded-[30px] py-2 pr-2.5 pl-5">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" onClick={closeMenu} className="flex items-center rounded-lg">
            <BrandLogo height={52} />
          </Link>

          <div className="flex items-center gap-1 max-lg:hidden">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className={NAV_LINK}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <WhatsAppLink className="max-sm:hidden" />
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="flex size-[46px] items-center justify-center rounded-full border border-white/75 bg-white/50 shadow-[inset_0_1px_0_rgb(255_255_255/0.95),0_1px_2px_rgb(20_40_90/0.08)] lg:hidden"
            >
              {menuOpen ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div id="mobile-menu" className="flex flex-col gap-1 border-t border-line pt-2 pb-1 lg:hidden">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} onClick={closeMenu} className={NAV_LINK}>
                {link.label}
              </Link>
            ))}
            <WhatsAppLink className="mt-1 sm:hidden" />
          </div>
        )}
      </nav>
    </header>
  );
}
