import type { Metadata } from 'next';
import TerminosClient from './TerminosClient';

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description: "Términos y condiciones de uso del sitio web y portfolio de Cintia Losada.",
  alternates: { canonical: 'https://portfolio.cinlodev.com/terminos' },
  openGraph: {
    title: "Términos y Condiciones | Cintia Losada",
    description: "Términos y condiciones de uso del sitio web y portfolio de Cintia Losada.",
    url: 'https://portfolio.cinlodev.com/terminos',
    siteName: "Cintia Losada | Frontend Engineer & Product Developer",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Términos y Condiciones",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Términos y Condiciones | Cintia Losada",
    description: "Términos y condiciones de uso del sitio web y portfolio de Cintia Losada.",
    images: ["/assets/og-image.png"],
  },
};

export default function TerminosPage() {
  return <TerminosClient />;
}
