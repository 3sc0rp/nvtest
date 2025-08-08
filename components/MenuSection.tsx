'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { Search, Filter, Star } from 'lucide-react';
import { useLanguage } from '@/providers/LangProvider';
import { getTranslation } from '@/lib/i18n';
import { menuItems, categories } from '@/data/menu';
import { MenuFilter } from '@/lib/types';

export function MenuSection() {
  const { language } = useLanguage();
  const [filter, setFilter] = useState<MenuFilter>({
    category: 'all',
    search: '',
  });

  const content = {
    title: {
      en: 'Our Menu',
      ckb: 'مێنیومان',
    },
    subtitle: {
      en: 'Discover our authentic Kurdish dishes, from traditional favorites to modern interpretations',
      ckb: 'خواردنە ڕەسەنەکانی کوردی دۆزینەوە، لە دڵخوازەکانی کۆنەوە تا ڕوونکردنەوەکانی مۆدێرن',
    },
    searchPlaceholder: {
      en: 'Search dishes...',
      ckb: 'خواردن بگەڕێ...',
    },
  };

  const filteredMenu = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesCategory = filter.category === 'all' || item.category === filter.category;
      const matchesSearch = filter.search === '' || 
        getTranslation(item.name, language).toLowerCase().includes(filter.search.toLowerCase()) ||
        getTranslation(item.description, language).toLowerCase().includes(filter.search.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(filter.search.toLowerCase()));
      
      return matchesCategory && matchesSearch;
    });
  }, [filter, language]);

  return (
    <section id="menu" className="py-20 bg-white">
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
          
          <p className="text-lg text-charcoal/80 max-w-3xl mx-auto">
            {getTranslation(content.subtitle, language)}
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setFilter(prev => ({ ...prev, category: category.id as any }))}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                    filter.category === category.id
                      ? 'bg-terracotta text-white'
                      : 'bg-sand-200 text-charcoal hover:bg-sand-300'
                  }`}
                >
                  {getTranslation(category.name, language)}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-charcoal/50 h-5 w-5" />
              <input
                type="text"
                placeholder={getTranslation(content.searchPlaceholder, language)}
                value={filter.search}
                onChange={(e) => setFilter(prev => ({ ...prev, search: e.target.value }))}
                className="w-full pl-10 pr-4 py-3 border border-sand-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMenu.map((item) => (
            <div key={item.id} className="group">
              <div className="menu-card">
                {/* Image */}
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src={item.image}
                    alt={getTranslation(item.name, language)}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  
                  {/* Popularity Badge */}
                  <div className="absolute top-4 right-4 bg-terracotta text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-current" />
                    <span>{item.popularity.toFixed(1)}</span>
                  </div>
                  
                  {/* Dietary Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {item.vegan && (
                      <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">
                        {language === 'en' ? 'Vegan' : 'گیانلەبەر'}
                      </span>
                    )}
                    {item.vegetarian && !item.vegan && (
                      <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-medium">
                        {language === 'en' ? 'Vegetarian' : 'گیانلەبەر'}
                      </span>
                    )}
                    {item.spicy && (
                      <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
                        {language === 'en' ? 'Spicy' : 'تێکەڵ'}
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-marcellus text-charcoal mb-2">
                    {getTranslation(item.name, language)}
                  </h3>
                  
                  <p className="text-charcoal/70 mb-4 line-clamp-3">
                    {getTranslation(item.description, language)}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.slice(0, 3).map((tag) => (
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
                      ${item.price}
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

        {/* No Results */}
        {filteredMenu.length === 0 && (
          <div className="text-center py-16">
            <div className="text-charcoal/50 text-lg mb-4">
              {language === 'en' ? 'No dishes found matching your criteria' : 'هیچ خواردنێک نەدۆزرایەوە بە پێی مەرجەکانت'}
            </div>
            <button
              onClick={() => setFilter({ category: 'all', search: '' })}
              className="btn-primary"
            >
              {language === 'en' ? 'Clear Filters' : 'فلتەرەکان پاک بکەوە'}
            </button>
          </div>
        )}

        {/* Results Count */}
        {filteredMenu.length > 0 && (
          <div className="mt-8 text-center text-charcoal/60">
            {language === 'en' 
              ? `Showing ${filteredMenu.length} of ${menuItems.length} dishes`
              : `${filteredMenu.length} لە ${menuItems.length} خواردن پیشان دەدرێت`
            }
          </div>
        )}
      </div>
    </section>
  );
}
