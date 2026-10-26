"use server";

import { headers } from "next/headers";
import { CONSENT_TEXT, CONSENT_VERSION } from "./consent";
import { optInSchema, toE164 } from "./optin-schema";

export type OptInResult = { ok: true } | { ok: false; message: string };

const UNAVAILABLE: OptInResult = {
  ok: false,
  message: "Sign-up is not available right now. Please message us on WhatsApp directly.",
};

// Records a WhatsApp opt-in with the dashboard backend, server to server.
// The API key never reaches the browser, and the consent wording stored is
// the server's copy, not anything the browser sent.
export async function submitOptIn(input: unknown): Promise<OptInResult> {
  const parsed = optInSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, message: "Please check the form and try again." };
  }
  const { name, businessName, country, phone } = parsed.data;

  const apiUrl = process.env.DASHBOARD_API_URL;
  const apiKey = process.env.WEBSITE_API_KEY;
  if (!apiUrl || !apiKey) {
    console.error("WhatsApp opt-in: DASHBOARD_API_URL or WEBSITE_API_KEY is not set");
    return UNAVAILABLE;
  }

  const requestHeaders = await headers();
  try {
    const response = await fetch(`${apiUrl}/api/public/whatsapp-optins`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-api-key": apiKey },
      body: JSON.stringify({
        name,
        businessName: businessName || undefined,
        phone: toE164(country, phone),
        consentText: CONSENT_TEXT,
        consentVersion: CONSENT_VERSION,
        ipAddress: requestHeaders.get("x-forwarded-for")?.split(",")[0]?.trim().slice(0, 45) || undefined,
        userAgent: requestHeaders.get("user-agent")?.slice(0, 255) || undefined,
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(10_000),
    });
    if (!response.ok) {
      console.error(`WhatsApp opt-in: backend answered ${response.status}`);
      return UNAVAILABLE;
    }
    return { ok: true };
  } catch (error) {
    console.error("WhatsApp opt-in: request failed", error);
    return UNAVAILABLE;
  }
}
