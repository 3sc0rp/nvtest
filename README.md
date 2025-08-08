# Nature Village - Kurdish Restaurant Website

A production-ready, mobile-first restaurant website for "Nature Village," a Kurdish restaurant, powered by Blunari with a feature called MenuIQ (AI-integrated dynamic menu).

## 🚀 Features

- **Next.js 14+ (App Router)** with TypeScript
- **Tailwind CSS** with custom Kurdish-inspired color palette
- **Internationalization** - English ↔ Kurdish (Sorani) with RTL support
- **MenuIQ** - AI-powered dynamic menu recommendations
- **Responsive Design** - Mobile-first approach
- **Accessibility** - WCAG compliant with keyboard navigation
- **Performance** - Optimized for Lighthouse scores > 90
- **SEO** - Complete metadata and Schema.org markup

## 🎨 Design System

### Color Palette
- **Olive**: `#5b6f3a` (Primary)
- **Terracotta**: `#b5543a` (Accent)
- **Sand**: `#e5d5b5` (Background)
- **Charcoal**: `#2b2b2b` (Text)
- **Cream**: `#fff7e6` (Light background)

### Typography
- **Marcellus** - Serif titles (H1-H3)
- **Inter** - Body text
- **Noto Naskh Arabic** - Kurdish text (RTL)

### Cultural Elements
- Kurdish rug pattern borders
- Diamond ornaments
- Traditional color scheme

## 🏗️ Project Structure

```
Nature Village/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── Nav.tsx             # Navigation with language toggle
│   ├── Hero.tsx            # Hero section
│   ├── Featured.tsx        # MenuIQ featured dishes
│   ├── MenuSection.tsx     # Interactive menu with filters
│   ├── About.tsx           # Cultural story
│   ├── Gallery.tsx         # Lightbox gallery
│   ├── VisitUs.tsx         # Contact & map
│   ├── Footer.tsx          # Footer with social links
│   └── LanguageToggle.tsx  # Language switcher
├── data/
│   └── menu.ts             # Menu items data
├── lib/
│   ├── types.ts            # TypeScript interfaces
│   └── i18n.ts             # Internationalization utilities
├── providers/
│   └── LangProvider.tsx    # Language context provider
├── utils/
│   └── menuIQ.ts           # AI menu recommendations
└── public/
    └── images/             # Static images
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/nature-village.git
   cd nature-village
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Features Overview

### 🌍 Internationalization
- **Language Toggle**: Switch between English and Kurdish (Sorani)
- **RTL Support**: Automatic right-to-left layout for Kurdish
- **Font Switching**: Noto Naskh Arabic for Kurdish text
- **Local Storage**: Language preference persistence

### 🧠 MenuIQ AI Integration
- **Time-based Recommendations**: Different suggestions for breakfast, lunch, dinner
- **Seasonal Adjustments**: Winter hearty dishes, summer light options
- **Popularity Scoring**: Based on customer preferences
- **Deterministic Algorithm**: Consistent recommendations

### 🎨 Cultural Design
- **Kurdish Rug Patterns**: CSS-generated decorative borders
- **Diamond Ornaments**: Traditional geometric elements
- **Color Harmony**: Warm, earthy palette inspired by Kurdish culture
- **Typography Hierarchy**: Marcellus for titles, Inter for body

### ♿ Accessibility
- **Keyboard Navigation**: Full keyboard support
- **Screen Reader**: Proper ARIA labels and semantic HTML
- **Color Contrast**: WCAG AA compliant
- **Focus Management**: Visible focus indicators

### 📊 Performance
- **Next.js Image Optimization**: Automatic image optimization
- **Font Loading**: Optimized Google Fonts loading
- **Code Splitting**: Automatic route-based code splitting
- **Lighthouse Score**: > 90 across all metrics

## 🧪 Testing

### MenuIQ Function Tests
```typescript
import { getFeaturedDishes, getRecommendedDishes } from '@/utils/menuIQ';

// Test featured dishes
const featured = getFeaturedDishes(menuItems, 6);
console.log('Featured dishes:', featured);

// Test recommendations with filters
const recommendations = getRecommendedDishes(menuItems, { 
  vegetarian: true, 
  maxPrice: 20 
});
console.log('Vegetarian recommendations:', recommendations);
```

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js
3. Deploy with default settings

### Manual Deployment
```bash
# Build the application
npm run build

# Start production server
npm start
```

### Environment Variables
Create a `.env.local` file:
```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_maps_api_key
NEXT_PUBLIC_WHATSAPP_NUMBER=+1234567890
```

## 📁 File Structure Details

### Core Components
- **Nav**: Sticky navigation with language toggle
- **Hero**: Full-screen hero with CTAs
- **Featured**: MenuIQ-powered dish recommendations
- **MenuSection**: Interactive menu with search and filters
- **About**: Cultural story with values
- **Gallery**: Lightbox gallery with keyboard navigation
- **VisitUs**: Contact info with Google Maps
- **Footer**: Social links and language toggle

### Data Management
- **menu.ts**: 16+ authentic Kurdish dishes
- **types.ts**: TypeScript interfaces for type safety
- **i18n.ts**: Language utilities and translations

### Utilities
- **menuIQ.ts**: AI recommendation algorithm
- **LangProvider.tsx**: React context for language state

## 🎯 SEO & Performance

### SEO Features
- **Metadata**: Complete Open Graph and Twitter cards
- **Schema.org**: LocalBusiness and Menu markup
- **Sitemap**: Automatic sitemap generation
- **Robots.txt**: Search engine optimization

### Performance Optimizations
- **Image Optimization**: Next.js automatic optimization
- **Font Loading**: Optimized Google Fonts
- **Code Splitting**: Route-based code splitting
- **Bundle Analysis**: Built-in bundle analyzer

## 🔧 Customization

### Adding Menu Items
Edit `data/menu.ts`:
```typescript
{
  id: 'new-item',
  name: { en: 'English Name', ckb: 'کوردی ناو' },
  description: { en: 'Description', ckb: 'وەسف' },
  price: 15.99,
  category: 'traditional',
  tags: ['hearty', 'warm'],
  popularity: 8.5,
  image: '/images/new-item.jpg',
}
```

### Customizing Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  olive: { 600: '#5b6f3a' },
  terracotta: { 600: '#b5543a' },
  // Add your custom colors
}
```

### Adding Languages
Edit `lib/i18n.ts`:
```typescript
export const languages: Language[] = ['en', 'ckb', 'ar'];
export const languageNames: Record<Language, string> = {
  en: 'English',
  ckb: 'کوردی',
  ar: 'العربية',
};
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Blunari** - For the MenuIQ AI feature
- **Kurdish Community** - For cultural inspiration
- **Next.js Team** - For the amazing framework
- **Tailwind CSS** - For the utility-first CSS framework

---

**Crafted with ❤️ by Blunari · MenuIQ**
