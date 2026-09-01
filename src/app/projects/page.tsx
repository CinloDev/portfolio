import type { Metadata } from 'next';
import ProjectsIndexClient from './ProjectsIndexClient';

export const metadata: Metadata = {
  title: "Proyectos & Casos de Estudio",
  description: "Explorá los proyectos, productos SaaS en producción y arquitecturas frontend desarrolladas por Cintia Losada.",
  alternates: { canonical: 'https://portfolio.cinlodev.com/projects' },
  openGraph: {
    title: "Proyectos & Casos de Estudio | Cintia Losada",
    description: "Explorá los proyectos, productos SaaS en producción y arquitecturas frontend desarrolladas por Cintia Losada.",
    url: 'https://portfolio.cinlodev.com/projects',
    siteName: "Cintia Losada | Frontend Engineer & Product Developer",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Proyectos de Cintia Losada",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Proyectos & Casos de Estudio | Cintia Losada",
    description: "Explorá los proyectos, productos SaaS en producción y arquitecturas frontend desarrolladas por Cintia Losada.",
    images: ["/assets/og-image.png"],
  },
};

export default function ProjectsPage() {
  return <ProjectsIndexClient />;
}
