import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mic, Check } from "lucide-react";

export default function Modules() {
  const modules = [
    {
      title: "Módulo 1: Seguridad y efectos adversos oculares",
      aiCase: "Paciente sin respuesta a biológicos",
      topics: [
        "Evolución de la DA",
        "Definición estándar de respuesta",
        "Anticuerpos neutralizantes"
      ]
    },
    {
      title: "Módulo 2: Prurito y comorbilidad psicológica",
      aiCase: "Paciente poco adherente con brotes",
      topics: [
        "Comunicación médico-paciente",
        "Valoración de preferencias",
        "Promoción de la adherencia",
        "Cambio de tratamiento"
      ]
    },
    {
      title: "Módulo 3: Adolescente con DA en cabeza y cuello",
      aiCase: "DA grave con afectación facial",
      topics: [
        "Selección de tratamiento urgente",
        "AE de tratamientos biológicos",
        "EA de iJAK y manejo"
      ]
    },
    {
      title: "Módulo 4: Comorbilidades orgánicas complejas",
      aiCase: "Dos pacientes, perfiles similares, respuestas distintas",
      topics: [
        "Variación en la respuesta",
        "Evaluación de la eficacia",
        "Comorbilidades e interacciones"
      ]
    }
  ];

  return (
    <section id="modulos" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-20 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-slate-50 text-primary font-black tracking-widest uppercase text-[10px] mb-4 border border-slate-100 shadow-sm">
            Programa Académico
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-slate-900">4 Módulos de Especialización</h2>
          <div className="w-20 h-1.5 bg-[#7995C4] mx-auto mt-6 rounded-full opacity-30" />
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {modules.map((mod, i) => (
            <Card key={i} className="bg-white border-slate-50 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group overflow-hidden rounded-[2rem] p-4">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-black text-slate-900 leading-tight mb-4">
                  {mod.title}
                </CardTitle>
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 group-hover:bg-white group-hover:border-primary/20 transition-all duration-500">
                  <div className="w-12 h-12 rounded-xl bg-[#7995C4] flex items-center justify-center text-white shrink-0 shadow-lg shadow-primary/10">
                    <Mic size={24} />
                  </div>
                  <div>
                    <span className="text-[10px] font-black text-primary uppercase block mb-1 tracking-widest">Caso Clínico IA</span>
                    <span className="text-base font-bold text-slate-700">{mod.aiCase}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 pt-4">
                  {mod.topics.map((topic, j) => (
                    <li key={j} className="flex items-center gap-4 text-sm font-bold text-slate-500 group-hover:text-slate-700 transition-colors">
                      <div className="w-2.5 h-2.5 rounded-full bg-accent opacity-40 group-hover:opacity-100 transition-opacity" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
