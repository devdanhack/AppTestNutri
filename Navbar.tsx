import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Salad, Calendar, Info, ClipboardList } from 'lucide-react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-emerald-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Salad className="h-8 w-8" />
            <span className="font-bold text-xl">NutriLife</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="flex items-center space-x-1 hover:text-emerald-200 transition">
              <span>Home</span>
            </Link>
            <Link to="/appointments" className="flex items-center space-x-1 hover:text-emerald-200 transition">
              <Calendar className="h-4 w-4" />
              <span>Agendar</span>
            </Link>
            <Link to="/services" className="flex items-center space-x-1 hover:text-emerald-200 transition">
              <ClipboardList className="h-4 w-4" />
              <span>Serviços</span>
            </Link>
            <Link to="/about" className="flex items-center space-x-1 hover:text-emerald-200 transition">
              <Info className="h-4 w-4" />
              <span>Sobre</span>
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <Link to="/" className="block px-4 py-2 hover:bg-emerald-700">
            Home
          </Link>
          <Link to="/appointments" className="block px-4 py-2 hover:bg-emerald-700">
            Agendar
          </Link>
          <Link to="/services" className="block px-4 py-2 hover:bg-emerald-700">
            Serviços
          </Link>
          <Link to="/about" className="block px-4 py-2 hover:bg-emerald-700">
            Sobre
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;