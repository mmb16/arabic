// src/lib/data/phrases.ts
// This file contains the phrase data for the Egyptian Arabic learning app

export interface Phrase {
  id: number;
  categoryId: number;
  english: string;
  arabic: string;
  transliteration: string;
  audioUrl?: string;
  context?: string;
}

export interface PhraseCategory {
  id: number;
  title: string;
  description: string;
  image: string;
  count: number;
}

// Phrase Categories
export const phraseCategories: PhraseCategory[] = [
  {
    id: 1,
    title: "Greetings & Farewells",
    description: "Essential phrases for saying hello and goodbye in different situations",
    count: 10,
    image: "👋"
  },
  {
    id: 2,
    title: "Restaurant & Cafe",
    description: "Useful phrases for ordering food and drinks",
    count: 10,
    image: "🍽️"
  },
  {
    id: 3,
    title: "Transportation",
    description: "How to get around and ask for directions",
    count: 10,
    image: "🚕"
  },
  {
    id: 4,
    title: "Shopping & Bargaining",
    description: "Phrases for shopping in markets and stores",
    count: 10,
    image: "🛍️"
  },
  {
    id: 5,
    title: "Small Talk",
    description: "Casual conversation starters and responses",
    count: 10,
    image: "💬"
  },
  {
    id: 6,
    title: "Emergency & Help",
    description: "Important phrases for urgent situations",
    count: 10,
    image: "🆘"
  }
];

// Phrases for Greetings & Farewells category
export const greetingsPhrases: Phrase[] = [
  {
    id: 1,
    categoryId: 1,
    english: "Peace be upon you",
    arabic: "السلام عليكم",
    transliteration: "as-salamu alaykum",
    context: "Formal greeting used throughout the day"
  },
  {
    id: 2,
    categoryId: 1,
    english: "And peace be upon you too",
    arabic: "وعليكم السلام",
    transliteration: "wa alaykum as-salam",
    context: "Response to \"as-salamu alaykum\""
  },
  {
    id: 3,
    categoryId: 1,
    english: "Good morning",
    arabic: "صباح الخير",
    transliteration: "sabah el-kheer",
    context: "Morning greeting"
  },
  {
    id: 4,
    categoryId: 1,
    english: "Good morning to you too",
    arabic: "صباح النور",
    transliteration: "sabah en-noor",
    context: "Response to \"sabah el-kheer\""
  },
  {
    id: 5,
    categoryId: 1,
    english: "Good evening",
    arabic: "مساء الخير",
    transliteration: "masa el-kheer",
    context: "Evening greeting"
  },
  {
    id: 6,
    categoryId: 1,
    english: "Good evening to you too",
    arabic: "مساء النور",
    transliteration: "masa en-noor",
    context: "Response to \"masa el-kheer\""
  },
  {
    id: 7,
    categoryId: 1,
    english: "How are you? (to a man)",
    arabic: "إزيك؟",
    transliteration: "ezzayak?",
    context: "Casual way to ask how someone is doing"
  },
  {
    id: 8,
    categoryId: 1,
    english: "How are you? (to a woman)",
    arabic: "إزيك؟",
    transliteration: "ezzayik?",
    context: "Casual way to ask how someone is doing"
  },
  {
    id: 9,
    categoryId: 1,
    english: "I am fine, thank God (male)",
    arabic: "أنا كويس، الحمد لله",
    transliteration: "ana kwayyes, el-hamdulillah",
    context: "Response to \"how are you\" (for a man)"
  },
  {
    id: 10,
    categoryId: 1,
    english: "I am fine, thank God (female)",
    arabic: "أنا كويسة، الحمد لله",
    transliteration: "ana kwayyesa, el-hamdulillah",
    context: "Response to \"how are you\" (for a woman)"
  }
];

// Phrases for Restaurant & Cafe category
export const restaurantPhrases: Phrase[] = [
  {
    id: 11,
    categoryId: 2,
    english: "I would like to order, please",
    arabic: "عايز أطلب، من فضلك",
    transliteration: "ayez atlob, men fadlak",
    context: "When you're ready to order at a restaurant"
  },
  {
    id: 12,
    categoryId: 2,
    english: "What do you recommend?",
    arabic: "إيه اللي تنصح بيه؟",
    transliteration: "eh elli tensah beeh?",
    context: "Asking for recommendations"
  },
  {
    id: 13,
    categoryId: 2,
    english: "I would like a coffee, please",
    arabic: "عايز قهوة، من فضلك",
    transliteration: "ayez ahwa, men fadlak",
    context: "Ordering coffee (male speaker)"
  },
  {
    id: 14,
    categoryId: 2,
    english: "I would like a coffee, please",
    arabic: "عايزة قهوة، من فضلك",
    transliteration: "ayza ahwa, men fadlek",
    context: "Ordering coffee (female speaker)"
  },
  {
    id: 15,
    categoryId: 2,
    english: "How much is this?",
    arabic: "بكام ده؟",
    transliteration: "be kam dah?",
    context: "Asking for the price"
  },
  {
    id: 16,
    categoryId: 2,
    english: "The bill, please",
    arabic: "الحساب، من فضلك",
    transliteration: "el-hesaab, men fadlak",
    context: "Asking for the check"
  },
  {
    id: 17,
    categoryId: 2,
    english: "This is delicious",
    arabic: "ده لذيذ",
    transliteration: "dah lazeez",
    context: "Complimenting the food"
  },
  {
    id: 18,
    categoryId: 2,
    english: "Do you have a menu in English?",
    arabic: "عندكم قائمة بالإنجليزي؟",
    transliteration: "andokom qa'ema bel-engeleezy?",
    context: "Asking for an English menu"
  },
  {
    id: 19,
    categoryId: 2,
    english: "I am vegetarian",
    arabic: "أنا نباتي",
    transliteration: "ana nabaaty",
    context: "Explaining dietary preference (male speaker)"
  },
  {
    id: 20,
    categoryId: 2,
    english: "I am vegetarian",
    arabic: "أنا نباتية",
    transliteration: "ana nabateyya",
    context: "Explaining dietary preference (female speaker)"
  }
];

// Function to get phrases by category ID
export function getPhrasesByCategory(categoryId: number): Phrase[] {
  switch(categoryId) {
    case 1:
      return greetingsPhrases;
    case 2:
      return restaurantPhrases;
    default:
      return [];
  }
}

// Function to get a phrase category by ID
export function getPhraseCategory(categoryId: number): PhraseCategory | undefined {
  return phraseCategories.find(category => category.id === categoryId);
}

// Function to get all phrase categories
export function getAllPhraseCategories(): PhraseCategory[] {
  return phraseCategories;
}
