import type { Metadata } from "next";
import { cookies, headers } from "next/headers";
import { Poppins, PT_Sans } from "next/font/google";
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Footer from '@/components/footer';
import ConditionalHeader from '@/components/conditional-header';
import { ThemeProvider } from '@/components/theme-provider';
import LocaleProvider from '@/components/language-provider';

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
    variable: "--font-poppins",
    display: "swap",
});

const ptSans = PT_Sans({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-pt-sans",
    display: "swap",
});

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'Person',
            '@id': 'https://portfolio.cinlodev.com/#person',
            name: 'Cintia Losada',
            alternateName: 'CinloDev',
            jobTitle: 'Frontend Engineer & Product Developer',
            url: 'https://portfolio.cinlodev.com',
            image: 'https://portfolio.cinlodev.com/assets/about-me.png',
            sameAs: [
                'https://github.com/CinloDev',
                'https://www.linkedin.com/in/cintialosada',
                'https://x.com/cinlodev',
            ],
            knowsAbout: [
                'React',
                'Next.js',
                'TypeScript',
                'Frontend Engineering',
                'Software Architecture',
                'SaaS Development',
                'Tailwind CSS',
                'Supabase',
                'PostgreSQL',
                'Vue',
            ],
        },
        {
            '@type': 'WebSite',
            '@id': 'https://portfolio.cinlodev.com/#website',
            url: 'https://portfolio.cinlodev.com',
            name: 'Cintia Losada | Portfolio',
            description: 'Portfolio profesional de Cintia Losada, Frontend Engineer & Product Developer.',
            publisher: {
                '@id': 'https://portfolio.cinlodev.com/#person',
            },
            inLanguage: ['es', 'en'],
        },
    ],
};

export async function generateMetadata(): Promise<Metadata> {
    const cookieStore = await cookies();
    let locale = cookieStore.get('NEXT_LOCALE')?.value;

    if (!locale) {
        const headersList = await headers();
        const acceptLang = headersList.get('accept-language');
        if (acceptLang && acceptLang.startsWith('en')) {
            locale = 'en';
        } else {
            locale = 'es';
        }
    }

    const isEn = locale === 'en';
    const title = "Cintia Losada | Frontend Engineer & Product Developer";
    const description = isEn
        ? "Portfolio of Cintia Losada, Frontend Engineer & Product Developer specialized in scalable web applications, SaaS products, and modern digital experiences using React, Next.js, TypeScript, and Vue."
        : "Portfolio de Cintia Losada, Frontend Engineer & Product Developer especializada en aplicaciones web escalables, productos SaaS y experiencias digitales modernas con React, Next.js, TypeScript y Vue.";

    return {
        metadataBase: new URL("https://portfolio.cinlodev.com"),
        title: {
            default: title,
            template: "%s | Cintia Losada",
        },
        description,
        authors: [{ name: "Cintia Losada", url: "https://portfolio.cinlodev.com" }],
        creator: "Cintia Losada",
        publisher: "Cintia Losada",
        keywords: [
            "Cintia Losada",
            "CinloDev",
            "Frontend Engineer",
            "Product Developer",
            "React",
            "Next.js",
            "TypeScript",
            "SaaS",
            "Software Architecture",
            "Tailwind CSS",
            "Supabase",
            "PostgreSQL",
            "Portfolio",
        ],
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },
        openGraph: {
            title,
            description,
            url: "https://portfolio.cinlodev.com",
            siteName: "Cintia Losada | Frontend Engineer & Product Developer",
            images: [
                {
                    url: "/assets/og-image.png",
                    width: 1200,
                    height: 630,
                    alt: isEn ? "Cintia Losada's Portfolio" : "Portfolio de Cintia Losada",
                },
            ],
            locale: isEn ? "en_US" : "es_AR",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: ["/assets/og-image.png"],
        },
    };
}

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const cookieStore = await cookies();
    let locale = cookieStore.get('NEXT_LOCALE')?.value;

    if (!locale) {
        const headersList = await headers();
        const acceptLang = headersList.get('accept-language');
        locale = (acceptLang && acceptLang.startsWith('en')) ? 'en' : 'es';
    }

    return (
        <html
            lang={locale}
            className={`${poppins.variable} ${ptSans.variable} !scroll-smooth`}
            data-scroll-behavior="smooth"
            suppressHydrationWarning
        >
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className="font-body text-foreground antialiased min-h-screen flex flex-col">
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    enableSystem={false}
                    disableTransitionOnChange
                >
                    <LocaleProvider>
                        <ConditionalHeader />
                        <main className='flex-1'>
                            {children}
                        </main>
                        <Footer />
                        <Toaster />
                    </LocaleProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
