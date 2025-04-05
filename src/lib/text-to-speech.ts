// src/lib/text-to-speech.ts
// This file contains the text-to-speech functionality for the Egyptian Arabic learning app

// Check if ResponsiveVoice is available
declare global {
  interface Window {
    responsiveVoice: any;
  }
}

// Initialize ResponsiveVoice
export function initTextToSpeech() {
  // Add ResponsiveVoice script to the document
  const script = document.createElement('script');
  script.src = 'https://code.responsivevoice.org/responsivevoice.js?key=YOUR_API_KEY';
  script.async = true;
  document.head.appendChild(script);
  
  // Wait for ResponsiveVoice to load
  return new Promise<void>((resolve) => {
    script.onload = () => {
      console.log('ResponsiveVoice loaded');
      resolve();
    };
  });
}

// Speak Arabic text
export function speakArabic(text: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (!window.responsiveVoice) {
      console.error('ResponsiveVoice not loaded');
      reject(new Error('ResponsiveVoice not loaded'));
      return;
    }

    // Use Arabic Male voice for Egyptian Arabic
    window.responsiveVoice.speak(text, 'Arabic Male', {
      pitch: 1,
      rate: 0.9, // Slightly slower for learning purposes
      volume: 1,
      onend: () => {
        resolve();
      },
      onerror: (error: any) => {
        console.error('Speech error:', error);
        reject(error);
      }
    });
  });
}

// Check if browser supports native speech synthesis
export function browserSupportsSpeech(): boolean {
  return 'speechSynthesis' in window;
}

// Fallback method using browser's native speech synthesis
export function speakWithNativeSpeech(text: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (!browserSupportsSpeech()) {
      reject(new Error('Browser does not support speech synthesis'));
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    
    // Try to find an Arabic voice
    const voices = window.speechSynthesis.getVoices();
    const arabicVoice = voices.find(voice => 
      voice.lang.includes('ar') || voice.name.includes('Arabic')
    );
    
    if (arabicVoice) {
      utterance.voice = arabicVoice;
    }
    
    utterance.lang = 'ar-EG'; // Egyptian Arabic
    utterance.rate = 0.9; // Slightly slower for learning
    utterance.pitch = 1;
    
    utterance.onend = () => {
      resolve();
    };
    
    utterance.onerror = (event) => {
      reject(new Error(`Speech synthesis error: ${event.error}`));
    };
    
    window.speechSynthesis.speak(utterance);
  });
}

// Main speak function that tries ResponsiveVoice first, then falls back to native speech
export async function speak(text: string): Promise<void> {
  try {
    if (window.responsiveVoice) {
      await speakArabic(text);
    } else {
      await speakWithNativeSpeech(text);
    }
  } catch (error) {
    console.error('Failed to speak:', error);
    // Silently fail if both methods fail
  }
}
