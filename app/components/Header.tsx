// app/components/Header.tsx

import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-black text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* LEFT: Logo/Site Name */}
        <Link href="/" className="text-2xl font-bold tracking-widest hover:text-blue-400 transition-colors">
          The Rundown AI
        </Link>
        
        {/* CENTER: Navigation gulo muche dewa holo */}
        
        {/* RIGHT: Buttons */}
        <div className="space-x-4 flex items-center">
          <button className="px-4 py-2 border border-white rounded-md text-sm font-semibold hover:bg-gray-800 transition-colors">
            Login
          </button>
          <button className="px-4 py-2 bg-blue-600 rounded-md text-sm font-semibold hover:bg-blue-700 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;