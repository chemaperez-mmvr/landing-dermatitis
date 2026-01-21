import { Video, Bot, FileText, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Methodology() {
  const items = [
    {
      icon: Video,
      title: "Unidad Didáctica",
      desc: "Contenido en vídeo de alta calidad con expertos en la materia."
    },
    {
      icon: Bot,
      title: "Caso Clínico IA",
      desc: "Practica con agentes de voz inteligentes que simulan pacientes reales."
    },
    {
      icon: FileText,
      title: "Recursos y Enlaces",
      desc: "Documentación descargable y referencias bibliográficas actualizadas."
    }
  ];

  return (
    <section id="metodologia" className="py-20 bg-background relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Metodología</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Un enfoque práctico diseñado para optimizar tu tiempo y maximizar la retención de conocimientos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {items.map((item, i) => (
            <Card key={i} className="bg-card/50 border-white/5 hover:border-primary/50 transition-colors duration-300 group">
              <CardContent className="p-8 text-center flex flex-col items-center h-full">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* How it works */}
        <div className="relative max-w-4xl mx-auto p-8 md:p-12 rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
          
          <h3 className="text-2xl font-display font-bold text-white text-center mb-10">¿Cómo funciona?</h3>
          
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {[
              { step: "01", title: "Accede", desc: "Inicia sesión en la plataforma segura." },
              { step: "02", title: "Aprende", desc: "Completa los módulos de vídeo a tu ritmo." },
              { step: "03", title: "Practica", desc: "Interactúa con el caso clínico IA y revisa recursos." }
            ].map((step, i) => (
              <div key={i} className="relative flex flex-col items-center text-center group">
                <div className="text-5xl font-display font-black text-white/5 mb-4 group-hover:text-primary/20 transition-colors">
                  {step.step}
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
                
                {i < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-1/2 w-full text-white/10 transform -translate-y-1/2">
                    <ArrowRight className="mx-auto" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
