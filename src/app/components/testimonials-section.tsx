"use client";

import Image from 'next/image';
import { testimonials } from '@/lib/data';
import { useLocale } from '@/components/language-provider';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

export default function TestimonialsSection() {
  const { t } = useLocale();

  return (
    <section
      id="testimonials"
      className="w-full py-16 "
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold font-headline tracking-tight text-foreground sm:text-4xl">
            {t('testimonials.heading')}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground dark:text-white">
            {t('testimonials.intro')}
          </p>
        </div>

        {/* Carousel */}
        <div className="mt-12">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full max-w-4xl mx-auto"
          >
            <div className="overflow-hidden max-w-full">
              <CarouselContent>
                {testimonials.slice(0, 5).map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-2 h-full">
                      <Card
                        className={`h-full flex flex-col justify-between rounded-2xl 
                          shadow-xl transform transition-all duration-300 
                          hover:scale-105 hover:shadow-2xl
                          bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 
                          dark:from-gray-850 dark:via-gray-800 dark:to-gray-750
                          animate-float-0`}
                      >
                        <CardContent className="p-6 flex flex-col h-full gap-4 relative">
                          {/* Comillas grandes detrás */}
                          <span className="absolute top-4 left-4 text-[4rem] text-primary/40 dark:text-primary/50 select-none pointer-events-none">
                            “
                          </span>

                          {/* Quote */}
                          <blockquote className="text-lg text-foreground relative z-10">
                            {t(testimonial.quoteKey)}
                          </blockquote>

                          {/* Author - pegado al bottom */}
                          <div className="mt-auto flex items-center gap-3 relative z-10">
                            {testimonial.avatar && (
                              <Image
                                src={testimonial.avatar}
                                alt={t(testimonial.authorKey)}
                                width={56}
                                height={56}
                                className="w-14 h-14 rounded-full border-2 border-[hsl(var(--primary))] object-cover"
                              />
                            )}
                            <div>
                              <p className="font-semibold text-foreground">
                                {t(testimonial.authorKey)}
                              </p>
                              <p className="text-sm text-secondary">
                                {t(testimonial.companyKey)}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </div>

            {/* Navigation */}
            <div className="hidden lg:flex">
              <CarouselPrevious className="text-primary dark:text-secondary hover:text-accent dark:hover:text-accent transition-colors" />
            </div>
            <div className="hidden lg:flex">
              <CarouselNext className="text-primary dark:text-secondary hover:text-accent dark:hover:text-accent transition-colors" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}