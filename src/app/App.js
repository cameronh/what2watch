import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store/user';

const App = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  return (
    <div>
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
              What2Watch
            </span>
          </div>
          <div className="flex items-center md:order-2">
            {user ? (
              <button
                type="button"
                className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-600"
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
            ) : (
              <div>
                <Link className="text-white font-medium mr-3 text-sm hover:text-indigo-300" to="/login">Log in</Link>
                <button className="text-white focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 bg-indigo-600 hover:bg-indigo-700">
                    <Link to="/signup">Sign up</Link>
                  </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default App;
