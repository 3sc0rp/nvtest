'use client';

import Image from 'next/image';
import { useLanguage } from '@/providers/LangProvider';
import { getTranslation } from '@/lib/i18n';

const heroContent = {
  title: {
    en: 'A Taste of Kurdistan in Every Bite',
    ckb: 'تامی کوردستان لە هەر لقمەیەکدا',
  },
  subtitle: {
    en: 'Experience authentic Kurdish cuisine with traditional recipes passed down through generations',
    ckb: 'خواردنی ڕەسەنی کوردی بە ڕەچەتەکانی کۆن بەڕێوە بەرە',
  },
  ctaPrimary: {
    en: 'View Menu',
    ckb: 'مێنیو ببینە',
  },
  ctaSecondary: {
    en: 'WhatsApp Us',
    ckb: 'واتسئەپمان بکە',
  },
};

export function Hero() {
  const { language } = useLanguage();

  const handleWhatsApp = () => {
    const phone = '+1234567890'; // Replace with actual phone number
    const message = language === 'en' 
      ? 'Hi! I would like to make a reservation at Nature Village.'
      : 'سڵاو! دەمەوێت لە Nature Village داواگە بکەم.';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Kurdish village landscape"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-charcoal/40" />
      </div>

      {/* Rug Pattern Overlay */}
      <div className="absolute inset-0 rug-border" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Diamond Ornaments */}
          <div className="flex justify-center items-center space-x-4 mb-8">
            <div className="diamond-ornament" />
            <div className="diamond-ornament" />
            <div className="diamond-ornament" />
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-marcellus text-white mb-6 text-shadow leading-tight">
            {getTranslation(heroContent.title, language)}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-sand-200 mb-12 max-w-3xl mx-auto leading-relaxed">
            {getTranslation(heroContent.subtitle, language)}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#menu"
              className="btn-primary text-lg px-8 py-4"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {getTranslation(heroContent.ctaPrimary, language)}
            </a>
            <button
              onClick={handleWhatsApp}
              className="btn-outline text-lg px-8 py-4 bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-charcoal"
            >
              {getTranslation(heroContent.ctaSecondary, language)}
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-white text-sm font-medium">
            {language === 'en' ? 'Scroll to explore' : 'سکرۆڵ بکە بۆ دۆزینەوە'}
          </span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
