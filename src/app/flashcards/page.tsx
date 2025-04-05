import Link from "next/link";

export default function FlashcardsPage() {
  return (
    <div className="space-y-8">
      <section className="text-center py-8">
        <h1 className="text-3xl font-bold mb-4">Flashcards</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Learn new Egyptian Arabic words and phrases organized by categories.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <CategoryCard 
            key={category.id}
            title={category.title} 
            description={category.description}
            count={category.count}
            image={category.image}
          />
        ))}
      </section>
    </div>
  );
}

function CategoryCard({ title, description, count, image }: { 
  title: string; 
  description: string; 
  count: number;
  image: string;
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg hover:border-blue-300 transition-all duration-200">
      <div className="text-4xl mb-4">{image}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">{count} cards</span>
        <Link href={`/flashcards/${title.toLowerCase().replace(/\s+/g, '-')}`} className="text-blue-600 hover:underline">
          Start Learning →
        </Link>
      </div>
    </div>
  );
}

const categories = [
  {
    id: 1,
    title: "Greetings & Introductions",
    description: "Essential words and phrases for meeting people and basic conversations",
    count: 25,
    image: "👋"
  },
  {
    id: 2,
    title: "Food & Dining",
    description: "Vocabulary for restaurants, cafes, and talking about food",
    count: 30,
    image: "🍽️"
  },
  {
    id: 3,
    title: "Transportation",
    description: "Words related to getting around Cairo and other cities",
    count: 20,
    image: "🚕"
  },
  {
    id: 4,
    title: "Shopping",
    description: "Useful vocabulary for markets, stores, and bargaining",
    count: 28,
    image: "🛍️"
  },
  {
    id: 5,
    title: "Home & Family",
    description: "Words related to family members, home, and daily life",
    count: 32,
    image: "👪"
  },
  {
    id: 6,
    title: "Numbers & Time",
    description: "Learn to count and tell time in Egyptian Arabic",
    count: 18,
    image: "🕒"
  }
];
