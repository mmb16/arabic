'use client';

import { useState, useEffect, useRef } from 'react';
import { initSpeechRecognition, startListening, stopListening, evaluatePronunciation } from '@/lib/speech-recognition';
import { initTextToSpeech, speak } from '@/lib/text-to-speech';

interface DialogueLine {
  id: number;
  speaker: 'ai' | 'user';
  english: string;
  arabic: string;
  transliteration: string;
}

interface PracticeScenario {
  id: number;
  title: string;
  emoji: string;
  dialogue: DialogueLine[];
}

// Sample dialogue scenarios
const scenarios: PracticeScenario[] = [
  {
    id: 1,
    title: "At a Café",
    emoji: "☕",
    dialogue: [
      {
        id: 1,
        speaker: 'ai',
        english: 'Good morning',
        arabic: 'صباح الخير',
        transliteration: 'sabah el-kheer'
      },
      {
        id: 2,
        speaker: 'user',
        english: 'Good morning',
        arabic: 'صباح النور',
        transliteration: 'sabah en-noor'
      },
      {
        id: 3,
        speaker: 'ai',
        english: 'What would you like to drink?',
        arabic: 'تحب تشرب إيه؟',
        transliteration: 'teheb teshrab eh?'
      },
      {
        id: 4,
        speaker: 'user',
        english: 'I would like a coffee, please',
        arabic: 'عايز قهوة، من فضلك',
        transliteration: 'ayez ahwa, men fadlak'
      },
      {
        id: 5,
        speaker: 'ai',
        english: 'How do you want your coffee? Sweet, medium, or without sugar?',
        arabic: 'تحب القهوة إزاي؟ حلوة، مظبوط، أو سادة؟',
        transliteration: 'teheb el-ahwa ezzay? helwa, mazboot, walla sada?'
      },
      {
        id: 6,
        speaker: 'user',
        english: 'Medium sweet, please',
        arabic: 'مظبوط، من فضلك',
        transliteration: 'mazboot, men fadlak'
      }
    ]
  },
  {
    id: 2,
    title: "Taking a Taxi",
    emoji: "🚕",
    dialogue: [
      {
        id: 1,
        speaker: 'user',
        english: 'Hello, I want to go to the museum, please',
        arabic: 'السلام عليكم، عايز أروح المتحف، من فضلك',
        transliteration: 'as-salamu alaykum, ayez arooh el-mathaf, men fadlak'
      },
      {
        id: 2,
        speaker: 'ai',
        english: 'Welcome, which museum do you want?',
        arabic: 'أهلاً، أي متحف عايز؟',
        transliteration: 'ahlan, ay mathaf ayez?'
      },
      {
        id: 3,
        speaker: 'user',
        english: 'The Egyptian Museum in Tahrir Square',
        arabic: 'المتحف المصري في ميدان التحرير',
        transliteration: 'el-mathaf el-masri fi midan et-tahrir'
      },
      {
        id: 4,
        speaker: 'ai',
        english: 'Okay, it will cost 50 pounds',
        arabic: 'تمام، حيكلف خمسين جنيه',
        transliteration: 'tamam, hayekallef khamseen geneeh'
      },
      {
        id: 5,
        speaker: 'user',
        english: 'That\'s fine, thank you',
        arabic: 'ماشي، شكراً',
        transliteration: 'mashi, shukran'
      }
    ]
  }
];

