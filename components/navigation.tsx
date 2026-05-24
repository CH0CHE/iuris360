'use client'

//JMJ::*Se eliminan imports useTheme, Sun y Moon al ocultar toggle de tema*
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Menu, 
  X, 
  Home, 
  Briefcase, 
  Phone, 
  MapPin,
  //JMJ::*Se agrega icono HelpCircle para item FAQ*
  HelpCircle,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

//JMJ::*Se ocultan los items Nosotros, Artículos y Testimonios del sidebar*
const navItems = [
  { href: '#inicio', label: 'Inicio', icon: Home },
  { href: '#servicios', label: 'Servicios', icon: Briefcase },
  //JMJ::*Se agrega item de navegación hacia sección FAQ*
  { href: '#faq', label: 'Preguntas Frecuentes', icon: HelpCircle },
  { href: '#contacto', label: 'Contacto', icon: Phone },
  { href: '#ubicacion', label: 'Ubicación', icon: MapPin },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-background/80 backdrop-blur-md border-b border-border lg:hidden">
        <Link href="#inicio" className="flex items-center gap-2">
          {/*JMJ::*Se reemplaza icono Scale por logo personalizado*/}
          <Image src="/logo.png" alt="Logo" width={32} height={32} className="object-contain" />
          <span className="text-xl font-semibold text-primary">Bufete Jurídico</span>
        </Link>
        <div className="flex items-center gap-2">
          {/*JMJ::*Se oculta botón de cambio de tema en header móvil*/}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-primary">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80 bg-sidebar p-0">
              <SheetTitle className="sr-only">Menú de navegación</SheetTitle>
              <div className="flex flex-col h-full">
                <div className="p-6 border-b border-sidebar-border">
                  {/*JMJ::*Se reemplaza logo + texto por imagen LogoLargo en sidebar móvil*/}
                  <Link href="#inicio" onClick={() => setIsOpen(false)}>
                    <Image src="/LogoLargo.png" alt="Logo" width={200} height={64} className="w-full h-auto object-contain" />
                  </Link>
                </div>
                <nav className="flex-1 p-4">
                  <ul className="space-y-1">
                    {navItems.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center gap-3 px-4 py-3 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
                        >
                          <item.icon className="h-5 w-5 text-sidebar-primary" />
                          <span className="text-lg">{item.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="p-4 border-t border-sidebar-border">
                  {/*JMJ::*Se actualizan variables de entorno a prefijo NEXT_PUBLIC_**/}
                  <Link
                    href={`https://wa.me/${process.env.NEXT_PUBLIC_AREA_CODE}${process.env.NEXT_PUBLIC_PHONE_CONTACTO}`}
                    target="_blank"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-sidebar-primary text-sidebar-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
                  >
                    <Phone className="h-5 w-5" />
                    Contactar por WhatsApp
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex fixed left-0 top-0 bottom-0 w-72 bg-sidebar border-r border-sidebar-border flex-col z-50">
        <div className="p-6 border-b border-sidebar-border">
          {/*JMJ::*Se reemplaza logo + texto por imagen LogoLargo en sidebar de escritorio*/}
          <Link href="#inicio">
            <Image src="/LogoLargo.png" alt="Logo" width={200} height={64} className="w-full h-auto object-contain" />
          </Link>
        </div>
        <nav className="flex-1 p-4 overflow-y-auto">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors group"
                >
                  <item.icon className="h-5 w-5 text-sidebar-primary group-hover:scale-110 transition-transform" />
                  <span className="text-lg">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-4 border-t border-sidebar-border space-y-3">
          {/*JMJ::*Se oculta botón de cambio de tema en sidebar de escritorio*/}
          <Link
            href={`https://wa.me/${process.env.NEXT_PUBLIC_AREA_CODE}${process.env.NEXT_PUBLIC_PHONE_CONTACTO}`}
            target="_blank"
            className="flex items-center justify-center gap-2 w-full py-3 bg-sidebar-primary text-sidebar-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            <Phone className="h-5 w-5" />
            WhatsApp
          </Link>
        </div>
      </aside>
    </>
  )
}
