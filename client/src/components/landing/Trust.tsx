import inspiraLogo from "@assets/generated_images/minimalist_tech_logo_for_inspira.png";
import novoLogo from "@assets/generated_images/corporate_pharmaceutical_logo_generic.png";
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
    <section className="py-12 border-y border-white/5 bg-white/2 backdrop-blur-sm">
      <div className="container mx-auto px-4 text-center">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-8">
          Proyecto para entorno Farma / Formación Profesional
        </p>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 mb-12 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex flex-col items-center gap-2">
            <img src={inspiraLogo} alt="INS PIRA" className="h-10 w-auto object-contain brightness-0 invert" />
          </div>
          <div className="w-px h-10 bg-white/10 hidden md:block" />
          <div className="flex flex-col items-center gap-2">
            <img src={novoLogo} alt="Novo Nordisk" className="h-10 w-auto object-contain brightness-0 invert" />
          </div>
        </div>

        <p className="text-xs text-muted-foreground/50 mb-10 max-w-lg mx-auto">
          Logos mostrados con fines identificativos del proyecto.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {chips.map((chip, i) => (
            <div 
              key={i} 
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300 hover:bg-white/10 hover:border-primary/30 transition-colors"
            >
              <chip.icon size={16} className="text-accent" />
              <span>{chip.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
