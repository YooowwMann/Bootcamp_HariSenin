import React from "react";

export default function MovieCard({ item, onClick }) {
  return (
    <div
      className="w-[160px] min-w-[160px] cursor-pointer group"
      onClick={() => onClick && onClick(item)}
      role="button"
    >
      <div className="rounded-xl overflow-hidden shadow-lg transform group-hover:scale-105 transition-all duration-300">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-[230px] object-cover"
        />
      </div>
      <div className="mt-2">
        <h4 className="text-sm font-semibold truncate">{item.title}</h4>
      </div>
    </div>
  );
}
