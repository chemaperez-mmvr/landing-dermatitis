import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import mainLogo from "@assets/logo_digi.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "¿Por qué este curso?", href: "#por-que" },
    { name: "Módulos", href: "#modulos" },
    { name: "Comité científico", href: "#comite" },
    { name: "Registro", href: "#registro" },
    { name: "FAQs", href: "#faq" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md border-b py-3 shadow-sm" : "bg-transparent py-5"}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <img src={mainLogo} alt="DA Expert Cases" className="h-12 w-auto transition-transform duration-500 group-hover:rotate-12" />
          <div className="flex flex-col leading-none">
            <span className="text-xl font-display font-extrabold text-[#294795]">Dermatitis Atópica</span>
            <span className="text-lg font-display font-medium text-[#5FABD1]">Expert Cases</span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map(link => (
            <a key={link.name} href={link.href} className="text-sm font-bold text-slate-600 hover:text-[#294795] hover:scale-105 transition-all">
              {link.name}
            </a>
          ))}
          <a href="https://app.daexpertcase.com/login">
            <Button className="bg-[#294795] hover:bg-[#294795]/90 text-white font-bold rounded-full px-8 shadow-md hover:scale-105 transition-transform">
              Iniciar Sesión
            </Button>
          </a>
        </nav>

        <button
          className="lg:hidden text-[#294795] relative w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#294795]/10 active:scale-90 transition-all duration-300"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={mobileMenuOpen}
        >
          <Menu
            className={`absolute transition-all duration-300 ease-out ${
              mobileMenuOpen ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"
            }`}
          />
          <X
            className={`absolute transition-all duration-300 ease-out ${
              mobileMenuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"
            }`}
          />
        </button>
      </div>

      <nav
        className={`lg:hidden overflow-hidden bg-white/95 backdrop-blur-md border-t border-[#294795]/10 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] ${
          mobileMenuOpen
            ? "max-h-[500px] opacity-100 shadow-lg duration-500"
            : "max-h-0 opacity-0 duration-300"
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="container mx-auto px-4 md:px-6 py-5 flex flex-col gap-1">
          {navLinks.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                transitionDelay: mobileMenuOpen ? `${120 + idx * 60}ms` : "0ms",
              }}
              className={`group relative text-base font-bold text-slate-600 hover:text-[#294795] py-3 px-4 rounded-xl hover:bg-[#294795]/5 transition-all duration-400 ease-out ${
                mobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
              }`}
            >
              <span className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 rounded-full bg-gradient-to-b from-[#294795] to-[#5FABD1] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center" />
              <span className="inline-block group-hover:translate-x-2 transition-transform duration-300">
                {link.name}
              </span>
            </a>
          ))}
          <a
            href="https://app.daexpertcase.com/login"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              transitionDelay: mobileMenuOpen ? `${120 + navLinks.length * 60}ms` : "0ms",
            }}
            className={`mt-3 transition-all duration-400 ease-out ${
              mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Button className="w-full bg-gradient-to-r from-[#294795] to-[#5FABD1] hover:from-[#294795]/90 hover:to-[#5FABD1]/90 text-white font-bold rounded-full px-8 py-6 shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300">
              Iniciar Sesión
            </Button>
          </a>
        </div>
      </nav>
    </header>
  );
}
