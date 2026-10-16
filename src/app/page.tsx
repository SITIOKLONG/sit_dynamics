import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { ServiceTiersPreview } from "@/components/sections/ServiceTiersPreview";
import { WhatWeBuild } from "@/components/sections/WhatWeBuild";
import { CustomTeaser } from "@/components/sections/CustomTeaser";
import { PlatformTeaser } from "@/components/sections/PlatformTeaser";
import { VisitTeaser } from "@/components/sections/VisitTeaser";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    title: "SIT Dynamics｜澳門人型機械人研發教育與工程整合",
    description:
      "由模擬走向真機：雙足機械人、運動控制、強化學習與實機測試的工程教育與客製化研發方案。",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <ServiceTiersPreview />
      <WhatWeBuild />
      <CustomTeaser />
      <PlatformTeaser />
      <VisitTeaser />
      <CtaBand />
    </>
  );
}
