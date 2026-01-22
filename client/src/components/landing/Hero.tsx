import { Button } from "@/components/ui/button";
import platformMockup from "@assets/Screenshot_(73)_1768982263625.png";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-40 bg-[#FCFBFB] overflow-hidden">
      {/* Visual curves from PDF */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-[#294795]/5 pdf-curve -z-10" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#C3DC65]/10 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left-10 duration-700">
            <div className="inline-block px-4 py-1 rounded-full bg-[#5FABD1]/10 text-[#5FABD1] text-xs font-bold uppercase tracking-widest border border-[#5FABD1]/20">
              Formación Médica Especializada
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-black text-[#294795] leading-tight">
              Dermatitis Atópica <br />
              <span className="text-[#5FABD1]">Expert Cases</span>
            </h1>
            <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-xl">
              Una experiencia formativa inmersiva para el abordaje personalizado de la dermatitis atópica en casos complejos.
            </p>
            <p className="text-sm text-slate-500 leading-relaxed max-w-lg italic border-l-4 border-[#C3DC65] pl-4">
              Formación innovadora a través de dinámicas inmersivas que tiene como objetivo responder a las dudas y necesidades de los dermatólogos respecto al abordaje personalizado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-[#294795] text-white rounded-full text-lg px-12 h-14 font-bold shadow-xl shadow-primary/20">
                Regístrate
              </Button>
              <Button variant="outline" size="lg" className="rounded-full border-[#294795] text-[#294795] hover:bg-[#294795]/5 h-14 px-10 font-bold" asChild>
                <a href="#modulos">Ver Programa</a>
              </Button>
            </div>
          </div>
          <div className="relative animate-in fade-in zoom-in-95 duration-1000">
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white bg-white">
              <img src={platformMockup} alt="Plataforma interactiva" className="w-full h-auto" />
            </div>
            {/* Background element mimicking PDF style */}
            <div className="absolute -z-10 -top-12 -right-12 w-full h-full border-2 border-[#5FABD1]/20 rounded-[2.5rem] translate-x-4 translate-y-4" />
          </div>
        </div>
      </div>
    </section>
  );
}
