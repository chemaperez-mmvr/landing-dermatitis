import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Programa", href: "#programa" },
    { name: "Metodología", href: "#metodologia" },
    { name: "Módulos", href: "#modulos" },
    { name: "Acceso", href: "#acceso" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/70 backdrop-blur-xl border-b border-slate-100 py-3 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Generic Logo DIGI0671 */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-[#7995C4] flex items-center justify-center text-white font-black text-xl shadow-lg shadow-primary/20 transition-transform group-hover:scale-110">D</div>
          <span className="text-2xl font-display font-black tracking-tighter text-slate-900">DIGI<span className="text-primary">0671</span></span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-bold text-slate-500 hover:text-primary transition-colors tracking-wide"
            >
              {link.name}
            </a>
          ))}
          <Button 
            className="bg-[#7995C4] border-0 hover:opacity-90 text-white font-black rounded-xl px-8 h-11 shadow-lg shadow-primary/20 transition-all hover:scale-105"
            asChild
          >
            <a href="https://tudominio.com/login">Acceder</a>
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-slate-900 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-2xl border-b border-slate-100 p-6 md:hidden flex flex-col gap-5 animate-in slide-in-from-top-5 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-bold text-slate-700 hover:text-primary py-3 block border-b border-slate-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button className="w-full bg-[#7995C4] h-14 text-lg font-bold rounded-xl" asChild>
            <a href="https://tudominio.com/login">Acceder</a>
          </Button>
        </div>
      )}
    </header>
  );
}
