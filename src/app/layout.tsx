import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Egyptian Arabic Learning App",
  description: "Learn Egyptian Arabic with flashcards, phrases, pronunciation, and practice",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-blue-600 text-white shadow-md">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold">Egyptian Arabic</h1>
              <nav>
                <ul className="flex space-x-6">
                  <li><Link href="/" className="hover:underline">Home</Link></li>
                  <li><Link href="/flashcards" className="hover:underline">Flashcards</Link></li>
                  <li><Link href="/phrases" className="hover:underline">Phrases</Link></li>
                  <li><Link href="/pronunciation" className="hover:underline">Pronunciation</Link></li>
                  <li><Link href="/practice" className="hover:underline">Practice</Link></li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="bg-gray-100 border-t">
          <div className="container mx-auto px-4 py-6 text-center text-gray-600">
            <p>© {new Date().getFullYear()} Egyptian Arabic Learning App - Cairo Dialect</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
