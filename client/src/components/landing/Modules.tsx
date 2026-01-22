import { Video, FileDown, Mic, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Modules() {
  const modules = [
    {
      id: 1,
      title: "Aspectos de seguridad y efectos adversos oculares con biológicos",
      bullets: [
        "Caso clínico IA: Paciente en tratamiento con biológicos sin respuesta luego de un periodo de tiempo",
        "Evolución de la DA",
        "Definición estándar de respuesta",
        "Anticuerpos neutralizantes"
      ]
    },
    {
      id: 2,
      title: "Prurito y comorbilidad psicológica/psiquiátrica",
      bullets: [
        "Caso clínico IA: Paciente poco adherente, con brotes frecuentes tras incumplimiento del tratamiento",
        "Comunicación medico paciente: Empatía, escucha activa, valoración de las preferencias y necesidades del paciente",
        "Importancia de la valoración y promoción de la adherencia",
        "Factores que considerar antes de realizar un cambio de tratamiento"
      ]
    },
    {
      id: 3,
      title: "Adolescente con dermatitis atópica en cabeza y cuello",
      bullets: [
        "Caso clínico IA: Paciente con da grave y afectación de cara y cuello",
        "Selección del tratamiento considerando necesidad urgente de control",
        "Principales AE de los tratamientos biológicos y su manejo",
        "Principales EA de los IJAK y su manejo"
      ]
    },
    {
      id: 4,
      title: "Paciente con comorbilidades orgánicas complejas",
      bullets: [
        "Caso clínico IA: 2 pacientes con DA, similar perfil clínico y 2 repuestas diferente al tratamiento",
        "Variación en la respuesta de un paciente a otro ¿Cómo evaluar la eficacia?",
        "Comorbilidades",
        "Interacciones con otros medicamentos"
      ]
    }
  ];

  return (
    <section id="modulos" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-display font-black text-white uppercase tracking-tighter">Programa Académico</h2>
          <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">4 Módulos de Alto Impacto</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {modules.map((mod) => (
            <Card key={mod.id} className="bg-slate-900/40 border-white/5 hover:border-accent/30 transition-all duration-500 group overflow-hidden flex flex-col h-full rounded-none">
              <div className="h-1 w-full bg-primary/20 group-hover:bg-accent transition-colors" />
              <CardContent className="p-8 space-y-6 flex-grow">
                <div className="flex items-center justify-between">
                  <span className="text-accent font-black text-xs uppercase tracking-[0.3em]">Módulo {mod.id}</span>
                  <div className="h-px flex-grow mx-4 bg-white/5" />
                </div>
                <h3 className="text-2xl font-bold text-white leading-snug group-hover:text-accent transition-colors">
                  {mod.title}
                </h3>
                <ul className="space-y-4">
                  {mod.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-400 group-hover:text-slate-300">
                      <CheckCircle2 size={16} className="text-accent mt-0.5 shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <div className="p-8 bg-white/2 border-t border-white/5">
                <p className="text-[10px] font-black uppercase text-slate-500 mb-4 tracking-widest">En cada módulo encontrarás:</p>
                <div className="grid grid-cols-3 gap-2">
                  <div className="flex flex-col items-center gap-2 text-center">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary"><Video size={18} /></div>
                    <span className="text-[9px] font-bold text-slate-400 uppercase">Vídeo</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 text-center">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary"><FileDown size={18} /></div>
                    <span className="text-[9px] font-bold text-slate-400 uppercase">Documentos</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 text-center">
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent ring-2 ring-accent/20"><Mic size={18} /></div>
                    <span className="text-[9px] font-bold text-accent uppercase">IA Case</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto p-8 rounded-xl bg-slate-900/80 border border-white/5 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest">
            <Mic size={16} /> Caso Clínico Interactivo
          </div>
          <p className="text-lg text-white font-medium italic">
            "Interactúa con el paciente virtual y toma decisiones clínicas en tiempo real."
          </p>
          <p className="text-[10px] text-slate-500 font-medium leading-relaxed max-w-lg mx-auto uppercase tracking-widest">
            Este caso clínico es interactivo y basado en Inteligencia Artificial. El avatar te hará preguntas mediante voz para simular una consulta real.
          </p>
        </div>
      </div>
    </section>
  );
}
