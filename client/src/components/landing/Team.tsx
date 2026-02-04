import pabloImg from "@assets/Dr_Pablo_Cueva_1769158374569.jpg";
import trinidadImg from "@assets/Trinidad_Montero_Vilchez_1769158374573.jpg";
import danielImg from "@assets/Daniel_Gonzalez_Vilas_1769158374559.jpg";
import monicaImg from "@assets/Monica_Munera_Campos_1769158374571.jpeg";
import rubenImg from "@assets/Ruben_Garcia_Castro_1769158374572.jpeg";

export default function Team() {
  const authors = [
    { name: "Dra. Trinidad Montero Vilchez", img: trinidadImg, desc: "Especialista en Dermatología, Hospital Universitario Virgen de las Nieves de Granada" },
    { name: "Dr. Daniel González-Vilas", img: danielImg, desc: "Especialista en Dermatología, Complexo Hospitalario Universitario de Pontevedra" },
    { name: "Dra. Mónica Munera Campos", img: monicaImg, desc: "Especialista en Dermatología, Hospital Universitari Germans Trias i Pujol, Badalona" },
    { name: "Dr. Rubén García Castro", img: rubenImg, desc: "Especialista en Dermatología, Hospital Universitario Fundación Jiménez Díaz, Madrid" },
  ];

  return (
    <section id="comite" className="py-24 bg-[#FCFBFB]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-display font-black text-primary uppercase">Comité científico</h2>
          <div className="accent-line w-20 mx-auto" />
        </div>
        
        <div className="max-w-5xl mx-auto mb-24 p-12 bg-white rounded-[3rem] shadow-xl border border-slate-100 flex flex-col md:flex-row items-center gap-12 relative">
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#C3DC65]/20 rounded-full blur-2xl -z-10" />
          <img src={pabloImg} alt="Dr. Pablo de la Cueva" className="w-64 h-64 rounded-3xl object-cover border-4 border-white shadow-lg" />
          <div className="space-y-6">
            <div>
              <span className="text-[#5FABD1] font-black uppercase tracking-widest text-xs mb-2 block">Director Científico</span>
              <h3 className="text-4xl font-black text-primary leading-tight">Dr. Pablo de la Cueva</h3>
            </div>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              Jefe de Servicio de Dermatología, Hospital Infanta Leonor de Madrid. Vicepresidente de la AEDV. Presidente SCAEDV. Profesor Medicina Universidad Complutense de Madrid.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {authors.map((author, i) => (
            <div key={i} className="group text-center space-y-6">
              <div className="relative inline-block">
                <img src={author.img} alt={author.name} className="w-40 h-40 rounded-[2rem] mx-auto object-cover border-4 border-white shadow-md transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 border-2 border-[#C3DC65]/0 group-hover:border-[#C3DC65]/50 rounded-[2rem] transition-all" />
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-bold text-primary group-hover:text-[#5FABD1] transition-colors">{author.name}</h4>
                <p className="text-xs text-slate-500 font-medium leading-relaxed px-4">
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
