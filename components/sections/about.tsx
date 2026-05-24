'use client'

import { Scale, Heart, Lock, Users } from 'lucide-react'

const values = [
  {
    icon: Scale,
    title: 'Ética Profesional',
    description: 'Actuamos siempre con integridad, honestidad y transparencia en cada caso que manejamos.'
  },
  {
    icon: Heart,
    title: 'Compromiso',
    description: 'Nos dedicamos completamente a cada cliente, entendiendo que cada caso es único y personal.'
  },
  {
    icon: Lock,
    title: 'Confidencialidad',
    description: 'Garantizamos la privacidad absoluta de toda la información de nuestros clientes.'
  },
  {
    icon: Users,
    title: 'Cercanía',
    description: 'Brindamos un trato humano y empático, acompañándole en cada paso del proceso.'
  }
]

const team = [
  {
    name: 'Lic. María González',
    role: 'Socia Fundadora',
    specialty: 'Derecho Familiar',
    initials: 'MG'
  },
  {
    name: 'Lic. Roberto Hernández',
    role: 'Socio Senior',
    specialty: 'Derecho Civil',
    initials: 'RH'
  },
  {
    name: 'Lic. Ana Martínez',
    role: 'Asociada',
    specialty: 'Derecho Laboral',
    initials: 'AM'
  }
]

export function AboutSection() {
  return (
    <section id="nosotros" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Sobre Nosotros
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Conoce a Nuestro Bufete
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Con más de dos décadas de experiencia, nos hemos consolidado como uno de los 
            bufetes más confiables en materia de divorcios.
          </p>
        </div>

        {/* History */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-6">
              Nuestra Historia
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Fundado en 2003, nuestro bufete nació con la visión de brindar servicios 
                legales de alta calidad con un enfoque humano y personalizado.
              </p>
              <p>
                A lo largo de los años, hemos ayudado a miles de familias a atravesar 
                procesos legales complejos, siempre priorizando su bienestar emocional 
                y sus intereses.
              </p>
              <p>
                Hoy, somos reconocidos por nuestra especialización en divorcios y 
                otros asuntos legales, así como por nuestra amplia gama de servicios 
                legales complementarios.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center border border-border">
              <Scale className="h-32 w-32 text-accent/50" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground px-6 py-4 rounded-xl shadow-lg">
              <span className="text-3xl font-bold">+20</span>
              <span className="block text-sm">Años de Experiencia</span>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-semibold text-primary text-center mb-12">
            Nuestros Valores
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="p-6 bg-card rounded-xl border border-border hover:border-accent/50 transition-colors group"
              >
                <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <value.icon className="h-7 w-7 text-accent" />
                </div>
                <h4 className="text-lg font-semibold text-primary mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold text-primary text-center mb-12">
            Nuestro Equipo
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className="text-center p-8 bg-card rounded-xl border border-border hover:shadow-lg transition-shadow"
              >
                <div className="w-24 h-24 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {member.initials}
                </div>
                <h4 className="text-xl font-semibold text-primary mb-1">{member.name}</h4>
                <p className="text-accent font-medium mb-1">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
