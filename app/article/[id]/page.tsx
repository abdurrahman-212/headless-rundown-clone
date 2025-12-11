// app/article/[id]/page.tsx

import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';

// lib/graphql theke dorkari functions ebong types import kora holo
import { getSinglePost, Article } from '@/lib/graphql'; 
// NOTE: Apni lib/graphql.ts-e Article interface ebong query-te featuredImage, author add korechen dhore newa holo.

// Props type: Ekhono [id] naam bebohar kora holo, kintu value-ti slug hobe
interface ArticlePageProps {
  params: {
    id: string; // Ekhane 'id' (URL parameter) ke slug hishebe bebohar kora hobe
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  
  // params.id ke slug hishebe getSinglePost function-e pathano holo
  const article = await getSinglePost(params.id); 

  if (!article) {
    notFound(); 
  }

  // GraphQL theke data extraction
  const imageUrl = article.featuredImage?.node?.sourceUrl || '/images/default.png';
  const authorName = article.author?.node?.name || 'The Rundown AI';
  const formattedDate = new Date(article.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });


  return (
    <div className="container mx-auto px-4 py-8">
      
      {/* Back Button */}
      <Link href="/rundowns" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to All Rundowns
      </Link>

      {/* Article Header */}
      <header className="mb-8 border-b pb-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
          {article.title}
        </h1>
        <div className="flex items-center space-x-4 text-gray-500 text-sm">
          <span>By {authorName}</span>
          <span>•</span>
          <span>{formattedDate}</span>
        </div>
      </header>

      {/* Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <article className="lg:col-span-2">
            {/* Main Image */}
            <div className="relative w-full aspect-video mb-8 rounded-lg overflow-hidden shadow-xl">
                <Image 
                    src={imageUrl} 
                    alt={article.title} 
                    fill 
                    sizes="66vw"
                    className="object-cover"
                />
            </div>

            {/* Dynamic Content Rendering */}
            <div 
                // prose class-ti Typography plugin theke ashbe, jeta WordPress-er HTML-ke styled korbe
                className="prose max-w-none prose-lg text-gray-800"
                dangerouslySetInnerHTML={{ __html: article.content || '<p>No content found for this post.</p>' }} 
            />
            
            {/* Note at the bottom */}
            <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded-md mt-8">
                <p className="font-semibold text-yellow-700">Editor's Note:</p>
                <p className="text-yellow-600">The layout is complete. Now ensure your GraphQL queries include <code>featuredImage</code>, <code>author</code>, and <code>content</code> for full dynamic display.</p>
            </div>
        </article>

        {/* Sidebar */}
        {/* ... (Sidebar code same thakbe) */}
      </div>
    </div>
  );
}