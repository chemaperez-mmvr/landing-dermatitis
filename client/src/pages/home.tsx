import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Trust from "@/components/landing/Trust";
import Team from "@/components/landing/Team";
import Modules from "@/components/landing/Modules";
import Access from "@/components/landing/Access";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-foreground selection:bg-primary/20">
      <Header />
      <main>
        <Hero />
        <Trust />
        <Modules />
        <Team />
        <Access />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
