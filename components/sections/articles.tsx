'use client'

import { Calendar, Clock, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const articles = [
  {
    title: 'Tipos de Divorcio en México: Guía Completa 2024',
    excerpt: 'Conozca las diferentes modalidades de divorcio disponibles en México: voluntario, incausado y necesario. Cada uno tiene sus propios requisitos y procesos.',
    date: '15 de Enero, 2024',
    readTime: '8 min de lectura',
    category: 'Divorcios'
  },
  {
    title: '¿Cómo Funciona el Divorcio Incausado?',
    excerpt: 'El divorcio incausado permite disolver el matrimonio sin necesidad de acreditar una causa específica. Aquí le explicamos el proceso paso a paso.',
    date: '10 de Enero, 2024',
    readTime: '6 min de lectura',
    category: 'Divorcios'
  },
  {
    title: 'Custodia de los Hijos: Lo que Debe Saber',
    excerpt: 'La custodia es uno de los aspectos más importantes en un proceso de divorcio. Conozca los tipos de custodia y cómo se determina.',
    date: '5 de Enero, 2024',
    readTime: '10 min de lectura',
    category: 'Derecho Familiar'
  },
  {
    title: 'División de Bienes en el Divorcio',
    excerpt: 'Entender cómo se dividen los bienes matrimoniales es fundamental. Le explicamos el proceso según el régimen matrimonial.',
    date: '28 de Diciembre, 2023',
    readTime: '7 min de lectura',
    category: 'Divorcios'
  },
  {
    title: 'Pensión Alimenticia: Derechos y Obligaciones',
    excerpt: 'La pensión alimenticia es un derecho fundamental. Conozca cómo se calcula, quién debe pagarla y cómo solicitarla.',
    date: '20 de Diciembre, 2023',
    readTime: '9 min de lectura',
    category: 'Derecho Familiar'
  },
  {
    title: '5 Recomendaciones Antes de Iniciar un Divorcio',
    excerpt: 'Antes de iniciar un proceso de divorcio, es importante estar preparado. Aquí le damos consejos prácticos para facilitar el proceso.',
    date: '15 de Diciembre, 2023',
    readTime: '5 min de lectura',
    category: 'Consejos'
  }
]

export function ArticlesSection() {
  return (
    <section id="articulos" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Blog Jurídico
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Artículos Informativos
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Información útil y actualizada sobre divorcios, derecho familiar 
            y otros temas legales de su interés.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {articles.map((article, index) => (
            <article 
              key={index}
              className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all hover:border-accent/50"
            >
              <div className="aspect-[16/10] bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                  {article.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-primary mb-3 line-clamp-2 group-hover:text-accent transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {article.readTime}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Ver Todos los Artículos
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
