import React from 'react';
import { Link } from 'react-router-dom';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const NavItem = ({ to, children, isActive = false }) => {
  const base = "px-3 py-2 rounded-md text-sm font-medium transition-colors";
  const active = isActive ? "bg-gray-800 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white";
  return <Link to={to} className={`${base} ${active}`}>{children}</Link>;
};

const ProfileDropdown = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="relative ml-3">
      <button
        className="flex text-sm rounded-full focus:outline-none"
        onClick={() => setOpen(!open)}
      >
        <img
          className="h-8 w-8 rounded-full"
          src="../src/assets/react.svg"
          alt="User Avatar"
        />
      </button>

      {open && (
        <div className="absolute right-0 z-10 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1">
          <Link to="/profile" className="block px-4 py-2 text-sm hover:bg-gray-700">Your Profile</Link>
          <Link to="/settings" className="block px-4 py-2 text-sm hover:bg-gray-700">Settings</Link>
          <Link to="/auth/login" className="block px-4 py-2 text-sm hover:bg-gray-700">Sign out</Link>
        </div>
      )}
    </div>
  );
};

export default function Navbar({ activePage = '' }) {
  const [mobile, setMobile] = React.useState(false);

  return (
    <nav className="bg-gray-900 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Left */}
          <div className="flex items-center">
            <span className="text-blue-500 text-xl font-bold">🎬CHILL</span>

            <div className="hidden md:block md:ml-6">
              <div className="flex space-x-2">
                <NavItem to="/home" isActive={activePage === 'home'}>Home</NavItem>
                <NavItem to="/auth/series" isActive={activePage === 'series'}>Series</NavItem>
                <NavItem to="/auth/film" isActive={activePage === 'film'}>Film</NavItem>
                <NavItem to="/auth/mylist" isActive={activePage === 'mylist'}>My List</NavItem>
              </div>
            </div>
          </div>

          {/* Search */}
          <div className="hidden md:block">
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-gray-800 text-white rounded-full py-1 px-4 pl-10 w-64 focus:outline-none"
              />
            </div>
          </div>

          {/* Profile & mobile btn */}
          <div className="flex items-center">
            <ProfileDropdown />
            <button
              className="md:hidden ml-4 p-2 text-gray-400 hover:bg-gray-700 hover:text-white rounded-md"
              onClick={() => setMobile(!mobile)}
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobile && (
        <div className="md:hidden px-2 pb-3 pt-3 space-y-1 bg-gray-900">
          <NavItem to="/home" isActive={activePage === 'home'}>Home</NavItem>
          <NavItem to="/auth/series" isActive={activePage === 'series'}>Series</NavItem>
          <NavItem to="/auth/film" isActive={activePage === 'film'}>Film</NavItem>
          <NavItem to="/auth/mylist" isActive={activePage === 'mylist'}>My List</NavItem>
        </div>
      )}
    </nav>
  );
}
