'use client';

import Image from 'next/image';
import { useLanguage } from '@/providers/LangProvider';
import { getTranslation } from '@/lib/i18n';

const aboutContent = {
  title: {
    en: 'Our Story',
    ckb: 'چیرۆکمان',
  },
  story: {
    en: 'Nature Village was born from a deep love for Kurdish culture and cuisine. Our founder, Chef Azad, grew up in the mountains of Kurdistan, learning traditional recipes from his grandmother. Every dish tells a story of resilience, community, and the rich heritage of the Kurdish people.',
    ckb: 'Nature Village لە خۆشەویستی قووڵ بۆ کەلتوور و خواردنی کوردی لەدایک بوو. دامەزرێنەرمان، شێف ئازاد، لە شاخەکانی کوردستان گەورە بوو، ڕەچەتەکانی کۆن لە دایکی دایکی خوێند. هەر خواردنێک چیرۆکێک باس دەکات لەسەر بەهێزی، کۆمەڵگا و میراتی دەوڵەمەندی خەڵکی کورد.',
  },
  mission: {
    en: 'We bring the authentic flavors of Kurdistan to your table, preserving centuries-old traditions while embracing modern culinary techniques. Every ingredient is carefully selected, every dish prepared with love, and every meal served with the warmth of Kurdish hospitality.',
    ckb: 'تامە ڕەسەنەکانی کوردستان بۆ مێزی تۆ دەهێنین، ڕەچەتەکانی سەدەکان پارێزگاری دەکەین لەگەڵ پێشوازی لە تەکنیکەکانی مۆدێرن. هەر پێکهاتەیەک بە وردی هەڵبژێردراوە، هەر خواردنێک بە خۆشەویستی ئامادە کراوە، و هەر ژەمێک بە گەرمی میوانداری کوردی دەدرێت.',
  },
  values: {
    title: {
      en: 'Our Values',
      ckb: 'بەهایەکانمان',
    },
    items: [
      {
        title: { en: 'Authenticity', ckb: 'ڕەسەن' },
        description: { en: 'Traditional recipes passed down through generations', ckb: 'ڕەچەتەکانی کۆن بەڕێوە دەبرێت' },
      },
      {
        title: { en: 'Quality', ckb: 'جۆرە' },
        description: { en: 'Only the finest ingredients make it to your plate', ckb: 'تەنها باشترین پێکهاتەکان دەگەن بە مێزەکەت' },
      },
      {
        title: { en: 'Community', ckb: 'کۆمەڵگا' },
        description: { en: 'Building connections through shared meals and stories', ckb: 'پەیوەندی دروست دەکەین لە ڕێگەی ژەم و چیرۆکە هاوبەشەکان' },
      },
    ],
  },
};

export function About() {
  const { language } = useLanguage();

  return (
    <section id="about" className="py-20 bg-sand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center space-x-4 mb-6">
            <div className="diamond-ornament" />
            <div className="diamond-ornament" />
            <div className="diamond-ornament" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-marcellus text-charcoal mb-6">
            {getTranslation(aboutContent.title, language)}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
                {getTranslation(aboutContent.story, language)}
              </p>
              
              <p className="text-lg text-charcoal/80 leading-relaxed">
                {getTranslation(aboutContent.mission, language)}
              </p>
            </div>

            {/* Values */}
            <div className="mt-12">
              <h3 className="text-2xl font-marcellus text-charcoal mb-6">
                {getTranslation(aboutContent.values.title, language)}
              </h3>
              
              <div className="space-y-6">
                {aboutContent.values.items.map((value, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-terracotta rounded-full flex items-center justify-center">
                      <span className="text-white font-marcellus text-lg">
                        {index + 1}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-lg font-marcellus text-charcoal mb-2">
                        {getTranslation(value.title, language)}
                      </h4>
                      <p className="text-charcoal/70">
                        {getTranslation(value.description, language)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/images/about-kurdish-family.jpg"
                alt="Kurdish family cooking traditional meal"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-terracotta rounded-full opacity-20" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-olive rounded-full opacity-20" />
          </div>
        </div>

        {/* Ornament Divider */}
        <div className="section-divider mt-20" />
      </div>
    </section>
  );
}
