import Link from "next/link";

export default function PhrasesPage() {
  return (
    <div className="space-y-8">
      <section className="text-center py-8">
        <h1 className="text-3xl font-bold mb-4">Common Phrases</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Learn practical Egyptian Arabic phrases for everyday situations.
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
        <span className="text-sm text-gray-500">{count} phrases</span>
        <Link href={`/phrases/${title.toLowerCase().replace(/\s+/g, '-')}`} className="text-blue-600 hover:underline">
          View Phrases →
        </Link>
      </div>
    </div>
  );
}

const categories = [
  {
    id: 1,
    title: "Greetings & Farewells",
    description: "Essential phrases for saying hello and goodbye in different situations",
    count: 15,
    image: "👋"
  },
  {
    id: 2,
    title: "Restaurant & Cafe",
    description: "Useful phrases for ordering food and drinks",
    count: 18,
    image: "🍽️"
  },
  {
    id: 3,
    title: "Transportation",
    description: "How to get around and ask for directions",
    count: 12,
    image: "🚕"
  },
  {
    id: 4,
    title: "Shopping & Bargaining",
    description: "Phrases for shopping in markets and stores",
    count: 20,
    image: "🛍️"
  },
  {
    id: 5,
    title: "Small Talk",
    description: "Casual conversation starters and responses",
    count: 16,
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
