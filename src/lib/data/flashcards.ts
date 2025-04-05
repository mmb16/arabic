// src/lib/data/flashcards.ts
// This file contains the flashcard data for the Egyptian Arabic learning app

export interface Flashcard {
  id: number;
  categoryId: number;
  english: string;
  arabic: string;
  transliteration: string;
  audioUrl?: string;
  exampleSentence?: string;
  exampleTranslation?: string;
  difficulty: 1 | 2 | 3; // 1: Beginner, 2: Intermediate, 3: Advanced
}

export interface FlashcardCategory {
  id: number;
  title: string;
  description: string;
  image: string;
  count: number;
}

// Flashcard Categories
export const flashcardCategories: FlashcardCategory[] = [
  {
    id: 1,
    title: "Greetings & Introductions",
    description: "Essential words and phrases for meeting people and basic conversations",
    count: 10,
    image: "👋"
  },
  {
    id: 2,
    title: "Food & Dining",
    description: "Vocabulary for restaurants, cafes, and talking about food",
    count: 10,
    image: "🍽️"
  },
  {
    id: 3,
    title: "Transportation",
    description: "Words related to getting around Cairo and other cities",
    count: 10,
    image: "🚕"
  },
  {
    id: 4,
    title: "Shopping",
    description: "Useful vocabulary for markets, stores, and bargaining",
    count: 10,
    image: "🛍️"
  },
  {
    id: 5,
    title: "Home & Family",
    description: "Words related to family members, home, and daily life",
    count: 10,
    image: "👪"
  },
  {
    id: 6,
    title: "Numbers & Time",
    description: "Learn to count and tell time in Egyptian Arabic",
    count: 10,
    image: "🕒"
  }
];

// Flashcards for Greetings & Introductions category
export const greetingsFlashcards: Flashcard[] = [
  {
    id: 1,
    categoryId: 1,
    english: "Hello",
    arabic: "السلام عليكم",
    transliteration: "as-salamu alaykum",
    exampleSentence: "السلام عليكم، كيف حالك؟",
    exampleTranslation: "Hello, how are you?",
    difficulty: 1
  },
  {
    id: 2,
    categoryId: 1,
    english: "Good morning",
    arabic: "صباح الخير",
    transliteration: "sabah el-kheer",
    exampleSentence: "صباح الخير، عامل إيه النهاردة؟",
    exampleTranslation: "Good morning, how are you doing today?",
    difficulty: 1
  },
  {
    id: 3,
    categoryId: 1,
    english: "Good evening",
    arabic: "مساء الخير",
    transliteration: "masa el-kheer",
    exampleSentence: "مساء الخير، أخبارك إيه؟",
    exampleTranslation: "Good evening, how are you?",
    difficulty: 1
  },
  {
    id: 4,
    categoryId: 1,
    english: "Welcome",
    arabic: "أهلاً وسهلاً",
    transliteration: "ahlan wa sahlan",
    exampleSentence: "أهلاً وسهلاً في مصر",
    exampleTranslation: "Welcome to Egypt",
    difficulty: 1
  },
  {
    id: 5,
    categoryId: 1,
    english: "How are you?",
    arabic: "إزيك؟",
    transliteration: "ezzayak? (m) / ezzayik? (f)",
    exampleSentence: "إزيك؟ عامل إيه؟",
    exampleTranslation: "How are you? How are you doing?",
    difficulty: 1
  },
  {
    id: 6,
    categoryId: 1,
    english: "I am fine",
    arabic: "أنا كويس",
    transliteration: "ana kwayyes (m) / ana kwayyesa (f)",
    exampleSentence: "أنا كويس، الحمد لله",
    exampleTranslation: "I am fine, thank God",
    difficulty: 1
  },
  {
    id: 7,
    categoryId: 1,
    english: "Thank you",
    arabic: "شكراً",
    transliteration: "shukran",
    exampleSentence: "شكراً جزيلاً",
    exampleTranslation: "Thank you very much",
    difficulty: 1
  },
  {
    id: 8,
    categoryId: 1,
    english: "You're welcome",
    arabic: "العفو",
    transliteration: "el-afoo",
    exampleSentence: "العفو، مفيش مشكلة",
    exampleTranslation: "You're welcome, no problem",
    difficulty: 1
  },
  {
    id: 9,
    categoryId: 1,
    english: "My name is...",
    arabic: "اسمي...",
    transliteration: "esmi...",
    exampleSentence: "اسمي محمد، وانت؟",
    exampleTranslation: "My name is Mohamed, and you?",
    difficulty: 1
  },
  {
    id: 10,
    categoryId: 1,
    english: "Nice to meet you",
    arabic: "تشرفنا",
    transliteration: "tasharrafna",
    exampleSentence: "تشرفنا بمعرفتك",
    exampleTranslation: "Nice to meet you",
    difficulty: 1
  }
];

