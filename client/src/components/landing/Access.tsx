import { Button } from "@/components/ui/button";

export default function Access() {
  return (
    <section id="acceso" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative rounded-3xl overflow-hidden p-8 md:p-16 text-center">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-accent/80 z-0" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0" />
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
              ¿Ya tienes acceso?
            </h2>
            <p className="text-white/90 text-lg">
              Inicia sesión para comenzar el módulo o continuar tu progreso donde lo dejaste.
            </p>
            
            <div className="pt-4 flex flex-col items-center gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full text-lg px-10 h-14 shadow-xl" asChild>
                <a href="https://tudominio.com/login">Acceder a la plataforma</a>
              </Button>
              <span className="text-xs text-white/70 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                Acceso seguro. Plataforma externa.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
