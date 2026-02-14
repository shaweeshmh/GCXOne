export function SolutionsJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Solutions | GCX One - Enterprise Security & Surveillance",
    description:
      "Explore GCX One solutions: intelligent surveillance, site monitoring, event analytics, and AI-powered false alarm filtering.",
    publisher: {
      "@type": "Organization",
      name: "NXGEN Technology AG",
      url: "https://www.gcxone.com",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
