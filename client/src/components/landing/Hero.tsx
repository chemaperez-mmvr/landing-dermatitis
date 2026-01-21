import { Button } from "@/components/ui/button";
import { CheckCircle2, PlayCircle, FileText, Bot } from "lucide-react";
import platformMockup from "@assets/Screenshot_(73)_1768982263625.png";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-white">
      {/* Background Elements - Subtle Innovations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] opacity-40" />
        <div className="absolute bottom-[5%] right-[-10%] w-[40%] h-[40%] bg-accent/10 rounded-full blur-[100px] opacity-40" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="space-y-8 animate-in fade-in slide-in-from-left-10 duration-700">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-primary text-xs font-bold uppercase tracking-widest shadow-sm">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Innovación Médica Aplicada
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 leading-[1.1]">
              Entrena decisiones clínicas con <span className="gradient-text">Simulación IA</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-500 max-w-xl leading-relaxed font-medium">
              Programa modular avanzado para profesionales sanitarios. Aprendizaje basado en evidencia, simulación conversacional y métricas de desempeño.
            </p>

            <ul className="grid sm:grid-cols-1 gap-4">
              {[
                "Casos clínicos con agentes de voz inteligentes",
                "Entorno seguro de simulación y feedback real",
                "Biblioteca de recursos clínicos especializados"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-slate-600 font-semibold group">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-all">
                    <CheckCircle2 size={18} />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button size="lg" className="gradient-bg border-0 hover:opacity-90 text-white rounded-xl text-base px-10 h-14 shadow-xl shadow-primary/20 font-bold transition-all hover:scale-[1.02]" asChild>
                <a href="https://tudominio.com/login">Acceder a la plataforma</a>
              </Button>
              <Button variant="outline" size="lg" className="rounded-xl text-base h-14 border-slate-200 text-slate-700 hover:bg-slate-50 font-bold px-10 transition-all" asChild>
                <a href="mailto:contacto@tudominio.com">Solicitar información</a>
              </Button>
            </div>
          </div>

          {/* Visual Content */}
          <div className="relative animate-in fade-in zoom-in-95 duration-1000">
            {/* Main Mockup Container */}
            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(121,149,196,0.2)] border border-white glow-box group bg-white p-3">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <img 
                src={platformMockup} 
                alt="Plataforma de formación" 
                className="w-full h-auto rounded-2xl transform transition-all duration-1000 group-hover:scale-[1.01]"
              />
            </div>
            
            {/* Innovation Elements */}
            <div className="absolute -z-10 -top-12 -right-12 w-64 h-64 bg-primary/5 rounded-full blur-[80px]" />
            <div className="absolute -z-10 -bottom-12 -left-12 w-48 h-48 bg-accent/5 rounded-full blur-[60px]" />
          </div>

        </div>
      </div>
    </section>
  );
}
