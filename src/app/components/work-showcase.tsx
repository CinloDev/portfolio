"use client"

import Image from "next/image"
import React from "react"
import { useLocale } from "@/components/language-provider"
import { portfolioProjects as projects } from "@/lib/data"
import Link from "next/link"

type Props = {}

const WorkShowcase: React.FC<Props> = () => {
    const { t } = useLocale()

    return (
        <section id="work" className="w-full py-12">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{t('projects.heading')}</h2>
                    <p className="mt-4 text-lg text-muted-foreground dark:text-white">{t('projects.intro')}</p>
                </div>

                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                {projects.map((project) => (
                    <article key={project.id} className="group relative h-full">
                        <div className="rounded-lg h-full">
                          <Link href={`/projects/${project.id}`} className="rounded-lg border overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 dark:bg-card dark:bg-none shadow-[0_8px_20px_rgba(80,150,217,0.16)] hover:shadow-[0_16px_34px_rgba(80,150,217,0.24)] hover:scale-[1.015] transition-all duration-200 cursor-pointer h-full flex flex-col">
                              <div className="relative w-full flex-shrink-0 h-40 sm:h-52">
                                {project.image ? (
                                    <Image 
                                        src={project.image.imageUrl} 
                                        alt={project.image.description} 
                                        fill 
                                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" 
                                        className="object-cover"
                                    />
                                ) : (
                                    <div className="h-52 w-full bg-muted" />
                                )}
                            </div>
                            <div className="p-4 flex-1">
                                <h3 className="text-lg font-semibold text-foreground dark:text-white">{t(project.titleKey)}</h3>
                                <p className="text-sm text-muted-foreground dark:text-white mt-1">{t(project.descriptionKey)}</p>
                            </div>
                            <div className="p-3 border-t text-sm text-pink-600 flex-shrink-0">
                                {t('projects.viewMore') || 'Ver más'}
                            </div>
                          </Link>
                        </div>
                    </article>
                ))}
                </div>
            </div>
        </section>
    )
}

export default WorkShowcase
