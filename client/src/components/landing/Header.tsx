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
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md border-b border-white/10 py-3 shadow-lg" : "bg-transparent py-5"}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img src={mainLogo} alt="DA Expert Cases" className="h-10 md:h-12 w-auto" />
          <div className="hidden sm:flex flex-col leading-none">
            <span className="text-lg font-display font-extrabold text-white">Dermatitis Atópica</span>
            <span className="text-sm font-display font-medium text-accent">Expert Cases</span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map(link => (
            <a key={link.name} href={link.href} className="text-xs font-bold uppercase tracking-widest text-slate-300 hover:text-accent transition-colors">
              {link.name}
            </a>
          ))}
          <Button className="bg-primary hover:bg-primary/90 text-white font-bold rounded-full px-8 border border-white/10">
            Iniciar Sesión
          </Button>
        </nav>

        <button className="lg:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-white/10 p-6 lg:hidden animate-in slide-in-from-top-5">
          <nav className="flex flex-col gap-4">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} className="text-sm font-bold uppercase text-slate-300" onClick={() => setMobileMenuOpen(false)}>
                {link.name}
              </a>
            ))}
            <Button className="w-full bg-primary mt-4">Iniciar Sesión</Button>
          </nav>
        </div>
      )}
    </header>
  );
}
