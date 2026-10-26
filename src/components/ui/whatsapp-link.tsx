import clsx from "clsx";
import { MessageCircle } from "lucide-react";
import { company } from "@/content/company";

/** Green button that opens a WhatsApp chat with the company. */
export function WhatsAppLink({ className }: { className?: string }) {
  return (
    <a
      href={company.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        "inline-flex h-[46px] items-center justify-center gap-2 rounded-[14px] bg-success px-[18px] text-sm font-extrabold whitespace-nowrap text-white hover:bg-success-strong",
        className,
      )}
    >
      <MessageCircle aria-hidden="true" className="size-[18px]" />
      Chat on WhatsApp
    </a>
  );
}
