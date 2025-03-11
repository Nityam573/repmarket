import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white py-4 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <svg className="h-8 w-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-2 text-xl font-bold text-gray-900">Logoipsum</span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex ml-10 space-x-8">
              <Link 
                to="/trade" 
                className={`flex items-center ${isActive('/trade') 
                  ? 'text-gray-900 font-medium relative after:absolute after:bottom-[-16px] after:left-0 after:right-0 after:h-[3px] after:bg-blue-500' 
                  : 'text-gray-500 hover:text-gray-900'}`}
              >
                <svg className="h-5 w-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
                </svg>
                Trade
              </Link>
              <Link 
                to="/launch" 
                className={`flex items-center ${isActive('/launch') 
                  ? 'text-gray-900 font-medium relative after:absolute after:bottom-[-16px] after:left-0 after:right-0 after:h-[3px] after:bg-blue-500' 
                  : 'text-gray-500 hover:text-gray-900'}`}
              >
                <svg className="h-5 w-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Launch
              </Link>
              <Link 
                to="/about" 
                className={`flex items-center ${isActive('/about') || isActive('/') 
                  ? 'text-gray-900 font-medium relative after:absolute after:bottom-[-16px] after:left-0 after:right-0 after:h-[3px] after:bg-blue-500' 
                  : 'text-gray-500 hover:text-gray-900'}`}
              >
                <svg className="h-5 w-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                About
              </Link>
              <Link 
                to="/rewards" 
                className={`flex items-center ${isActive('/rewards') 
                  ? 'text-gray-900 font-medium relative after:absolute after:bottom-[-16px] after:left-0 after:right-0 after:h-[3px] after:bg-blue-500' 
                  : 'text-gray-500 hover:text-gray-900'}`}
              >
                <svg className="h-5 w-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Rewards
              </Link>
              <Link 
                to="/ui-demo" 
                className={`flex items-center ${isActive('/ui-demo') 
                  ? 'text-gray-900 font-medium relative after:absolute after:bottom-[-16px] after:left-0 after:right-0 after:h-[3px] after:bg-blue-500' 
                  : 'text-gray-500 hover:text-gray-900'}`}
              >
                <svg className="h-5 w-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
                UI Demo
              </Link>
            </div>
          </div>
          
          {/* Connect Wallet Button */}
          <div className="hidden md:block">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center">
              <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Connect to a wallet
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-2 px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link 
            to="/trade" 
            className={isActive('/trade') ? "block px-3 py-2 text-blue-600 font-medium" : "block px-3 py-2 text-gray-700 hover:text-blue-600"}
          >
            Trade
          </Link>
          <Link 
            to="/launch" 
            className={isActive('/launch') ? "block px-3 py-2 text-blue-600 font-medium" : "block px-3 py-2 text-gray-700 hover:text-blue-600"}
          >
            Launch
          </Link>
          <Link 
            to="/about" 
            className={isActive('/about') || isActive('/') ? "block px-3 py-2 text-blue-600 font-medium" : "block px-3 py-2 text-gray-700 hover:text-blue-600"}
          >
            About
          </Link>
          <Link 
            to="/rewards" 
            className={isActive('/rewards') ? "block px-3 py-2 text-blue-600 font-medium" : "block px-3 py-2 text-gray-700 hover:text-blue-600"}
          >
            Rewards
          </Link>
          <Link 
            to="/ui-demo" 
            className={isActive('/ui-demo') ? "block px-3 py-2 text-blue-600 font-medium" : "block px-3 py-2 text-gray-700 hover:text-blue-600"}
          >
            UI Demo
          </Link>
          <button className="mt-3 w-full bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700">
            Connect to a wallet
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 