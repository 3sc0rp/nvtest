'use client';

import { MapPin, Clock, Phone, Mail, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/providers/LangProvider';
import { getTranslation } from '@/lib/i18n';

const restaurantInfo = {
  name: {
    en: 'Nature Village',
    ckb: 'گوندی سروشت',
  },
  address: {
    en: '123 Kurdish Street, Downtown, City, State 12345',
    ckb: '١٢٣ شەقامی کوردی، ناوەڕاست، شار، ویلایەت ١٢٣٤٥',
  },
  phone: '+1 (555) 123-4567',
  whatsapp: '+1 (555) 123-4567',
  email: 'info@naturevillage.com',
  hours: {
    monday: { en: 'Monday - Friday: 11:00 AM - 10:00 PM', ckb: 'یەکشەممە - هەینی: ١١:٠٠ پێش نیوەڕۆ - ١٠:٠٠ شەو' },
    saturday: { en: 'Saturday: 10:00 AM - 11:00 PM', ckb: 'شەممە: ١٠:٠٠ پێش نیوەڕۆ - ١١:٠٠ شەو' },
    sunday: { en: 'Sunday: 12:00 PM - 9:00 PM', ckb: 'یەکشەممە: ١٢:٠٠ نیوەڕۆ - ٩:٠٠ شەو' },
  },
};

const content = {
  title: {
    en: 'Visit Us',
    ckb: 'سەردانمان بکە',
  },
  subtitle: {
    en: 'Come experience the authentic flavors of Kurdistan in our warm and welcoming atmosphere',
    ckb: 'بەڕێوە بە بۆ تامی ڕەسەنی کوردستان لە بەرگە گەرم و پێشوازیکەرەکەماندا',
  },
  directions: {
    en: 'Get Directions',
    ckb: 'ڕێگە بەدەست بکە',
  },
  callUs: {
    en: 'Call Us',
    ckb: 'پەیوەندی پێ بکە',
  },
  whatsappUs: {
    en: 'WhatsApp Us',
    ckb: 'واتسئەپمان بکە',
  },
  emailUs: {
    en: 'Email Us',
    ckb: 'ئیمەیڵمان بکە',
  },
  openingHours: {
    en: 'Opening Hours',
    ckb: 'کاتژمێرەکانی کردنەوە',
  },
  contactInfo: {
    en: 'Contact Information',
    ckb: 'زانیاری پەیوەندی',
  },
};

export function VisitUs() {
  const { language } = useLanguage();

  const handleWhatsApp = () => {
    const message = language === 'en' 
      ? 'Hi! I would like to visit Nature Village. Can you help me with directions?'
      : 'سڵاو! دەمەوێت سەردانی Nature Village بکەم. دەتوانیت یارمەتیم بدەیت لەگەڵ ڕێگەکان؟';
    const url = `https://wa.me/${restaurantInfo.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleDirections = () => {
    const address = encodeURIComponent(getTranslation(restaurantInfo.address, language));
    const url = `https://www.google.com/maps/search/?api=1&query=${address}`;
    window.open(url, '_blank');
  };

  return (
    <section id="visit" className="py-20 bg-sand-50">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map */}
          <div className="space-y-6">
            <h3 className="text-2xl font-marcellus text-charcoal mb-4">
              {getTranslation(restaurantInfo.name, language)}
            </h3>
            
            {/* Google Maps Embed */}
            <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890123!2d-74.0060!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjEiTiA3NMKwMDAnMjEuNiJX!5e0!3m2!1sen!2sus!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Nature Village Restaurant Location"
              />
            </div>

            {/* Address and Directions */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-6 w-6 text-terracotta flex-shrink-0 mt-1" />
                <div>
                  <p className="text-charcoal font-medium">
                    {getTranslation(restaurantInfo.address, language)}
                  </p>
                  <button
                    onClick={handleDirections}
                    className="text-terracotta hover:text-terracotta-700 font-medium mt-2"
                  >
                    {getTranslation(content.directions, language)}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Opening Hours */}
            <div>
              <h3 className="text-2xl font-marcellus text-charcoal mb-4">
                {getTranslation(content.openingHours, language)}
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-terracotta" />
                  <span className="text-charcoal">
                    {getTranslation(restaurantInfo.hours.monday, language)}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-terracotta" />
                  <span className="text-charcoal">
                    {getTranslation(restaurantInfo.hours.saturday, language)}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-terracotta" />
                  <span className="text-charcoal">
                    {getTranslation(restaurantInfo.hours.sunday, language)}
                  </span>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-marcellus text-charcoal mb-4">
                {getTranslation(content.contactInfo, language)}
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-terracotta" />
                  <div>
                    <p className="text-charcoal font-medium">{restaurantInfo.phone}</p>
                    <button className="text-terracotta hover:text-terracotta-700 font-medium">
                      {getTranslation(content.callUs, language)}
                    </button>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <MessageCircle className="h-5 w-5 text-terracotta" />
                  <div>
                    <p className="text-charcoal font-medium">{restaurantInfo.whatsapp}</p>
                    <button
                      onClick={handleWhatsApp}
                      className="text-terracotta hover:text-terracotta-700 font-medium"
                    >
                      {getTranslation(content.whatsappUs, language)}
                    </button>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-terracotta" />
                  <div>
                    <p className="text-charcoal font-medium">{restaurantInfo.email}</p>
                    <button className="text-terracotta hover:text-terracotta-700 font-medium">
                      {getTranslation(content.emailUs, language)}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <button
                onClick={handleWhatsApp}
                className="btn-primary w-full text-lg py-4"
              >
                {getTranslation(content.whatsappUs, language)}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
