// src/lib/speech-recognition.ts
// This file contains the speech recognition functionality for the Egyptian Arabic learning app

// Check if SpeechRecognition is available
declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

// Initialize speech recognition
export function initSpeechRecognition() {
  // Check if browser supports speech recognition
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  
  if (!SpeechRecognition) {
    throw new Error('Speech recognition not supported in this browser');
  }
  
  const recognition = new SpeechRecognition();
  
  // Configure for Arabic (Egypt)
  recognition.lang = 'ar-EG';
  recognition.continuous = false;
  recognition.interimResults = false;
  
  return recognition;
}

// Start listening for speech
export function startListening(
  recognition: any, 
  onResult: (text: string) => void, 
  onError: (error: any) => void,
  onEnd: () => void
) {
  // Set up event handlers
  recognition.onresult = (event: any) => {
    const result = event.results[0][0].transcript;
    onResult(result);
  };
  
  recognition.onerror = (event: any) => {
    onError(event.error);
  };
  
  recognition.onend = () => {
    onEnd();
  };
  
  // Start recognition
  recognition.start();
}

// Stop listening
export function stopListening(recognition: any) {
  recognition.stop();
}

// Compare user's pronunciation with expected phrase
export function evaluatePronunciation(spoken: string, expected: string): number {
  // Simple string similarity algorithm (Levenshtein distance)
  const levenshteinDistance = (a: string, b: string): number => {
    if (a.length === 0) return b.length;
    if (b.length === 0) return a.length;
    
    const matrix = [];
    
    // Initialize matrix
    for (let i = 0; i <= b.length; i++) {
      matrix[i] = [i];
    }
    
    for (let j = 0; j <= a.length; j++) {
      matrix[0][j] = j;
    }
    
    // Fill matrix
    for (let i = 1; i <= b.length; i++) {
      for (let j = 1; j <= a.length; j++) {
        if (b.charAt(i - 1) === a.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1, // substitution
            matrix[i][j - 1] + 1,     // insertion
            matrix[i - 1][j] + 1      // deletion
          );
        }
      }
    }
    
    return matrix[b.length][a.length];
  };
  
  // Normalize strings for comparison (remove diacritics, lowercase)
  const normalizeArabic = (text: string): string => {
    return text
      .toLowerCase()
      .trim()
      .replace(/\s+/g, ' ');
  };
  
  const normalizedSpoken = normalizeArabic(spoken);
  const normalizedExpected = normalizeArabic(expected);
  
  // Calculate distance
  const distance = levenshteinDistance(normalizedSpoken, normalizedExpected);
  
  // Calculate similarity score (0-100)
  const maxLength = Math.max(normalizedSpoken.length, normalizedExpected.length);
  const similarityScore = Math.max(0, 100 - (distance / maxLength) * 100);
  
  return Math.round(similarityScore);
}