// Flashcards for Food & Dining category
export const foodFlashcards: Flashcard[] = [
  {
    id: 11,
    categoryId: 2,
    english: "Food",
    arabic: "أكل",
    transliteration: "akl",
    exampleSentence: "الأكل المصري لذيذ جداً",
    exampleTranslation: "Egyptian food is very delicious",
    difficulty: 1
  },
  {
    id: 12,
    categoryId: 2,
    english: "Restaurant",
    arabic: "مطعم",
    transliteration: "mat'am",
    exampleSentence: "فين أحسن مطعم هنا؟",
    exampleTranslation: "Where is the best restaurant here?",
    difficulty: 1
  },
  {
    id: 13,
    categoryId: 2,
    english: "Coffee",
    arabic: "قهوة",
    transliteration: "ahwa",
    exampleSentence: "عايز قهوة مظبوط",
    exampleTranslation: "I want a medium-sweet coffee",
    difficulty: 1
  },
  {
    id: 14,
    categoryId: 2,
    english: "Tea",
    arabic: "شاي",
    transliteration: "shay",
    exampleSentence: "شاي بالنعناع، من فضلك",
    exampleTranslation: "Mint tea, please",
    difficulty: 1
  },
  {
    id: 15,
    categoryId: 2,
    english: "Water",
    arabic: "مياه",
    transliteration: "mayya",
    exampleSentence: "ممكن مياه، من فضلك؟",
    exampleTranslation: "Can I have water, please?",
    difficulty: 1
  },
  {
    id: 16,
    categoryId: 2,
    english: "Bread",
    arabic: "عيش",
    transliteration: "eish",
    exampleSentence: "العيش البلدي طازج",
    exampleTranslation: "The local bread is fresh",
    difficulty: 1
  },
  {
    id: 17,
    categoryId: 2,
    english: "Delicious",
    arabic: "لذيذ",
    transliteration: "lazeez",
    exampleSentence: "الطعام لذيذ جداً",
    exampleTranslation: "The food is very delicious",
    difficulty: 1
  },
  {
    id: 18,
    categoryId: 2,
    english: "Bill",
    arabic: "الحساب",
    transliteration: "el-hesaab",
    exampleSentence: "ممكن الحساب، من فضلك؟",
    exampleTranslation: "Can I have the bill, please?",
    difficulty: 1
  },
  {
    id: 19,
    categoryId: 2,
    english: "Breakfast",
    arabic: "فطار",
    transliteration: "fotoor",
    exampleSentence: "الفطار جاهز",
    exampleTranslation: "Breakfast is ready",
    difficulty: 1
  },
  {
    id: 20,
    categoryId: 2,
    english: "Dinner",
    arabic: "عشاء",
    transliteration: "asha",
    exampleSentence: "العشاء الساعة سبعة",
    exampleTranslation: "Dinner is at seven o'clock",
    difficulty: 1
  }
];

// Function to get flashcards by category ID
// Flashcards for Transportation category
export const transportationFlashcards: Flashcard[] = [
  {
    id: 21,
    categoryId: 3,
    english: "Car",
    arabic: "عربية",
    transliteration: "arabeyya",
    exampleSentence: "العربية واقفة فين؟",
    exampleTranslation: "Where is the car parked?",
    difficulty: 1
  },
  {
    id: 22,
    categoryId: 3,
    english: "Taxi",
    arabic: "تاكسي",
    transliteration: "taksi",
    exampleSentence: "عايز تاكسي لو سمحت",
    exampleTranslation: "I want a taxi, please",
    difficulty: 1
  },
  {
    id: 23,
    categoryId: 3,
    english: "Bus",
    arabic: "أتوبيس",
    transliteration: "otobees",
    exampleSentence: "الأتوبيس رقم كام؟",
    exampleTranslation: "What's the bus number?",
    difficulty: 1
  },
  {
    id: 24,
    categoryId: 3,
    english: "Metro",
    arabic: "مترو",
    transliteration: "metro",
    exampleSentence: "المترو رايح فين؟",
    exampleTranslation: "Where is the metro going?",
    difficulty: 1
  },
  {
    id: 25,
    categoryId: 3,
    english: "Train",
    arabic: "قطر",
    transliteration: "atr",
    exampleSentence: "القطر جاي الساعة كام؟",
    exampleTranslation: "What time is the train coming?",
    difficulty: 2
  }
];

