import pabloImg from "../../assets/team/pablo.png";
import trinidadImg from "../../assets/team/trinidad.png";
import danielImg from "../../assets/team/daniel.png";
import monicaImg from "../../assets/team/monica.png";
import rubenImg from "../../assets/team/ruben.png";

export default function Team() {
  const authors = [
    { name: "Dra. Trinidad Montero Vilchez", img: trinidadImg, desc: "Especialista en Dermatología, Hospital Universitario Virgen de las Nieves de Granada" },
    { name: "Dr. Daniel González-Vilas", img: danielImg, desc: "Especialista en Dermatología, Complexo Hospitalario Universitario de Pontevedra" },
    { name: "Dra. Mónica Munera Campos", img: monicaImg, desc: "Especialista en Dermatología, Hospital Universitari Germans Trias i Pujol, Badalona" },
    { name: "Dr. Rubén García Castro", img: rubenImg, desc: "Especialista en Dermatología, Hospital Universitario Fundación Jiménez Díaz, Madrid" },
  ];

  return (
    <section id="equipo" className="py-24 bg-slate-900/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-display font-black text-white uppercase tracking-tighter">Equipo Docente</h2>
          <div className="h-1 w-20 bg-accent mx-auto" />
        </div>
        
        <div className="max-w-5xl mx-auto mb-24 p-8 md:p-12 glass rounded-none flex flex-col md:flex-row items-center gap-12 border-l-4 border-l-accent relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10" />
          <img src={pabloImg} alt="Dr. Pablo de la Cueva" className="w-56 h-56 rounded-none object-cover grayscale brightness-110 border-4 border-white/5 shadow-2xl" />
          <div className="space-y-6">
            <div>
              <span className="text-accent font-black uppercase tracking-[0.3em] text-xs mb-2 block">Director Científico</span>
              <h3 className="text-4xl font-black text-white leading-tight">Dr. Pablo de la Cueva</h3>
            </div>
            <p className="text-lg text-slate-300 font-medium leading-relaxed">
              Jefe de Servicio de Dermatología, Hospital Infanta Leonor de Madrid. Vicepresidente de la AEDV. Presidente SCAEDV. Profesor Medicina Universidad Complutense de Madrid.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {authors.map((author, i) => (
            <div key={i} className="group text-center space-y-6">
              <div className="relative inline-block">
                <img src={author.img} alt={author.name} className="w-36 h-36 rounded-none mx-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700 border border-white/10" />
                <div className="absolute inset-0 border border-accent/0 group-hover:border-accent/50 group-hover:scale-110 transition-all duration-500 pointer-events-none" />
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-bold text-white group-hover:text-accent transition-colors">{author.name}</h4>
                <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest leading-relaxed px-4 group-hover:text-slate-400 transition-colors">
                  {author.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
