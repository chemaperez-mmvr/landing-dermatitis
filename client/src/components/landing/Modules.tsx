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
    <section id="modulos" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center md:text-left">
          <span className="text-primary font-extrabold tracking-wider uppercase text-sm mb-2 block">Programa Académico</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">4 Módulos de Especialización</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {modules.map((mod, i) => (
            <Card key={i} className="bg-white border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden rounded-2xl">
              <div className="h-1.5 w-full bg-primary/20 group-hover:bg-primary transition-colors" />
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-extrabold text-slate-900 leading-tight mb-2">
                  {mod.title}
                </CardTitle>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10 mt-2 group-hover:bg-primary/10 transition-colors">
                  <Mic className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-black text-primary uppercase block mb-0.5">Caso Clínico IA</span>
                    <span className="text-sm font-bold text-slate-700">{mod.aiCase}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {mod.topics.map((topic, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm font-semibold text-slate-600 group-hover:text-slate-900 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-accent mt-1.5 shrink-0" />
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
