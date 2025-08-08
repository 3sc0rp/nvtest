import { MenuItem } from '@/lib/types';

export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: { en: 'Kebab', ckb: 'کەباب' },
    description: { 
      en: 'Traditional grilled lamb kebab with aromatic spices and herbs',
      ckb: 'کەبابی بەراز بە بەهارات و ئەدویەتەکانی کوردی'
    },
    price: 18.99,
    category: 'traditional',
    tags: ['hearty', 'warm', 'grilled'],
    popularity: 9.5,
    image: '/images/kebab.jpg',
    spicy: false,
  },
  {
    id: '2',
    name: { en: 'Dolma', ckb: 'دۆڵمە' },
    description: { 
      en: 'Grape leaves stuffed with rice, herbs, and vegetables',
      ckb: 'گەڵای تاڵی پڕ لە برنج و بەهارات و سەوزەوات'
    },
    price: 14.99,
    category: 'traditional',
    tags: ['fresh', 'herbaceous'],
    popularity: 8.8,
    image: '/images/dolma.jpg',
    vegetarian: true,
    vegan: true,
  },
  {
    id: '3',
    name: { en: 'Falafel', ckb: 'فلافل' },
    description: { 
      en: 'Crispy chickpea patties with tahini sauce',
      ckb: 'نۆکەکانی نۆک بە سۆسی تەحینی'
    },
    price: 12.99,
    category: 'vegan',
    tags: ['fresh', 'light', 'crispy'],
    popularity: 8.2,
    image: '/images/falafel.jpg',
    vegan: true,
    vegetarian: true,
  },
  {
    id: '4',
    name: { en: 'Shawarma', ckb: 'شاوەرمە' },
    description: { 
      en: 'Marinated chicken wrapped in fresh pita with garlic sauce',
      ckb: 'مەرینەتی مریشک لە پیتای تازە بە سۆسی سیر'
    },
    price: 16.99,
    category: 'popular',
    tags: ['warm', 'savory'],
    popularity: 9.2,
    image: '/images/shawarma.jpg',
    spicy: false,
  },
  {
    id: '5',
    name: { en: 'Hummus', ckb: 'حومس' },
    description: { 
      en: 'Creamy chickpea dip with olive oil and paprika',
      ckb: 'نۆکی هەڵوێر بە ڕۆنی زەیتون و پاپریکا'
    },
    price: 8.99,
    category: 'vegan',
    tags: ['fresh', 'creamy', 'dip'],
    popularity: 7.8,
    image: '/images/hummus.jpg',
    vegan: true,
    vegetarian: true,
  },
  {
    id: '6',
    name: { en: 'Biryani', ckb: 'بیرانی' },
    description: { 
      en: 'Fragrant rice with tender lamb and aromatic spices',
      ckb: 'برنجی بۆنخۆش بە گۆشتی بەراز و بەهارات'
    },
    price: 22.99,
    category: 'traditional',
    tags: ['hearty', 'aromatic', 'warm'],
    popularity: 9.0,
    image: '/images/biryani.jpg',
    spicy: true,
  },
  {
    id: '7',
    name: { en: 'Tabouleh', ckb: 'تابۆلە' },
    description: { 
      en: 'Fresh parsley salad with bulgur wheat and lemon',
      ckb: 'سەلەتی پەترسک بە گەنم و لیمۆن'
    },
    price: 10.99,
    category: 'vegan',
    tags: ['fresh', 'light', 'herbaceous'],
    popularity: 7.5,
    image: '/images/tabouleh.jpg',
    vegan: true,
    vegetarian: true,
  },
  {
    id: '8',
    name: { en: 'Kubba', ckb: 'کوبە' },
    description: { 
      en: 'Crispy bulgur shells filled with spiced ground meat',
      ckb: 'پووکی گەنم بە گۆشتی هەڵوێر و بەهارات'
    },
    price: 15.99,
    category: 'traditional',
    tags: ['crispy', 'savory'],
    popularity: 8.5,
    image: '/images/kubba.jpg',
    spicy: false,
  },
  {
    id: '9',
    name: { en: 'Mujadara', ckb: 'موجەدرە' },
    description: { 
      en: 'Lentils and rice with caramelized onions',
      ckb: 'نۆک و برنج بە پیازێکی سوورکراوە'
    },
    price: 13.99,
    category: 'vegan',
    tags: ['hearty', 'nutritious'],
    popularity: 7.9,
    image: '/images/mujadara.jpg',
    vegan: true,
    vegetarian: true,
  },
  {
    id: '10',
    name: { en: 'Kebab Koobideh', ckb: 'کەبابی کوبیدە' },
    description: { 
      en: 'Ground lamb kebab with sumac and saffron',
      ckb: 'کەبابی گۆشتی هەڵوێر بە سوماق و زەعفران'
    },
    price: 19.99,
    category: 'traditional',
    tags: ['hearty', 'grilled', 'aromatic'],
    popularity: 9.3,
    image: '/images/koobideh.jpg',
    spicy: false,
  },
  {
    id: '11',
    name: { en: 'Fattoush', ckb: 'فاتۆش' },
    description: { 
      en: 'Mixed vegetable salad with toasted pita bread',
      ckb: 'سەلەتی سەوزەوات بە نانی پیتای بریندەر'
    },
    price: 11.99,
    category: 'vegan',
    tags: ['fresh', 'light', 'crunchy'],
    popularity: 7.6,
    image: '/images/fattoush.jpg',
    vegan: true,
    vegetarian: true,
  },
  {
    id: '12',
    name: { en: 'Baklava', ckb: 'بەقلاوە' },
    description: { 
      en: 'Layered pastry with nuts and honey syrup',
      ckb: 'پەستەری چەند قەت بە گوێزی و شیلەنگ'
    },
    price: 7.99,
    category: 'popular',
    tags: ['sweet', 'dessert'],
    popularity: 8.7,
    image: '/images/baklava.jpg',
    vegan: false,
  },
  {
    id: '13',
    name: { en: 'Knafeh', ckb: 'کنەفە' },
    description: { 
      en: 'Sweet cheese pastry with rose water syrup',
      ckb: 'پەستەری پەنیر بە شیلەنگی گوڵەبەڕۆژ'
    },
    price: 8.99,
    category: 'popular',
    tags: ['sweet', 'dessert'],
    popularity: 8.9,
    image: '/images/knafeh.jpg',
    vegan: false,
  },
  {
    id: '14',
    name: { en: 'Turkish Coffee', ckb: 'قەهوەی تورکی' },
    description: { 
      en: 'Traditional coffee brewed with cardamom',
      ckb: 'قەهوەیەکی کۆن بە هەیل'
    },
    price: 4.99,
    category: 'traditional',
    tags: ['beverage', 'aromatic'],
    popularity: 8.1,
    image: '/images/turkish-coffee.jpg',
    vegan: true,
  },
  {
    id: '15',
    name: { en: 'Ayran', ckb: 'ئەیران' },
    description: { 
      en: 'Refreshing yogurt drink with mint',
      ckb: 'مەستەی سارد بە پوونگ'
    },
    price: 3.99,
    category: 'traditional',
    tags: ['beverage', 'refreshing'],
    popularity: 7.3,
    image: '/images/ayran.jpg',
    vegan: false,
  },
  {
    id: '16',
    name: { en: 'Kurdish Tea', ckb: 'چای کوردی' },
    description: { 
      en: 'Black tea served with fresh mint',
      ckb: 'چایەکی ڕەش بە پوونگی تازە'
    },
    price: 2.99,
    category: 'traditional',
    tags: ['beverage', 'herbaceous'],
    popularity: 8.4,
    image: '/images/kurdish-tea.jpg',
    vegan: true,
  },
];

export const categories = [
  { id: 'all', name: { en: 'All Dishes', ckb: 'هەموو خواردنەکان' } },
  { id: 'traditional', name: { en: 'Traditional', ckb: 'کۆن' } },
  { id: 'vegan', name: { en: 'Vegan', ckb: 'گیانلەبەر' } },
  { id: 'popular', name: { en: 'Most Popular', ckb: 'زۆر بەناوبانگ' } },
];

export const tags = [
  'hearty', 'warm', 'fresh', 'light', 'spicy', 'sweet', 'savory', 
  'grilled', 'crispy', 'creamy', 'aromatic', 'herbaceous', 'nutritious',
  'refreshing', 'dessert', 'beverage', 'dip'
];
