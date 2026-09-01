'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Logo from './logo';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { navLinks } from '@/lib/data';
import { ThemeToggle } from './theme-toggle';
import { LanguageToggle } from './language-toggle';
import { useLocale } from './language-provider';

function DesktopNav() {
    const { t } = useLocale();

    return (
        <nav className="hidden md:flex items-center gap-6 site-nav">
            {navLinks.map((link) => (
                <Link
                    key={link.href}
                    href={link.href}
                    className="text-base font-semibold text-foreground hover:text-primary transition-colors px-2 py-1 rounded hover:bg-primary/10 underline-offset-4 hover:underline"
                >
                    {t(link.labelKey)}
                </Link>
            ))}
        </nav>
    );
}

function MobileMenu({ onClose }: { onClose: () => void }) {
    const { t } = useLocale();

    return (
        <div className="md:hidden border-b border-border/10 bg-white/35 dark:bg-[#111622]/95 backdrop-blur-2xl shadow-lg animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col items-center gap-4 py-6 px-4">
                {navLinks.map((link) => (
                <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-semibold text-foreground hover:text-primary transition-colors px-4 py-1.5 rounded-lg hover:bg-primary/10 underline-offset-4 hover:underline"
                    onClick={onClose}
                >
                    {t(link.labelKey)}
                </Link>
                ))}
            </nav>
        </div>
    );
}

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen((v) => !v);
    const closeMenu = () => setIsOpen(false);
    return (
        <header
            className={cn(
                "sticky top-0 z-50 w-full transition-all duration-300",
                isScrolled || isOpen
                    ? "bg-white/40 dark:bg-[#0d111a]/80 backdrop-blur-xl border-b border-border/10 shadow-sm"
                    : "bg-transparent"
            )}
            >
            <div className="mx-auto flex h-20 w-full max-w-[1200px] items-center justify-between px-4 md:px-6">
                <div className="flex items-center gap-2 logo-wrapper" aria-label="Inicio" role="banner">
                    <Logo />
                </div>

                <DesktopNav />

                <div className="flex items-center gap-2">
                    <LanguageToggle />
                    <ThemeToggle />

                    <div className="md:hidden">
                        <Button
                        onClick={toggleMenu}
                        variant="ghost"
                        size="icon"
                        aria-label="Abrir menú"
                        aria-expanded={isOpen}
                        className="bg-transparent hover:bg-foreground/5 text-foreground dark:text-white hover:text-primary transition-colors focus-visible:ring-0 focus-visible:ring-offset-0"
                        >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </Button>
                    </div>
                </div>
            </div>

            {isOpen && <MobileMenu onClose={closeMenu} />}
        </header>
    );
}
