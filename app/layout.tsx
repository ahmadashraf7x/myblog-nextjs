"use client";

import { ArticlesProvider } from "./context/ArticlesContext";
import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <ArticlesProvider>
          <header className="bg-white shadow-sm">
            <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
              <Link href="/" className="text-xl font-bold text-gray-800">
                MyBlog
              </Link>

              <p className="text-xs md:text-sm text-gray-500">
                Simple CRUD blog with Next.js
              </p>
            </div>
          </header>

          <main className="max-w-4xl mx-auto px-4 py-6 md:py-8">
            {children}
          </main>
        </ArticlesProvider>
      </body>
    </html>
  );
}
