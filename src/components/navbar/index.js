import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ user }) => {
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 border-gray-200 px-2 sm:px-4 py-2.5 rounded">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <div className="flex items-center">
          <svg
            className="h-8 w-8 mr-3 text-indigo-500"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {' '}
            <path stroke="none" d="M0 0h24v24H0z" />{' '}
            <rect x="3" y="7" width="18" height="13" rx="2" />{' '}
            <polyline points="16 3 12 7 8 3" />
          </svg>
          <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
            <Link to="/">What2Watch</Link>
          </span>
        </div>
        <div className="flex items-center md:order-2 relative">
          {user ? (
            <>
              <button
                type="button"
                className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-600"
                onClick={() => setUserMenuOpen(!userMenuOpen)}
              >
                <svg
                  className="h-8 w-8 rounded-full text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
              {userMenuOpen && (
                <div className="absolute origin-center right-0 top-0 w-40 translate-x-14 z-50 mt-10 text-base list-none rounded divide-y shadow bg-gray-700 divide-gray-600">
                  <div className="py-3 px-4">
                    <span className="block text-sm text-white">
                      {user.displayName || 'John Doe'}
                    </span>
                    <span className="block text-sm truncate w-full font-medium text-gray-400">
                      {user.email}
                    </span>
                  </div>
                  <ul className="py-1">
                    <li>
                      <Link
                        to="/"
                        className="block py-2 px-4 text-sm hover:bg-gray-600 text-gray-200 hover:text-white"
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="block py-2 px-4 text-sm hover:bg-gray-600 text-gray-200 hover:text-white"
                      >
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/logout"
                        className="block py-2 px-4 text-sm hover:bg-gray-600 text-gray-200 hover:text-white"
                      >
                        Sign Out
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </>
          ) : (
            <div>
              <Link
                className="text-white font-medium mr-3 text-sm hover:text-indigo-300"
                to="/login"
              >
                Log in
              </Link>
              <button className="text-white focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 bg-indigo-600 hover:bg-indigo-700">
                <Link to="/signup">Sign up</Link>
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
