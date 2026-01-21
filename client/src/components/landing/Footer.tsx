export default function Footer() {
  return (
    <footer className="py-16 border-t border-slate-100 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-12">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <div className="w-7 h-7 rounded bg-slate-900 flex items-center justify-center text-white font-bold text-sm">D</div>
              <span className="text-lg font-display font-bold tracking-tight text-slate-900">DIGI<span className="text-primary">0671</span></span>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-sm font-bold text-slate-600">
            <a href="#" className="hover:text-primary transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white bg-slate-900 px-4 py-2 rounded-full text-white transition-colors">Términos</a>
            <a href="mailto:contacto@tudominio.com" className="hover:text-primary transition-colors">Contacto</a>
          </div>
        </div>
        
        <div className="text-center md:text-left border-t border-slate-200 pt-10 flex flex-col md:flex-row justify-between gap-6 text-xs font-bold text-slate-400 uppercase tracking-widest">
          <p>© 2026 DIGI0671. Todos los derechos reservados.</p>
          <p className="max-w-md md:text-right normal-case tracking-normal text-slate-500 font-semibold">
            Contenido formativo. No sustituye el criterio clínico ni constituye consejo médico.
          </p>
        </div>
      </div>
    </footer>
  );
}
