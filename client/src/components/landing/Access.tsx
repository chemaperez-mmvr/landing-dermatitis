import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Access() {
  return (
    <section id="registro" className="py-24 bg-[#FCFBFB] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#294795]/5 pdf-curve -z-10 rotate-180" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto rounded-[3rem] bg-white shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-slate-100">
          <div className="lg:w-1/2 p-12 bg-[#294795] text-white flex flex-col justify-center space-y-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C3DC65]/10 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700" />
            <div className="relative z-10 space-y-6">
              <h2 className="text-4xl font-black leading-tight">
                Accede al curso Dermatitis Atópica Expert Cases
              </h2>
              <p className="text-lg text-slate-200 font-medium leading-relaxed">
                Formación médica avanzada basada en casos clínicos complejos, que integra simulación de pacientes y contenidos formativos orientados a la toma de decisiones clínicas en la práctica real.
              </p>
              <div className="pt-4 flex flex-col gap-4">
                <div className="flex items-center gap-3 text-sm font-bold text-[#C3DC65]">
                  <div className="w-2 h-2 rounded-full bg-[#C3DC65] animate-pulse" />
                  Inicio: Febrero 2026
                </div>
                <div className="flex items-center gap-3 text-sm font-bold text-slate-300">
                  <div className="w-2 h-2 rounded-full bg-slate-400" />
                  Contenido exclusivo para médicos
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 p-12 space-y-8">
            <div className="space-y-2">
              <h3 className="text-2xl font-black text-[#294795]">Registro</h3>
              <div className="h-1 w-12 bg-[#C3DC65]" />
            </div>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-slate-400 tracking-widest">Nombre</label>
                  <Input placeholder="Ej. Juan" className="rounded-xl border-slate-100 focus:ring-[#C3DC65] focus:border-[#C3DC65]" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-slate-400 tracking-widest">Apellidos</label>
                  <Input placeholder="Ej. Pérez García" className="rounded-xl border-slate-100 focus:ring-[#C3DC65] focus:border-[#C3DC65]" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-slate-400 tracking-widest">Email profesional</label>
                <Input type="email" placeholder="juan.perez@hospital.es" className="rounded-xl border-slate-100 focus:ring-[#C3DC65] focus:border-[#C3DC65]" />
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-slate-400 tracking-widest">Centro</label>
                  <Input placeholder="Nombre del hospital o clínica" className="rounded-xl border-slate-100 focus:ring-[#C3DC65] focus:border-[#C3DC65]" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-slate-400 tracking-widest">Nº Colegiado</label>
                  <Input placeholder="Ej. 2828XXXXX" className="rounded-xl border-slate-100 focus:ring-[#C3DC65] focus:border-[#C3DC65]" />
                </div>
              </div>
              
              <div className="pt-6 space-y-4">
                <Button className="w-full bg-[#294795] hover:bg-[#294795]/90 text-white font-black h-14 rounded-xl text-lg uppercase tracking-widest shadow-lg transition-transform hover:scale-[1.02]">
                  Solicitar Registro
                </Button>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest text-center leading-relaxed italic">
                  "El acceso a esta formación está reservado exclusivamente a profesionales médicos."
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
