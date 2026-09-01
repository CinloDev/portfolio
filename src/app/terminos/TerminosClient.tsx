"use client";

import Link from 'next/link';
import { useLocale } from '@/components/language-provider';

export default function TerminosClient() {
    const { t } = useLocale();
    return (
        <main className="container mx-auto px-4 md:px-6 py-16 flex flex-col items-center justify-center text-center">
            <h1 className="text-3xl font-bold mb-6">{t('terms.title')}</h1>
            <p className="mb-4">{t('terms.intro')}</p>
            <ul className="list-disc list-inside mb-4">
                <li>{t('terms.point1')}</li>
                <li>{t('terms.point2')}</li>
                <li>{t('terms.point3')}</li>
            </ul>
            <p>{t('terms.contactPrompt')}</p>
            <div className="mt-8">
                <Link
                    href="/"
                    className="inline-block bg-primary text-white px-4 py-2 rounded hover:bg-secondary/50 transition-colors"
                >
                    {t('terms.back')}
                </Link>
            </div>
        </main>
    );
}
