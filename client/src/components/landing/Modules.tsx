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
      aiCase: "Paciente con DA grave y afectación de cara y cuello",
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
          <h2 className="text-4xl md:text-5xl font-display font-black text-[#294795] uppercase tracking-tighter">Programa Académico</h2>
          <div className="accent-line w-24 mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {modules.map((mod) => (
            <Card key={mod.id} className="bg-[#FCFBFB] border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group overflow-hidden flex flex-col h-full rounded-3xl hover:-translate-y-2">
              <div className="h-2 w-full bg-[#5FABD1] group-hover:bg-[#C3DC65] transition-colors" />
              <CardContent className="p-10 space-y-8 flex-grow">
                <div className="flex items-center gap-4">
                  <span className="text-5xl font-black text-[#C3DC65]/30 leading-none group-hover:text-[#C3DC65]/50 transition-colors">0{mod.id}</span>
                  <h3 className="text-xl font-bold text-[#294795] leading-tight">
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

                  <div className="p-6 bg-[#294795]/5 rounded-2xl border-l-4 border-l-[#C3DC65] space-y-3 transition-colors group-hover:bg-[#C3DC65]/5">
                    <div className="flex items-center gap-2 text-[#294795] text-[10px] font-black uppercase tracking-widest">
                      <Mic size={14} className="text-[#C3DC65]" /> Caso Clínico IA Destacado
                    </div>
                    <p className="text-sm font-bold text-[#294795] leading-snug italic">
                      {mod.aiCase}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
