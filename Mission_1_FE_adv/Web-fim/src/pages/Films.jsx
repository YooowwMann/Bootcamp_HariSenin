import React, { useRef, useState } from "react";
import Navbar from "../components/auth/Navbar";
import Footer from "../components/auth/Footer";
// import popularFilms from "../utils/popularFilms";
import { useFilms } from '../hooks/useFilms';

const safeSlice = (arr, start, end) =>
  arr.slice(start, Math.min(end, arr.length));

const Film = ({ searchQuery, onSearch }) => {
  const { films, loading, error } = useFilms();

  const filteredFilms = films.filter((film) =>
    film.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const isSearching = searchQuery.trim() !== "";

  if (loading) return <p className="text-white p-6">Loading...</p>;
  if (error) return <p className="text-red-500 p-6">Gagal mengambil data film</p>;

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white">
      <Navbar activePage="film" onSearch={onSearch} searchQuery={searchQuery} />
      
      {/* JIKA ADA SEARCH, TAMPILKAN HASIL PENCARIAN */}
      {isSearching && (
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">
            Hasil Pencarian: "{searchQuery}"
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {filteredFilms.length === 0 ? (
              <p className="text-gray-400 col-span-full">Tidak ada film ditemukan.</p>
            ) : (
              filteredFilms.map((film) => (
                <div key={film.id} className="bg-gray-800 p-2 rounded-lg">
                  <img src={film.poster} alt={film.title} className="rounded" />
                  <h3 className="mt-2 font-semibold">{film.title}</h3>
                  <p className="text-sm text-gray-400">{film.year}</p>
                </div>
              ))
            )}
          </div>
        </div>
      )}
      {/* JIKA SEARCH KOSONG, TAMPILKAN HERO SECTION + ROW */}
      {!isSearching && (<>

      {/* HERO SECTION */}
      <div className="relative w-full h-[500px]">
        <img
          src={films[1]?.poster}
          className="w-full h-full object-cover opacity-80"
          alt={films[1]?.title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/40 to-transparent" />

        <div className="absolute bottom-16 left-12 max-w-xl">
          <h1 className="text-4xl font-bold mb-4">{films[1]?.title}</h1>
          <p className="text-gray-300 mb-6">
            Film pilihan terbaik untuk kamu hari ini
          </p>

          <div className="flex gap-4">
            <button className="px-6 py-2 bg-white text-black rounded-lg font-semibold hover:bg-gray-300">
              Mulai
            </button>
            <button className="px-6 py-2 border border-gray-500 rounded-lg hover:bg-white/10">
              Selengkapnya
            </button>
          </div>
        </div>
      </div>

      {/* CONTENT SECTIONS */}
      <div className="px-10 py-12 space-y-12">
        <FilmRow title="Melanjutkan Tonton Film" data={safeSlice(films, 0, 10)} />
        <FilmRow title="Film Persembahan Chill" data={safeSlice(films, 0, 23)} />
        <FilmRow title="Top Rating Film Hari Ini" data={films.filter((f) => Number(f.rating) > 8.9).sort((a, b) => Number(b.rating) - Number(a.rating)).slice(0, 23)} />
        <FilmRow title="Film Trending" data={safeSlice(films, 10, 20)} />
        <FilmRow title="Rilis Baru" data={films.filter((f) => Number(f.year) > 2020).sort((a, b) => Number(b.year) - Number(a.year)).slice(0, 23)} />
      </div>
      </>)}

      <Footer />
    </div>
  );
};

/*FILM ROW (SCROLL)*/
const FilmRow = ({ title, data }) => {
  const sliderRef = useRef(null);

  const scrollBy = (distance) => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({ left: distance, behavior: "smooth" });
  };

  return (
    <div className="relative group">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>

      {/* Arrow Left */}
      <button
        onClick={() => scrollBy(-500)}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/60 text-white px-3 py-6 rounded-r-lg
          hidden md:flex items-center justify-center z-30 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        ❮
      </button>

      {/* Arrow Right */}
      <button
        onClick={() => scrollBy(500)}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/60 text-white px-3 py-6 rounded-l-lg
          hidden md:flex items-center justify-center z-30 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        ❯
      </button>

      {/* Slider */}
      <div
        ref={sliderRef}
        className="flex gap-5 overflow-x-scroll scroll-smooth scrollbar-none pb-2"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <style>{`::-webkit-scrollbar { display: none; }`}</style>

        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

/*FILM CARD*/
const Card = ({ item }) => {
  const isTop10 = Number(item.rating) > 9.0;
  const isNewEpisode = Number(item.year) > 2020;

  return (
    <div className="relative min-w-[200px] max-w-[200px] rounded-xl overflow-hidden bg-[#1A1A1A] cursor-pointer">

      <div className="relative group/card">
        {/* Poster */}
        <img
          src={item.poster}
          alt={item.title}
          loading="lazy"
          className="w-full h-[300px] object-cover transition-transform duration-300 group-hover/card:scale-105 rounded-xl"
        />

        {/* Badges */}
        {isNewEpisode && (
          <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-md">
            Episode Baru
          </div>
        )}

        {isTop10 && (
          <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded-md">
            Top 10
          </div>
        )}

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/30 p-4 rounded-xl opacity-0 group-hover/card:opacity-100 transition duration-300 flex flex-col justify-end">
          <h3 className="text-sm font-semibold line-clamp-2">{item.title}</h3>
          <p className="text-gray-300 text-xs mb-2">
            ⭐ {Number(item.rating).toFixed(1)} • {item.year}
          </p>

          <button className="bg-white text-black text-sm px-4 py-1 rounded-md">
            Play
          </button>
        </div>
      </div>
    </div>
  );
};

export default Film;