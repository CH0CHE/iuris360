'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: '¿Cuánto tiempo tarda un proceso de divorcio?',
    answer:
      'El tiempo de un proceso de divorcio en Guatemala depende del tipo de trámite y de si existe acuerdo entre ambas partes. Un divorcio voluntario, donde ambos cónyuges están de acuerdo, puede resolverse aproximadamente en un mes y medio a 3 meses, dependiendo de la carga del juzgado y de que se presente toda la documentación requerida. En cambio, un divorcio oral por causal determinada suele tomar entre 6 y 8 meses. Si la otra parte se opone, presenta defensas o existen conflictos relacionados con bienes, hijos o pensión alimenticia, el proceso puede extenderse incluso hasta 2 años.'
  },
  {
    question: '¿Cuál es la diferencia entre un divorcio voluntario y un divorcio oral por causal determinada?',
    answer:
      'El divorcio voluntario ocurre cuando ambos cónyuges están de acuerdo en poner fin al matrimonio y presentan conjuntamente la solicitud ante el juez. En este tipo de proceso también pueden acordar temas relacionados con hijos, pensión alimenticia y régimen de convivencia. Por otro lado, el divorcio oral por causal determinada es promovido únicamente por uno de los cónyuges, quien debe acudir ante el juez y plantear las causas legales que justifican la solicitud de divorcio. Este procedimiento suele ser más largo y puede implicar audiencias y presentación de pruebas.'
  },
  {
    question: '¿Cómo se determina la custodia de los hijos?',
    answer:
      'En un divorcio voluntario, los padres pueden llegar a un acuerdo sobre quién tendrá la guarda y custodia de los hijos, así como la forma en que el otro padre podrá relacionarse con ellos, ya sea mediante convivencia libre o bajo horarios y condiciones reguladas. Cuando se trata de un divorcio oral por causal determinada, el proceso únicamente resuelve el divorcio; los temas relacionados con guarda, custodia y régimen de visitas normalmente deben discutirse en un juicio separado. En todos los casos, el juez prioriza el bienestar y el interés superior de los menores.'
  },
  {
    question: '¿Cómo se calcula la pensión alimenticia?',
    answer:
      'La pensión alimenticia se fija tomando en cuenta las necesidades de los hijos o de la persona beneficiaria y la capacidad económica de quien debe proporcionarla. En Guatemala, el monto puede variar según cada caso, pero generalmente se establece considerando ingresos, gastos básicos, educación, alimentación, salud y vivienda. Legalmente, el descuento máximo que puede aplicarse sobre los ingresos del obligado puede llegar hasta un 50%. En algunos casos, los montos mínimos suelen rondar aproximadamente los Q800.00, aunque cada situación es evaluada individualmente por el juez.'
  },
  {
    question: '¿Qué documentos necesito para iniciar un divorcio?',
    answer:
      'Para iniciar un proceso de divorcio en Guatemala generalmente se requiere presentar certificación reciente de la partida de matrimonio, certificaciones de nacimiento de los hijos si los hubiera, constancias de ingresos de ambas partes y documentos relacionados con bienes o acuerdos existentes. Si previamente hubo separación de cuerpos, también deberá presentarse el acta o resolución correspondiente. Dependiendo de las particularidades del caso, el juzgado puede solicitar documentación adicional.'
  }
]
export function FAQSection() {
  return (
    <section id="faq" className="py-20 md:py-32 bg-muted/30">
      {/*JMJ::*Se agrega id="faq" para enlace desde navegación*/}
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Preguntas Frecuentes
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Resolvemos sus Dudas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Encuentre respuestas a las preguntas más comunes sobre divorcios 
            y procesos legales.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card rounded-xl border border-border px-6 data-[state=open]:border-accent/50"
            >
              <AccordionTrigger className="text-left text-primary hover:text-accent hover:no-underline py-6">
                <span className="font-semibold text-base md:text-lg">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Additional Help */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            ¿Tiene más preguntas? {' '}
            <a href="#contacto" className="text-accent font-semibold hover:underline">
              Contáctenos
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
