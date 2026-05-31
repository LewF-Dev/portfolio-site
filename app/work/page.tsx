import Navigation from "@/components/sections/Navigation";
import Work from "@/components/sections/Work";
import Footer from "@/components/sections/Footer";

export const metadata = { title: "Work — Mordax Labs" };

export default function WorkPage() {
  return (
    <>
      <Navigation />
      <main style={{ paddingTop: "5.5rem" }}>
        <Work />
      </main>
      <Footer />
    </>
  );
}
