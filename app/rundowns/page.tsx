// app/rundowns/page.tsx

import ArticleCard from '../components/ArticleCard'; 
import React from 'react';

// TypeScript Article Interface
interface Article {
  id: number;
  image: string;
  title: string;
  plus: string;
  author: string;
}

const dummyArticles: Article[] = [
  {
    id: 1,
    image: '/images/img1.png', 
    title: 'OpenAI braces for “rough vibes”',
    plus: 'Use NotebookLM to turn raw data into visual insights', 
    author: 'Zach Mink, +4',
  },
  {
    id: 2,
    image: '/images/img2.png',
    title: 'Nano Banana Pro changes the image generation game (again)',
    plus: 'OpenAI launches ChatGPT group chats to all tiers',
    author: 'Zach Mink, +4',
  },
  {
    id: 3,
    image: '/images/img3.png',
    title: 'OpenAI pushes Codex to the Max',
    plus: 'Use Gemini 3 to build powerful simulations',
    author: 'Zach Mink, +4',
  },
  {
    id: 4,
    image: '/images/img1.png', 
    title: 'Anthropic and OpenAI’s IPO showdown',
    plus: 'Get instant business insights from spreadsheets',
    author: 'Zach Mink, +4',
  },
  {
    id: 5,
    image: '/images/img2.png', 
    title: 'OpenAI’s ‘Code Red’ scramble',
    plus: 'Prepare for job interviews with NotebookLM',
    author: 'Zach Mink, +4',
  },
];

export default function RundownsPage() {
  return (
    <div className="min-h-screen">
      {/* Search Bar (Optional, kintu screenshot-e chilo) */}
      <div className="mb-8 p-4 bg-white rounded-lg shadow-md flex items-center border border-gray-200 max-w-xl mx-auto">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          placeholder="Search posts..."
          className="flex-grow focus:outline-none text-gray-700"
        />
      </div>


      <h1 className="text-4xl font-extrabold mb-8 text-gray-800 border-b pb-4">Latest AI Rundowns</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {dummyArticles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>

      {/* Pagination UI - Screen 3333 er moto */}
      <div className="mt-12 text-center">
        <div className="inline-flex space-x-2 rounded-lg bg-white p-2 shadow-md">
            <button className="px-3 py-1 text-sm text-gray-500 rounded-md hover:bg-gray-100">First</button>
            <button className="px-3 py-1 text-sm text-gray-500 rounded-md hover:bg-gray-100">&lt; Back</button>
            <button className="px-3 py-1 text-sm font-bold text-white bg-blue-600 rounded-md">1</button>
            <button className="px-3 py-1 text-sm text-gray-500 rounded-md hover:bg-gray-100">2</button>
            <button className="px-3 py-1 text-sm text-gray-500 rounded-md hover:bg-gray-100">3</button>
            <button className="px-3 py-1 text-sm text-gray-500 rounded-md hover:bg-gray-100">4</button>
            <button className="px-3 py-1 text-sm text-gray-500 rounded-md hover:bg-gray-100">Next &gt;</button>
            <button className="px-3 py-1 text-sm text-gray-500 rounded-md hover:bg-gray-100">Last</button>
        </div>
      </div>
    </div>
  );
}