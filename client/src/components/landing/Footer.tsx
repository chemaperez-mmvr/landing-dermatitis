import { useState } from "react";
import amirLogo from "@assets/fundacion_amir_1769085523593.jpeg";
import pfizerLogo from "@assets/logo-pfizer-scaled-675x675_1769085568344.jpg";
import academiaLogo from "@assets/logo_academia_española_de_dermatologia_logo_1769085364557.png";
import LegalModal from "./LegalModals";

export default function Footer() {
  const [modalType, setModalType] = useState<"privacy" | "legal" | null>(null);

  return (
    <footer className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-16 mb-20 text-center items-start">
          <div className="space-y-6">
            <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Organizado por:</span>
            <div className="h-24 flex items-center justify-center">
              <img src={amirLogo} alt="Fundación AMIR" className="max-h-full w-auto" />
            </div>
          </div>
          <div className="space-y-6">
            <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Con la colaboración independiente de:</span>
            <div className="h-24 flex items-center justify-center">
              <img src={pfizerLogo} alt="Pfizer" className="max-h-full w-auto" />
            </div>
          </div>
          <div className="space-y-6">
            <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Revisado por:</span>
            <div className="h-24 flex items-center justify-center">
              <img src={academiaLogo} alt="AEDV" className="max-h-full w-auto" />
            </div>
          </div>
        </div>

        <div className="pt-16 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div className="space-y-2">
            <h4 className="text-xl font-display font-black text-primary">DA Expert Cases</h4>
            <p className="text-sm font-bold text-[#5FABD1]">secretaria@DAexpertcases.com</p>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">
              DAexpertcases © 2026 Inspira Network S.L.U.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-xs font-black text-slate-400 uppercase tracking-widest">
            <button 
              onClick={() => setModalType("legal")}
              className="hover:text-primary transition-colors uppercase"
            >
              Aviso Legal
            </button>
            <button 
              onClick={() => setModalType("privacy")}
              className="hover:text-primary transition-colors uppercase"
            >
              Privacidad
            </button>
          </div>
        </div>
      </div>

      <LegalModal 
        isOpen={modalType !== null} 
        onClose={() => setModalType(null)} 
        type={modalType || "privacy"} 
      />
    </footer>
  );
}
