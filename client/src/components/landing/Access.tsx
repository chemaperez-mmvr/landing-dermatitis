import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

export default function Access() {
  return (
    <section id="registro" className="py-24 bg-[#FCFBFB] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#294795]/5 pdf-curve -z-10 rotate-180" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto rounded-[3rem] bg-white shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-slate-100">
          <div className="lg:w-1/3 p-12 bg-[#294795] text-white flex flex-col justify-center space-y-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C3DC65]/40 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700" />
            <div className="relative z-10 space-y-6">
              <h2 className="text-4xl font-black leading-tight text-white drop-shadow-lg drop-shadow-white/20">
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
          
          <div className="lg:w-2/3 p-12 space-y-8">
            <div className="space-y-2">
              <h3 className="text-2xl font-black text-[#294795]">Registro</h3>
              <div className="h-1 w-12 bg-[#C3DC65]" />
            </div>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-slate-400 tracking-widest">Nombre y apellidos</label>
                  <Input placeholder="Ej. Juan Pérez García" className="rounded-xl border-slate-200 h-12 focus:ring-[#C3DC65] focus:border-[#C3DC65]" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-slate-400 tracking-widest">Tipo de documento</label>
                  <select className="flex h-12 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C3DC65] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-medium text-slate-900">
                    <option value="DNI">DNI</option>
                    <option value="NIF">NIF</option>
                    <option value="Pasaporte">Pasaporte</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-slate-400 tracking-widest">Documento</label>
                  <Input placeholder="Número de documento" className="rounded-xl border-slate-200 h-12 focus:ring-[#C3DC65] focus:border-[#C3DC65]" />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-slate-400 tracking-widest">Especialidad</label>
                  <Input placeholder="Ej. Dermatología" className="rounded-xl border-slate-200 h-12 focus:ring-[#C3DC65] focus:border-[#C3DC65]" />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-slate-400 tracking-widest">Centro de trabajo</label>
                  <Input placeholder="Hospital o clínica" className="rounded-xl border-slate-200 h-12 focus:ring-[#C3DC65] focus:border-[#C3DC65]" />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-slate-400 tracking-widest">Provincia del centro de trabajo</label>
                  <Input placeholder="Provincia" className="rounded-xl border-slate-200 h-12 focus:ring-[#C3DC65] focus:border-[#C3DC65]" />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-slate-400 tracking-widest">E-mail</label>
                  <Input type="email" placeholder="email@ejemplo.com" className="rounded-xl border-slate-200 h-12 focus:ring-[#C3DC65] focus:border-[#C3DC65]" />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-slate-400 tracking-widest">Contraseña</label>
                  <Input type="password" placeholder="••••••••" className="rounded-xl border-slate-200 h-12 focus:ring-[#C3DC65] focus:border-[#C3DC65]" />
                </div>
              </div>
              
              <div className="space-y-4 pt-4">
                <div className="flex items-start space-x-3 group">
                  <Checkbox id="consent-1" className="mt-1 border-slate-300 data-[state=checked]:bg-[#294795] data-[state=checked]:border-[#294795]" />
                  <label htmlFor="consent-1" className="text-[11px] leading-relaxed text-slate-600 font-medium cursor-pointer group-hover:text-slate-900 transition-colors">
                    Declaro que he leído y acepto la política de Privacidad de Inspira Network S.L.U
                  </label>
                </div>

                <div className="flex items-start space-x-3 group">
                  <Checkbox id="consent-2" className="mt-1 border-slate-300 data-[state=checked]:bg-[#294795] data-[state=checked]:border-[#294795]" />
                  <label htmlFor="consent-2" className="text-[11px] leading-relaxed text-slate-600 font-medium cursor-pointer group-hover:text-slate-900 transition-colors">
                    Consiento que Inspira Network S.L.U comunique a la AEDV mis datos personales (de contacto y profesionales) para recibir comunicaciones comerciales, incluso por medios electrónicos, relativas a información científica, promocional, institucional, formativa, así como de productos y servicios, de conformidad con mis preferencias. En la política de privacidad se facilita información sobre el tratamiento de mis datos personales y cómo puedo ejercer mis derechos de acceso, rectificación, supresión, retirada del consentimiento, entre otros
                  </label>
                </div>
              </div>
              
              <div className="pt-6 space-y-4">
                <Button className="w-full bg-[#294795] hover:bg-[#294795]/90 text-white font-black h-14 rounded-xl text-lg uppercase tracking-widest shadow-lg transition-transform hover:scale-[1.02]">
                  Acceder al curso
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
