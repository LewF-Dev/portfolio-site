import Navigation from "@/components/sections/Navigation";
import HowItWorks from "@/components/sections/HowItWorks";
import Pricing from "@/components/sections/Pricing";
import Footer from "@/components/sections/Footer";

export const metadata = { title: "How It Works — Mordax Labs" };

export default function HowItWorksPage() {
  return (
    <>
      <Navigation />
      <main style={{ paddingTop: "5.5rem" }}>
        <HowItWorks />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
