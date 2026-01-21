import pfizerLogo from "@assets/logo-pfizer-scaled-675x675_1768981762492.jpg";
import inspiraLogo from "@assets/logo-inspira_1768981762483.png";
import metamedicsLogo from "@assets/output-onlinepngtools-1_(2)_1768982928647.png";
import { ShieldCheck, UserCheck, Mic, Layout, Database } from "lucide-react";

export default function Trust() {
  const chips = [
    { icon: ShieldCheck, text: "Enfoque clínico aplicado" },
    { icon: UserCheck, text: "Basado en casos" },
    { icon: Mic, text: "Simulación conversacional IA" },
    { icon: Layout, text: "Diseño modular" },
    { icon: Database, text: "Acceso centralizado" },
  ];

  return (
    <section className="py-20 border-y border-slate-50 bg-slate-50/30">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em] mb-12">
          Proyecto de Formación Médica con Simulaciones
        </p>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 mb-16 grayscale hover:grayscale-0 transition-all duration-700">
          <div className="hover:scale-105 transition-transform duration-300">
            <img src={pfizerLogo} alt="Pfizer" className="h-14 md:h-16 w-auto object-contain" />
          </div>
          <div className="hover:scale-105 transition-transform duration-300">
            <img src={inspiraLogo} alt="Inspira Network" className="h-10 md:h-12 w-auto object-contain" />
          </div>
          <div className="hover:scale-105 transition-transform duration-300">
            <img src={metamedicsLogo} alt="MetaMedicsVR" className="h-12 md:h-14 w-auto object-contain invert brightness-0" />
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {chips.map((chip, i) => (
            <div 
              key={i} 
              className="flex items-center gap-3 px-6 py-3 rounded-2xl border border-white bg-white/80 shadow-sm text-sm font-bold text-slate-600 hover:border-primary/40 hover:text-primary transition-all hover:shadow-md"
            >
              <chip.icon size={18} className="text-accent" />
              <span>{chip.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
