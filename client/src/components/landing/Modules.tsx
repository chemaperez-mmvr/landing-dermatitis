import { Mic } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Modules() {
  const modules = [
    {
      id: 1,
      title: "ASPECTOS DE SEGURIDAD Y EFECTOS ADVERSOS OCULARES CON BIOLÓGICOS",
      aiCase: "Paciente en tratamiento con biológicos sin respuesta luego de un periodo de tiempo",
      bullets: [
        "Evolución de la DA",
        "Definición estándar de respuesta",
        "Anticuerpos neutralizantes"
      ]
    },
    {
      id: 2,
      title: "PRURITO Y COMORBILIDAD PSICOLÓGICA/ PSIQUIÁTRICA",
      aiCase: "Paciente poco adherente, con brotes frecuentes tras incumplimiento del tratamiento",
      bullets: [
        "Comunicación medico paciente: Empatía, escucha activa",
        "Importancia de la valoración y promoción de la adherencia",
        "Factores que considerar antes de realizar un cambio de tratamiento"
      ]
    },
    {
      id: 3,
      title: "ADOLESCENTE CON DERMATITIS ATÓPICA EN CABEZA Y CUELLO",
      aiCase: "Paciente con da grave y afectación de cara y cuello",
      bullets: [
        "Selección del tratamiento considerando necesidad urgente de control",
        "Principales AE de los tratamientos biológicos y su manejo",
        "Principales EA de los IJAK y su manejo"
      ]
    },
    {
      id: 4,
      title: "PACIENTE CON COMORBILIDADES ORGÁNICAS COMPLEJAS",
      aiCase: "2 pacientes con DA, similar perfil clínico y 2 repuestas diferente al tratamiento",
      bullets: [
        "Variación en la respuesta de un paciente a otro ¿Cómo evaluar la eficacia?",
        "Comorbilidades",
        "Interacciones con otros medicamentos"
      ]
    }
  ];

  return (
    <section id="modulos" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-display font-black text-primary uppercase tracking-tighter">Programa Académico</h2>
          <div className="accent-line w-24 mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {modules.map((mod) => (
            <Card key={mod.id} className="bg-[#FCFBFB] border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group overflow-hidden flex flex-col h-full rounded-3xl">
              <div className="h-2 w-full bg-[#5FABD1]" />
              <CardContent className="p-10 space-y-8 flex-grow">
                <div className="flex items-center gap-4">
                  <span className="text-5xl font-black text-[#C3DC65]/30 leading-none">0{mod.id}</span>
                  <h3 className="text-xl font-bold text-primary leading-tight">
                    {mod.title}
                  </h3>
                </div>

                <div className="space-y-6">
                  <ul className="space-y-3">
                    {mod.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#C3DC65] mt-1.5 shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <div className="p-6 bg-[#294795]/5 rounded-2xl border-l-4 border-l-[#C3DC65] space-y-3">
                    <div className="flex items-center gap-2 text-[#294795] text-[10px] font-black uppercase tracking-widest">
                      <Mic size={14} className="text-[#C3DC65]" /> Caso Clínico IA Destacado
                    </div>
                    <p className="text-sm font-bold text-primary leading-snug italic">
                      {mod.aiCase}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto p-12 rounded-[2.5rem] bg-[#294795] text-white text-center space-y-8 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C3DC65]/10 rounded-full blur-3xl -z-0 group-hover:scale-110 transition-transform duration-700" />
          <div className="relative z-10 space-y-8">
            <h3 className="text-2xl md:text-3xl font-bold leading-tight max-w-2xl mx-auto">
              "Interactúa con el paciente virtual y toma decisiones clínicas en tiempo real."
            </h3>
            <p className="text-xs text-slate-300 font-medium leading-relaxed max-w-lg mx-auto uppercase tracking-[0.2em]">
              Este caso clínico es interactivo y basado en Inteligencia Artificial. El avatar te hará preguntas mediante voz para simular una consulta real.
            </p>
            <Button className="bg-[#C3DC65] hover:bg-[#C3DC65]/90 text-[#294795] font-black rounded-full px-16 h-16 text-lg uppercase tracking-widest shadow-lg transform hover:scale-105 transition-all">
              Solicitar Invitación
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
