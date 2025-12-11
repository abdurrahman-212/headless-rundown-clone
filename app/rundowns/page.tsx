// app/rundowns/page.tsx

import ArticleCard from '../components/ArticleCard'; 
import React from 'react';
// 🚀 Lib theke import kora holo
import { getPosts, Article } from '@/lib/graphql'; 


export default async function RundownsPage() {
  
  // 1. 🚀 GraphQL Call
  const wpArticles = await getPosts(); 

  // 2. Apni ArticleCard-er jonno jei data map korechilen, 
  // sheta porishkar kora holo, karon ArticleCard ekhon shudhu 'Article' object chai
  // Amra shudhu article-ke pass kore dibo.
  const articlesForDisplay = wpArticles.map(article => ({
    // Note: GraphQL theke asha Article object-er shob field automatically ArticleCard-e chole jabe.
    // Ekhane aro kichu custom field set korte parben, jodi dorkar hoy.

    // Temporary data mapping:
    // **Guruttopurno:** article.excerpt shadharonoto plain text thake, kintu aage eta thik korte hobe.
    
    // Ekhane apnar aage dewa mapping code thakte pare:
    /*
    id: 0, 
    title: article.title, 
    plus: article.excerpt.replace(/<\/?p>|\n/g, '').substring(0, 80) + '...', 
    image: article.featuredImage?.node?.sourceUrl || '/images/default.png', 
    author: article.author?.node?.name || 'GraphQL Author', 
    slug: article.slug, 
    */

    // Ekhon shudhu shompurno Article object-ti pathan (shob theke shohuj upaay):
    ...article,

  }));


  return (
    // ... layout code ...
    <div className="min-h-screen">
      {/* ... */}
      
      <h2 className="text-4xl font-extrabold mb-8 text-gray-800 border-b pb-4">Latest AI Rundowns</h2>
      
      {/* Article Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* 3. 🚀 Error line change kora holo: dummyArticles ke articlesForDisplay/wpArticles diye replace kora holo */}
        {articlesForDisplay.map((article, index) => (
          // Ekhane 'key' hishebe article.slug bebohar kora bhalo, karon eta unique
          <ArticleCard key={article.slug || index} article={article} /> 
        ))}
      </div>
      
      {/* ... */}
    </div>
  );
}