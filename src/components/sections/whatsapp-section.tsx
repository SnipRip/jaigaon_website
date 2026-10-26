import { MESSAGE_TYPES } from "@/features/whatsapp-optin/consent";
import { OptInForm } from "@/features/whatsapp-optin/optin-form";

/** The WhatsApp sign-up block: what subscribers get, how to stop, and the form. */
export function WhatsAppSection() {
  return (
    <section id="whatsapp" className="px-4">
      <div className="mx-auto flex max-w-[1200px] flex-wrap gap-10 rounded-[32px] bg-navy p-7 text-white sm:p-12">
        <div className="flex min-w-0 flex-[1_1_380px] flex-col gap-[18px]">
          <h2 className="text-3xl leading-[1.15] font-extrabold tracking-tight sm:text-[34px]">
            Get rates and order updates on WhatsApp
          </h2>
          <p className="text-base leading-relaxed font-medium text-on-navy">
            Sign up once and we will send what you ask for to your WhatsApp number.
          </p>
          <ul className="flex flex-col gap-3 text-[15px] font-semibold">
            {MESSAGE_TYPES.map((type) => (
              <li key={type} className="flex gap-2.5">
                <span aria-hidden="true" className="mt-2 size-2 shrink-0 rounded-full bg-[#6fd49a]" />
                {type}
              </li>
            ))}
          </ul>
          <p className="border-t border-white/20 pt-4 text-sm leading-relaxed font-medium text-on-navy">
            You can stop at any time by replying STOP. We do not share your number with anyone, and we do not send
            messages you have not agreed to receive.
          </p>
        </div>
        <div className="min-w-0 flex-[1_1_380px]">
          <OptInForm />
        </div>
      </div>
    </section>
  );
}
