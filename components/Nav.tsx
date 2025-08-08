'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/providers/LangProvider';
import { LanguageToggle } from './LanguageToggle';
import { getTranslation } from '@/lib/i18n';
import { NavItem } from '@/lib/types';

const navItems: NavItem[] = [
  { label: { en: 'Home', ckb: 'سەرەکی' }, href: '#home' },
  { label: { en: 'Menu', ckb: 'مێنیو' }, href: '#menu' },
  { label: { en: 'About', ckb: 'دەربارە' }, href: '#about' },
  { label: { en: 'Gallery', ckb: 'گەلەری' }, href: '#gallery' },
  { label: { en: 'Visit Us', ckb: 'سەردانمان بکە' }, href: '#visit' },
];

export function Nav() {
  const { language } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
              className="flex items-center space-x-2"
            >
              <div className="w-10 h-10 bg-terracotta rounded-full flex items-center justify-center">
                <span className="text-white font-marcellus text-lg">NV</span>
              </div>
              <span className="text-2xl font-marcellus text-charcoal">
                Nature Village
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="text-charcoal hover:text-terracotta transition-colors duration-200 font-medium"
              >
                {getTranslation(item.label, language)}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageToggle />
            <a
              href="#visit"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#visit');
              }}
              className="btn-primary"
            >
              {language === 'en' ? 'Reserve a Table' : 'مێزگەرێک داوا بکە'}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-charcoal hover:text-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta"
              aria-label={language === 'en' ? 'Toggle menu' : 'مێنیو بگۆڕە'}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-lg shadow-lg mt-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="block px-3 py-2 text-charcoal hover:text-terracotta hover:bg-sand-100 rounded-md transition-colors duration-200"
                >
                  {getTranslation(item.label, language)}
                </a>
              ))}
              <div className="pt-2 border-t border-sand-200">
                <a
                  href="#visit"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#visit');
                  }}
                  className="block px-3 py-2 text-terracotta hover:text-terracotta-700 font-medium"
                >
                  {language === 'en' ? 'Reserve a Table' : 'مێزگەرێک داوا بکە'}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
