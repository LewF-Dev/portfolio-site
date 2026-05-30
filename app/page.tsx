import Navigation from "@/components/sections/Navigation";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import HowItWorks from "@/components/sections/HowItWorks";
import Pricing from "@/components/sections/Pricing";
import Work from "@/components/sections/Work";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <Pricing />
        <Work />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
