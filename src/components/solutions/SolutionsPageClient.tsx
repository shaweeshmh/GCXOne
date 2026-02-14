"use client";

import { HeroWithEntrance } from "./hero";
import { SolutionCards } from "./cards";
import { PricingTable } from "./pricing";
import { LeadCaptureForm } from "./contact";
import { Testimonials } from "./testimonials";
import { SolutionsFooter } from "./footer";

export function SolutionsPageClient() {
  return (
    <div className="min-h-screen">
      <HeroWithEntrance />
      <SolutionCards />
      <PricingTable />
      <LeadCaptureForm />
      <Testimonials />
      <SolutionsFooter />
    </div>
  );
}
