import { Video, FileDown, Mic, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Modules() {
  const modules = [
    {
      id: 1,
      title: "ASPECTOS DE SEGURIDAD Y EFECTOS ADVERSOS OCULARES CON BIOLÓGICOS",
      bullets: [
        "Caso clínico IA: Paciente en tratamiento con biológicos sin respuesta luego de un periodo de tiempo",
        "Evolución de la DA",
        "Definición estándar de respuesta",
        "Anticuerpos neutralizantes"
      ]
    },
    {
      id: 2,
      title: "PRURITO Y COMORBILIDAD PSICOLÓGICA/ PSIQUIÁTRICA",
      bullets: [
        "Caso clínico IA: Paciente poco adherente, con brotes frecuentes tras incumplimiento del tratamiento",
        "Comunicación medico paciente: Empatía, escucha activa, valoración de las preferencias y necesidades del paciente",
        "Importancia de la valoración y promoción de la adherencia",
        "Factores que considerar antes de realizar un cambio de tratamiento"
      ]
    },
    {
      id: 3,
      title: "ADOLESCENTE CON DERMATITIS ATÓPICA EN CABEZA Y CUELLO",
      bullets: [
        "Caso clínico IA: Paciente con da grave y afectación de cara y cuello",
        "Selección del tratamiento considerando necesidad urgente de control",
        "Principales AE de los tratamientos biológicos y su manejo",
        "Principales EA de los IJAK y su manejo"
      ]
    },
    {
      id: 4,
      title: "PACIENTE CON COMORBILIDADES ORGÁNICAS COMPLEJAS",
      bullets: [
        "Caso clínico IA: 2 pacientes con DA, similar perfil clínico y 2 repuestas diferente al tratamiento",
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
          <h2 className="text-4xl md:text-5xl font-display font-black text-primary uppercase">Módulos del Curso</h2>
          <div className="accent-line w-24 mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {modules.map((mod) => (
            <Card key={mod.id} className="bg-[#FCFBFB] border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group overflow-hidden flex flex-col h-full rounded-3xl">
              <div className="h-2 w-full bg-[#5FABD1]" />
              <CardContent className="p-10 space-y-6 flex-grow">
                <div className="flex items-center gap-4">
                  <span className="text-5xl font-black text-[#C3DC65]/30">0{mod.id}</span>
                  <h3 className="text-xl font-bold text-primary leading-tight">
                    {mod.title}
                  </h3>
                </div>
                <ul className="space-y-4">
                  {mod.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C3DC65] mt-1.5 shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <div className="p-10 bg-slate-50 border-t border-slate-100">
                <p className="text-xs font-bold uppercase text-[#5FABD1] mb-6 tracking-widest">En cada módulo encontrarás:</p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex flex-col items-center gap-2">
                    <Video size={20} className="text-primary" />
                    <span className="text-[10px] font-bold text-slate-500 uppercase">Vídeo</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 border-x border-slate-200">
                    <FileDown size={20} className="text-primary" />
                    <span className="text-[10px] font-bold text-slate-500 uppercase">Documentos</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Mic size={20} className="text-[#C3DC65]" />
                    <span className="text-[10px] font-bold text-[#C3DC65] uppercase">IA Case</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto p-12 rounded-[2.5rem] bg-[#294795] text-white text-center space-y-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#C3DC65]/20 rounded-full blur-3xl" />
          <h3 className="text-2xl md:text-3xl font-bold leading-tight">
            "Interactúa con el paciente virtual y toma decisiones clínicas en tiempo real."
          </h3>
          <p className="text-sm text-slate-200 font-medium leading-relaxed max-w-2xl mx-auto italic">
            “Este caso clínico es interactivo y basado en Inteligencia Artificial. El avatar te hará preguntas mediante voz para simular una consulta real.”
          </p>
          <Button className="bg-[#C3DC65] hover:bg-[#C3DC65]/90 text-[#294795] font-black rounded-full px-12 h-14 uppercase tracking-widest shadow-lg">
            Registrarse Ahora
          </Button>
        </div>
      </div>
    </section>
  );
}
