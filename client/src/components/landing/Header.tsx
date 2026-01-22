import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import mainLogo from "@assets/logo_principal__1769085523594.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "¿Por qué?", href: "#por-que" },
    { name: "Dinámica", href: "#dinamica" },
    { name: "Módulos", href: "#modulos" },
    { name: "Equipo", href: "#equipo" },
    { name: "Registro", href: "#registro" },
    { name: "FAQs", href: "#faq" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md border-b py-3 shadow-sm" : "bg-transparent py-5"}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img src={mainLogo} alt="DA Expert Cases" className="h-12 w-auto" />
          <div className="flex flex-col leading-none">
            <span className="text-xl font-display font-extrabold text-[#294795]">Dermatitis Atópica</span>
            <span className="text-lg font-display font-medium text-[#5FABD1]">Expert Cases</span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map(link => (
            <a key={link.name} href={link.href} className="text-sm font-bold text-slate-600 hover:text-primary transition-colors">
              {link.name}
            </a>
          ))}
          <Button className="bg-[#294795] hover:bg-[#294795]/90 text-white font-bold rounded-full px-8 shadow-md">
            Iniciar Sesión
          </Button>
        </nav>

        <button className="lg:hidden text-primary" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
