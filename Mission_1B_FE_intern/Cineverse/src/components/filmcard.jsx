// src/components/FilmCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function FilmCard({ title, poster, rating, year, type, id }) {
  return (
    <Link to={`/detail/${id}`} className="block group"> {/* Wrap card in Link for navigation */}
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md transition-transform duration-200 group-hover:scale-105 group-hover:shadow-xl">
        <div className="relative">
          <img
            src={poster || "https://via.placeholder.com/300x450?text=No+Poster"} // Placeholder jika tidak ada poster
            alt={title}
            className="w-full h-64 object-cover"
          />
          <div className="absolute top-2 right-2 bg-black bg-opacity-70 rounded-full px-2 py-1 text-xs flex items-center">
            <span>⭐</span> {/* Ikon bintang */}
            <span className="ml-1">{rating}</span>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-white truncate group-hover:text-blue-400 transition-colors">
            {title}
          </h3>
          <p className="text-gray-400 text-sm mt-1">{type} • {year}</p>
        </div>
      </div>
    </Link>
  );
}

export default FilmCard;