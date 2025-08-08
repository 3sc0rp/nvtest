'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/providers/LangProvider';
import { getTranslation } from '@/lib/i18n';
import { GalleryItem } from '@/lib/types';

const galleryItems: GalleryItem[] = [
  {
    id: '1',
    src: '/images/gallery/kurdish-food-1.jpg',
    alt: { en: 'Traditional Kurdish kebab', ckb: 'کەبابی کوردی کۆن' },
    title: { en: 'Grilled Kebab', ckb: 'کەبابی بریندەر' },
  },
  {
    id: '2',
    src: '/images/gallery/kurdish-food-2.jpg',
    alt: { en: 'Fresh dolma preparation', ckb: 'ئامادەکردنی دۆڵمەی تازە' },
    title: { en: 'Dolma Making', ckb: 'دۆڵمە دروستکردن' },
  },
  {
    id: '3',
    src: '/images/gallery/kurdish-food-3.jpg',
    alt: { en: 'Colorful tabouleh salad', ckb: 'سەلەتی تابۆلەی ڕەنگی' },
    title: { en: 'Fresh Tabouleh', ckb: 'تابۆلەی تازە' },
  },
  {
    id: '4',
    src: '/images/gallery/kurdish-food-4.jpg',
    alt: { en: 'Traditional bread baking', ckb: 'نان بریندەر کۆن' },
    title: { en: 'Bread Making', ckb: 'نان دروستکردن' },
  },
  {
    id: '5',
    src: '/images/gallery/kurdish-food-5.jpg',
    alt: { en: 'Kurdish tea ceremony', ckb: 'مەراسیمی چای کوردی' },
    title: { en: 'Tea Ceremony', ckb: 'مەراسیمی چای' },
  },
  {
    id: '6',
    src: '/images/gallery/kurdish-food-6.jpg',
    alt: { en: 'Restaurant interior', ckb: 'ناوەوەی ڕێستۆرانت' },
    title: { en: 'Our Restaurant', ckb: 'ڕێستۆرانتەکەمان' },
  },
];

export function Gallery() {
  const { language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const content = {
    title: {
      en: 'Gallery',
      ckb: 'گەلەری',
    },
    subtitle: {
      en: 'Take a peek into our kitchen and dining experience',
      ckb: 'سەیری چێشتخانە و ئەزموونی خواردنەکەمان بکە',
    },
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;

      switch (e.key) {
        case 'Escape':
          setSelectedImage(null);
          break;
        case 'ArrowLeft':
          navigateImage(-1);
          break;
        case 'ArrowRight':
          navigateImage(1);
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  const navigateImage = (direction: number) => {
    if (!selectedImage) return;
    
    const currentIndex = galleryItems.findIndex(item => item.id === selectedImage.id);
    const newIndex = (currentIndex + direction + galleryItems.length) % galleryItems.length;
    setSelectedImage(galleryItems[newIndex]);
  };

  return (
    <section id="gallery" className="py-20 bg-white">
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

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(item)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedImage(item);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={getTranslation(item.alt, language)}
            >
              <div className="relative h-64 overflow-hidden rounded-lg">
                <Image
                  src={item.src}
                  alt={getTranslation(item.alt, language)}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                
                {/* Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
                    <h3 className="text-charcoal font-marcellus text-lg">
                      {getTranslation(item.title, language)}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
            <div className="relative max-w-4xl max-h-[90vh] mx-4">
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-sand-200 transition-colors duration-200 z-10"
                aria-label={language === 'en' ? 'Close gallery' : 'گەلەری داخە'}
              >
                <X className="h-8 w-8" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={() => navigateImage(-1)}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-sand-200 transition-colors duration-200 z-10"
                aria-label={language === 'en' ? 'Previous image' : 'وێنەی پێشوو'}
              >
                <ChevronLeft className="h-8 w-8" />
              </button>

              <button
                onClick={() => navigateImage(1)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-sand-200 transition-colors duration-200 z-10"
                aria-label={language === 'en' ? 'Next image' : 'وێنەی داهاتوو'}
              >
                <ChevronRight className="h-8 w-8" />
              </button>

              {/* Image */}
              <div className="relative">
                <Image
                  src={selectedImage.src}
                  alt={getTranslation(selectedImage.alt, language)}
                  width={800}
                  height={600}
                  className="rounded-lg object-contain max-h-[80vh]"
                />
                
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4 rounded-b-lg">
                  <h3 className="font-marcellus text-xl">
                    {getTranslation(selectedImage.title, language)}
                  </h3>
                </div>
              </div>

              {/* Keyboard Instructions */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/70 text-sm">
                {language === 'en' ? 'Use arrow keys to navigate, ESC to close' : 'کلیلەکانی تیری بەکاربێنە بۆ گەڕان، ESC بۆ داخستن'}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
