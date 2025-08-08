import { MenuItem } from '@/lib/types';

export interface MenuIQScore {
  item: MenuItem;
  score: number;
  factors: {
    popularity: number;
    timeOfDay: number;
    dayOfWeek: number;
    seasonal: number;
  };
}

export function calculateMenuIQScore(item: MenuItem, date: Date = new Date()): MenuIQScore {
  const hour = date.getHours();
  const dayOfWeek = date.getDay(); // 0 = Sunday, 6 = Saturday
  const month = date.getMonth(); // 0 = January, 11 = December

  // Time of day boost (lunch: 11-14, dinner: 17-21)
  let timeOfDayBoost = 1;
  if (hour >= 11 && hour <= 14) {
    timeOfDayBoost = 1.3; // Lunch boost
  } else if (hour >= 17 && hour <= 21) {
    timeOfDayBoost = 1.4; // Dinner boost
  } else if (hour >= 7 && hour <= 10) {
    timeOfDayBoost = 1.2; // Breakfast boost
  }

  // Day of week boost (weekends get different preferences)
  let dayOfWeekBoost = 1;
  if (dayOfWeek === 0 || dayOfWeek === 6) {
    // Weekend - prefer traditional and popular items
    if (item.category === 'traditional' || item.category === 'popular') {
      dayOfWeekBoost = 1.3;
    }
  } else {
    // Weekday - prefer lighter options
    if (item.vegan || item.vegetarian) {
      dayOfWeekBoost = 1.2;
    }
  }

  // Seasonal boost (winter: hearty dishes, summer: light dishes)
  let seasonalBoost = 1;
  if (month >= 11 || month <= 2) {
    // Winter - prefer hearty, warm dishes
    if (item.tags.includes('hearty') || item.tags.includes('warm')) {
      seasonalBoost = 1.2;
    }
  } else if (month >= 5 && month <= 8) {
    // Summer - prefer light, fresh dishes
    if (item.tags.includes('fresh') || item.tags.includes('light')) {
      seasonalBoost = 1.2;
    }
  }

  // Calculate final score
  const baseScore = item.popularity;
  const finalScore = baseScore * timeOfDayBoost * dayOfWeekBoost * seasonalBoost;

  return {
    item,
    score: finalScore,
    factors: {
      popularity: item.popularity,
      timeOfDay: timeOfDayBoost,
      dayOfWeek: dayOfWeekBoost,
      seasonal: seasonalBoost,
    },
  };
}

export function getFeaturedDishes(menu: MenuItem[], count: number = 6): MenuItem[] {
  const scoredItems = menu.map(item => calculateMenuIQScore(item));
  
  // Sort by score (highest first)
  scoredItems.sort((a, b) => b.score - a.score);
  
  // Return top items
  return scoredItems.slice(0, count).map(item => item.item);
}

export function getRecommendedDishes(menu: MenuItem[], userPreferences: {
  spicy?: boolean;
  vegetarian?: boolean;
  vegan?: boolean;
  maxPrice?: number;
} = {}): MenuItem[] {
  let filteredMenu = menu;

  // Apply filters
  if (userPreferences.vegetarian) {
    filteredMenu = filteredMenu.filter(item => item.vegetarian || item.vegan);
  }
  if (userPreferences.vegan) {
    filteredMenu = filteredMenu.filter(item => item.vegan);
  }
  if (userPreferences.spicy !== undefined) {
    filteredMenu = filteredMenu.filter(item => item.spicy === userPreferences.spicy);
  }
  if (userPreferences.maxPrice !== undefined) {
    const maxPrice = userPreferences.maxPrice;
    filteredMenu = filteredMenu.filter(item => item.price <= maxPrice);
  }

  // Score and sort
  const scoredItems = filteredMenu.map(item => calculateMenuIQScore(item));
  scoredItems.sort((a, b) => b.score - a.score);

  return scoredItems.slice(0, 6).map(item => item.item);
}

// Example test data
export const mockMenuIQTest = () => {
  const testMenu: MenuItem[] = [
    {
      id: '1',
      name: { en: 'Kebab', ckb: 'کەباب' },
      description: { en: 'Traditional grilled meat', ckb: 'گۆشتی بریندەر' },
      price: 15.99,
      category: 'traditional',
      tags: ['hearty', 'warm'],
      popularity: 9.5,
      image: '/images/kebab.jpg',
      spicy: false,
    },
    {
      id: '2',
      name: { en: 'Falafel', ckb: 'فلافل' },
      description: { en: 'Crispy chickpea patties', ckb: 'نۆکەکانی نۆک' },
      price: 12.99,
      category: 'vegan',
      tags: ['fresh', 'light'],
      popularity: 8.0,
      image: '/images/falafel.jpg',
      vegan: true,
      vegetarian: true,
    },
  ];

  const featured = getFeaturedDishes(testMenu, 2);
  const recommended = getRecommendedDishes(testMenu, { vegetarian: true });

  return { featured, recommended };
};
