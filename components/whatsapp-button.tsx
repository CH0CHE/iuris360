'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { MessageCircle, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buildWhatsAppUrl, type ContactFormData } from '@/lib/whatsapp'

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    // Show button after a short delay
    const timer = setTimeout(() => setIsVisible(true), 1000)
    
    // Show tooltip after user has been on page for a bit
    const tooltipTimer = setTimeout(() => setShowTooltip(true), 5000)
    
    return () => {
      clearTimeout(timer)
      clearTimeout(tooltipTimer)
    }
  }, [])

  //JMJ::*Se obtiene URL de WhatsApp con datos del formulario guardados en sesión*
  const getWhatsAppUrl = () => {
    if (typeof window !== 'undefined') {
      try {
        const stored = sessionStorage.getItem('contactFormData')
        if (stored) {
          return buildWhatsAppUrl(JSON.parse(stored) as ContactFormData)
        }
      } catch {
        //JMJ::*Se ignora error al leer datos del formulario en sesión*
      }
    }

    return buildWhatsAppUrl()
  }

  const handleWhatsAppClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.open(getWhatsAppUrl(), '_blank', 'noopener,noreferrer')
  }

  return (
    <div
      className={cn(
        'fixed bottom-6 right-6 z-50 transition-all duration-500',
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      )}
    >
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-full right-0 mb-3 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="relative bg-card text-card-foreground px-4 py-3 rounded-xl shadow-lg border border-border max-w-[200px]">
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute -top-2 -right-2 w-6 h-6 bg-muted rounded-full flex items-center justify-center hover:bg-muted-foreground/20 transition-colors"
            >
              <X className="h-3 w-3" />
            </button>
            <p className="text-sm font-medium">¿Necesita ayuda?</p>
            <p className="text-xs text-muted-foreground mt-1">
              Escríbanos por WhatsApp
            </p>
            {/* Arrow */}
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-card border-r border-b border-border rotate-45" />
          </div>
        </div>
      )}

      {/* Button */}
      <Link
        href={buildWhatsAppUrl()}
        onClick={handleWhatsAppClick}
        target="_blank"
        className="group flex items-center gap-3 bg-[#25D366] hover:bg-[#20BD5A] text-white px-5 py-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="font-semibold hidden sm:inline">WhatsApp</span>
        
        {/* Pulse effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      </Link>
    </div>
  )
}
