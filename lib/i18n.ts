import { Language, Translation } from './types';

export const languages: Language[] = ['en', 'ckb'];

export const languageNames: Record<Language, string> = {
  en: 'English',
  ckb: 'کوردی',
};

export function getTranslation(translation: Translation, language: Language): string {
  return translation[language] || translation.en || '';
}

export function setLanguage(language: Language): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ckb' ? 'rtl' : 'ltr';
  }
}

export function getLanguage(): Language {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('language') as Language;
    if (saved && languages.includes(saved)) {
      return saved;
    }
  }
  return 'en';
}

export function initializeLanguage(): void {
  const language = getLanguage();
  setLanguage(language);
}
