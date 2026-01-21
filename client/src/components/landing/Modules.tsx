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
    <section id="modulos" className="py-20 bg-black/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Programa Académico</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white">4 Módulos de Especialización</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {modules.map((mod, i) => (
            <Card key={i} className="bg-card border-white/5 hover:border-primary/50 transition-all duration-300 group overflow-hidden">
              <div className="h-1 w-full bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white leading-tight mb-2">
                  {mod.title}
                </CardTitle>
                <div className="flex items-start gap-2 p-3 rounded-lg bg-primary/10 border border-primary/20 mt-2">
                  <Mic className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-primary uppercase block mb-0.5">Caso Clínico IA</span>
                    <span className="text-sm text-gray-200">{mod.aiCase}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {mod.topics.map((topic, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground group-hover:text-gray-300 transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
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
