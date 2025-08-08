'use client';

import { Facebook, Instagram, Twitter, Heart } from 'lucide-react';
import { useLanguage } from '@/providers/LangProvider';
import { LanguageToggle } from './LanguageToggle';
import { getTranslation } from '@/lib/i18n';

const footerContent = {
  description: {
    en: 'Experience the authentic flavors of Kurdistan in every dish. Traditional recipes, warm hospitality, and unforgettable dining experiences.',
    ckb: 'تامی ڕەسەنی کوردستان لە هەر خواردنێکدا بەڕێوە بە. ڕەچەتەکانی کۆن، میوانداری گەرم و ئەزموونی خواردنی لەبیرنەکراو.',
  },
  quickLinks: {
    title: { en: 'Quick Links', ckb: 'لینکە خێراکان' },
    menu: { en: 'Menu', ckb: 'مێنیو' },
    about: { en: 'About', ckb: 'دەربارە' },
    contact: { en: 'Contact', ckb: 'پەیوەندی' },
  },
  contact: {
    title: { en: 'Contact Info', ckb: 'زانیاری پەیوەندی' },
    address: { en: '123 Kurdish Street, Downtown', ckb: '١٢٣ شەقامی کوردی، ناوەڕاست' },
    phone: '+1 (555) 123-4567',
    email: 'info@naturevillage.com',
  },
  hours: {
    title: { en: 'Opening Hours', ckb: 'کاتژمێرەکانی کردنەوە' },
    weekdays: { en: 'Mon-Fri: 11:00 AM - 10:00 PM', ckb: 'یەک-هەینی: ١١:٠٠ پێش نیوەڕۆ - ١٠:٠٠ شەو' },
    weekend: { en: 'Sat-Sun: 10:00 AM - 11:00 PM', ckb: 'شەم-یەک: ١٠:٠٠ پێش نیوەڕۆ - ١١:٠٠ شەو' },
  },
  copyright: {
    en: '© 2024 Nature Village. All rights reserved.',
    ckb: '© ٢٠٢٤ گوندی سروشت. هەموو مافەکان پارێزراون.',
  },
  poweredBy: {
    en: 'Crafted by Blunari · MenuIQ',
    ckb: 'دروستکراو لەلایەن Blunari · MenuIQ',
  },
  madeWith: {
    en: 'Made with',
    ckb: 'دروستکراو بە',
  },
};

const socialLinks = [
  { name: 'Facebook', icon: Facebook, url: 'https://facebook.com/naturevillage' },
  { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/naturevillage' },
  { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/naturevillage' },
];

export function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-terracotta rounded-full flex items-center justify-center">
                <span className="text-white font-marcellus text-lg">NV</span>
              </div>
              <span className="text-2xl font-marcellus">Nature Village</span>
            </div>
            <p className="text-sand-200 mb-6 leading-relaxed">
              {getTranslation(footerContent.description, language)}
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sand-200 hover:text-terracotta transition-colors duration-200"
                  aria-label={`Follow us on ${social.name}`}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-marcellus mb-4">
              {getTranslation(footerContent.quickLinks.title, language)}
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#menu"
                  className="text-sand-200 hover:text-terracotta transition-colors duration-200"
                >
                  {getTranslation(footerContent.quickLinks.menu, language)}
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-sand-200 hover:text-terracotta transition-colors duration-200"
                >
                  {getTranslation(footerContent.quickLinks.about, language)}
                </a>
              </li>
              <li>
                <a
                  href="#visit"
                  className="text-sand-200 hover:text-terracotta transition-colors duration-200"
                >
                  {getTranslation(footerContent.quickLinks.contact, language)}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-marcellus mb-4">
              {getTranslation(footerContent.contact.title, language)}
            </h3>
            <div className="space-y-2 text-sand-200">
              <p>{getTranslation(footerContent.contact.address, language)}</p>
              <p>{footerContent.contact.phone}</p>
              <p>{footerContent.contact.email}</p>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-marcellus mb-4">
              {getTranslation(footerContent.hours.title, language)}
            </h3>
            <div className="space-y-2 text-sand-200">
              <p>{getTranslation(footerContent.hours.weekdays, language)}</p>
              <p>{getTranslation(footerContent.hours.weekend, language)}</p>
            </div>
            
            {/* Language Toggle */}
            <div className="mt-6">
              <LanguageToggle />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-sand-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sand-300 text-sm">
              {getTranslation(footerContent.copyright, language)}
            </div>
            
            <div className="flex items-center space-x-2 text-sand-300 text-sm">
              <span>{getTranslation(footerContent.madeWith, language)}</span>
              <Heart className="h-4 w-4 text-terracotta fill-current" />
              <span>{getTranslation(footerContent.poweredBy, language)}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
