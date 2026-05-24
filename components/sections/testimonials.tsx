'use client'

import { Quote, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Patricia M.',
    location: 'Ciudad de México',
    text: 'El proceso de divorcio fue muy difícil emocionalmente, pero el equipo me acompañó en todo momento. Siempre estuvieron disponibles para resolver mis dudas y me explicaron cada paso de manera clara.',
    rating: 5,
    initials: 'PM'
  },
  {
    name: 'Roberto S.',
    location: 'Guadalajara',
    text: 'Excelente servicio. Mi divorcio se resolvió de manera rápida y profesional. La Lic. González fue muy empática y siempre cuidó mis intereses y los de mis hijos.',
    rating: 5,
    initials: 'RS'
  },
  {
    name: 'Ana L.',
    location: 'Monterrey',
    text: 'Contraté sus servicios para un asunto de herencia y quedé muy satisfecha. Su conocimiento y profesionalismo hicieron que un proceso complejo fuera mucho más llevadero.',
    rating: 5,
    initials: 'AL'
  },
  {
    name: 'Carlos G.',
    location: 'Querétaro',
    text: 'Después de consultar varios abogados, encontré en este bufete la confianza que buscaba. Me ayudaron con mi divorcio de manera discreta y profesional. Totalmente recomendados.',
    rating: 5,
    initials: 'CG'
  },
  {
    name: 'María E.',
    location: 'Puebla',
    text: 'El trato fue siempre muy humano y respetuoso. Entendieron mi situación y me orientaron de la mejor manera. Mi caso de custodia se resolvió favorablemente gracias a su asesoría.',
    rating: 5,
    initials: 'ME'
  },
  {
    name: 'Fernando R.',
    location: 'León',
    text: 'Profesionales en toda la extensión de la palabra. Me asesoraron en la compra de una propiedad y todo salió perfecto. Su atención al detalle es impresionante.',
    rating: 5,
    initials: 'FR'
  }
]

export function TestimonialsSection() {
  return (
    <section id="testimonios" className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Testimonios
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Lo que Dicen Nuestros Clientes
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            La satisfacción de nuestros clientes es nuestra mejor carta de presentación. 
            Conozca sus experiencias.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="relative p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-shadow"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-accent/20" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Text */}
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-semibold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-accent/10 rounded-full">
            <div className="flex -space-x-2">
              {['PM', 'RS', 'AL'].map((initials, i) => (
                <div 
                  key={i}
                  className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-semibold border-2 border-background"
                >
                  {initials}
                </div>
              ))}
            </div>
            <span className="text-sm text-primary font-medium">
              +500 clientes satisfechos
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
