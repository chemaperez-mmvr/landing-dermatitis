import amirLogo from "@assets/fundacion_amir_1769085523593.jpeg";

export default function Footer() {
  return (
    <footer className="py-20 border-t border-slate-100 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 space-y-6">
            <div className="flex items-center gap-4">
              <img src={amirLogo} alt="Fundación AMIR" className="h-12" />
              <div className="h-10 w-px bg-slate-100" />
              <div>
                <span className="text-lg font-display font-extrabold text-[#1E50A0] block">DA Expert Cases</span>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Organizado por Fundación AMIR</span>
              </div>
            </div>
            <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-sm">
              Una iniciativa formativa para dermatólogos centrada en la excelencia clínica y la innovación tecnológica.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest">Legal</h4>
            <div className="flex flex-col gap-2 text-sm font-semibold text-slate-400">
              <a href="#" className="hover:text-primary transition-colors">Aviso Legal</a>
              <a href="#" className="hover:text-primary transition-colors">Política de Privacidad</a>
              <a href="#" className="hover:text-primary transition-colors">Política de Cookies</a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest">Contacto</h4>
            <a href="mailto:secretaria@DAexpertcases.com" className="text-primary font-bold hover:underline block">secretaria@DAexpertcases.com</a>
          </div>
        </div>
        
        <div className="border-t border-slate-100 pt-10 flex flex-col md:flex-row justify-between gap-6 text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">
          <p>DAexpertcases © 2026 Inspira Network S.L.U.</p>
          <p>Contenido reservado exclusivamente a profesionales médicos.</p>
        </div>
      </div>
    </footer>
  );
}
