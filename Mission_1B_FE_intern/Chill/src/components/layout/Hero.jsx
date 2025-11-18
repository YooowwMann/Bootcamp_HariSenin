import React from "react";
import movies from "../src/utils/movies";

export default function Hero({ onPlay }) {
  const hero = movies.hero;
  return (
    <section className="relative mb-8">
      <div
        className="w-full h-[420px] rounded-2xl overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.55), rgba(0,0,0,0.85)), url(${hero.backdrop})`
        }}
      >
        <div className="container mx-auto h-full flex items-end pb-10">
          <div className="flex gap-6 items-end">
            <img src={hero.image} alt={hero.title} className="w-[220px] h-[320px] object-cover rounded-xl shadow-2xl" />
            <div className="text-white max-w-2xl">
              <h2 className="text-3xl font-extrabold mb-2">{hero.title}</h2>
              <p className="text-sm text-chillMuted mb-3">{hero.year} • {hero.genres.join(', ')} • {hero.runtime}</p>
              <p className="text-sm text-gray-200 mb-4 line-clamp-3">{hero.desc}</p>
              <div className="flex gap-3">
                <button onClick={() => onPlay && onPlay(hero)} className="px-5 py-2 rounded-xl bg-white text-black font-semibold">Play</button>
                <button className="px-4 py-2 rounded-xl border border-white/20 text-white">Simpan</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
