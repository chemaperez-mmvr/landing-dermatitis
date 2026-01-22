import { Button } from "@/components/ui/button";
import platformMockup from "@assets/Screenshot_(73)_1768982263625.png";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden pdf-gradient">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left-10 duration-700">
            <div className="inline-block px-3 py-1 rounded-sm bg-accent/10 border-l-2 border-accent text-accent text-[10px] font-black uppercase tracking-[0.2em]">
              Formación Inmersiva
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-black text-white leading-tight">
              Dermatitis Atópica <br />
              <span className="text-accent">Expert Cases</span>
            </h1>
            <p className="text-xl text-slate-300 font-medium leading-relaxed max-w-xl">
              Una experiencia formativa inmersiva para el abordaje personalizado de la dermatitis atópica en casos complejos.
            </p>
            <p className="text-sm text-slate-400 leading-relaxed max-w-lg italic border-l border-white/10 pl-4">
              Aprenderás las herramientas, conocimientos y criterios necesarios para tomar decisiones en el manejo de DA moderada a grave atendiendo a las preferencias y necesidades del paciente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-background rounded-none text-lg px-12 h-14 font-black uppercase tracking-widest shadow-2xl shadow-accent/20" asChild>
                <a href="#registro">Regístrate</a>
              </Button>
              <Button variant="outline" size="lg" className="rounded-none border-white/20 text-white hover:bg-white/5 h-14 px-10 font-bold uppercase tracking-widest" asChild>
                <a href="#modulos">Ver Programa</a>
              </Button>
            </div>
          </div>
          <div className="relative animate-in fade-in zoom-in-95 duration-1000">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-[0_0_50px_rgba(30,80,160,0.3)] border border-white/10 group">
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <img src={platformMockup} alt="Plataforma interactiva" className="w-full h-auto transform transition-transform duration-1000 group-hover:scale-105" />
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-[80px] -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
