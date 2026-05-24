export type ContactFormData = {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

//JMJ::*Se agrega función para construir mensaje de WhatsApp desde formulario de contacto*
export function buildContactWhatsAppMessage(data: ContactFormData): string {
  const telefono = data.phone.trim() || 'No indicado'

  return `¡Hola!, te saluda ${data.name}, en relación con ${data.subject}, puntualmente mi caso va en relación a ${data.message}. Por favor, cualquier comentario o información al respecto envíemela compartiendo a mis medios de contacto: ${data.email}, ${telefono}`
}

//JMJ::*Se agrega función para generar URL de WhatsApp con mensaje del formulario*
export function buildWhatsAppUrl(
  data?: Partial<ContactFormData>,
  defaultMessage = 'Hola, me gustaría obtener información sobre sus servicios legales.'
): string {
  const phoneNumber = `${process.env.NEXT_PUBLIC_AREA_CODE}${process.env.NEXT_PUBLIC_PHONE_CONTACTO}`
  const hasRequiredFields = data?.name && data?.email && data?.subject && data?.message
  const message = hasRequiredFields
    ? buildContactWhatsAppMessage(data as ContactFormData)
    : defaultMessage

  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
}
