import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "privacy" | "legal";
}

export default function LegalModal({ isOpen, onClose, type }: LegalModalProps) {
  const content = {
    privacy: {
      title: "Política de Privacidad",
      body: (
        <div className="space-y-4 text-sm leading-relaxed text-slate-600">
          <p className="font-bold text-[#294795]">PROTECCIÓN DE DATOS PERSONALES</p>
          <p>
            EL PROPETARIO DE LA WEB tratará los datos de forma confidencial y exclusivamente con la finalidad de ofrecer los servicios solicitados, con todas las garantías legales y de seguridad que impone el Reglamento (UE) 2016/679, del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos -RGPD-, así la Ley Orgánica 3/2018, de 5 de diciembre, de protección de datos personales y garantía de los derechos digitales -LOPDGDD-.
          </p>
          <p>
            Sus datos han sido recogidos con la finalidad de mantener con Vd. relaciones profesionales y /o comerciales. La facilitación de estos se considera consentimiento libre, expreso e inequívoco para su tratamiento, basándonos en el artículo 6.1.a) RGPD. Asimismo, estos datos solo serán cedidos en caso de obligación legal, según dispone el artículo 6.1.c) RGPD.
          </p>
          <p>
            Sus datos han sido incorporados al Sistema de Protección de Datos de Inspira Network Group, S. L., con N. I. F. B87466405, y domicilio en Calle Caleruega 102, 4ª planta, 28033 - Madrid, y serán conservados mientras que la finalidad para su tratamiento esté vigente. Asimismo, mantendremos una copia bloqueada, mientras haya obligaciones legales por las que puedan requerírnoslos.
          </p>
          <p>
            En el caso de que lo considere procedente, puede presentar reclamación ante Agencia Española de Protección de Datos, como Autoridad de Control. Con carácter previo a la posible reclamación ante la AEPD, puede dirigirse a nuestro DPD y le daremos satisfacción a su reclamación.
          </p>
          <p>
            Le recordamos que puede retirar su consentimiento para el tratamiento de sus datos personales en cualquier momento, sin que ello afecte al tratamiento que se haya realizado con anterioridad. Asimismo, le recordamos que dispone del derecho de acceso a los datos disponibles, así como de los derechos de rectificación, de supresión, de oposición y de limitación de su tratamiento o portabilidad, conforme a lo establecido en el RGPD. Para ejercitar estos derechos, o para revocar su consentimiento, debe dirigirse por escrito, adjuntando fotocopia de su D.N.I. o documento equivalente, a: Inspira Network Group, S.L., Calle Caleruega 102, 4ª planta, 28033 - Madrid, o enviando un correo electrónico a inspiranetwork@inspiranetwork.com.
          </p>
        </div>
      ),
    },
    legal: {
      title: "Aviso Legal",
      body: (
        <div className="space-y-6 text-sm leading-relaxed text-slate-600">
          <div>
            <p className="font-bold text-[#294795] mb-2 uppercase tracking-wide">1. INFORMACIÓN GENERAL (Artículo 10 LSSICE)</p>
            <p>
              El presente aviso legal regula el uso del sitio web www.inspiranetwork.com (en adelante, LA WEB o sitio web), del que es titular Inspira Network Group, S. L. U. (en adelante, EL PROPIETARIO DE LA WEB).
            </p>
            <p className="mt-2">
              La navegación por el sitio web de EL PROPIETARIO DE LA WEB atribuye la condición de usuario del mismo e implica la aceptación plena y sin reservas de todas y cada una de las disposiciones incluidas en este Aviso Legal, que pueden sufrir modificaciones.
            </p>
          </div>

          <div>
            <p className="font-bold text-[#294795] mb-2 uppercase tracking-wide">Datos Identificativos</p>
            <p>
              Inspira Network Group, S. L. U., es una Sociedad Mercantil de Responsabilidad Limitada inscrita en el Registro Mercantil de MADRID; Tomo 34305, Libro XX, Folio 60, Sección 08, Hoja 617126, Inscripción 1; el 26/01/2016 y con N. I. F. B87466405. Su domicilio es C/ Caleruega, 102, Planta 2ª Edificio Ofipinar, 28033 - Madrid.
            </p>
            <p className="mt-2">
              Correo electrónico: inspiranetwork@inspiranetwork.com
            </p>
          </div>

          <div>
            <p className="font-bold text-[#294795] mb-2 uppercase tracking-wide">2. CONDICIONES DE ACCESO Y UTILIZACIÓN</p>
            <p>
              El sitio web y sus servicios son de acceso libre y gratuito, no obstante, EL PROPIETARIO DE LA WEB puede condicionar la utilización de algunos de los servicios ofrecidos en su web a la previa cumplimentación del correspondiente formulario y su posterior autorización.
            </p>
            <p className="mt-2 font-bold">El usuario se compromete expresamente a no emplear los contenidos para:</p>
            <ul className="list-decimal pl-5 space-y-1 mt-2">
              <li>Difundir contenidos delictivos, violentos, racistas o contrarios a la ley.</li>
              <li>Introducir virus informáticos o realizar actuaciones susceptibles de alterar o dañar sistemas.</li>
              <li>Intentar acceder a cuentas de correo de otros usuarios.</li>
              <li>Vulnerar derechos de propiedad intelectual o industrial.</li>
              <li>Suplantar la identidad de otro usuario o de terceros.</li>
              <li>Recabar datos con finalidad publicitaria sin consentimiento.</li>
            </ul>
          </div>

          <div>
            <p className="font-bold text-[#294795] mb-2 uppercase tracking-wide">3. EXCLUSIÓN DE GARANTÍAS Y DE RESPONSABILIDAD</p>
            <p>
              EL PROPIETARIO DE LA WEB excluye cualquier responsabilidad por los daños y perjuicios derivados de:
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>La imposibilidad de acceso al sitio web o la falta de veracidad de los contenidos.</li>
              <li>La presencia de virus en los contenidos que puedan producir alteraciones en los sistemas.</li>
              <li>El incumplimiento de las leyes como consecuencia del uso incorrecto del sitio web.</li>
            </ul>
          </div>

          <div>
            <p className="font-bold text-[#294795] mb-2 uppercase tracking-wide">4. PROTECCIÓN DE DATOS Y COOKIES</p>
            <p>
              EL PROPETARIO DE LA WEB tratará los datos de forma confidencial y exclusivamente con la finalidad de ofrecer los servicios solicitados, conforme al RGPD y la LOPDGDD.
            </p>
            <p className="mt-2">
              Asimismo, se informa que la web utiliza cookies para mejorar la experiencia del usuario, pudiendo este configurarlas o bloquearlas en su navegador en cualquier momento.
            </p>
          </div>
        </div>
      ),
    },
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-2xl max-h-[90vh] flex flex-col rounded-[2rem] border-none shadow-2xl overflow-hidden p-0">
        <DialogHeader className="px-8 pt-8 pb-4 shrink-0">
          <DialogTitle className="text-2xl font-display font-black text-[#294795]">
            {content[type].title}
          </DialogTitle>
          <DialogDescription className="text-xs font-bold text-[#5FABD1] uppercase tracking-widest">
            DA Expert Cases • Información Legal
          </DialogDescription>
        </DialogHeader>
        <div className="flex-1 overflow-y-auto px-8 pb-8 custom-scrollbar">
          {content[type].body}
        </div>
      </DialogContent>
    </Dialog>
  );
}