"use client";

import Link from 'next/link';
import { useLocale } from '@/components/language-provider';

export default function PrivacidadClient() {
    const { t } = useLocale();
    return (
        <main className="container mx-auto px-4 md:px-6 py-16 flex flex-col items-center justify-center text-center">
            <h1 className="text-3xl font-bold mb-6">{t('privacy.title')}</h1>
            <p className="mb-4">{t('privacy.intro')}</p>
            <ul className="list-disc list-inside mb-4">
                <li>{t('privacy.point1')}</li>
                <li>{t('privacy.point2')}</li>
                <li>{t('privacy.point3')}</li>
                <li>
                    {t('privacy.point4Prefix')}{' '}
                    <a href="https://formspree.io/legal/privacy-policy/" target="_blank" rel="noopener noreferrer" className="underline text-primary">{t('privacy.formspree')}</a>
                    {t('privacy.point4Suffix')}
                </li>
            </ul>
            <p>{t('privacy.contactPrompt')}</p>
            <div className="mt-8 px-4 flex gap-4">
                <Link
                    href="/"
                    className="inline-block bg-primary text-white px-4 py-2 rounded hover:bg-secondary/50 transition-colors"
                >
                    {t('privacy.back')}
                </Link>
            </div>
        </main>
    );
}
