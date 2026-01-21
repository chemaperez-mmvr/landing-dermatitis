import { Button } from "@/components/ui/button";
import { CheckCircle2, PlayCircle, FileText, Bot } from "lucide-react";
import platformMockup from "@assets/Screenshot_(72)_1768981261191.png";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-accent/5 rounded-full blur-[80px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Programa de Formación Médica
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 leading-[1.1]">
              Entrena decisiones clínicas en <span className="text-primary">Dermatitis Atópica</span> con IA
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed font-medium">
              Programa modular para profesionales sanitarios. Aprendizaje aplicado, simulación conversacional y recursos de referencia en una plataforma única.
            </p>

            <ul className="space-y-4">
              {[
                "Casos clínicos prácticos con agentes de voz con IA",
                "Contenido modular, claro y orientado a la práctica",
                "Recursos y enlaces de interés para consulta"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-600 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full text-base px-8 h-12 shadow-lg shadow-primary/25 font-bold" asChild>
                <a href="https://tudominio.com/login">Acceder a la plataforma</a>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full text-base h-12 border-slate-200 text-slate-700 hover:bg-slate-50 font-bold" asChild>
                <a href="mailto:contacto@tudominio.com">Solicitar información</a>
              </Button>
            </div>
          </div>

          {/* Visual Content */}
          <div className="relative">
            {/* Main Mockup */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 glow-box group bg-white p-2">
              <img 
                src={platformMockup} 
                alt="Plataforma de formación" 
                className="w-full h-auto rounded-xl transform transition-transform duration-700 hover:scale-[1.01]"
              />
            </div>
            
            {/* Floaters for depth */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
}
