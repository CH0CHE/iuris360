'use client'

//JMJ::*Se agregan imports de nuevos iconos para servicios de Abogacía*
import { Heart, Home, Gift, Briefcase, Shield, FileText, ArrowRight, Star, Scale, Users, TrendingUp, Stamp } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const mainService = {
  icon: Heart,
  title: 'Divorcios',
  description: 'Somos especialistas en todos los tipos de divorcio: voluntario, incausado y necesario. Le guiamos en cada paso del proceso con sensibilidad y profesionalismo.',
  features: [
    'Juicio oral de divorcio con causal determinada',
    'Divorcio voluntario (mutuo acuerdo)',
    'Convenios de custodia y pensión',
    'División de bienes',
    'Asesoría integral en todo el proceso'
  ]
}

//JMJ::*Se separan los servicios secundarios en dos categorías: Notariado y Abogacía*
const notariadoServices = [
  {
    icon: Home,
    title: 'Compra-Venta',
    description: 'Elaboración y revisión de contratos de compra-venta de inmuebles, garantizando la seguridad jurídica de su patrimonio.'
  },
  {
    icon: Gift,
    title: 'Donaciones',
    description: 'Asesoría legal en donaciones de bienes muebles e inmuebles, elaboración de contratos y trámites notariales.'
  },
  {
    icon: FileText,
    title: 'Herencias',
    description: 'Asesoría en sucesiones testamentarias e intestamentarias, trámite de juicios sucesorios y división de bienes hereditarios.'
  }
]

//JMJ::*Se agregan nuevos servicios: Derecho Constitucional, Derecho Civil y Derecho Mercantil*
const abogaciaServices = [
  {
    icon: Scale,
    title: 'Derecho Constitucional',
    description: 'Defensa de garantías individuales, amparo directo e indirecto, y protección de derechos fundamentales ante autoridades.'
  },
  {
    icon: Users,
    title: 'Derecho Civil',
    description: 'Asesoría en contratos civiles, obligaciones, responsabilidad civil, familia y resolución de controversias patrimoniales.'
  },
  {
    icon: Shield,
    title: 'Derecho Penal',
    description: 'Defensa penal profesional, asesoría en denuncias, querellas y representación legal en procesos penales.'
  },
  {
    icon: Briefcase,
    title: 'Derecho Laboral',
    description: 'Defensa de derechos laborales, demandas por despido injustificado, liquidaciones y asesoría a empresas.'
  },
  {
    icon: TrendingUp,
    title: 'Derecho Mercantil',
    description: 'Constitución de sociedades, contratos comerciales, resolución de conflictos mercantiles y asesoría empresarial integral.'
  }
]

export function ServicesSection() {
  return (
    <section id="servicios" className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Áreas de Práctica Legal
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ofrecemos servicios legales integrales con especial enfoque en divorcios, respaldados por años de experiencia.
          </p>
        </div>

        {/* Main Service - Divorcios */}
        <div className="mb-16">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground p-8 md:p-12">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Star className="h-5 w-5 text-accent" />
                  <span className="text-accent font-medium">Servicio Principal</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
                  <mainService.icon className="h-10 w-10 text-accent" />
                  {mainService.title}
                </h3>
                <p className="text-primary-foreground/90 text-lg leading-relaxed mb-6">
                  {mainService.description}
                </p>
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href="#contacto">
                    Consulta Gratuita
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
              <div className="bg-primary-foreground/10 rounded-xl p-6 backdrop-blur-sm">
                <h4 className="font-semibold text-lg mb-4 text-accent">Lo que incluye:</h4>
                <ul className="space-y-3">
                  {mainService.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-accent" />
                      </div>
                      <span className="text-primary-foreground/90">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Services */}
        {/*JMJ::*Se divide la sección en dos bloques: Notariado y Abogacía*/}
        <div className="space-y-12">
          <h3 className="text-2xl font-semibold text-primary text-center">
            Otros Servicios Legales
          </h3>

          {/* Notariado */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Stamp className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-primary">Notariado</h4>
                <p className="text-sm text-muted-foreground">Trámites ante notario público</p>
              </div>
              <div className="flex-1 h-px bg-border ml-2" />
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              {notariadoServices.map((service, index) => (
                <div
                  key={index}
                  className="group p-6 bg-card rounded-xl border border-border hover:border-accent/50 hover:shadow-lg transition-all"
                >
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
                    <service.icon className="h-7 w-7 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <h4 className="text-xl font-semibold text-primary mb-3">{service.title}</h4>
                  <p className="text-muted-foreground leading-relaxed text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Abogacía */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Scale className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-primary">Abogacía</h4>
                <p className="text-sm text-muted-foreground">Representación y asesoría legal</p>
              </div>
              <div className="flex-1 h-px bg-border ml-2" />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {abogaciaServices.map((service, index) => (
                <div
                  key={index}
                  className="group p-6 bg-card rounded-xl border border-border hover:border-accent/50 hover:shadow-lg transition-all"
                >
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
                    <service.icon className="h-7 w-7 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <h4 className="text-xl font-semibold text-primary mb-3">{service.title}</h4>
                  <p className="text-muted-foreground leading-relaxed text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            ¿No encuentra el servicio que necesita?
          </p>
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Link href="#contacto">
              Contáctenos para más información
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
