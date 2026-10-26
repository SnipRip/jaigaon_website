/** Shape of a legal page's content. Rendered by components/legal/legal-page.tsx. */
export interface LegalSection {
  heading: string;
  paragraphs: string[];
}

export interface LegalDocument {
  title: string;
  summary: string;
  lastUpdated: string;
  sections: LegalSection[];
}

// One date for all three documents: change it whenever any wording changes.
export const LEGAL_LAST_UPDATED = "13 October 2026";
