import { Mic, Video, FileDown, ArrowRight } from "lucide-react";

export default function Modules() {
  const modules = [
    { id: 1, title: "Aspectos de seguridad y efectos adversos oculares con biológicos", case: "Paciente en tratamiento con biológicos sin respuesta" },
    { id: 2, title: "Prurito y comorbilidad psicológica/psiquiátrica", case: "Paciente poco adherente con brotes frecuentes" },
    { id: 3, title: "Adolescente con dermatitis atópica en cabeza y cuello", case: "Paciente con DA grave y afectación facial" },
    { id: 4, title: "Paciente con comorbilidades orgánicas complejas", case: "Diferentes respuestas terapéuticas en perfiles similares" }
  ];

  return (
    <section id="programa" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl font-display font-extrabold text-slate-900 mb-6">4 Módulos Especializados</h2>
          <p className="text-lg text-slate-600 font-medium">Una formación profunda que responde a las necesidades reales del dermatólogo en la práctica clínica.</p>
        </div>

        <div className="grid gap-8">
          {modules.map((mod) => (
            <div key={mod.id} className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 flex flex-col lg:flex-row gap-10 hover:shadow-xl transition-all duration-500">
              <div className="lg:w-1/3">
                <div className="text-sm font-black text-primary uppercase tracking-widest mb-2">Módulo {mod.id}</div>
                <h3 className="text-2xl font-bold text-slate-900 leading-tight mb-4">{mod.title}</h3>
                <div className="flex flex-wrap gap-4 mt-6">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-400 bg-slate-50 px-3 py-1.5 rounded-full">
                    <Video size={14} className="text-primary" /> Vídeo formativo
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-400 bg-slate-50 px-3 py-1.5 rounded-full">
                    <FileDown size={14} className="text-primary" /> Descargables
                  </div>
                </div>
              </div>
              
              <div className="lg:w-2/3 bg-slate-900 rounded-2xl p-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#A5C400]/20 rounded-full blur-3xl -z-0" />
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-2 text-[#A5C400] text-xs font-black uppercase tracking-widest mb-2">
                      <Mic size={16} /> Caso Clínico Interactivo IA
                    </div>
                    <h4 className="text-white text-xl font-bold mb-2">{mod.case}</h4>
                    <p className="text-slate-400 text-xs font-medium italic">
                      "Interactúa con el paciente virtual y toma decisiones clínicas en tiempo real."
                    </p>
                  </div>
                  <button className="bg-[#A5C400] hover:bg-[#A5C400]/90 text-slate-900 font-black px-6 py-3 rounded-xl text-sm transition-all whitespace-nowrap">
                    Comenzar Simulación
                  </button>
                </div>
                <p className="text-[10px] text-slate-500 mt-6 font-medium border-t border-white/10 pt-4">
                  Este caso clínico es interactivo y basado en Inteligencia Artificial. El avatar te hará preguntas mediante voz para simular una consulta real.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
