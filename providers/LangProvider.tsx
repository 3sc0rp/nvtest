'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { Language } from '@/lib/types';
import { getLanguage, setLanguage, initializeLanguage } from '@/lib/i18n';

interface LangContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LangContext = createContext<LangContextType | undefined>(undefined);

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    // Initialize language on mount
    const savedLanguage = getLanguage();
    setLanguageState(savedLanguage);
    initializeLanguage();
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguageState(lang);
    setLanguage(lang);
  };

  return (
    <LangContext.Provider value={{ language, setLanguage: handleSetLanguage }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LangContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LangProvider');
  }
  return context;
}
