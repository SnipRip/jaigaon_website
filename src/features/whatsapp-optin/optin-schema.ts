import { parsePhoneNumberFromString } from "libphonenumber-js/min";
import { z } from "zod";

// Validation for the WhatsApp sign-up form. The same schema runs in the
// browser (instant feedback) and in the server action (the real check).
export const COUNTRIES = [
  { code: "BT", label: "+975 Bhutan" },
  { code: "IN", label: "+91 India" },
] as const;

type CountryCode = (typeof COUNTRIES)[number]["code"];

/** Returns the number in E.164 form (+97577667493), or null if it is not valid for the country. */
export function toE164(country: CountryCode, phone: string): string | null {
  const parsed = parsePhoneNumberFromString(phone, country);
  return parsed?.isValid() ? parsed.number : null;
}

export const optInSchema = z
  .object({
    name: z.string().trim().min(2, "Enter your name").max(80),
    businessName: z.string().trim().max(120),
    country: z.enum(["BT", "IN"]),
    phone: z.string().trim().min(1, "Enter your WhatsApp number").max(20),
    consent: z.boolean().refine((agreed) => agreed, "Tick the box to agree before signing up"),
    // Honeypot: hidden from people, so only bots fill it in.
    website: z.string().max(0),
  })
  .refine((values) => toE164(values.country, values.phone) !== null, {
    path: ["phone"],
    message: "Enter a valid mobile number for the selected country",
  });

export type OptInValues = z.infer<typeof optInSchema>;
