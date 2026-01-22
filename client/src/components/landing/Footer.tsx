import amirLogo from "@assets/fundacion_amir_1769085523593.jpeg";
import pfizerLogo from "@assets/logo-pfizer-scaled-675x675_1769085568344.jpg";
import academiaLogo from "@assets/logo_academia_española_de_dermatologia_logo_1769085364557.png";

export default function Footer() {
  return (
    <footer className="py-24 border-t border-white/5 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-16 mb-20 text-center items-start">
          <div className="space-y-6">
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Organizado por:</span>
            <div className="h-24 flex items-center justify-center p-4 bg-white/5 rounded-xl border border-white/5 grayscale hover:grayscale-0 transition-all">
              <img src={amirLogo} alt="Fundación AMIR" className="max-h-full w-auto object-contain" />
            </div>
          </div>
          <div className="space-y-6">
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Con la colaboración independiente de:</span>
            <div className="h-24 flex items-center justify-center p-4 bg-white/5 rounded-xl border border-white/5 grayscale hover:grayscale-0 transition-all">
              <img src={pfizerLogo} alt="Pfizer" className="max-h-full w-auto object-contain" />
            </div>
          </div>
          <div className="space-y-6">
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Revisado por:</span>
            <div className="h-24 flex items-center justify-center p-4 bg-white/5 rounded-xl border border-white/5 grayscale hover:grayscale-0 transition-all">
              <img src={academiaLogo} alt="Academia Española de Dermatología y Venereología" className="max-h-full w-auto object-contain" />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 pt-16 border-t border-white/5 items-center">
          <div className="space-y-4 text-center lg:text-left">
            <h4 className="text-xl font-display font-black text-white tracking-tight">DA Expert Cases</h4>
            <p className="text-sm font-bold text-primary">secretaria@DAexpertcases.com</p>
            <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">
              DAexpertcases © 2026 Inspira Network S.L.U.
            </p>
          </div>
          <div className="flex flex-wrap justify-center lg:justify-end gap-8 text-[10px] font-black text-slate-500 uppercase tracking-widest">
            <a href="#" className="hover:text-accent transition-colors">Aviso Legal</a>
            <a href="#" className="hover:text-accent transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-accent transition-colors">Política de Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
