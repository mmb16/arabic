# Egyptian Arabic Learning App

A comprehensive web application for learning Egyptian Arabic (Cairo dialect) with interactive features including flashcards, common phrases, audio pronunciation, and voice-based practice with AI feedback.

## Features

### Flashcards
- Organized by categories (Greetings, Food, Transportation, etc.)
- Interactive card flipping
- Audio pronunciation
- English, Arabic, and transliteration

### Common Phrases
- Practical phrases for everyday situations
- Organized by categories
- Context information for proper usage
- Audio pronunciation

### Pronunciation
- Text-to-speech functionality for authentic Cairo dialect
- Audio playback for all words and phrases
- Pronunciation tips

### Practice with AI
- Conversational scenarios for real-life situations
- Speech recognition for Egyptian Arabic
- Pronunciation evaluation with feedback
- Interactive practice interface with turn-based dialogue

## Technologies Used

- **Next.js**: React framework for building the application
- **TypeScript**: For type-safe code
- **Tailwind CSS**: For styling
- **ResponsiveVoice.js**: For text-to-speech functionality
- **Web Speech API**: For speech recognition

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/egyptian-arabic-learning-app.git
cd egyptian-arabic-learning-app
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
```

3. Start the development server:
```bash
npm run dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Deployment

### Deploying to Vercel

This app is optimized for deployment on Vercel. To deploy:

1. Create a Vercel account at [vercel.com](https://vercel.com) if you don't have one.

2. Install the Vercel CLI:
```bash
npm install -g vercel
```

3. Deploy the app:
```bash
vercel
```

4. Follow the prompts to complete the deployment.

Alternatively, you can connect your GitHub repository to Vercel for automatic deployments.

## Project Structure

```
egyptian-arabic-learning-app/
├── public/              # Static assets
├── src/
│   ├── app/             # Next.js pages
│   │   ├── flashcards/  # Flashcards pages
│   │   ├── phrases/     # Phrases pages
│   │   ├── pronunciation/ # Pronunciation pages
│   │   ├── practice/    # Practice pages
│   │   ├── globals.css  # Global styles
│   │   ├── layout.tsx   # Root layout
│   │   └── page.tsx     # Home page
│   ├── components/      # Reusable components
│   │   ├── flashcards/  # Flashcard components
│   │   ├── phrases/     # Phrase components
│   │   ├── pronunciation/ # Pronunciation components
│   │   ├── practice/    # Practice components
│   │   └── ui/          # UI components
│   └── lib/             # Utility functions
│       ├── data/        # Data files
│       ├── text-to-speech.ts # Text-to-speech utility
│       └── speech-recognition.ts # Speech recognition utility
├── .gitignore
├── next.config.ts
├── package.json
├── README.md
└── tsconfig.json
```

## Customization

### Adding New Flashcards or Phrases

To add new flashcards or phrases, edit the data files in `src/lib/data/`:

- `flashcards.ts`: Contains flashcard data
- `phrases.ts`: Contains phrase data

### Modifying Styles

Global styles are defined in `src/app/globals.css` and `src/app/custom-styles.css`. Component-specific styles use Tailwind CSS classes.

### Adding New Practice Scenarios

To add new practice scenarios, edit the `scenarios` array in `src/components/practice/PracticeComponent.tsx`.

## Browser Compatibility

The application uses modern web technologies:

- Text-to-speech: Works in all modern browsers
- Speech recognition: Best supported in Chrome and Edge
- For browsers without speech recognition support, the practice feature will display a message about compatibility

## ResponsiveVoice API Key

The application uses ResponsiveVoice for text-to-speech. For production use, you should replace the placeholder API key in `src/lib/text-to-speech.ts` with your own key from [ResponsiveVoice](https://responsivevoice.org/).

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [ResponsiveVoice.js](https://responsivevoice.org/) for text-to-speech functionality
- [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) for speech recognition
- [Next.js](https://nextjs.org/) for the application framework
- [Tailwind CSS](https://tailwindcss.com/) for styling
