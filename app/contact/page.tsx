import Navigation from "@/components/sections/Navigation";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export const metadata = { title: "Contact — Mordax Labs" };

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main style={{ paddingTop: "5.5rem" }}>
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
