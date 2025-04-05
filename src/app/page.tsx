import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">Learn Egyptian Arabic</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Enhance your Egyptian Arabic speaking skills and expand your vocabulary with our interactive learning tools.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <FeatureCard 
          title="Flashcards" 
          description="Learn new words organized by categories"
          link="/flashcards"
          emoji="🎴"
        />
        <FeatureCard 
          title="Common Phrases" 
          description="Practical phrases for everyday situations"
          link="/phrases"
          emoji="💬"
        />
        <FeatureCard 
          title="Pronunciation" 
          description="Listen to authentic Cairo dialect pronunciation"
          link="/pronunciation"
          emoji="🔊"
        />
        <FeatureCard 
          title="Practice" 
          description="Conversational practice with AI feedback"
          link="/practice"
          emoji="🗣️"
        />
      </section>

      <section className="bg-blue-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Why Learn Egyptian Arabic?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Most Widely Understood Dialect</h3>
            <p>Egyptian Arabic is understood throughout the Arab world thanks to Egypt's influential media and entertainment industry.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Rich Cultural Heritage</h3>
            <p>Connect with Egypt's ancient history, vibrant arts, and diverse cultural traditions.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Practical for Travel</h3>
            <p>Navigate Cairo and other Egyptian cities with confidence using authentic local expressions.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Career Opportunities</h3>
            <p>Open doors to professional opportunities in business, tourism, diplomacy, and more.</p>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Start Learning?</h2>
        <Link href="/flashcards" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
          Begin with Flashcards
        </Link>
      </section>
    </div>
  );
}

function FeatureCard({ title, description, link, emoji }: { title: string; description: string; link: string; emoji: string }) {
  return (
    <Link href={link} className="block group">
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 h-full transition-all duration-200 group-hover:shadow-lg group-hover:border-blue-300">
        <div className="text-4xl mb-4">{emoji}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  );
}
