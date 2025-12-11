import Image from 'next/image';
import Link from 'next/link';

const ArticleCard = ({ article }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
      <div className="relative w-full aspect-video">
        {/* NOTE: public/images  */}
        <Image 
          src={article.image} 
          alt={article.title} 
          fill 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      
      <div className="p-5">
        <Link href={`/article/${article.id}`} className="block">
          <h2 className="text-xl font-bold mb-2 leading-snug text-gray-900 hover:text-blue-600 transition-colors">
            {article.title}
          </h2>
        </Link>
        <p className="text-base text-gray-600 mb-4">
          <span className="font-semibold text-blue-600">PLUS: </span>{article.plus}
        </p>
        
        <div className="flex items-center text-sm text-gray-500">
          <span>By {article.author}</span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;