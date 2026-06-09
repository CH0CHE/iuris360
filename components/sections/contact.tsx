'use client'

import { useState, useEffect } from 'react'
import { Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import Link from 'next/link'
import { buildWhatsAppUrl } from '@/lib/whatsapp'

//JMJ::*Se mueve contactInfo dentro del componente para leer variables NEXT_PUBLIC_ en tiempo de render*
function getContactInfo() {
  return [
    {
      icon: Phone,
      title: 'Teléfono',
      value: `+${process.env.NEXT_PUBLIC_AREA_CODE}${process.env.NEXT_PUBLIC_PHONE_CONTACTO}`,
      href: `tel:${process.env.NEXT_PUBLIC_AREA_CODE}${process.env.NEXT_PUBLIC_PHONE_CONTACTO}`,
      description: 'Llámenos directamente'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: `+${process.env.NEXT_PUBLIC_AREA_CODE}${process.env.NEXT_PUBLIC_PHONE_CONTACTO}`,
      href: `https://wa.me/${process.env.NEXT_PUBLIC_AREA_CODE}${process.env.NEXT_PUBLIC_PHONE_CONTACTO}`,
      description: 'Respuesta inmediata'
    },
    {
      icon: Mail,
      title: 'Email',
      value: process.env.NEXT_PUBLIC_EMAIL_CONTACTO,
      href: `mailto:${process.env.NEXT_PUBLIC_EMAIL_CONTACTO}`,
      description: 'Escríbanos'
    },
    {
      icon: Clock,
      title: 'Horario',
      value: `${process.env.NEXT_PUBLIC_HORARIO_OFICINA1}`,
      href: null,
      //description: `${process.env.NEXT_PUBLIC_HORARIO_OFICINA2}`
    }
  ]
}

export function ContactSection() {
  //JMJ::*Se obtiene contactInfo en tiempo de render para evitar mismatch de hidratación*
  const contactInfo = getContactInfo()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  //JMJ::*Se guardan datos del formulario en sesión para botones de WhatsApp*
  useEffect(() => {
    sessionStorage.setItem('contactFormData', JSON.stringify(formData))
  }, [formData])

  //JMJ::*Se genera URL de WhatsApp con datos del formulario de contacto*
  const whatsappUrl = buildWhatsAppUrl(formData)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    window.open(buildWhatsAppUrl(formData), '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="contacto" className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Contacto
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Contáctenos Hoy
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Estamos aquí para ayudarle. Solicite una consulta gratuita 
            y permítanos orientarle en su caso.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-xl font-semibold text-primary mb-6">
              Información de Contacto
            </h3>
            
            {contactInfo.map((info, index) => {
              //JMJ::*Se usa URL dinámica de WhatsApp con datos del formulario*
              const href = info.title === 'WhatsApp' ? whatsappUrl : info.href

              return (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <info.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">{info.title}</p>
                    {href ? (
                      <Link 
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        {info.value}
                      </Link>
                    ) : (
                      <p className="text-muted-foreground">{info.value}</p>
                    )}
                    <p className="text-sm text-muted-foreground/70">{info.description}</p>
                  </div>
                </div>
              )
            })}

            {/* Social Media */}
            {/* <div className="pt-6 border-t border-border">
              <p className="font-semibold text-primary mb-4">Síguenos</p>
              <div className="flex gap-3">
                <Link
                  href="https://facebook.com" 
                  target="_blank"
                  className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors text-primary"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </Link>
                <Link 
                  href="https://instagram.com" 
                  target="_blank"
                  className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors text-primary"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </Link>
                <Link 
                  href="https://tiktok.com" 
                  target="_blank"
                  className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors text-primary"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </Link>
              </div>
            </div> */}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl border border-border p-8">
              <h3 className="text-xl font-semibold text-primary mb-6">
                Envíenos un Mensaje
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-primary">
                    Nombre Completo *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Juan Pérez"
                    className="bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-primary">
                    Correo Electrónico *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="juan@ejemplo.com"
                    className="bg-background"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-primary">
                    Teléfono
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+502 1234 5678"
                    className="bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-primary">
                    Asunto *
                  </label>
                  <Input
                    id="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Consulta sobre divorcio"
                    className="bg-background"
                  />
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <label htmlFor="message" className="text-sm font-medium text-primary">
                  Mensaje *
                </label>
                <Textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describa brevemente su caso o consulta..."
                  className="bg-background resize-none"
                />
              </div>

              <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                <Send className="mr-2 h-5 w-5" />
                Enviar Mensaje
              </Button>

              <p className="text-xs text-muted-foreground text-center mt-4">
                Al enviar este formulario, acepta nuestra política de privacidad. 
                Su información será tratada de forma confidencial.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
