import React from 'react';
import { Search, ArrowRight } from 'lucide-react';

export default function Explore() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      {/* Logo and Tagline */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <div className="relative">
            <div className="w-24 h-24 bg-blue-500 rounded-full"></div>
            <div className="w-20 h-20 bg-blue-400 rounded-full absolute -right-4 -bottom-2"></div>
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          <span className="text-blue-500">frens.</span>
          <span className="text-gray-900">bet</span>
        </h1>
        <p className="text-gray-600 text-lg md:text-xl">
          Challenge your friends.
        </p>
      </div>

      {/* Search Bar */}
      <div className="w-full max-w-2xl mb-12">
        <div className="relative">
          <input
            type="text"
            placeholder="Search users..."
            className="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-xl 
                     focus:outline-none focus:border-blue-500 transition-colors
                     pl-14"
          />
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            size={24}
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
        <button
          className="flex-1 bg-blue-500 text-white px-6 py-3 rounded-xl 
                         font-medium hover:bg-blue-600 transition-colors
                         flex items-center justify-center gap-2"
        >
          Create account
          <ArrowRight size={20} />
        </button>
        <button
          className="flex-1 border-2 border-gray-200 px-6 py-3 rounded-xl 
                         font-medium hover:bg-gray-50 transition-colors"
        >
          Learn more
        </button>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-16 w-full max-w-6xl">
        {[
          { title: 'Create profile', color: 'bg-blue-100' },
          { title: 'Send it to a friend', color: 'bg-green-100' },
          { title: 'Launched', color: 'bg-purple-100' },
          { title: 'Dotto helps you', color: 'bg-pink-100' },
        ].map((feature, index) => (
          <div
            key={index}
            className={`${feature.color} p-6 rounded-xl text-center 
                      transform hover:-translate-y-1 transition-transform`}
          >
            <h3 className="font-medium text-gray-800">{feature.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
