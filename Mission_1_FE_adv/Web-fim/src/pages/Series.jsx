// src/components/pages/Series,jsx
import React, { useRef } from "react";
import Navbar from "../components/auth/Navbar";
import Footer from "../components/auth/Footer";
import useSeries from "../hooks/useSeries";

const safeSlice = (arr, start, end) => arr.slice(start, Math.min(end, arr.length));

const Series = ({searchQuery, onSearch}) => {
 const { series, loading } = useSeries();

const filteredSeries = series.filter(item =>
  item.title?.toLowerCase().includes(searchQuery.toLowerCase())
  );

const isSearching = searchQuery.trim() !== "";

if (loading) return <p className="text-white p-6">Loading...</p>;

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white">
      <Navbar activePage="series" onSearch={onSearch} searchQuery={searchQuery} />

      {/* JIKA ADA SEARCH, TAMPILKAN HASIL PENCARIAN */}
      {isSearching && (
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">
            Hasil Pencarian: "{searchQuery}"
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {filteredSeries.length === 0 ? (
              <p className="text-gray-400 col-span-full">Tidak ada series yang ditemukan.</p>
            ) : (
              filteredSeries.map((series) => (
                <div key={series.id} className="bg-gray-800 p-2 rounded-lg">
                  <img src={series.poster} alt={series.title} className="rounded" />
                  <h3 className="mt-2 font-semibold">{series.title}</h3>
                  <p className="text-sm text-gray-400">{series.year}</p>
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
          src={series[1]?.poster}
          className="w-full h-full object-cover opacity-80"
          alt={series[1]?.title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/40 to-transparent" />

        <div className="absolute bottom-16 left-12 max-w-xl">
          <h1 className="text-4xl font-bold mb-4">{series[1]?.title}</h1>
          <p className="text-gray-300 mb-6">
            Series pilihan terbaik untuk hari ini
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
        <SeriesRow title="Melanjutkan Tonton Series" data={safeSlice(series, 5, 12)}/>
        <SeriesRow title="Series Persembahan Chill" data={safeSlice(series, 0, 40)}/>
        <SeriesRow title="Top Rating Series Hari Ini" data={ series
          .filter((f) => Number(f.rating) > 9)
          .sort((a, b) => Number(b.rating) - Number(a.rating))
          .slice(0, 29)}/>
        <SeriesRow title="Series Trending" data={safeSlice(series, 15, 29)}/>
        <SeriesRow title="Rilis Baru" data={ series
          .filter((f) => Number(f.year) > 2020)
          .sort((a, b) => Number(b.year) - Number(a.year))
          .slice(0, 29)}/>
      </div>
      </>)}

      <Footer />
    </div>
  );
};

// SERIES ROW (WITH ARROWS)
const SeriesRow = ({ title, data }) => {
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
        aria-label="Scroll left"
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/60 text-white px-3 py-6 rounded-r-lg
          hidden md:flex items-center justify-center z-30 opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100"
      >
        ❮
      </button>

      {/* Arrow Right */}
      <button
        onClick={() => scrollBy(500)}
        aria-label="Scroll right"
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/60 text-white px-3 py-6 rounded-l-lg
          hidden md:flex items-center justify-center z-30 opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100"
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

// CARD (WITH BADGES & HOVER)
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

export default Series;