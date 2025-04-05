'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { getFlashcardsByCategory, getFlashcardCategory } from '@/lib/data/flashcards';
import FlashcardComponent from '@/components/flashcards/FlashcardComponent';

export default function FlashcardCategoryPage() {
  const params = useParams();
  const categorySlug = params.slug as string;
  const categoryId = getCategoryIdFromSlug(categorySlug);
  
  const category = getFlashcardCategory(categoryId);
  const flashcards = getFlashcardsByCategory(categoryId);
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentFlashcard = flashcards[currentIndex];
  
  const handleNext = () => {
    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  
  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  
  if (!category || flashcards.length === 0) {
    return (
      <div className="text-center py-12">
        <h1 className="text-3xl font-bold mb-4">Category Not Found</h1>
        <p className="text-lg text-gray-600 mb-6">
          Sorry, we couldn't find the flashcard category you're looking for.
        </p>
        <Link href="/flashcards" className="text-blue-600 hover:underline">
          Return to Categories
        </Link>
      </div>
    );
  }
  
  return (
    <div className="space-y-8">
      <section className="text-center py-8">
        <Link href="/flashcards" className="text-blue-600 hover:underline mb-4 inline-block">
          ← Back to Categories
        </Link>
        <h1 className="text-3xl font-bold mb-2">{category.title}</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {category.description}
        </p>
        <div className="text-sm text-gray-500 mt-2">
          Card {currentIndex + 1} of {flashcards.length}
        </div>
      </section>
      
      <FlashcardComponent 
        flashcard={currentFlashcard}
        onNext={currentIndex < flashcards.length - 1 ? handleNext : undefined}
        onPrevious={currentIndex > 0 ? handlePrevious : undefined}
      />
      
      <div className="flex justify-center mt-8">
        <div className="bg-blue-50 p-6 rounded-lg max-w-md">
          <h2 className="text-xl font-bold mb-3">Study Tips</h2>
          <ul className="space-y-2 text-gray-700">
            <li>• Click on the card to flip between English and Arabic</li>
            <li>• Use the audio button to hear the correct pronunciation</li>
            <li>• Practice saying the word out loud before flipping the card</li>
            <li>• Try to use the word in a sentence of your own</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// Helper function to get category ID from slug
function getCategoryIdFromSlug(slug: string): number {
  switch(slug) {
    case 'greetings-introductions':
      return 1;
    case 'food-dining':
      return 2;
    case 'transportation':
      return 3;
    case 'shopping':
      return 4;
    case 'home-family':
      return 5;
    case 'numbers-time':
      return 6;
    default:
      return 1; // Default to first category
  }
}
