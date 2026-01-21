import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Trust from "@/components/landing/Trust";
import Methodology from "@/components/landing/Methodology";
import Modules from "@/components/landing/Modules";
import Access from "@/components/landing/Access";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <Header />
      <main>
        <Hero />
        <Trust />
        <Methodology />
        <Modules />
        <Access />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
