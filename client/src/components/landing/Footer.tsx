import inspiraLogo from "@assets/generated_images/minimalist_tech_logo_for_inspira.png";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 bg-black/40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <div className="flex items-center gap-2">
            <img src={inspiraLogo} alt="INS PIRA" className="h-8 w-auto opacity-70 grayscale hover:grayscale-0 transition-all" />
          </div>
          
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos</a>
            <a href="mailto:contacto@tudominio.com" className="hover:text-white transition-colors">Contacto</a>
          </div>
        </div>
        
        <div className="text-center md:text-left border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between gap-4 text-xs text-muted-foreground/50">
          <p>© 2026 INSPIRA. Todos los derechos reservados.</p>
          <p>Contenido formativo. No sustituye el criterio clínico ni constituye consejo médico.</p>
        </div>
      </div>
    </footer>
  );
}
