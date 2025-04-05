'use client';

import { useEffect } from 'react';
import PracticeComponent from '@/components/practice/PracticeComponent';

export default function PracticePage() {
  // Add any page-level logic here
  useEffect(() => {
    // Check if browser supports speech recognition
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      console.warn('Speech recognition is not supported in this browser');
    }
  }, []);

  return (
    <div className="space-y-8">
      <section className="text-center py-8">
        <h1 className="text-3xl font-bold mb-4">Practice with AI</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Practice your Egyptian Arabic speaking skills with our voice-based AI assistant and get feedback on your pronunciation.
        </p>
      </section>

      <PracticeComponent />
    </div>
  );
}
