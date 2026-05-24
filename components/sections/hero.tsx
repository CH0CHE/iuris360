'use client'

import Link from 'next/link'
import { ArrowRight, Shield, Clock, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      
      <div className="relative w-full px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-8 border border-accent/20">
            <Shield className="h-4 w-4" />
            <span className="text-sm font-medium">Experiencia y Confianza a su lado.</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-primary leading-tight mb-6 text-balance">
            Especialistas en{' '}
            <span className="text-accent">Divorcios</span>
            <br />
            {/*y Derecho Familiar*/}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
            Le acompañamos en los momentos más difíciles con profesionalismo, 
            confidencialidad y un compromiso absoluto con sus intereses.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button asChild size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90">
              <Link href="#contacto">
                Solicitar Consulta
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link href="#servicios">
                Ver Servicios
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex flex-col items-center p-6 rounded-xl bg-card border border-border">
              <Shield className="h-10 w-10 text-accent mb-3" />
              <h3 className="font-semibold text-primary mb-1">Confidencialidad</h3>
              <p className="text-sm text-muted-foreground text-center">Su caso es tratado con absoluta discreción</p>
            </div>
            <div className="flex flex-col items-center p-6 rounded-xl bg-card border border-border">
              <Clock className="h-10 w-10 text-accent mb-3" />
              <h3 className="font-semibold text-primary mb-1">Atención Inmediata</h3>
              <p className="text-sm text-muted-foreground text-center">Respuesta rápida a todas sus consultas</p>
            </div>
            <div className="flex flex-col items-center p-6 rounded-xl bg-card border border-border">
              <Award className="h-10 w-10 text-accent mb-3" />
              <h3 className="font-semibold text-primary mb-1">Experiencia</h3>
              <p className="text-sm text-muted-foreground text-center">Extensa cantidad de casos resueltos exitosamente</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
