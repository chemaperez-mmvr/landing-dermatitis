import pfizerLogo from "@assets/logo-pfizer-scaled-675x675_1768981762492.jpg";
import inspiraLogo from "@assets/logo-inspira_1768981762483.png";
import metamedicsLogo from "@assets/metamedicsvr_logox_1768981762493.png";
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
    <section className="py-16 border-y border-slate-100 bg-slate-50/50">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm font-bold text-slate-800 uppercase tracking-widest mb-10">
          Proyecto de Formación Médica con Simulaciones
        </p>

        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 mb-12">
          <img src={pfizerLogo} alt="Pfizer" className="h-12 md:h-14 w-auto object-contain transition-all grayscale hover:grayscale-0" />
          <img src={inspiraLogo} alt="Inspira Network" className="h-10 md:h-12 w-auto object-contain transition-all grayscale hover:grayscale-0" />
          <img src={metamedicsLogo} alt="MetaMedicsVR" className="h-10 md:h-12 w-auto object-contain transition-all grayscale hover:grayscale-0 invert brightness-0" />
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {chips.map((chip, i) => (
            <div 
              key={i} 
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-200 bg-white text-sm font-semibold text-slate-700 shadow-sm hover:border-primary/30 transition-all hover:shadow-md"
            >
              <chip.icon size={16} className="text-primary" />
              <span>{chip.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
