'use client';

import { useEffect, useState } from 'react';
import { initTextToSpeech, speak } from '@/lib/text-to-speech';
import { Phrase } from '@/lib/data/phrases';

interface PhraseComponentProps {
  phrase: Phrase;
}

export default function PhraseComponent({ phrase }: PhraseComponentProps) {
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

  const playAudio = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isAudioPlaying) return;
    
    setIsAudioPlaying(true);
    try {
      // Play the Arabic pronunciation
      await speak(phrase.arabic);
    } catch (error) {
      console.error('Error playing audio:', error);
    } finally {
      setIsAudioPlaying(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:border-blue-300 transition-all duration-200">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold mb-1">{phrase.english}</h3>
          <p className="text-sm text-gray-500">{phrase.context}</p>
        </div>
        <button 
          onClick={playAudio}
          className={`audio-player-button ${isAudioPlaying ? 'bg-blue-800' : ''}`}
          aria-label="Play pronunciation"
          disabled={!ttsInitialized || isAudioPlaying}
        >
          {isAudioPlaying ? '🔊' : '🔈'}
        </button>
      </div>
      
      <div className="border-t border-gray-100 pt-4">
        <p className="text-xl font-bold mb-1 text-right">{phrase.arabic}</p>
        <p className="text-gray-700">{phrase.transliteration}</p>
      </div>
    </div>
  );
}
