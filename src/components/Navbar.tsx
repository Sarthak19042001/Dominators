import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Code2 } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const [logoError, setLogoError] = useState(false);

  return (
    <nav className="bg-[#3C84AC] text-white shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              {logoError ? (
                <Code2 className="h-8 w-8 text-white" />
              ) : (
                <img
                  src="\public\logo.svg"
                  alt="Dominators Logo"
                  className="h-16 w-16 object-contain transition-transform duration-300 transform hover:scale-110"
                  onError={() => setLogoError(true)}
                />
              )}
              <span className="font-bold text-2xl text-white">Dominators</span>
            </Link>
          </div>

          <div className="flex items-center space-x-8">
            <Link
              to="/"
              className={`text-white font-semibold hover:text-[#04182E] transition-colors duration-300 ${
                location.pathname === '/' ? 'border-b-4 border-[#04182E]' : ''
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-white font-semibold hover:text-[#04182E] transition-colors duration-300 ${
                location.pathname === '/about' ? 'border-b-4 border-[#04182E]' : ''
              }`}
            >
              About Us
            </Link>
            <Link
              to="/events"
              className={`text-white font-semibold hover:text-[#04182E] transition-colors duration-300 ${
                location.pathname === '/events' ? 'border-b-4 border-[#04182E]' : ''
              }`}
            >
              Events
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