// Flashcards for Shopping category
export const shoppingFlashcards: Flashcard[] = [
  {
    id: 26,
    categoryId: 4,
    english: "How much?",
    arabic: "بكام؟",
    transliteration: "bi kam?",
    exampleSentence: "الكتاب ده بكام؟",
    exampleTranslation: "How much is this book?",
    difficulty: 1
  },
  {
    id: 27,
    categoryId: 4,
    english: "Expensive",
    arabic: "غالي",
    transliteration: "ghali",
    exampleSentence: "ده غالي أوي",
    exampleTranslation: "This is very expensive",
    difficulty: 1
  },
  {
    id: 28,
    categoryId: 4,
    english: "Cheap",
    arabic: "رخيص",
    transliteration: "rakhees",
    exampleSentence: "عايز حاجة رخيصة",
    exampleTranslation: "I want something cheap",
    difficulty: 1
  },
  {
    id: 29,
    categoryId: 4,
    english: "Market",
    arabic: "سوق",
    transliteration: "soo'",
    exampleSentence: "السوق فين؟",
    exampleTranslation: "Where is the market?",
    difficulty: 1
  },
  {
    id: 30,
    categoryId: 4,
    english: "Bargain",
    arabic: "ساوم",
    transliteration: "saawim",
    exampleSentence: "ممكن نساوم شوية؟",
    exampleTranslation: "Can we bargain a little?",
    difficulty: 2
  }
];

// Flashcards for Numbers & Time category
export const numbersTimeFlashcards: Flashcard[] = [
  {
    id: 31,
    categoryId: 6,
    english: "One",
    arabic: "واحد",
    transliteration: "waahid",
    exampleSentence: "عايز واحد بس",
    exampleTranslation: "I want just one",
    difficulty: 1
  },
  {
    id: 32,
    categoryId: 6,
    english: "Two",
    arabic: "اتنين",
    transliteration: "itneen",
    exampleSentence: "عندي اتنين",
    exampleTranslation: "I have two",
    difficulty: 1
  },
  {
    id: 33,
    categoryId: 6,
    english: "Ten",
    arabic: "عشرة",
    transliteration: "ashara",
    exampleSentence: "الساعة عشرة",
    exampleTranslation: "It's ten o'clock",
    difficulty: 1
  },
  {
    id: 34,
    categoryId: 6,
    english: "Hundred",
    arabic: "مية",
    transliteration: "miyya",
    exampleSentence: "عندي مية جنيه",
    exampleTranslation: "I have one hundred pounds",
    difficulty: 2
  },
  {
    id: 35,
    categoryId: 6,
    english: "What time?",
    arabic: "الساعة كام؟",
    transliteration: "is-saa'a kam?",
    exampleSentence: "الساعة كام دلوقتي؟",
    exampleTranslation: "What time is it now?",
    difficulty: 1
  }
];

// Function to get flashcards by category ID
export function getFlashcardsByCategory(categoryId: number): Flashcard[] {
  switch(categoryId) {
    case 1:
      return greetingsFlashcards;
    case 2:
      return foodFlashcards;
    case 3:
      return transportationFlashcards;
    case 4:
      return shoppingFlashcards;
    case 6:
      return numbersTimeFlashcards;
    default:
      return [];
  }
}

// Function to get a flashcard category by ID
export function getFlashcardCategory(categoryId: number): FlashcardCategory | undefined {
  return flashcardCategories.find(category => category.id === categoryId);
}

// Function to get all flashcard categories
export function getAllFlashcardCategories(): FlashcardCategory[] {
  return flashcardCategories;
}
