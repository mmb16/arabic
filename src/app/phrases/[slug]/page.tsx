'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { getPhrasesByCategory, getPhraseCategory } from '@/lib/data/phrases';
import PhraseComponent from '@/components/phrases/PhraseComponent';

export default function PhraseCategoryPage() {
  const params = useParams();
  const categorySlug = params.slug as string;
  const categoryId = getCategoryIdFromSlug(categorySlug);
  
  const category = getPhraseCategory(categoryId);
  const phrases = getPhrasesByCategory(categoryId);
  
  if (!category || phrases.length === 0) {
    return (
      <div className="text-center py-12">
        <h1 className="text-3xl font-bold mb-4">Category Not Found</h1>
        <p className="text-lg text-gray-600 mb-6">
          Sorry, we couldn't find the phrase category you're looking for.
        </p>
        <Link href="/phrases" className="text-blue-600 hover:underline">
          Return to Categories
        </Link>
      </div>
    );
  }
  
  return (
    <div className="space-y-8">
      <section className="text-center py-8">
        <Link href="/phrases" className="text-blue-600 hover:underline mb-4 inline-block">
          ← Back to Categories
        </Link>
        <h1 className="text-3xl font-bold mb-2">{category.title}</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {category.description}
        </p>
      </section>
      
      <section className="space-y-4">
        {phrases.map((phrase) => (
          <PhraseComponent key={phrase.id} phrase={phrase} />
        ))}
      </section>
      
      <div className="flex justify-center mt-8">
        <div className="bg-blue-50 p-6 rounded-lg max-w-md">
          <h2 className="text-xl font-bold mb-3">Practice Tips</h2>
          <ul className="space-y-2 text-gray-700">
            <li>• Listen to the pronunciation multiple times</li>
            <li>• Practice saying each phrase out loud</li>
            <li>• Pay attention to the context of when to use each phrase</li>
            <li>• Try to use these phrases in real conversations</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// Helper function to get category ID from slug
function getCategoryIdFromSlug(slug: string): number {
  switch(slug) {
    case 'greetings-farewells':
      return 1;
    case 'restaurant-cafe':
      return 2;
    case 'transportation':
      return 3;
    case 'shopping-bargaining':
      return 4;
    case 'small-talk':
      return 5;
    case 'emergency-help':
      return 6;
    default:
      return 1; // Default to first category
  }
}
