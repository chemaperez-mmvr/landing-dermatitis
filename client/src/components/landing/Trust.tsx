import amirLogo from "@assets/fundacion_amir_1769085523593.jpeg";
import pfizerLogo from "@assets/logo-pfizer-scaled-675x675_1769085568344.jpg";
import academiaLogo from "@assets/logo_academia_española_de_dermatologia_logo_1769085364557.png";

export default function Trust() {
  return (
    <section className="py-24 bg-slate-50 border-y border-slate-100">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-16 items-center text-center">
          <div className="space-y-6">
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Organizado por:</p>
            <img src={amirLogo} alt="Fundación AMIR" className="h-24 mx-auto object-contain" />
          </div>
          <div className="space-y-6">
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Con la colaboración independiente de:</p>
            <img src={pfizerLogo} alt="Pfizer" className="h-24 mx-auto object-contain" />
          </div>
          <div className="space-y-6">
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Revisado por:</p>
            <img src={academiaLogo} alt="Academia Española de Dermatología" className="h-20 mx-auto object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}
