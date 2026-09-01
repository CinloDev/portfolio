import React from "react";
import type { Metadata } from "next";
import ProjectPageClient from "../ProjectPageClient";
import { portfolioProjects } from "@/lib/data";
import es from "@/locales/es.json";

type Props = {
  params: Promise<{ id: string }> | { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  const project = portfolioProjects.find((p) => p.id === id);

  if (!project) {
    return {
      title: "Proyecto no encontrado",
      description: "El proyecto solicitado no fue encontrado en el portfolio de Cintia Losada.",
      alternates: { canonical: `https://portfolio.cinlodev.com/projects/${id}` },
    };
  }

  const translations = es as unknown as Record<string, string | string[]>;
  const rawTitle = translations[project.titleKey];
  const title = typeof rawTitle === "string" ? rawTitle : project.id;

  const rawDescription = translations[project.descriptionKey];
  const description =
    typeof rawDescription === "string"
      ? rawDescription
      : "Caso de estudio y detalles técnicos del proyecto desarrollado por Cintia Losada.";

  const imageUrl = project.image?.imageUrl
    ? `https://portfolio.cinlodev.com${project.image.imageUrl}`
    : "https://portfolio.cinlodev.com/assets/og-image.png";

  return {
    title,
    description,
    alternates: { canonical: `https://portfolio.cinlodev.com/projects/${id}` },
    openGraph: {
      title: `${title} | Cintia Losada`,
      description,
      url: `https://portfolio.cinlodev.com/projects/${id}`,
      siteName: "Cintia Losada | Frontend Engineer & Product Developer",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${title} preview`,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Cintia Losada`,
      description,
      images: [imageUrl],
    },
  };
}

export default async function Page({ params }: Props) {
  const resolvedParams = await params;
  return <ProjectPageClient id={resolvedParams.id} />;
}
