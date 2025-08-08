'use client';

import { Globe } from 'lucide-react';
import { useLanguage } from '@/providers/LangProvider';
import { languages, languageNames } from '@/lib/i18n';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = () => {
    const currentIndex = languages.indexOf(language);
    const nextIndex = (currentIndex + 1) % languages.length;
    setLanguage(languages[nextIndex]);
  };

  return (
    <button
      onClick={handleLanguageChange}
      className="flex items-center space-x-2 px-3 py-2 rounded-lg text-charcoal hover:text-terracotta hover:bg-sand-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-terracotta"
      aria-label={`Switch to ${language === 'en' ? 'Kurdish' : 'English'}`}
    >
      <Globe className="h-4 w-4" />
      <span className="text-sm font-medium">
        {languageNames[language]}
      </span>
    </button>
  );
}
