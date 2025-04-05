-- Initialize database tables for Egyptian Arabic Learning App

-- Flashcard Categories Table
CREATE TABLE IF NOT EXISTS flashcard_categories (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  image TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Flashcards Table
CREATE TABLE IF NOT EXISTS flashcards (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  category_id INTEGER NOT NULL,
  english TEXT NOT NULL,
  arabic TEXT NOT NULL,
  transliteration TEXT NOT NULL,
  audio_url TEXT,
  example_sentence TEXT,
  example_translation TEXT,
  difficulty INTEGER DEFAULT 1, -- 1: Beginner, 2: Intermediate, 3: Advanced
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (category_id) REFERENCES flashcard_categories(id)
);

-- Phrase Categories Table
CREATE TABLE IF NOT EXISTS phrase_categories (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  image TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Phrases Table
CREATE TABLE IF NOT EXISTS phrases (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  category_id INTEGER NOT NULL,
  english TEXT NOT NULL,
  arabic TEXT NOT NULL,
  transliteration TEXT NOT NULL,
  audio_url TEXT,
  context TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (category_id) REFERENCES phrase_categories(id)
);

-- User Progress Table (for future implementation)
CREATE TABLE IF NOT EXISTS user_progress (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id TEXT NOT NULL,
  flashcard_id INTEGER,
  phrase_id INTEGER,
  familiarity INTEGER DEFAULT 0, -- 0: New, 1: Learning, 2: Reviewing, 3: Mastered
  last_reviewed TIMESTAMP,
  next_review TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (flashcard_id) REFERENCES flashcards(id),
  FOREIGN KEY (phrase_id) REFERENCES phrases(id)
);

-- Practice Scenarios Table
CREATE TABLE IF NOT EXISTS practice_scenarios (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  emoji TEXT NOT NULL,
  difficulty INTEGER DEFAULT 1, -- 1: Beginner, 2: Intermediate, 3: Advanced
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Practice Dialogue Lines Table
CREATE TABLE IF NOT EXISTS practice_dialogue_lines (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  scenario_id INTEGER NOT NULL,
  speaker TEXT NOT NULL, -- 'ai' or 'user'
  english TEXT NOT NULL,
  arabic TEXT NOT NULL,
  transliteration TEXT NOT NULL,
  audio_url TEXT,
  sequence_order INTEGER NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (scenario_id) REFERENCES practice_scenarios(id)
);

-- Insert initial flashcard categories
INSERT INTO flashcard_categories (title, description, image) VALUES
('Greetings & Introductions', 'Essential words and phrases for meeting people and basic conversations', '👋'),
('Food & Dining', 'Vocabulary for restaurants, cafes, and talking about food', '🍽️'),
('Transportation', 'Words related to getting around Cairo and other cities', '🚕'),
('Shopping', 'Useful vocabulary for markets, stores, and bargaining', '🛍️'),
('Home & Family', 'Words related to family members, home, and daily life', '👪'),
('Numbers & Time', 'Learn to count and tell time in Egyptian Arabic', '🕒');

-- Insert initial phrase categories
INSERT INTO phrase_categories (title, description, image) VALUES
('Greetings & Farewells', 'Essential phrases for saying hello and goodbye in different situations', '👋'),
('Restaurant & Cafe', 'Useful phrases for ordering food and drinks', '🍽️'),
('Transportation', 'How to get around and ask for directions', '🚕'),
('Shopping & Bargaining', 'Phrases for shopping in markets and stores', '🛍️'),
('Small Talk', 'Casual conversation starters and responses', '💬'),
('Emergency & Help', 'Important phrases for urgent situations', '🆘');

-- Insert initial practice scenarios
INSERT INTO practice_scenarios (title, description, emoji, difficulty) VALUES
('At a Café', 'Practice ordering drinks and snacks at a local café', '☕', 1),
('Taking a Taxi', 'Learn how to navigate and communicate with taxi drivers', '🚕', 1),
('Shopping at the Market', 'Practice bargaining and shopping at a local market', '🛒', 2),
('Meeting New People', 'Introduce yourself and make small talk with new acquaintances', '👋', 1),
('Asking for Directions', 'Learn how to ask for and understand directions', '🗺️', 2),
('At a Restaurant', 'Order food and interact with waitstaff at a restaurant', '🍽️', 2);

-- Insert sample flashcards for Greetings category
INSERT INTO flashcards (category_id, english, arabic, transliteration, example_sentence, example_translation, difficulty) VALUES
(1, 'Hello', 'السلام عليكم', 'as-salamu alaykum', 'السلام عليكم، كيف حالك؟', 'Hello, how are you?', 1),
(1, 'Good morning', 'صباح الخير', 'sabah el-kheer', 'صباح الخير، عامل إيه النهاردة؟', 'Good morning, how are you doing today?', 1),
(1, 'Good evening', 'مساء الخير', 'masa el-kheer', 'مساء الخير، أخبارك إيه؟', 'Good evening, how are you?', 1),
(1, 'Welcome', 'أهلاً وسهلاً', 'ahlan wa sahlan', 'أهلاً وسهلاً في مصر', 'Welcome to Egypt', 1),
(1, 'How are you?', 'إزيك؟', 'ezzayak? (m) / ezzayik? (f)', 'إزيك؟ عامل إيه؟', 'How are you? How are you doing?', 1),
(1, 'I am fine', 'أنا كويس', 'ana kwayyes (m) / ana kwayyesa (f)', 'أنا كويس، الحمد لله', 'I am fine, thank God', 1),
(1, 'Thank you', 'شكراً', 'shukran', 'شكراً جزيلاً', 'Thank you very much', 1),
(1, 'You\'re welcome', 'العفو', 'el-afoo', 'العفو، مفيش مشكلة', 'You\'re welcome, no problem', 1),
(1, 'My name is...', 'اسمي...', 'esmi...', 'اسمي محمد، وانت؟', 'My name is Mohamed, and you?', 1),
(1, 'Nice to meet you', 'تشرفنا', 'tasharrafna', 'تشرفنا بمعرفتك', 'Nice to meet you', 1);

-- Insert sample phrases for Greetings category
INSERT INTO phrases (category_id, english, arabic, transliteration, context) VALUES
(1, 'Peace be upon you', 'السلام عليكم', 'as-salamu alaykum', 'Formal greeting used throughout the day'),
(1, 'And peace be upon you too', 'وعليكم السلام', 'wa alaykum as-salam', 'Response to "as-salamu alaykum"'),
(1, 'Good morning', 'صباح الخير', 'sabah el-kheer', 'Morning greeting'),
(1, 'Good morning to you too', 'صباح النور', 'sabah en-noor', 'Response to "sabah el-kheer"'),
(1, 'Good evening', 'مساء الخير', 'masa el-kheer', 'Evening greeting'),
(1, 'Good evening to you too', 'مساء النور', 'masa en-noor', 'Response to "masa el-kheer"'),
(1, 'How are you? (to a man)', 'إزيك؟', 'ezzayak?', 'Casual way to ask how someone is doing'),
(1, 'How are you? (to a woman)', 'إزيك؟', 'ezzayik?', 'Casual way to ask how someone is doing'),
(1, 'I am fine, thank God', 'أنا كويس، الحمد لله', 'ana kwayyes, el-hamdulillah (m)', 'Response to "how are you" (for a man)'),
(1, 'I am fine, thank God', 'أنا كويسة، الحمد لله', 'ana kwayyesa, el-hamdulillah (f)', 'Response to "how are you" (for a woman)');

-- Insert sample dialogue for Café scenario
INSERT INTO practice_dialogue_lines (scenario_id, speaker, english, arabic, transliteration, sequence_order) VALUES
(1, 'ai', 'Good morning', 'صباح الخير', 'sabah el-kheer', 1),
(1, 'user', 'Good morning', 'صباح النور', 'sabah en-noor', 2),
(1, 'ai', 'What would you like to drink?', 'تحب تشرب إيه؟', 'teheb teshrab eh?', 3),
(1, 'user', 'I would like a coffee, please', 'عايز قهوة، من فضلك', 'ayez ahwa, men fadlak', 4),
(1, 'ai', 'How do you want your coffee? Sweet, medium, or without sugar?', 'تحب القهوة إزاي؟ حلوة، مظبوط، أو سادة؟', 'teheb el-ahwa ezzay? helwa, mazboot, walla sada?', 5),
(1, 'user', 'Medium sweet, please', 'مظبوط، من فضلك', 'mazboot, men fadlak', 6),
(1, 'ai', 'Would you like anything else?', 'عايز حاجة تانية؟', 'ayez haga tanya?', 7),
(1, 'user', 'No, thank you', 'لا، شكراً', 'la, shukran', 8),
(1, 'ai', 'Your coffee will be ready soon', 'القهوة حتكون جاهزة حالاً', 'el-ahwa hatekoon gahza halan', 9),
(1, 'user', 'Thank you very much', 'شكراً جزيلاً', 'shukran gazeelan', 10);
