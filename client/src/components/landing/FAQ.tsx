import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      q: "¿Para quién está dirigido?",
      a: "Este programa está dirigido exclusivamente a profesionales sanitarios especializados en dermatología y áreas afines que deseen profundizar en el manejo de la Dermatitis Atópica."
    },
    {
      q: "¿Qué formato tiene el contenido?",
      a: "El contenido es 100% online y modular. Combina vídeos explicativos de alta calidad, lectura de casos clínicos y, como novedad, simulaciones interactivas con agentes de voz basados en inteligencia artificial."
    },
    {
      q: "¿Necesito instalar algo?",
      a: "No. La plataforma es totalmente accesible desde cualquier navegador web moderno (Chrome, Firefox, Safari, Edge) sin necesidad de descargas."
    },
    {
      q: "¿Qué es un caso con agentes de voz con IA?",
      a: "Es una simulación donde podrás 'hablar' (o escribir) con un paciente virtual impulsado por IA. El paciente responderá a tus preguntas sobre sus síntomas y evolución, permitiéndote practicar la anamnesis en un entorno seguro."
    },
    {
      q: "¿Cómo accedo al curso?",
      a: "Si ya tienes credenciales, puedes acceder directamente mediante el botón 'Acceder'. Si necesitas solicitar acceso, utiliza el formulario de contacto o escribe a la dirección facilitada."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <h2 className="text-3xl font-display font-bold text-white mb-10 text-center">Preguntas Frecuentes</h2>
        
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border border-white/10 rounded-xl px-4 bg-white/2 overflow-hidden data-[state=open]:border-primary/30 transition-colors">
              <AccordionTrigger className="text-left font-medium text-white hover:text-primary hover:no-underline py-4">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
