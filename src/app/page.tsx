import { Hero } from "@/components/sections/Hero";
import { ResearchVision } from "@/components/sections/ResearchVision";
import { Capabilities } from "@/components/sections/Capabilities";
import { Solutions } from "@/components/sections/Solutions";
import { Flagship } from "@/components/sections/Flagship";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ResearchVision />
      <Capabilities />
      <Flagship />
      <Solutions />
      <ContactSection />
    </>
  );
}
