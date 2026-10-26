import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";
import { whatsappPolicy } from "@/content/legal/whatsapp-policy";

export const metadata: Metadata = {
  title: whatsappPolicy.title,
  description: whatsappPolicy.summary,
  alternates: { canonical: "/whatsapp-policy" },
};

export default function WhatsAppPolicyPage() {
  return <LegalPage document={whatsappPolicy} />;
}
