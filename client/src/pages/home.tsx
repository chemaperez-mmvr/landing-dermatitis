import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import WhyAndDynamics from "@/components/landing/WhyAndDynamics";
import Modules from "@/components/landing/Modules";
import Team from "@/components/landing/Team";
import Access from "@/components/landing/Access";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FCFBFB] text-foreground selection:bg-[#5FABD1]/30 selection:text-[#294795]">
      <Header />
      <main>
        <Hero />
        <WhyAndDynamics />
        <Modules />
        <Team />
        <Access />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
