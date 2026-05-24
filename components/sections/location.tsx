'use client'

//JMJ::*Se agrega Image para ícono de Waze*
import Image from 'next/image'
import { MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function LocationSection() {
  //JMJ::*Se actualiza variable de entorno a prefijo NEXT_PUBLIC_*
  const address = process.env.NEXT_PUBLIC_UBICACION_OFICINA || 'Tercer Nivel, Edificio Aristos de Reforma, Avenida La Reforma 7-62, Cdad. de Guatemala 01009'
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
  
  return (
    <section id="ubicacion" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Ubicación
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Encuéntrenos
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Visítenos en nuestras oficinas para una consulta personalizada. 
            Estamos ubicados en una zona céntrica y de fácil acceso.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map */}
          <div className="lg:col-span-2 rounded-2xl overflow-hidden border border-border">
            <iframe
              src={process.env.NEXT_PUBLIC_MAPS_URL}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de la oficina"
              className="w-full h-[400px]"
            />
          </div>

          {/* Address Info */}
          <div className="bg-card rounded-2xl border border-border p-8 flex flex-col">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-2">Dirección</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {address}
                </p>
              </div>
            </div>

            <div className="space-y-3 mb-8">
              <h4 className="font-semibold text-primary">Cómo Llegar</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs flex-shrink-0 mt-0.5">M</span>
                  <span>Transmetro (Línea 13) - Parada Exposición - 5 min caminando</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs flex-shrink-0 mt-0.5">M</span>
                  <span>Transmetro (Línea 13) - Parada Plaza de la República - 3 min caminando</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xs flex-shrink-0 mt-0.5">P</span>
                  <span>Estacionamiento público disponible a una cuadra del edificio</span>
                  <span className="text-red-500">Costos de estacionamiento no son cubiertos por el bufete.</span>
                </li>
              </ul>
            </div>

            <div className="mt-auto space-y-3">
              {/*JMJ::*Se cambia URL a Waze, se reemplaza SVG inline por archivo waze-svgrepo-com.svg y se oculta botón Google Maps*/}
              <Button asChild className="w-full bg-primary hover:bg-primary/90">
                <Link href={process.env.NEXT_PUBLIC_UBICACION_WAZE || '#'} target="_blank">
                  <Image src="/waze-svgrepo-com.svg" alt="Waze" width={16} height={16} className="mr-2 invert" />
                  Cómo Llegar
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
