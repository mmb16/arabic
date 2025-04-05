'use client';

import { useEffect, useState } from 'react';
import { initTextToSpeech, speak } from '@/lib/text-to-speech';
import { Flashcard } from '@/lib/data/flashcards';

interface FlashcardComponentProps {
  flashcard: Flashcard;
  onNext?: () => void;
  onPrevious?: () => void;
}

export default function FlashcardComponent({ 
  flashcard, 
  onNext, 
  onPrevious 
}: FlashcardComponentProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [ttsInitialized, setTtsInitialized] = useState(false);

  useEffect(() => {
    // Initialize text-to-speech when component mounts
    const initTTS = async () => {
      try {
        await initTextToSpeech();
        setTtsInitialized(true);
      } catch (error) {
        console.error('Failed to initialize text-to-speech:', error);
      }
    };

    initTTS();
  }, []);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const playAudio = async () => {
    if (isAudioPlaying) return;
    
    setIsAudioPlaying(true);
    try {
      // Play the Arabic pronunciation
      await speak(flashcard.arabic);
    } catch (error) {
      console.error('Error playing audio:', error);
    } finally {
      setIsAudioPlaying(false);
    }
  };

  return (
    <div className="max-w-md mx-auto my-8">
      <div 
        className={`flashcard ${isFlipped ? 'flipped' : ''}`}
        onClick={handleFlip}
      >
        <div className="flashcard-inner">
          <div className="flashcard-front">
            <div className="text-2xl font-bold mb-2">{flashcard.english}</div>
            {flashcard.exampleTranslation && (
              <div className="text-sm text-gray-600 mt-4">
                "{flashcard.exampleTranslation}"
              </div>
            )}
            <div className="text-xs text-gray-500 absolute bottom-2 right-2">
              Click to flip
            </div>
          </div>
          <div className="flashcard-back">
            <div className="text-3xl font-bold mb-2 text-right">{flashcard.arabic}</div>
            <div className="text-lg text-gray-700 mb-4">{flashcard.transliteration}</div>
            {flashcard.exampleSentence && (
              <div className="text-sm text-gray-600 mt-2 text-right">
                "{flashcard.exampleSentence}"
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-6">
        <button 
          onClick={onPrevious}
          className="bg-white text-blue-600 border border-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors"
          disabled={!onPrevious}
        >
          Previous
        </button>
        
        <button 
          onClick={playAudio}
          className={`audio-player-button ${isAudioPlaying ? 'bg-blue-800' : ''}`}
          aria-label="Play pronunciation"
          disabled={!ttsInitialized || isAudioPlaying}
        >
          {isAudioPlaying ? '🔊' : '🔈'}
        </button>
        
        <button 
          onClick={onNext}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          disabled={!onNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
