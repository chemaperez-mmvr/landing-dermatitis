import { Bot, Layers, Calendar, ChevronRight } from "lucide-react";

export default function WhyAndDynamics() {
  const dynamics = [
    { icon: Layers, text: "5 módulos de especialización profunda" },
    { icon: Bot, text: "Casos clínicos interactivos con avatar y agente de voz basado en IA que te guía, pregunta y reta en tiempo real." },
    { icon: Calendar, text: "Inicio: Febrero 2026" }
  ];

  return (
    <>
      <section id="por-que" className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white leading-tight">
              ¿Por qué este curso?
            </h2>
            <div className="h-1.5 w-24 bg-accent mx-auto rounded-full" />
            <p className="text-xl md:text-2xl text-slate-300 font-medium leading-relaxed italic">
              "Formación innovadora basada en dinámicas inmersivas que responde a las necesidades reales del dermatólogo en la práctica clínica."
            </p>
          </div>
        </div>
      </section>

      <section id="dinamica" className="py-24 bg-slate-900/50 border-y border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <h2 className="text-4xl font-display font-black text-white uppercase tracking-tighter">Dinámica del Curso</h2>
              <div className="space-y-6">
                {dynamics.map((item, i) => (
                  <div key={i} className="flex items-start gap-6 group">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-background transition-all duration-300">
                      <item.icon size={28} />
                    </div>
                    <p className="text-lg text-slate-300 font-medium leading-relaxed pt-2">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-primary/5 rounded-3xl p-8 border border-white/5 relative group overflow-hidden">
              <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10 space-y-6">
                <div className="text-accent font-black text-5xl opacity-20">DA</div>
                <p className="text-2xl font-bold text-white italic leading-snug">
                  "Interactúa con el paciente virtual y toma decisiones clínicas en tiempo real."
                </p>
                <div className="flex items-center gap-2 text-primary font-bold">
                  Explorar metodología <ChevronRight size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
