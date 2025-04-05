import Link from "next/link";

export default function PronunciationPage() {
  return (
    <div className="space-y-8">
      <section className="text-center py-8">
        <h1 className="text-3xl font-bold mb-4">Pronunciation</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Listen to authentic Cairo dialect pronunciation and practice your speaking skills.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <span className="text-3xl mr-3">🔤</span> 
            Egyptian Arabic Alphabet
          </h2>
          <p className="text-gray-600 mb-6">
            Learn the pronunciation of Arabic letters with Cairo dialect sounds.
          </p>
          <Link href="/pronunciation/alphabet" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Start Learning
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <span className="text-3xl mr-3">🗣️</span> 
            Common Sounds
          </h2>
          <p className="text-gray-600 mb-6">
            Practice unique Egyptian Arabic sounds and phonetics.
          </p>
          <Link href="/pronunciation/sounds" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Start Learning
          </Link>
        </div>
      </section>

      <section className="bg-blue-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-6">Featured Pronunciation Tips</h2>
        
        <div className="space-y-6">
          {pronunciationTips.map((tip) => (
            <div key={tip.id} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">{tip.title}</h3>
              <p className="text-gray-600 mb-4">{tip.description}</p>
              <div className="flex items-center">
                <button className="flex items-center text-blue-600 hover:text-blue-800">
                  <span className="mr-2">🔊</span> Listen
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const pronunciationTips = [
  {
    id: 1,
    title: "The Egyptian Jim (ج)",
    description: "In Egyptian Arabic, the letter Jim (ج) is pronounced as a hard 'g' like in 'game', unlike the 'j' sound in Modern Standard Arabic."
  },
  {
    id: 2,
    title: "The Glottal Stop (ء)",
    description: "The hamza or glottal stop is pronounced by briefly stopping airflow in your throat, similar to the pause in the middle of 'uh-oh'."
  },
  {
    id: 3,
    title: "The Throaty 'Ayn (ع)",
    description: "The 'ayn is a distinctive sound made deep in the throat. Practice by making a tight contraction at the back of your throat."
  }
];
