// src/components/navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const NavItem = ({ to, children, isActive = false }) => {
  const baseClasses = "px-3 py-2 rounded-md text-sm font-medium transition-colors";
  const activeClasses = isActive ? "bg-gray-800 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white";
  return (
    <Link to={to} className={`${baseClasses} ${activeClasses}`}>
      {children}
    </Link>
  );
};

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative ml-3">
      <div>
        <button
          type="button"
          className="flex text-sm rounded-full focus:outline-none"
          id="user-menu-button"
          aria-expanded={isOpen}
          onClick={toggleDropdown}
        >
          <span className="sr-only">Open user menu</span>
          <img
            className="h-8 w-8 rounded-full"
            src="../src/assets/react.svg" // Ganti dengan avatar user nanti
            alt="User Avatar"
          />
        </button>
      </div>

      {isOpen && (
        <div
          className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-800 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="user-menu-button"
        >
          <Link
            to="/profile"
            className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
            role="menuitem"
            onClick={() => setIsOpen(false)} // Tutup dropdown saat klik
          >
            Your Profile
          </Link>
          <Link
            to="/settings"
            className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
            role="menuitem"
            onClick={() => setIsOpen(false)}
          >
            Settings
          </Link>
          <Link
            to="/login"
            className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
            role="menuitem"
            onClick={() => setIsOpen(false)}
          >
            Sign out
          </Link>
        </div>
      )}
    </div>
  );
};

function Navbar({ activePage = '' }) {
  // State untuk dropdown mobile
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-gray-900 sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo & Mobile menu button */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-blue-500 text-xl font-bold">🎬CHILL</span>
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:ml-6 md:block">
              <div className="flex space-x-2">
                <NavItem to="/" isActive={activePage === 'home'}>Home</NavItem>
                <NavItem to="/series" isActive={activePage === 'series'}>Series</NavItem>
                <NavItem to="/film" isActive={activePage === 'film'}>Film</NavItem>
                <NavItem to="/mylist" isActive={activePage === 'mylist'}>My List</NavItem>
              </div>
            </div>
          </div>

          {/* Search Bar Placeholder */}
          <div className="hidden md:block">
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"/>
              <input
                type="text"
                placeholder="Search..."
                className="bg-gray-800 text-white rounded-full py-1 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
              />
            </div>
          </div>

          {/* Profile Dropdown & Mobile Menu Button */}
          <div className="flex items-center">
            <ProfileDropdown />
            {/* Mobile menu button */}
            <div className="md:hidden ml-4">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none"
                onClick={toggleMenu}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            <NavItem to="/" isActive={activePage === 'home'}>Home</NavItem>
            <NavItem to="/series" isActive={activePage === 'series'}>Series</NavItem>
            <NavItem to="/film" isActive={activePage === 'film'}>Film</NavItem>
            <NavItem to="/mylist" isActive={activePage === 'mylist'}>My List</NavItem>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;