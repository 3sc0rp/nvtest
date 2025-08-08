'use client';

import Image from 'next/image';
import { useLanguage } from '@/providers/LangProvider';
import { getTranslation } from '@/lib/i18n';
import { menuItems } from '@/data/menu';
import { getFeaturedDishes } from '@/utils/menuIQ';
import { Star, Clock, TrendingUp } from 'lucide-react';

export function Featured() {
  const { language } = useLanguage();
  const featuredDishes = getFeaturedDishes(menuItems, 6);

  const content = {
    title: {
      en: 'Featured Dishes',
      ckb: 'خواردنە بەناوبانگەکان',
    },
    subtitle: {
      en: 'Curated by MenuIQ - Our AI-powered recommendations based on time, season, and popularity',
      ckb: 'هەڵبژێردراو لەلایەن MenuIQ - پێشنیارەکانمان بە پێی کات، وەرز و بەناوبانگی',
    },
    poweredBy: {
      en: 'Powered by MenuIQ',
      ckb: 'بە MenuIQ بەڕێوە دەبرێت',
    },
  };

  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center space-x-4 mb-6">
            <div className="diamond-ornament" />
            <div className="diamond-ornament" />
            <div className="diamond-ornament" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-marcellus text-charcoal mb-6">
            {getTranslation(content.title, language)}
          </h2>
          
          <p className="text-lg text-charcoal/80 max-w-3xl mx-auto mb-4">
            {getTranslation(content.subtitle, language)}
          </p>
          
          <div className="flex items-center justify-center space-x-2 text-terracotta">
            <TrendingUp className="h-5 w-5" />
            <span className="text-sm font-medium">
              {getTranslation(content.poweredBy, language)}
            </span>
          </div>
        </div>

        {/* Featured Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredDishes.map((dish) => (
            <div key={dish.id} className="group">
              <div className="card overflow-hidden">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={dish.image}
                    alt={getTranslation(dish.name, language)}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  
                  {/* Popularity Badge */}
                  <div className="absolute top-4 right-4 bg-terracotta text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-current" />
                    <span>{dish.popularity.toFixed(1)}</span>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-olive text-white px-3 py-1 rounded-full text-sm font-medium">
                    {getTranslation(
                      { en: dish.category, ckb: dish.category === 'traditional' ? 'کۆن' : dish.category === 'vegan' ? 'گیانلەبەر' : 'بەناوبانگ' },
                      language
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-marcellus text-charcoal mb-2">
                    {getTranslation(dish.name, language)}
                  </h3>
                  
                  <p className="text-charcoal/70 mb-4 line-clamp-2">
                    {getTranslation(dish.description, language)}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {dish.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-sand-200 text-brown-700 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Price and Actions */}
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-marcellus text-terracotta">
                      ${dish.price}
                    </span>
                    
                    <button className="btn-outline px-4 py-2 text-sm">
                      {language === 'en' ? 'Order Now' : 'ئێستا داوا بکە'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MenuIQ Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-white rounded-lg px-6 py-4 shadow-lg">
            <div className="flex items-center space-x-2 text-terracotta">
              <Clock className="h-5 w-5" />
              <span className="text-sm font-medium">
                {language === 'en' ? 'Real-time recommendations' : 'پێشنیارەکانی ڕاستەوخۆ'}
              </span>
            </div>
            <div className="w-px h-6 bg-sand-300" />
            <div className="flex items-center space-x-2 text-olive">
              <Star className="h-5 w-5" />
              <span className="text-sm font-medium">
                {language === 'en' ? 'Popularity-based' : 'بە پێی بەناوبانگی'}
              </span>
            </div>
            <div className="w-px h-6 bg-sand-300" />
            <div className="flex items-center space-x-2 text-brown">
              <TrendingUp className="h-5 w-5" />
              <span className="text-sm font-medium">
                {language === 'en' ? 'Seasonal adjustments' : 'گونجاندنەکانی وەرزی'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
