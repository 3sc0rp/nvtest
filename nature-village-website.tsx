import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, MapPin, Phone, Clock, Star, Filter, Globe, Facebook, Instagram, Twitter, 
  MessageCircle, ShoppingCart, Heart, Search, ChevronDown, ChevronUp, Play, Pause,
  Award, Users, Calendar, CreditCard, Truck, Shield, Zap, Sparkles, TrendingUp
} from 'lucide-react';

const NatureVillageWebsite = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('en');
  const [activeFilter, setActiveFilter] = useState('all');
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showReservationModal, setShowReservationModal] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [userLocation, setUserLocation] = useState(null);
  const [deliveryTime, setDeliveryTime] = useState('25-35 min');
  const [orderTotal, setOrderTotal] = useState(0);
  const [customerReviews] = useState([
    {
      id: 1,
      name: 'Sarah Johnson',
      rating: 5,
      comment: 'Amazing Kurdish flavors! The kebab was perfectly seasoned and the service was exceptional.',
      date: '2024-01-15',
      verified: true
    },
    {
      id: 2,
      name: 'Ahmed Hassan',
      rating: 5,
      comment: 'Authentic taste of Kurdistan. The dolma reminded me of my grandmother\'s cooking.',
      date: '2024-01-10',
      verified: true
    },
    {
      id: 3,
      name: 'Maria Rodriguez',
      rating: 4,
      comment: 'Beautiful atmosphere and delicious food. Highly recommend the baklava!',
      date: '2024-01-08',
      verified: true
    }
  ]);

  // Language options
  const languages = {
    en: { name: 'English', code: 'en', dir: 'ltr' },
    ku: { name: 'کوردی', code: 'ku', dir: 'rtl' },
    ar: { name: 'العربية', code: 'ar', dir: 'rtl' }
  };

  // Kurdish pattern SVG for decorative elements
  const KurdishPattern = () => (
    <svg className="absolute opacity-10" width="200" height="200" viewBox="0 0 200 200">
      <defs>
        <pattern id="kurdishPattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
          <rect width="50" height="50" fill="#8B4513"/>
          <polygon points="25,5 45,25 25,45 5,25" fill="#D2B48C"/>
          <circle cx="25" cy="25" r="8" fill="#6B8E23"/>
        </pattern>
      </defs>
      <rect width="200" height="200" fill="url(#kurdishPattern)"/>
    </svg>
  );

  // Enhanced menu data with MenuIQ integration and AI-powered recommendations
  const menuItems = [
    {
      id: 1,
      name: {
        en: 'Kebab-e Kubideh',
        ku: 'کەباب کوبیده',
        ar: 'كباب كوبيده'
      },
      description: {
        en: 'Traditional ground lamb kebab with aromatic spices, served with basmati rice and grilled tomatoes',
        ku: 'کەبابی نەریتی لە گۆشتی بەرخی هاڕاو لەگەڵ بۆنوبێرینی جۆراوجۆر، لەگەڵ برنجی باسماتی و تەماتەی برژاو',
        ar: 'كباب لحم الخروف المفروم التقليدي مع التوابل العطرة، يُقدم مع أرز البسمتي والطماطم المشوية'
      },
      price: '$18.99',
      originalPrice: '$22.99',
      category: 'traditional',
      popular: true,
      image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=300&h=200&fit=crop',
      tags: ['spicy', 'grilled', 'chef-special'],
      calories: 450,
      prepTime: '15 min',
      allergens: ['gluten', 'dairy'],
      nutrition: { protein: '25g', carbs: '45g', fat: '18g' },
      aiRecommendation: 'Perfect with our house-made yogurt sauce'
    },
    {
      id: 2,
      name: {
        en: 'Dolma',
        ku: 'دۆڵمە',
        ar: 'دولمة'
      },
      description: {
        en: 'Grape leaves stuffed with rice, herbs, and spices - a Kurdish family recipe',
        ku: 'گەڵای مێو پڕکراو لە برنج و ڕووەک و بۆنوبێرین - ڕیسەتی خێزانی کوردی',
        ar: 'أوراق العنب محشوة بالأرز والأعشاب والتوابل - وصفة عائلية كردية'
      },
      price: '$14.99',
      originalPrice: '$17.99',
      category: 'vegan',
      popular: false,
      image: 'https://images.unsplash.com/photo-1625944230945-1b7dd3b949ab?w=300&h=200&fit=crop',
      tags: ['vegetarian', 'traditional'],
      calories: 280,
      prepTime: '20 min',
      allergens: ['gluten'],
      nutrition: { protein: '8g', carbs: '42g', fat: '6g' },
      aiRecommendation: 'Try with our homemade yogurt sauce'
    },
    {
      id: 3,
      name: {
        en: 'Yaprakh',
        ku: 'یاپراخ',
        ar: 'يبرق'
      },
      description: {
        en: 'Cabbage rolls filled with rice, meat, and Kurdish spices in tomato sauce',
        ku: 'لەتی کەلەرم پڕکراو لە برنج و گۆشت و بۆنوبێرینی کوردی لە سۆسی تەماتە',
        ar: 'لفائف الملفوف محشوة بالأرز واللحم والتوابل الكردية في صلصة الطماطم'
      },
      price: '$16.99',
      originalPrice: '$19.99',
      category: 'traditional',
      popular: true,
      image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=300&h=200&fit=crop',
      tags: ['comfort food', 'hearty'],
      calories: 420,
      prepTime: '25 min',
      allergens: ['gluten'],
      nutrition: { protein: '22g', carbs: '38g', fat: '24g' },
      aiRecommendation: 'Perfect comfort food for cold days'
    },
    {
      id: 4,
      name: {
        en: 'Ash-e Reshteh',
        ku: 'ئاشی ڕەشتە',
        ar: 'آش رشتة'
      },
      description: {
        en: 'Hearty Kurdish noodle soup with beans, herbs, and yogurt',
        ku: 'شۆربای ڕەشتەی کوردی لەگەڵ لۆبیا و ڕووەک و ماست',
        ar: 'حساء الشعيرية الكردي المغذي مع الفاصولياء والأعشاب واللبن'
      },
      price: '$12.99',
      originalPrice: '$15.99',
      category: 'soup',
      popular: false,
      image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=300&h=200&fit=crop',
      tags: ['soup', 'comfort food', 'warm'],
      calories: 320,
      prepTime: '18 min',
      allergens: ['gluten', 'dairy'],
      nutrition: { protein: '16g', carbs: '52g', fat: '8g' },
      aiRecommendation: 'Best enjoyed on rainy days'
    },
    {
      id: 5,
      name: {
        en: 'Khorak-e Bademjan',
        ku: 'خۆراکی بادەمجان',
        ar: 'خوراك الباذنجان'
      },
      description: {
        en: 'Slow-cooked eggplant stew with tomatoes and Kurdish herbs',
        ku: 'خۆراکی بادەمجانی هێواش لێنراو لەگەڵ تەماتە و ڕووەکی کوردی',
        ar: 'يخنة الباذنجان المطبوخة ببطء مع الطماطم والأعشاب الكردية'
      },
      price: '$15.99',
      originalPrice: '$18.99',
      category: 'vegan',
      popular: true,
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop',
      tags: ['vegan', 'stew', 'healthy'],
      calories: 280,
      prepTime: '30 min',
      allergens: [],
      nutrition: { protein: '6g', carbs: '28g', fat: '18g' },
      aiRecommendation: 'Great vegetarian option with rich flavors'
    },
    {
      id: 6,
      name: {
        en: 'Baklava Kurdistan',
        ku: 'بەقڵاوای کوردستان',
        ar: 'بقلاوة كردستان'
      },
      description: {
        en: 'Traditional Kurdish baklava with pistachios and rose water',
        ku: 'بەقڵاوای نەریتی کوردی لەگەڵ فستق و ئاوی گوڵ',
        ar: 'بقلاوة كردية تقليدية بالفستق وماء الورد'
      },
      price: '$8.99',
      originalPrice: '$12.99',
      category: 'dessert',
      popular: true,
      image: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=300&h=200&fit=crop',
      tags: ['sweet', 'traditional', 'signature'],
      calories: 320,
      prepTime: '5 min',
      allergens: ['nuts', 'gluten'],
      nutrition: { protein: '4g', carbs: '52g', fat: '22g' },
      aiRecommendation: 'Best enjoyed with Turkish coffee'
    },
    {
      id: 7,
      name: {
        en: 'Shawarma Kurdistan',
        ku: 'شاوەرمای کوردستان',
        ar: 'شاورما كردستان'
      },
      description: {
        en: 'Marinated chicken or lamb wrapped in fresh pita with garlic sauce and pickles',
        ku: 'مەرینەیتەد کراو لەگەڵ پیتا تازە و سۆسی سیر و پیکڵ',
        ar: 'دجاج أو لحم ضأن متبل في خبز بيتا طازج مع صلصة الثوم والمخللات'
      },
      price: '$16.99',
      originalPrice: '$19.99',
      category: 'street-food',
      popular: true,
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop',
      tags: ['quick', 'portable', 'lunch-favorite'],
      calories: 380,
      prepTime: '8 min',
      allergens: ['gluten'],
      nutrition: { protein: '28g', carbs: '38g', fat: '16g' },
      aiRecommendation: 'Add extra garlic sauce for authentic taste'
    },
    {
      id: 8,
      name: {
        en: 'Kurdish Tea Service',
        ku: 'خزمەتگوزاری چای کوردی',
        ar: 'خدمة الشاي الكردي'
      },
      description: {
        en: 'Traditional black tea served with fresh mint and local honey',
        ku: 'چای ڕەنگی نەریتی لەگەڵ پونگ و هەنگوینی ناوخۆیی',
        ar: 'شاي أسود تقليدي يُقدم مع النعناع الطازج والعسل المحلي'
      },
      price: '$4.99',
      category: 'beverages',
      popular: false,
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=300&h=200&fit=crop',
      tags: ['traditional', 'hot', 'refreshing'],
      calories: 45,
      prepTime: '3 min',
      allergens: [],
      nutrition: { protein: '0g', carbs: '12g', fat: '0g' },
      aiRecommendation: 'Perfect after any meal'
    }
  ];

  const translations = {
    en: {
      nav: {
        home: 'Home',
        menu: 'Menu',
        about: 'About Us',
        gallery: 'Gallery',
        visit: 'Visit Us'
      },
      hero: {
        title: 'Nature Village',
        subtitle: 'A Taste of Kurdistan in Every Bite',
        description: 'Experience authentic Kurdish flavors in a warm, traditional setting where every dish tells a story of our rich cultural heritage.',
        cta1: 'View Menu',
        cta2: 'Make Reservation'
      },
      menu: {
        title: 'Our Menu',
        subtitle: 'Powered by MenuIQ - AI-Enhanced Dining Experience',
        filters: {
          all: 'All Items',
          traditional: 'Traditional',
          vegan: 'Vegan & Vegetarian',
          popular: 'Most Popular'
        }
      },
      about: {
        title: 'Our Story',
        content: 'Nature Village was born from a dream to share the authentic flavors and warm hospitality of Kurdistan with the world. Our family recipes have been passed down through generations, each dish crafted with love and respect for our cultural traditions.',
        experience: 'Years Experience',
        recipes: 'Traditional Recipes'
      },
      gallery: {
        title: 'Gallery',
        subtitle: 'A visual journey through our culinary heritage'
      },
      visit: {
        title: 'Visit Us',
        subtitle: 'Find us in the heart of the city',
        hours: 'Hours',
        contact: 'Contact',
        address: 'Address',
        phone: 'Phone',
        whatsapp: 'WhatsApp',
        makeReservation: 'Make Reservation',
        whatsappUs: 'WhatsApp Us'
      },
      footer: {
        description: 'Bringing the authentic flavors and warm hospitality of Kurdistan to your table. Every dish is a celebration of our rich cultural heritage.',
        quickLinks: 'Quick Links',
        contactInfo: 'Contact Info',
        openDaily: 'Open Daily 11:00 AM',
        poweredBy: 'Powered by',
        copyright: '© 2024 Nature Village Kurdish Restaurant. All rights reserved.'
      },
      featured: {
        title: 'Featured Dishes',
        subtitle: 'Discover our most beloved Kurdish specialties, crafted with traditional recipes and modern presentation'
      }
    },
    ku: {
      nav: {
        home: 'ماڵەوە',
        menu: 'خۆراک',
        about: 'دەربارەمان',
        gallery: 'وێنەکان',
        visit: 'سەردانمان بکەن'
      },
      hero: {
        title: 'گوندی سروشت',
        subtitle: 'تامی کوردستان لە هەر پارووەکدا',
        description: 'تامی ڕەسەنی کوردی بچێژن لە ژینگەیەکی گەرم و نەریتیدا کە هەر خۆراکێک چیرۆکی دەوڵەمەندی کولتووری میراتمان دەگێڕێتەوە.',
        cta1: 'بینینی خۆراک',
        cta2: 'جێگە حیجازکردن'
      },
      menu: {
        title: 'خۆراکەکانمان',
        subtitle: 'بە MenuIQ هێزدراو - ئەزموونی خۆراک لەگەڵ زیرەکی دەستکرد',
        filters: {
          all: 'هەموو ئایتەمەکان',
          traditional: 'نەریتی',
          vegan: 'ڕووەکی و ڤێگان',
          popular: 'بەناوبانگترین'
        }
      },
      about: {
        title: 'چیرۆکەکەمان',
        content: 'گوندی سروشت لە خەونێکەوە لەدایک بووە بۆ هاوبەشکردنی تامە ڕەسەنەکان و پێشوازی گەرمی کوردستان لەگەڵ جیهان. ڕیسەتەکانی خێزانەکەمان لە نەوەیەکەوە بۆ نەوەیەک دراونەتەوە، هەر خۆراکێک بە خۆشەویستی و ڕێزگرتن لە نەریتە کولتوورییەکانمان دروست دەکرێت.',
        experience: 'ساڵ ئەزموون',
        recipes: 'ڕیسەتی نەریتی'
      },
      gallery: {
        title: 'گالەری',
        subtitle: 'گەشتێکی بینایی بە میراتی چێشتلێنانمان'
      },
      visit: {
        title: 'سەردانمان بکەن',
        subtitle: 'لە دڵی شارەکە بمانبینەوە',
        hours: 'کاتەکان',
        contact: 'پەیوەندی',
        address: 'ناونیشان',
        phone: 'تەلەفۆن',
        whatsapp: 'واتساپ',
        makeReservation: 'جێگە حیجازکردن',
        whatsappUs: 'واتساپمان بکە'
      },
      footer: {
        description: 'هێنانی تامە ڕەسەنەکان و پێشوازی گەرمی کوردستان بۆ مێزەکەتان. هەر خۆراکێک ئاهەنگگێڕانی دەوڵەمەندی کولتووری میراتمانە.',
        quickLinks: 'لینکە خێراکان',
        contactInfo: 'زانیاری پەیوەندی',
        openDaily: 'ڕۆژانە کراوەیە کاتژمێر ١١:٠٠ی بەیانی',
        poweredBy: 'هێزی لەلایەن',
        copyright: '© ٢٠٢٤ گوندی سروشت چێشتخانەی کوردی. هەموو مافەکان پارێزراون.'
      },
      featured: {
        title: 'خۆراکی نمایشکراو',
        subtitle: 'خۆراکە خۆشەویستەکانی کوردی بناسە، لەگەڵ ڕیسەتی نەریتی و پێشکەشکردنی نوێ دروستکراون'
      }
    },
    ar: {
      nav: {
        home: 'الرئيسية',
        menu: 'القائمة',
        about: 'من نحن',
        gallery: 'المعرض',
        visit: 'زورونا'
      },
      hero: {
        title: 'قرية الطبيعة',
        subtitle: 'طعم كردستان في كل قضمة',
        description: 'اختبر النكهات الكردية الأصيلة في جو دافئ وتقليدي حيث يحكي كل طبق قصة من تراثنا الثقافي الغني.',
        cta1: 'عرض القائمة',
        cta2: 'حجز طاولة'
      },
      menu: {
        title: 'قائمتنا',
        subtitle: 'مدعوم بـ MenuIQ - تجربة طعام محسّنة بالذكاء الاصطناعي',
        filters: {
          all: 'جميع الأطباق',
          traditional: 'تقليدي',
          vegan: 'نباتي ونباتي صرف',
          popular: 'الأكثر شهرة'
        }
      },
      about: {
        title: 'قصتنا',
        content: 'وُلدت قرية الطبيعة من حلم مشاركة النكهات الأصيلة والضيافة الدافئة لكردستان مع العالم. وصفات عائلتنا تُورث عبر الأجيال، كل طبق يُحضر بحب واحترام لتقاليدنا الثقافية.',
        experience: 'سنوات خبرة',
        recipes: 'وصفات تقليدية'
      },
      gallery: {
        title: 'المعرض',
        subtitle: 'رحلة بصرية عبر تراثنا الطهوي'
      },
      visit: {
        title: 'زورونا',
        subtitle: 'اعثر علينا في قلب المدينة',
        hours: 'ساعات العمل',
        contact: 'اتصل بنا',
        address: 'العنوان',
        phone: 'الهاتف',
        whatsapp: 'واتساب',
        makeReservation: 'احجز طاولة',
        whatsappUs: 'راسلنا على واتساب'
      },
      footer: {
        description: 'نجلب النكهات الأصيلة والضيافة الدافئة من كردستان إلى طاولتك. كل طبق هو احتفال بتراثنا الثقافي الغني.',
        quickLinks: 'روابط سريعة',
        contactInfo: 'معلومات الاتصال',
        openDaily: 'مفتوح يومياً الساعة ١١:٠٠ صباحاً',
        poweredBy: 'مدعوم من',
        copyright: '© ٢٠٢٤ قرية الطبيعة مطعم كردي. جميع الحقوق محفوظة.'
      },
      featured: {
        title: 'الأطباق المميزة',
        subtitle: 'اكتشف أحب الأطباق الكردية لدينا، المحضرة بوصفات تقليدية وعرض عصري'
      }
    }
  };

  const t = translations[language];

  // Enhanced helper functions
  const scrollToSection = (sectionId) => {
    setCurrentSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const addToCart = (item) => {
    setCart(prev => {
      const existing = prev.find(cartItem => cartItem.id === item.id);
      if (existing) {
        return prev.map(cartItem => 
          cartItem.id === item.id 
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setShowCartModal(true);
  };

  const removeFromCart = (itemId) => {
    setCart(prev => prev.filter(item => item.id !== itemId));
  };

  const updateCartQuantity = (itemId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    setCart(prev => prev.map(item => 
      item.id === itemId ? { ...item, quantity } : item
    ));
  };

  const toggleFavorite = (itemId) => {
    setFavorites(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => {
      const price = parseFloat(item.price.replace('$', ''));
      return total + (price * item.quantity);
    }, 0);
  };

  const filteredMenuItems = activeFilter === 'all' 
    ? menuItems 
    : activeFilter === 'popular' 
    ? menuItems.filter(item => item.popular)
    : menuItems.filter(item => item.category === activeFilter);

  const searchedMenuItems = searchQuery 
    ? filteredMenuItems.filter(item => 
        item.name[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : filteredMenuItems;

  const isRTL = languages[language].dir === 'rtl';

  // Auto-rotate hero images
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % 5);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Get user location for delivery estimates
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        (error) => {
          console.log('Location access denied');
        }
      );
    }
  }, []);

  // Update cart total
  useEffect(() => {
    setOrderTotal(getCartTotal());
  }, [cart]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-lg z-50 border-b-2 border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img 
                src="https://naturevillagerestaurant.com/wp-content/uploads/2024/09/cropped-NatureVillage-Logo_circle-1222-2048x2048-1.webp" 
                alt="Nature Village Restaurant Logo" 
                className="w-12 h-12 mr-3 object-contain"
              />
              <div className="text-2xl font-serif font-bold text-amber-800">
                Nature Village
                <div className="text-xs text-amber-600 font-sans">Kurdish Restaurant</div>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {Object.entries(t.nav).map(([key, value]) => (
                  <button
                    key={key}
                    onClick={() => scrollToSection(key)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      currentSection === key
                        ? 'bg-amber-800 text-white'
                        : 'text-amber-800 hover:bg-amber-100'
                    }`}
                  >
                    {value}
                  </button>
                ))}
              </div>
            </div>

            {/* Enhanced Navigation Actions */}
            <div className="flex items-center space-x-4">
              {/* Search Bar */}
              <div className="hidden md:flex relative">
                <input
                  type="text"
                  placeholder={language === 'ar' ? 'البحث في القائمة...' : language === 'ku' ? 'لە منوو بگەڕێ...' : 'Search menu...'}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 px-4 py-2 pl-10 pr-4 text-sm border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  style={{ direction: languages[language].dir }}
                />
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-600" />
              </div>

              {/* Shopping Cart */}
              <button
                onClick={() => setShowCartModal(true)}
                className="relative text-amber-800 hover:text-amber-600 transition-colors"
              >
                <ShoppingCart className="w-6 h-6" />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cart.reduce((total, item) => total + item.quantity, 0)}
                  </span>
                )}
              </button>

              {/* Language Toggle */}
              <div className="relative">
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="appearance-none bg-transparent text-amber-800 hover:text-amber-600 font-medium text-sm border-none outline-none cursor-pointer pr-6"
                  style={{ direction: languages[language].dir }}
                >
                  {Object.entries(languages).map(([code, lang]) => (
                    <option key={code} value={code} className="bg-white text-amber-800">
                      {lang.name}
                    </option>
                  ))}
                </select>
                <Globe className="w-4 h-4 absolute right-0 top-1/2 transform -translate-y-1/2 pointer-events-none text-amber-800" />
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-amber-800 hover:text-amber-600"
                >
                  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-amber-200">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {Object.entries(t.nav).map(([key, value]) => (
                  <button
                    key={key}
                    onClick={() => scrollToSection(key)}
                    className="block px-3 py-2 text-base font-medium text-amber-800 hover:bg-amber-100 w-full text-left"
                  >
                    {value}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <KurdishPattern />
        </div>
        
        {/* Dynamic Hero Background Images */}
        <div className="absolute inset-0">
          {[
            'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&h=1080&fit=crop',
            'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&h=1080&fit=crop',
            'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=1920&h=1080&fit=crop',
            'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&h=1080&fit=crop',
            'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=1920&h=1080&fit=crop'
          ].map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                backgroundImage: `linear-gradient(rgba(139, 69, 19, 0.4), rgba(139, 69, 19, 0.6)), url("${image}")`
              }}
            />
          ))}
        </div>
        
        {/* Hero Controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all"
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          </button>
          {[0, 1, 2, 3, 4].map((index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentImageIndex ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4" style={{ direction: languages[language].dir }}>
          <div className="mb-6">
            <div className="inline-flex items-center space-x-2 bg-amber-600/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
              <Award className="w-4 h-4" />
              <span>{language === 'ar' ? 'أفضل مطعم كردي ٢٠٢٤' : language === 'ku' ? 'باشترین چێشتخانەی کوردی ٢٠٢٤' : 'Best Kurdish Restaurant 2024'}</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-shadow-lg text-center">
            {t.hero.title}
          </h1>
          <p className="text-2xl md:text-3xl font-light mb-8 text-amber-100 text-center">
            {t.hero.subtitle}
          </p>
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed text-amber-50 text-center">
            {t.hero.description}
          </p>
          
          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button 
              onClick={() => scrollToSection('menu')}
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-xl flex items-center justify-center space-x-2"
            >
              <Sparkles className="w-5 h-5" />
              <span>{t.hero.cta1}</span>
            </button>
            <button 
              onClick={() => setShowReservationModal(true)}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-amber-800 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Calendar className="w-5 h-5" />
              <span>{t.hero.cta2}</span>
            </button>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-300">4.9★</div>
              <div className="text-sm text-amber-200">{language === 'ar' ? 'تقييم العملاء' : language === 'ku' ? 'هەڵسەنگاندنی کڵایەنت' : 'Customer Rating'}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-300">{deliveryTime}</div>
              <div className="text-sm text-amber-200">{language === 'ar' ? 'وقت التوصيل' : language === 'ku' ? 'کاتی گەیاندن' : 'Delivery Time'}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-300">15+</div>
              <div className="text-sm text-amber-200">{language === 'ar' ? 'سنوات الخبرة' : language === 'ku' ? 'ساڵ ئەزموون' : 'Years Experience'}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dishes Preview */}
      <section className="py-20 bg-white" style={{ direction: languages[language].dir }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-amber-800 mb-4">{t.featured.title}</h2>
            <p className="text-xl text-amber-600 max-w-2xl mx-auto">{t.featured.subtitle}</p>
            <div className="w-24 h-1 bg-amber-600 mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {menuItems.filter(item => item.popular).slice(0, 3).map((item) => (
              <div key={item.id} className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:scale-105">
                <img 
                  src={item.image} 
                  alt={item.name[language]}
                  className="w-full h-48 object-cover"
                />
                <div className={`p-6 ${isRTL ? 'text-right' : 'text-left'}`} style={{ direction: languages[language].dir }}>
                  <h3 className="text-xl font-serif font-bold text-amber-800 mb-2">{item.name[language]}</h3>
                  <p className="text-gray-700 mb-4">{item.description[language]}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-amber-600">{item.price}</span>
                    <div className="flex items-center space-x-1 text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-gradient-to-br from-amber-50 to-orange-100" style={{ direction: languages[language].dir }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-amber-800 mb-4">{t.menu.title}</h2>
            <p className="text-lg text-amber-600 mb-2">{t.menu.subtitle}</p>
            <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
          </div>

          {/* Enhanced Menu Filters and Search */}
          <div className="mb-8">
            {/* Mobile Search */}
            <div className="md:hidden mb-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder={language === 'ar' ? 'البحث في القائمة...' : language === 'ku' ? 'لە منوو بگەڕێ...' : 'Search menu...'}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pl-12 pr-4 text-sm border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  style={{ direction: languages[language].dir }}
                />
                <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-600" />
              </div>
            </div>

            {/* Menu Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {Object.entries(t.menu.filters).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setActiveFilter(key)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                    activeFilter === key
                      ? 'bg-amber-600 text-white shadow-lg'
                      : 'bg-white text-amber-800 hover:bg-amber-100'
                  }`}
                >
                  <Filter className="w-4 h-4 inline mr-2" />
                  {label}
                </button>
              ))}
            </div>

            {/* Search Results Info */}
            {searchQuery && (
              <div className="text-center text-amber-600 mb-4">
                {language === 'ar' 
                  ? `تم العثور على ${searchedMenuItems.length} نتيجة لـ "${searchQuery}"`
                  : language === 'ku'
                  ? `${searchedMenuItems.length} ئەنجام دۆزرایەوە بۆ "${searchQuery}"`
                  : `Found ${searchedMenuItems.length} results for "${searchQuery}"`
                }
              </div>
            )}
          </div>

          {/* Enhanced Menu Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {searchedMenuItems.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:scale-105">
                <div className="relative group">
                  <img 
                    src={item.image} 
                    alt={item.name[language]}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {/* Popular Badge */}
                  {item.popular && (
                    <div className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                      <TrendingUp className="w-3 h-3" />
                      <span>{language === 'ar' ? 'شائع' : language === 'ku' ? 'ناوداری' : 'Popular'}</span>
                    </div>
                  )}
                  
                  {/* Discount Badge */}
                  {item.originalPrice && (
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      {language === 'ar' ? 'خصم' : language === 'ku' ? 'داشکاندن' : 'SALE'}
                    </div>
                  )}
                  
                  {/* Favorite Button */}
                  <button
                    onClick={() => toggleFavorite(item.id)}
                    className={`absolute top-4 right-4 p-2 rounded-full transition-all ${
                      favorites.includes(item.id) 
                        ? 'bg-red-500 text-white' 
                        : 'bg-white/80 text-gray-600 hover:bg-red-500 hover:text-white'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${favorites.includes(item.id) ? 'fill-current' : ''}`} />
                  </button>
                  
                  {/* Quick Info Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-sm mb-2">{item.calories} cal</div>
                      <div className="text-sm">{item.prepTime}</div>
                    </div>
                  </div>
                </div>
                
                <div className={`p-6 ${isRTL ? 'text-right' : 'text-left'}`} style={{ direction: languages[language].dir }}>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-serif font-bold text-amber-800">{item.name[language]}</h3>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">{item.description[language]}</p>
                  
                  {/* AI Recommendation */}
                  {item.aiRecommendation && (
                    <div className="mb-4 p-3 bg-amber-50 rounded-lg border-l-4 border-amber-500">
                      <div className="flex items-center space-x-2 text-sm">
                        <Zap className="w-4 h-4 text-amber-600" />
                        <span className="text-amber-800 font-medium">AI Tip:</span>
                        <span className="text-amber-700">{item.aiRecommendation}</span>
                      </div>
                    </div>
                  )}
                  
                                     {/* Nutrition Info */}
                   {item.nutrition && (
                     <div className="mb-4 grid grid-cols-3 gap-2 text-xs text-gray-600">
                       <div className="text-center">
                         <div className="font-semibold">{item.nutrition.protein}</div>
                         <div>Protein</div>
                       </div>
                       <div className="text-center">
                         <div className="font-semibold">{item.nutrition.carbs}</div>
                         <div>Carbs</div>
                       </div>
                       <div className="text-center">
                         <div className="font-semibold">{item.nutrition.fat}</div>
                         <div>Fat</div>
                       </div>
                     </div>
                   )}
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      {item.originalPrice && (
                        <span className="text-gray-500 line-through text-sm">{item.originalPrice}</span>
                      )}
                      <span className="text-2xl font-bold text-amber-600">{item.price}</span>
                    </div>
                    <button 
                      onClick={() => addToCart(item)}
                      className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center space-x-1"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      <span>{language === 'ar' ? 'أضف للسلة' : language === 'ku' ? 'بیخە سەپەت' : 'Add to Cart'}</span>
                    </button>
                  </div>
                  
                  <div className={`flex gap-1 mt-3 ${isRTL ? 'justify-end' : 'justify-start'}`}>
                    {item.tags.map((tag) => (
                      <span key={tag} className="bg-amber-100 text-amber-700 px-2 py-1 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-100" style={{ direction: languages[language].dir }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-amber-800 mb-4">
              {language === 'ar' ? 'آراء العملاء' : language === 'ku' ? 'ڕەخنەی کڵایەنت' : 'Customer Reviews'}
            </h2>
            <p className="text-lg text-amber-600">
              {language === 'ar' ? 'ماذا يقول عملاؤنا عنا' : language === 'ku' ? 'کڵایەنتەکانمان چی دەڵێن' : 'What our customers say about us'}
            </p>
            <div className="w-24 h-1 bg-amber-600 mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {customerReviews.map((review) => (
              <div key={review.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all">
                <div className="flex items-center mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                    ))}
                  </div>
                  {review.verified && (
                    <div className="ml-2 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                      {language === 'ar' ? 'موثق' : language === 'ku' ? 'پشتڕاست' : 'Verified'}
                    </div>
                  )}
                </div>
                <p className="text-gray-700 mb-4 italic">"{review.comment}"</p>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold text-amber-800">{review.name}</div>
                    <div className="text-sm text-gray-500">{review.date}</div>
                  </div>
                  <div className="text-amber-600">
                    <Users className="w-5 h-5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white" style={{ direction: languages[language].dir }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={isRTL ? 'order-2' : 'order-1'}>
              <h2 className="text-4xl font-serif font-bold text-amber-800 mb-6">{t.about.title}</h2>
              <div className="w-24 h-1 bg-amber-600 mb-8"></div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {t.about.content}
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                {language === 'ar' 
                  ? 'يقع مطعمنا في قلب المدينة، ويجمع بين دفء الضيافة الكردية وراحة الطعام المعاصر. كل مكون يتم اختياره بعناية، وكل طبق يُحضر بنفس العناية والاهتمام الذي ميز الطبخ الكردي لقرون.'
                  : language === 'ku'
                  ? 'چێشتخانەکەمان لە دڵی شارەکەدا جێگیرە، گەرمی میوانداری کوردی لەگەڵ ئاسوودەیی خواردنی سەردەمی تێکەڵ دەکات. هەر پێکهاتەیەک بە وردی هەڵدەبژێردرێت، هەر خۆراکێکیش بە هەمان گرنگیدان و سەرنجدان ئامادە دەکرێت کە بۆ سەدەکان تایبەتمەندی چێشتلێنانی کوردی بووە.'
                  : 'Located in the heart of the city, our restaurant brings together the warmth of Kurdish hospitality with contemporary dining comfort. Every ingredient is carefully sourced, and every dish is prepared with the same care and attention that has defined Kurdish cooking for centuries.'
                }
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-amber-50 rounded-lg">
                  <div className="text-3xl font-bold text-amber-600 mb-2">15+</div>
                  <div className="text-amber-800 font-medium">{t.about.experience}</div>
                </div>
                <div className="text-center p-4 bg-amber-50 rounded-lg">
                  <div className="text-3xl font-bold text-amber-600 mb-2">50+</div>
                  <div className="text-amber-800 font-medium">{t.about.recipes}</div>
                </div>
              </div>
            </div>
            <div className={isRTL ? 'order-1' : 'order-2'}>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop"
                  alt="Traditional Kurdish cooking"
                  className="rounded-xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-orange-600/20 rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gradient-to-br from-amber-50 to-orange-100" style={{ direction: languages[language].dir }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-amber-800 mb-4">{t.gallery.title}</h2>
            <p className="text-lg text-amber-600">{t.gallery.subtitle}</p>
            <div className="w-24 h-1 bg-amber-600 mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=300&h=300&fit=crop',
              'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&h=300&fit=crop',
              'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=300&h=300&fit=crop',
              'https://images.unsplash.com/photo-1547592180-85f173990554?w=300&h=300&fit=crop',
              'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=300&fit=crop',
              'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=300&h=300&fit=crop',
              'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300&h=300&fit=crop',
              'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=300&h=300&fit=crop'
            ].map((src, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all">
                <img 
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Us Section */}
      <section id="visit" className="py-20 bg-white" style={{ direction: languages[language].dir }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-amber-800 mb-4">{t.visit.title}</h2>
            <p className="text-lg text-amber-600">{t.visit.subtitle}</p>
            <div className="w-24 h-1 bg-amber-600 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map */}
            <div className={isRTL ? 'order-2' : 'order-1'}>
              <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                  <p className="text-gray-600">
                    {language === 'ar' ? 'تكامل الخريطة التفاعلية' : 
                     language === 'ku' ? 'نەخشەی کارلێکەری تێکەڵکردن' : 
                     'Interactive Map Integration'}
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    {language === 'ar' ? 'عنصر نائب لخرائط جوجل' : 
                     language === 'ku' ? 'جێگرەوەی نەخشەی گووگڵ' : 
                     'Google Maps Embed Placeholder'}
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className={`space-y-8 ${isRTL ? 'order-1' : 'order-2'}`}>
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-xl">
                <h3 className="text-2xl font-serif font-bold text-amber-800 mb-6">{t.visit.contact}</h3>
                <div className="space-y-4">
                  <div className={`flex items-center space-x-4 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <MapPin className="w-6 h-6 text-amber-600" />
                    <div>
                      <p className="font-semibold text-amber-800">{t.visit.address}</p>
                      <p className="text-gray-700">123 Kurdistan Street, City Center, State 12345</p>
                    </div>
                  </div>
                  <div className={`flex items-center space-x-4 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <Phone className="w-6 h-6 text-amber-600" />
                    <div>
                      <p className="font-semibold text-amber-800">{t.visit.phone}</p>
                      <p className="text-gray-700">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className={`flex items-center space-x-4 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <MessageCircle className="w-6 h-6 text-amber-600" />
                    <div>
                      <p className="font-semibold text-amber-800">{t.visit.whatsapp}</p>
                      <p className="text-gray-700">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-xl">
                <h3 className="text-2xl font-serif font-bold text-amber-800 mb-6">{t.visit.hours}</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-amber-800 font-medium">
                      {language === 'ar' ? 'الإثنين - الخميس' : 
                       language === 'ku' ? 'دووشەممە - پێنجشەممە' : 
                       'Monday - Thursday'}
                    </span>
                    <span className="text-gray-700">11:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-amber-800 font-medium">
                      {language === 'ar' ? 'الجمعة - السبت' : 
                       language === 'ku' ? 'هەینی - شەممە' : 
                       'Friday - Saturday'}
                    </span>
                    <span className="text-gray-700">11:00 AM - 11:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-amber-800 font-medium">
                      {language === 'ar' ? 'الأحد' : 
                       language === 'ku' ? 'یەکشەممە' : 
                       'Sunday'}
                    </span>
                    <span className="text-gray-700">12:00 PM - 9:00 PM</span>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
                  <MessageCircle className="w-5 h-5" />
                  <span>{t.visit.whatsappUs}</span>
                </button>
                <button className="flex-1 bg-amber-600 hover:bg-amber-700 text-white py-4 px-6 rounded-lg font-semibold transition-colors">
                  {t.visit.makeReservation}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-12" style={{ direction: languages[language].dir }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className={`flex items-center mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <img 
                  src="https://naturevillagerestaurant.com/wp-content/uploads/2024/09/cropped-NatureVillage-Logo_circle-1222-2048x2048-1.webp" 
                  alt="Nature Village Logo" 
                  className={`w-12 h-12 object-contain ${isRTL ? 'ml-3' : 'mr-3'}`}
                />
                <h3 className="text-2xl font-serif font-bold">Nature Village</h3>
              </div>
              <p className="text-amber-200 mb-6 leading-relaxed">
                {t.footer.description}
              </p>
              <div className={`flex space-x-4 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                <button className="text-amber-200 hover:text-white transition-colors">
                  <Facebook className="w-6 h-6" />
                </button>
                <button className="text-amber-200 hover:text-white transition-colors">
                  <Instagram className="w-6 h-6" />
                </button>
                <button className="text-amber-200 hover:text-white transition-colors">
                  <Twitter className="w-6 h-6" />
                </button>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">{t.footer.quickLinks}</h4>
              <div className="space-y-2">
                {Object.entries(t.nav).map(([key, value]) => (
                  <button
                    key={key}
                    onClick={() => scrollToSection(key)}
                    className="block text-amber-200 hover:text-white transition-colors"
                  >
                    {value}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">{t.footer.contactInfo}</h4>
              <div className="space-y-2 text-amber-200">
                <p className={`flex items-center space-x-2 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <MapPin className="w-4 h-4" />
                  <span>123 Kurdistan Street</span>
                </p>
                <p className={`flex items-center space-x-2 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 123-4567</span>
                </p>
                <p className={`flex items-center space-x-2 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <Clock className="w-4 h-4" />
                  <span>{t.footer.openDaily}</span>
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-amber-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-amber-200 text-sm">
              {t.footer.copyright}
            </div>
            <div className={`flex items-center space-x-4 mt-4 md:mt-0 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
              <div className="relative">
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="appearance-none bg-transparent text-amber-200 hover:text-white font-medium text-sm border-none outline-none cursor-pointer pr-6"
                  style={{ direction: languages[language].dir }}
                >
                  {Object.entries(languages).map(([code, lang]) => (
                    <option key={code} value={code} className="bg-amber-900 text-amber-200">
                      {lang.name}
                    </option>
                  ))}
                </select>
                <Globe className="w-4 h-4 absolute right-0 top-1/2 transform -translate-y-1/2 pointer-events-none text-amber-200" />
              </div>
              <div className="text-amber-200 text-sm">
                {t.footer.poweredBy} <span className="font-semibold text-white">Blunari</span> & MenuIQ
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Shopping Cart Modal */}
      {showCartModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-md w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-amber-800">
                  {language === 'ar' ? 'سلة التسوق' : language === 'ku' ? 'سەپەتی کڕین' : 'Shopping Cart'}
                </h3>
                <button
                  onClick={() => setShowCartModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>
            
            <div className="p-6">
              {cart.length === 0 ? (
                <div className="text-center py-8">
                  <ShoppingCart className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">
                    {language === 'ar' ? 'سلة التسوق فارغة' : language === 'ku' ? 'سەپەت بەتاڵە' : 'Your cart is empty'}
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                      <img src={item.image} alt={item.name[language]} className="w-16 h-16 object-cover rounded" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-amber-800">{item.name[language]}</h4>
                        <p className="text-sm text-gray-600">{item.price}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center hover:bg-amber-200"
                        >
                          -
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center hover:bg-amber-200"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-semibold text-amber-800">
                        {language === 'ar' ? 'المجموع' : language === 'ku' ? 'کۆی گشتی' : 'Total'}
                      </span>
                      <span className="text-xl font-bold text-amber-600">${orderTotal.toFixed(2)}</span>
                    </div>
                    <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-semibold transition-colors">
                      {language === 'ar' ? 'إتمام الطلب' : language === 'ku' ? 'تەواوکردنی داواکاری' : 'Checkout'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Reservation Modal */}
      {showReservationModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-md w-full">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-amber-800">
                  {language === 'ar' ? 'حجز طاولة' : language === 'ku' ? 'جێگە حیجازکردن' : 'Make Reservation'}
                </h3>
                <button
                  onClick={() => setShowReservationModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {language === 'ar' ? 'الاسم' : language === 'ku' ? 'ناو' : 'Name'}
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder={language === 'ar' ? 'أدخل اسمك' : language === 'ku' ? 'ناوەکەت بنووسە' : 'Enter your name'}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {language === 'ar' ? 'رقم الهاتف' : language === 'ku' ? 'ژمارەی مۆبایل' : 'Phone'}
                  </label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder={language === 'ar' ? 'أدخل رقم الهاتف' : language === 'ku' ? 'ژمارەی مۆبایل بنووسە' : 'Enter your phone'}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {language === 'ar' ? 'التاريخ' : language === 'ku' ? 'بەروار' : 'Date'}
                  </label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {language === 'ar' ? 'الوقت' : language === 'ku' ? 'کات' : 'Time'}
                  </label>
                  <input
                    type="time"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {language === 'ar' ? 'عدد الأشخاص' : language === 'ku' ? 'ژمارەی کەس' : 'Number of Guests'}
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5+</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-semibold transition-colors"
                >
                  {language === 'ar' ? 'تأكيد الحجز' : language === 'ku' ? 'پشتڕاستکردنەوەی حیجاز' : 'Confirm Reservation'}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all transform hover:scale-110">
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>

      <style jsx>{`
        .text-shadow-lg {
          text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        }
        
        /* Kurdish-inspired decorative elements */
        .kurdish-border {
          border-image: linear-gradient(45deg, #8B4513, #D2B48C, #6B8E23) 1;
          border-width: 3px;
          border-style: solid;
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #D97706;
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #B45309;
        }

        /* Responsive typography for multilingual text */
        [dir="rtl"] {
          text-align: right;
        }

        [dir="ltr"] {
          text-align: left;
        }

        /* Kurdish and Arabic font support */
        .kurdish-text, .arabic-text {
          font-family: 'Noto Sans Arabic', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        /* Language-specific number formatting */
        .rtl-numbers {
          font-feature-settings: 'lnum' 1;
          direction: ltr;
          unicode-bidi: embed;
        }

        /* Performance optimizations */
        .backdrop-blur-md {
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        /* Mobile-first responsive design */
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          
          .hero-subtitle {
            font-size: 1.5rem;
          }
        }

        /* Accessibility improvements */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
};

export default NatureVillageWebsite;