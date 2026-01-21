import { Button } from "@/components/ui/button";
import { CheckCircle2, PlayCircle, FileText, Bot } from "lucide-react";
import platformMockup from "@assets/generated_images/medical_training_platform_dashboard_mockup.png";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Programa de Formación Médica
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.1]">
              Entrena decisiones clínicas en <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Dermatitis Atópica</span> con IA
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Programa modular para profesionales sanitarios. Aprendizaje aplicado, simulación conversacional y recursos de referencia en una plataforma única.
            </p>

            <ul className="space-y-3">
              {[
                "Casos clínicos prácticos con agentes de voz con IA",
                "Contenido modular, claro y orientado a la práctica",
                "Recursos y enlaces de interés para consulta"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full text-base px-8 h-12 shadow-lg shadow-primary/25" asChild>
                <a href="https://tudominio.com/login">Acceder a la plataforma</a>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full text-base h-12 border-white/20 text-white hover:bg-white/10" asChild>
                <a href="mailto:contacto@tudominio.com">Solicitar información</a>
              </Button>
            </div>
          </div>

          {/* Visual Content */}
          <div className="relative">
            {/* Course Card Floater */}
            <div className="absolute -left-4 top-10 md:-left-12 md:top-20 z-20 glass p-5 rounded-2xl border border-white/10 shadow-2xl max-w-[200px] hidden md:block animate-in fade-in slide-in-from-left-10 duration-1000">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <FileText size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">4 Módulos</div>
                    <div className="text-xs text-muted-foreground">Vídeo + Práctica</div>
                  </div>
                </div>
                <div className="h-px bg-white/10" />
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                    <Bot size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Casos IA</div>
                    <div className="text-xs text-muted-foreground">Simulación Voz</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Mockup */}
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl shadow-primary/20 border border-white/10 glow-box group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <img 
                src={platformMockup} 
                alt="Plataforma de formación" 
                className="w-full h-auto transform transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
