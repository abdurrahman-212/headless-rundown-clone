// app/components/ArticleCard.tsx

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
// 🚀 Guruttopurno: Eita lib/graphql.ts theke Article interface-ti import korbe
import { Article } from '@/lib/graphql'; 

// component-e shothik type set kora holo (FC = FunctionComponent)
const ArticleCard: React.FC<{ article: Article }> = ({ article }) => {
  // Data extraction
  const imageUrl = article.featuredImage?.node?.sourceUrl || '/images/default.png';
  const authorName = article.author?.node?.name || 'The Rundown AI';

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
      {/* Dynamic Link set kora holo slug bebohar kore */}
      <Link href={`/article/${article.slug}`} className="block"> 
        
        {/* Main Image */}
        <div className="relative w-full aspect-video">
          <Image 
            src={imageUrl} 
            alt={article.title} 
            fill 
            sizes="(max-width: 1024px) 50vw, 33vw"
            className="object-cover"
            priority 
          />
        </div>
      </Link>
      
      <div className="p-5">
        <Link href={`/article/${article.slug}`} className="block">
          <h2 className="text-xl font-bold mb-2 leading-snug text-gray-900 hover:text-blue-600 transition-colors">
            {article.title}
          </h2>
        </Link>
        <p className="text-base text-gray-600 mb-4">
          <span className="font-semibold text-blue-600">PLUS: </span>
          {/* excerpt-ti HTML bebohar korte pare, tai dangerouslySetInnerHTML */}
          <span dangerouslySetInnerHTML={{ __html: article.excerpt || article.plus }} /> 
        </p>
        
        <div className="flex items-center text-sm text-gray-500">
          <span>By {authorName}</span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;