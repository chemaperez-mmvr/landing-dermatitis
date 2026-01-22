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
    <section id="equipo" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-4xl font-display font-extrabold text-slate-900 mb-16 text-center">Equipo Docente</h2>
        
        <div className="max-w-4xl mx-auto mb-20 bg-slate-50 rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 border border-slate-100">
          <img src={pabloImg} alt="Dr. Pablo de la Cueva" className="w-48 h-48 rounded-full border-4 border-white shadow-xl object-cover" />
          <div>
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">Director Científico</span>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Dr. Pablo de la Cueva</h3>
            <p className="text-slate-600 font-medium leading-relaxed">
              Jefe de Servicio de Dermatología, Hospital Infanta Leonor de Madrid. Vicepresidente de la AEDV. Presidente SCAEDV. Profesor Medicina Universidad Complutense de Madrid.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {authors.map((author, i) => (
            <div key={i} className="text-center group">
              <div className="relative mb-6 inline-block">
                <img src={author.img} alt={author.name} className="w-32 h-32 rounded-full mx-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-500 border-4 border-white shadow-lg" />
                <div className="absolute inset-0 rounded-full border-2 border-[#A5C400] scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">{author.name}</h4>
              <p className="text-xs text-slate-500 font-semibold leading-tight px-4">{author.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
