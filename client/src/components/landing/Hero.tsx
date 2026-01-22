import { Button } from "@/components/ui/button";
import platformMockup from "@assets/Screenshot_(73)_1768982263625.png";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 -skew-x-12 translate-x-1/4 -z-10" />
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left-10 duration-700">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-slate-900 leading-tight">
              Dermatitis Atópica <br />
              <span className="gradient-text">Expert Cases</span>
            </h1>
            <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-xl">
              Una experiencia formativa inmersiva para el abordaje personalizado de la dermatitis atópica en casos complejos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#1E50A0] text-white rounded-full text-lg px-12 h-14 font-bold shadow-xl shadow-primary/20">
                Regístrate
              </Button>
              <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-slate-100 border border-slate-200">
                <span className="w-2.5 h-2.5 rounded-full bg-[#A5C400] animate-pulse" />
                <span className="text-sm font-bold text-slate-700 uppercase tracking-wider">Inicio: Febrero 2026</span>
              </div>
            </div>
          </div>
          <div className="relative animate-in fade-in zoom-in-95 duration-1000">
            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
              <img src={platformMockup} alt="Plataforma interactiva" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
