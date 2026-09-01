import type { Metadata } from 'next';
import PrivacidadClient from './PrivacidadClient';

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Política de privacidad y tratamiento de datos del portfolio de Cintia Losada.",
  alternates: { canonical: 'https://portfolio.cinlodev.com/privacidad' },
  openGraph: {
    title: "Política de Privacidad | Cintia Losada",
    description: "Política de privacidad y tratamiento de datos del portfolio de Cintia Losada.",
    url: 'https://portfolio.cinlodev.com/privacidad',
    siteName: "Cintia Losada | Frontend Engineer & Product Developer",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Política de Privacidad",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Política de Privacidad | Cintia Losada",
    description: "Política de privacidad y tratamiento de datos del portfolio de Cintia Losada.",
    images: ["/assets/og-image.png"],
  },
};

export default function PrivacidadPage() {
  return <PrivacidadClient />;
}
