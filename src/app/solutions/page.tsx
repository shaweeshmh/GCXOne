import type { Metadata } from "next";
import { SolutionsJsonLd } from "@/components/solutions/JsonLd";
import { SolutionsPageClient } from "@/components/solutions/SolutionsPageClient";

export const metadata: Metadata = {
  title: "Solutions | GCX One - Enterprise Security & Surveillance",
  description:
    "Explore GCX One solutions: intelligent surveillance, site monitoring, event analytics, and AI-powered false alarm filtering. Trusted by companies from 10+ countries.",
  keywords: [
    "security solutions",
    "surveillance solutions",
    "site monitoring",
    "false alarm filtering",
    "enterprise security",
  ],
  openGraph: {
    title: "Solutions | GCX One - Enterprise Security & Surveillance",
    description:
      "Intelligent surveillance, site monitoring, event analytics, and AI-powered false alarm filtering.",
    type: "website",
  },
};

export default function SolutionsPage() {
  return (
    <>
      <SolutionsJsonLd />
      <SolutionsPageClient />
    </>
  );
}
