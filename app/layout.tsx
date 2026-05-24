import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap'
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://ch0che.github.io/iuris360'),
  title: 'Bufete Jurídico | Especialistas en Divorcios',
  description: 'Somos un bufete jurídico especializado en divorcios. Ofrecemos asesoría legal profesional, confidencial y de confianza. Herencias, compra-venta, donaciones, derecho laboral y penal.',
  keywords: ['abogado divorcios', 'bufete jurídico', 'herencias', 'asesoría legal', 'abogado Guatemala'],
  authors: [{ name: 'Bufete Jurídico' }],
  //JMJ::*Se define favicon personalizado desde public/LogoICO.ico*
  icons: {
    icon: '/LogoICO.ico',
  },
  openGraph: {
    title: 'Bufete Jurídico | Especialistas en Divorcios',
    description: 'Asesoría legal profesional y confidencial. Especialistas en divorcios.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#1e3a5f' },
    { media: '(prefers-color-scheme: dark)', color: '#0f1f33' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning className="bg-background">
      {/*JMJ::*Se agrega suppressHydrationWarning para ignorar atributos inyectados por extensiones del navegador**/}
      <body className={`${inter.variable} ${cormorant.variable} antialiased`} style={{ fontFamily: 'var(--font-sans), system-ui, sans-serif' }} suppressHydrationWarning>
        {/*JMJ::*Se cambia tema por defecto a claro y se deshabilita detección del sistema*/}
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
