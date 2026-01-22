import { Bot, Layers, BookOpen, Mic, Video, FileDown } from "lucide-react";

export default function WhyAndDynamics() {
  const features = [
    { icon: Layers, text: "4 módulos de especialización" },
    { icon: Bot, text: "Avatares clínicos realistas" },
    { icon: Mic, text: "Casos interactivos con IA" },
    { icon: BookOpen, text: "Contenido formativo de alto nivel" }
  ];

  return (
    <section id="por-que" className="py-24 bg-[#FCFBFB] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-display font-black text-[#294795] leading-tight">
                ¿Por qué este curso? <br />
                <span className="text-[#5FABD1]">Entrena la toma de decisiones clínicas</span>
              </h2>
              <div className="accent-line w-24" />
            </div>
            
            <p className="text-xl text-slate-600 font-medium leading-relaxed">
              Aprende a tomar decisiones en DA moderada-grave mediante casos clínicos interactivos, simulación conversacional con IA y contenidos formativos orientados a la práctica clínica.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              {features.map((feat, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-[#5FABD1]/10 flex items-center justify-center text-[#5FABD1] group-hover:bg-[#C3DC65] group-hover:text-white transition-all">
                    <feat.icon size={24} />
                  </div>
                  <span className="text-sm font-bold text-[#294795] uppercase tracking-wide">{feat.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-[3rem] p-10 shadow-xl border border-slate-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#C3DC65]/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
            <div className="space-y-8 relative z-10">
              <h3 className="text-xs font-black text-[#5FABD1] uppercase tracking-[0.3em]">Metodología en cada módulo</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-full bg-slate-50 flex items-center justify-center text-[#294795] shadow-sm">
                    <Video size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#294795]">Unidad didáctica</h4>
                    <p className="text-xs text-slate-500 uppercase font-black tracking-widest">Formato Vídeo</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-full bg-[#C3DC65]/20 flex items-center justify-center text-[#294795] shadow-sm">
                    <Mic size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#294795]">Caso clínico basado en agentes de voz con IA</h4>
                    <p className="text-xs text-[#5FABD1] uppercase font-black tracking-widest">Simulación Real</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-full bg-slate-50 flex items-center justify-center text-[#294795] shadow-sm">
                    <FileDown size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#294795]">Documentación y enlaces de interés</h4>
                    <p className="text-xs text-slate-500 uppercase font-black tracking-widest">Material Descargable</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
