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
    <section id="metodologia" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4 text-balance">Nuestra Metodología de Aprendizaje</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg font-medium">
            Un enfoque práctico diseñado para optimizar tu tiempo y maximizar la retención de conocimientos clínicos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {items.map((item, i) => (
            <Card key={i} className="bg-white border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group rounded-2xl overflow-hidden">
              <CardContent className="p-10 text-center flex flex-col items-center h-full">
                <div className="w-20 h-20 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                  <item.icon size={36} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 font-medium leading-relaxed">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* How it works */}
        <div className="relative max-w-5xl mx-auto p-12 md:p-16 rounded-[2.5rem] border border-slate-100 bg-slate-50/50 shadow-inner">
          <h3 className="text-3xl font-display font-bold text-slate-900 text-center mb-14">¿Cómo funciona el proceso?</h3>
          
          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            {[
              { step: "01", title: "Acceso", desc: "Inicia sesión en la plataforma segura con tus credenciales." },
              { step: "02", title: "Módulos", desc: "Completa las unidades didácticas interactivas." },
              { step: "03", title: "Simulación", desc: "Practica con el caso clínico IA y revisa tus métricas." }
            ].map((step, i) => (
              <div key={i} className="relative flex flex-col items-center text-center group">
                <div className="text-6xl font-display font-black text-slate-200/50 mb-6 group-hover:text-primary/20 transition-colors">
                  {step.step}
                </div>
                <h4 className="text-xl font-extrabold text-slate-900 mb-3">{step.title}</h4>
                <p className="text-slate-600 font-semibold leading-relaxed px-4">{step.desc}</p>
                
                {i < 2 && (
                  <div className="hidden md:block absolute top-[20%] -right-[30%] w-full text-slate-200 transform">
                    <ArrowRight className="mx-auto" size={32} />
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
