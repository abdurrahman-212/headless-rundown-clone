import './globals.css';
import Header from './components/Header'; 
import Footer from './components/Footer'; 
import React from 'react';

export const metadata = {
  title: 'The Rundown AI Clone',
  description: 'A Next.js and Tailwind CSS project (TypeScript version).',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen flex flex-col">
        <Header /> 
        
        <main className="flex-grow container mx-auto px-4 py-8">
            {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}