import type { MetadataRoute } from "next";
import { LEGAL_LINKS, SITE_URL } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", ...LEGAL_LINKS.map((link) => link.href)].map((path) => ({
    url: new URL(path, SITE_URL).toString(),
  }));
}
