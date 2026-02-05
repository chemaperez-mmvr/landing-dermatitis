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
            <p>El presente aviso legal regula el uso del sitio web www.inspiranetwork.com (en adelante, LA WEB o sitio web), del que es titular Inspira Network Group, S. L. U. (en adelante, EL PROPIETARIO DE LA WEB).</p>
            <p className="mt-2">La navegación por el sitio web de EL PROPIETARIO DE LA WEB atribuye la condición de usuario del mismo e implica la aceptación plena y sin reservas de todas y cada una de las disposiciones incluidas en este Aviso Legal, que pueden sufrir modificaciones. El usuario se obliga a hacer un uso correcto del sitio web de conformidad con las leyes, la buena fe, el orden público, los usos del tráfico y el presente Aviso Legal. El usuario responderá frente a EL PROPIETARIO DE LA WEB o frente a terceros, de cualesquiera daños y perjuicios que pudieran causarse como consecuencia del incumplimiento de dicha obligación.</p>
          </div>

          <div>
            <p className="font-bold text-[#294795] mb-2 uppercase tracking-wide">Datos Registrales y de Contacto</p>
            <p>En cumplimiento de lo establecido en el art. 10 de la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la información y de comercio electrónico, se le informa de que:</p>
            <p className="mt-2">Inspira Network Group, S. L. U., es una Sociedad Mercantil de Responsabilidad Limitada inscrita en el Registro Mercantil de MADRID; Tomo 34305, Libro XX, Folio 60, Sección 08, Hoja 617126, Inscripción 1; el 26/01/2016 y con N. I. F. B87466405. Su domicilio es C/ Caleruega, 102, Planta 2ª Edificio Ofipinar, 28033 - Madrid.</p>
            <p className="mt-2 text-[#294795] font-bold">Contacto:</p>
            <p>A efectos de comunicar con EL PROPIETARIO DE LA WEB puede dirigirse a la dirección arriba indicada o a la dirección de correo electrónico <span className="underline">inspiranetwork@inspiranetwork.com</span>. Todas las notificaciones y comunicaciones entre los usuarios y EL PROPIETARIO DE LA WEB se considerarán eficaces, a todos los efectos, cuando se realicen a través de los medios detallados anteriormente.</p>
          </div>

          <div>
            <p className="font-bold text-[#294795] mb-2 uppercase tracking-wide">2. CONDICIONES DE ACCESO Y UTILIZACIÓN</p>
            <p>El sitio web y sus servicios son de acceso libre y gratuito, no obstante, EL PROPIETARIO DE LA WEB puede condicionar la utilización de algunos de los servicios ofrecidos en su web a la previa cumplimentación del correspondiente formulario y su posterior autorización.</p>
            <p className="mt-2 font-bold italic">El usuario se compromete expresamente a hacer un uso adecuado de los contenidos y servicios y a no emplearlos para, entre otros:</p>
            <ul className="list-decimal pl-5 space-y-2 mt-3">
              <li>Difundir contenidos, delictivos, violentos, pornográficos, racistas, xenófobo, ofensivos, de apología del terrorismo o, en general, contrarios a la ley o al orden público.</li>
              <li>Introducir en la red virus informáticos o realizar actuaciones susceptibles de alterar, estropear, interrumpir o generar errores o daños en los documentos electrónicos, datos o sistemas físicos y lógicos de EL PROPIETARIO DE LA WEB o de terceras personas.</li>
              <li>Intentar acceder a las cuentas de correo electrónico de otros usuarios o a áreas restringidas de los sistemas informáticos.</li>
              <li>Vulnerar los derechos de propiedad intelectual o industrial, así como violar la confidencialidad de la información.</li>
              <li>Suplantar la identidad de otro usuario, de las administraciones públicas o de un tercero.</li>
              <li>Reproducir, copiar, distribuir, poner a disposición o de cualquier otra forma comunicar públicamente, transformar o modificar los contenidos, a menos que se cuente con la autorización del titular.</li>
              <li>Recabar datos con finalidad publicitaria y de remitir publicidad de cualquier clase y comunicaciones con fines de venta u otras de naturaleza comercial sin que medie su previa solicitud o consentimiento.</li>
            </ul>
          </div>

          <div>
            <p className="font-bold text-[#294795] mb-2 uppercase tracking-wide">Propiedad Intelectual</p>
            <p>Todos los contenidos del sitio web, como textos, fotografías, gráficos, imágenes, iconos, tecnología, software, así como su diseño gráfico y códigos fuente, marcas, nombres comerciales o signos distintivos de cualquier clase, constituyen una obra cuya propiedad pertenece a EL PROPIETARIO DE LA WEB o a terceros, sin que puedan entenderse cedidos al usuario ninguno de los derechos de explotación sobre los mismos.</p>
            <p className="mt-2">Queda prohibida la distribución, modificación, cesión o comunicación pública de los contenidos y cualquier otro acto que no haya sido expresamente autorizado por el titular.</p>
          </div>

          <div>
            <p className="font-bold text-[#294795] mb-2 uppercase tracking-wide">3. EXCLUSIÓN DE GARANTÍAS Y DE RESPONSABILIDAD</p>
            <p>EL PROPIETARIO DE LA WEB excluye, hasta donde permite el ordenamiento jurídico, cualquier responsabilidad por los daños y perjuicios de toda naturaleza derivados de:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>La imposibilidad de acceso al sitio web o la falta de veracidad, exactitud, exhaustividad y/o actualidad de los contenidos.</li>
              <li>La presencia de virus o de otros elementos en los contenidos que puedan producir alteraciones en los sistemas informáticos.</li>
              <li>El incumplimiento de las leyes, la buena fe, el orden público, los usos del tráfico y el presente aviso legal como consecuencia del uso incorrecto del sitio web.</li>
            </ul>
          </div>

          <div>
            <p className="font-bold text-[#294795] mb-2 uppercase tracking-wide">4. PROTECCIÓN DE DATOS PERSONALES</p>
            <p>EL PROPETARIO DE LA WEB tratará los datos de forma confidencial y exclusivamente con la finalidad de ofrecer los servicios solicitados, con todas las garantías legales y de seguridad que impone el RGPD y la LOPDGDD.</p>
            <p className="mt-2 font-bold italic">Sus derechos:</p>
            <p>Le recordamos que puede retirar su consentimiento en cualquier momento y dispone del derecho de acceso, rectificación, supresión, oposición y limitación de su tratamiento o portabilidad. Para ejercitar estos derechos debe dirigirse por escrito a la dirección social indicada en el apartado 1.</p>
          </div>

          <div>
            <p className="font-bold text-[#294795] mb-2 uppercase tracking-wide">5. POLÍTICA DE COOKIES</p>
            <p>EL PROPIETARIO DE LA WEB podrá utilizar cookies durante la prestación de servicios del sitio web. Una cookie es una pequeña pieza de información que queda almacenada en su navegador cuando visita nuestro SITIO WEB. Gracias a la cookie, recordamos sus preferencias para que cuando nos visites de nuevo, obtengas una mejor experiencia online.</p>
            <p className="mt-2 italic">Usted puede configurar su navegador para aceptar o bloquear las cookies en cualquier momento a través de la configuración de privacidad de su navegador habitual (Chrome, Explorer, Safari, Firefox).</p>
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