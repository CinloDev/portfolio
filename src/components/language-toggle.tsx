'use client';

import * as React from 'react';
import { Globe } from 'lucide-react';
import { useLocale } from './language-provider';
import { Button } from './ui/button';
import { useTheme } from 'next-themes';

export function LanguageToggle() {
  const { locale, setLocale, t } = useLocale();
  const { theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleLocale = () => {
    setLocale(locale === 'es' ? 'en' : 'es');
  };

  const hoverColor = theme === 'dark' ? 'group-hover:text-pink-500' : 'group-hover:text-pink-600';

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="w-9 h-9">
        <span className="sr-only">Cargando idioma</span>
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLocale}
      aria-label={locale === 'es' ? t('aria.changeToEnglish') : t('aria.changeToSpanish')}
      title={locale === 'es' ? 'ES — click para cambiar a EN' : 'EN — click para cambiar a ES'}
      className="group px-2.5 h-9 flex items-center gap-1.5 hover:bg-transparent font-medium"
    >
      <Globe className={`h-4 w-4 text-foreground transition-all duration-200 group-hover:scale-110 ${hoverColor}`} />
      <span className={`text-sm font-semibold uppercase transition-all duration-200 ${hoverColor} text-foreground`}>
        {locale}
      </span>
      <span className="sr-only">
        {locale === 'es' ? 'Cambiar a English' : 'Change to Español'}
      </span>
    </Button>
  );
}

export default LanguageToggle;
