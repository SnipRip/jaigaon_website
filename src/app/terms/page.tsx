import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";
import { terms } from "@/content/legal/terms";

export const metadata: Metadata = {
  title: terms.title,
  description: terms.summary,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return <LegalPage document={terms} />;
}
