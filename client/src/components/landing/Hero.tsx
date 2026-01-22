import { Button } from "@/components/ui/button";
import platformMockup from "@assets/Screenshot_(73)_1768982263625.png";
import amirLogo from "@assets/fundacion_amir_1769085523593.jpeg";
import pfizerLogo from "@assets/logo-pfizer-scaled-675x675_1769085568344.jpg";
import academiaLogo from "@assets/logo_academia_española_de_dermatologia_logo_1769085364557.png";

export default function Hero() {
  return (
    <>
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 bg-[#FCFBFB] overflow-hidden">
        {/* Visual curves from PDF */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-[#294795]/5 pdf-curve -z-10" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#C3DC65]/10 rounded-full blur-3xl -z-10" />
        
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-in fade-in slide-in-from-left-10 duration-700">
              <div className="inline-block px-4 py-1 rounded-full bg-[#5FABD1]/10 text-[#5FABD1] text-xs font-bold uppercase tracking-widest border border-[#5FABD1]/20">
                Experiencia Formativa Inclusiva
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-[#294795] leading-tight">
                Formación inmersiva para la toma de decisiones clínicas en <span className="text-[#5FABD1]">dermatitis atópica compleja</span>
              </h1>
              <p className="text-lg text-slate-600 font-medium leading-relaxed max-w-xl">
                Un programa diseñado para dar respuesta a las dudas reales del dermatólogo, proporcionando conocimientos y criterios aplicables al abordaje personalizado de la DA moderada a grave.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-[#294795] text-white rounded-full text-lg px-12 h-14 font-bold shadow-xl shadow-primary/20 hover:scale-105 transition-transform group">
                  Solicitar Acceso Exclusivo
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Button>
                <Button variant="outline" size="lg" className="rounded-full border-[#294795] text-[#294795] hover:bg-[#294795]/5 h-14 px-10 font-bold" asChild>
                  <a href="#modulos">Ver Programa Académico</a>
                </Button>
              </div>
            </div>
            <div className="relative animate-in fade-in zoom-in-95 duration-1000">
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white bg-white">
                <img src={platformMockup} alt="Plataforma interactiva" className="w-full h-auto" />
              </div>
              <div className="absolute -z-10 -top-12 -right-12 w-full h-full border-2 border-[#5FABD1]/20 rounded-[2.5rem] translate-x-4 translate-y-4" />
            </div>
          </div>
        </div>
      </section>

      {/* Logos section directly under Hero */}
      <section className="py-12 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 items-center justify-items-center opacity-70 hover:opacity-100 transition-opacity">
            <div className="flex flex-col items-center gap-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Organizado por</span>
              <img src={amirLogo} alt="Fundación AMIR" className="h-12 md:h-16 w-auto grayscale hover:grayscale-0 transition-all" />
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Con la colaboración de</span>
              <img src={pfizerLogo} alt="Pfizer" className="h-12 md:h-16 w-auto grayscale hover:grayscale-0 transition-all" />
            </div>
            <div className="col-span-2 md:col-span-1 flex flex-col items-center gap-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Revisado por</span>
              <img src={academiaLogo} alt="AEDV" className="h-10 md:h-14 w-auto grayscale hover:grayscale-0 transition-all" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
