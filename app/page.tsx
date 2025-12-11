// app/page.tsx

import Link from 'next/link';
import React from 'react';

export default function LandingPage() {
  return (
    // min-h-[80vh] Landing Page-ke center-e rakhte shahajjo kore.
    <div className="min-h-[80vh] flex flex-col justify-center items-center text-center py-20 bg-gray-50">
      
      {/* 1. Landing Page Content (Screen 1111) */}
      
      {/* Logo/Icon */}
      <div className="mb-6">
        {/* Simple placeholder logo */}
        <div className="w-24 h-24 bg-black rounded-xl flex items-center justify-center mx-auto mb-4 shadow-xl">
            <span className="text-white text-4xl font-extrabold font-serif">RR</span>
        </div>
      </div>

      {/* Main Title and Description */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 max-w-4xl leading-tight">
        The Rundown AI
      </h1>

      <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl">
        Get the latest AI news, understand why it matters, and learn how to apply it in your work — 
        **all in just 5 minutes a day.** Join **2,000,000+ subscribers.**
      </p>

      {/* Subscription Form */}
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full max-w-lg px-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-grow px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg shadow-md"
        />
        <button className="px-8 py-4 bg-blue-600 text-white rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg">
          Join Free
        </button>
      </div>
      
      {/* Meta Info */}
      <div className="mt-10 text-gray-500 text-sm">
        <p>Written by Rowan Cheung. +3</p>
      </div>

      {/* 2. Link to the Posts Grid (Temporarily added here for navigation) */}
      <Link href="/rundowns" className="mt-12 text-blue-600 font-semibold hover:text-blue-800 transition-colors underline">
        View Latest Rundowns (Posts Grid)
      </Link>
    </div>
  );
}