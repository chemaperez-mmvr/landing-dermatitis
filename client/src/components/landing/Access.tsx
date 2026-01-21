import { Button } from "@/components/ui/button";

export default function Access() {
  return (
    <section id="acceso" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative rounded-[3rem] overflow-hidden p-10 md:p-24 text-center">
          {/* Innovation Background */}
          <div className="absolute inset-0 bg-[#7995C4] z-0 shadow-2xl" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay z-0" />
          
          {/* Abstract Shapes for Innovation feel */}
          <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-white/10 rounded-full blur-3xl z-0" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-black/5 rounded-full blur-3xl z-0" />
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-display font-black text-white leading-tight">
              ¿Preparado para comenzar tu formación?
            </h2>
            <p className="text-white/90 text-xl font-medium max-w-xl mx-auto leading-relaxed">
              Inicia sesión ahora para acceder a los módulos interactivos y las simulaciones de voz con IA.
            </p>
            
            <div className="pt-6 flex flex-col items-center gap-6">
              <Button size="lg" className="bg-white text-primary hover:bg-slate-50 rounded-2xl text-xl px-12 h-16 shadow-2xl shadow-black/10 font-black transition-all hover:scale-105" asChild>
                <a href="https://tudominio.com/login">Entrar a la plataforma</a>
              </Button>
              <div className="flex items-center gap-3 px-5 py-2 rounded-full bg-black/10 backdrop-blur-md border border-white/10">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-sm font-bold text-white uppercase tracking-widest">Plataforma Segura DIGI0671</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