export default function PracticeComponent() {
  const [selectedScenario, setSelectedScenario] = useState<PracticeScenario | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [userSpeech, setUserSpeech] = useState('');
  const [feedbackScore, setFeedbackScore] = useState<number | null>(null);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [ttsInitialized, setTtsInitialized] = useState(false);
  
  const recognitionRef = useRef<any>(null);

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

    // Initialize speech recognition
    try {
      recognitionRef.current = initSpeechRecognition();
    } catch (error) {
      console.error('Failed to initialize speech recognition:', error);
    }

    return () => {
      // Clean up speech recognition
      if (recognitionRef.current && isListening) {
        stopListening(recognitionRef.current);
      }
    };
  }, []);

  const selectScenario = (scenario: PracticeScenario) => {
    setSelectedScenario(scenario);
    setCurrentStep(0);
    setUserSpeech('');
    setFeedbackScore(null);
    setFeedbackMessage('');
    
    // Start the conversation by speaking the first AI line
    if (scenario.dialogue.length > 0 && scenario.dialogue[0].speaker === 'ai') {
      speakAILine(scenario.dialogue[0]);
    }
  };

  const speakAILine = async (line: DialogueLine) => {
    if (!ttsInitialized) return;
    
    setIsSpeaking(true);
    try {
      await speak(line.arabic);
    } catch (error) {
      console.error('Error speaking AI line:', error);
    } finally {
      setIsSpeaking(false);
    }
  };

  const startSpeechRecognition = () => {
    if (!recognitionRef.current || isListening) return;
    
    setIsListening(true);
    setUserSpeech('');
    setFeedbackScore(null);
    setFeedbackMessage('');
    
    startListening(
      recognitionRef.current,
      (text) => {
        setUserSpeech(text);
        evaluateUserSpeech(text);
      },
      (error) => {
        console.error('Speech recognition error:', error);
        setIsListening(false);
        setFeedbackMessage('Sorry, I couldn\'t hear you. Please try again.');
      },
      () => {
        setIsListening(false);
      }
    );
  };

  const evaluateUserSpeech = (speech: string) => {
    if (!selectedScenario || currentStep >= selectedScenario.dialogue.length) return;
    
    const currentLine = selectedScenario.dialogue[currentStep];
    if (currentLine.speaker !== 'user') return;
    
    const score = evaluatePronunciation(speech, currentLine.arabic);
    setFeedbackScore(score);
    
    // Provide feedback based on score
    if (score >= 80) {
      setFeedbackMessage('Excellent pronunciation! 👏');
    } else if (score >= 60) {
      setFeedbackMessage('Good job! Keep practicing. 👍');
    } else {
      setFeedbackMessage('Try again. Listen carefully to the pronunciation. 🔄');
    }
  };

  const goToNextStep = () => {
    if (!selectedScenario || currentStep >= selectedScenario.dialogue.length - 1) {
      // End of conversation
      return;
    }
    
    const nextStep = currentStep + 1;
    setCurrentStep(nextStep);
    setUserSpeech('');
    setFeedbackScore(null);
    setFeedbackMessage('');
    
    // If next line is AI's, speak it
    const nextLine = selectedScenario.dialogue[nextStep];
    if (nextLine.speaker === 'ai') {
      speakAILine(nextLine);
    }
  };

  const resetPractice = () => {
    setSelectedScenario(null);
    setCurrentStep(0);
    setUserSpeech('');
    setFeedbackScore(null);
    setFeedbackMessage('');
  };

  // Render scenario selection screen
  if (!selectedScenario) {
    return (
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Choose a Conversation Scenario</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {scenarios.map((scenario) => (
            <button 
              key={scenario.id}
              className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-left hover:border-blue-300 hover:shadow transition-all"
              onClick={() => selectScenario(scenario)}
            >
              <div className="text-2xl mb-2">{scenario.emoji}</div>
              <h4 className="font-medium">{scenario.title}</h4>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // Render practice screen
  const currentLine = selectedScenario.dialogue[currentStep];
  const isUserTurn = currentLine.speaker === 'user';
  const isLastStep = currentStep === selectedScenario.dialogue.length - 1;

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">{selectedScenario.emoji} {selectedScenario.title}</h2>
        <button 
          onClick={resetPractice}
          className="text-blue-600 hover:underline"
        >
          ← Choose Another Scenario
        </button>
      </div>
      
      <div className="bg-gray-50 p-6 rounded-lg mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-500">
            Step {currentStep + 1} of {selectedScenario.dialogue.length}
          </span>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
          <div className="flex items-start">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${currentLine.speaker === 'ai' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>
              {currentLine.speaker === 'ai' ? '🤖' : '👤'}
            </div>
            <div>
              <div className="text-gray-500 text-sm mb-1">
                {currentLine.speaker === 'ai' ? 'AI speaks:' : 'You say:'}
              </div>
              <div className="font-medium mb-1">{currentLine.english}</div>
              <div className="text-right font-bold text-lg mb-1">{currentLine.arabic}</div>
              <div className="text-gray-600 text-sm">{currentLine.transliteration}</div>
            </div>
          </div>
        </div>
        
        {isUserTurn && (
          <div className="mb-4">
            <button
              onClick={startSpeechRecognition}
              disabled={isListening || !recognitionRef.current}
              className={`w-full py-3 rounded-lg font-medium mb-2 ${
                isListening 
                  ? 'bg-red-500 text-white' 
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {isListening ? 'Listening...' : 'Click to Speak'}
            </button>
            
            {userSpeech && (
              <div className="bg-gray-100 p-3 rounded-lg">
                <div className="text-sm text-gray-500 mb-1">You said:</div>
                <div className="text-right font-medium">{userSpeech}</div>
              </div>
            )}
            
            {feedbackScore !== null && (
              <div className={`mt-3 p-3 rounded-lg ${
                feedbackScore >= 80 
                  ? 'bg-green-100 text-green-800' 
                  : feedbackScore >= 60 
                    ? 'bg-yellow-100 text-yellow-800' 
                    : 'bg-red-100 text-red-800'
              }`}>
                <div className="flex justify-between items-center">
                  <div>{feedbackMessage}</div>
                  <div className="font-bold">{feedbackScore}%</div>
                </div>
              </div>
            )}
          </div>
        )}
        
        {!isUserTurn && (
          <button
            onClick={() => speakAILine(currentLine)}
            disabled={isSpeaking}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium mb-4 hover:bg-blue-700"
          >
            {isSpeaking ? 'Speaking...' : 'Hear Again'}
          </button>
        )}
        
        <button
          onClick={goToNextStep}
          disabled={isUserTurn && !userSpeech}
          className={`w-full py-3 rounded-lg font-medium ${
            isLastStep 
              ? 'bg-green-600 text-white hover:bg-green-700' 
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          {isLastStep ? 'Finish Practice' : 'Continue'}
        </button>
      </div>
      
      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="font-semibold mb-2">Practice Tips</h3>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>• Listen carefully to the pronunciation before speaking</li>
          <li>• Try to match the intonation and rhythm of the speech</li>
          <li>• Practice each phrase multiple times to improve</li>
          <li>• Focus on the sounds that are unique to Egyptian Arabic</li>
        </ul>
      </div>
    </div>
  );
}
