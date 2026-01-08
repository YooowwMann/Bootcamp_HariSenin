import React, { useRef } from "react";
import Navbar from "../components/auth/Navbar";
import Footer from "../components/auth/Footer";
import AddFilmForm from "../components/auth/AddFilmForm";
import { useFilms } from "../hooks/useFilms";
import useSeries from "../hooks/useSeries";

// Helper
const safeSlice = (arr, start, end) =>
  arr.slice(start, Math.min(end, arr.length));

const Home = ({ searchQuery, onSearch }) => {
  const isSearching = searchQuery.trim() !== "";

  // ✅ DATA DARI API (HOOK)
  const {
    films,
    loading: loadingFilms,
    refetch: refetchFilms,
  } = useFilms();

  const {
    series,
    loading: loadingSeries,
  } = useSeries();

  const isLoading = loadingFilms || loadingSeries;

  // 🔍 SEARCH (FILM + SERIES)
  const allData = [...films, ...series];
  const filteredSearch = allData.filter((item) =>
    item.title?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // 🎬 HOME SECTIONS
  const continueWatching = [
    ...safeSlice(films, 0, 8),
    ...safeSlice(series, 0, 8),
  ];

  const topRating = [...films, ...series]
    .filter((item) => Number(item.rating) > 9)
    .sort((a, b) => Number(b.rating) - Number(a.rating))
    .slice(0, 18);

  const filmTrending = safeSlice(films, 5, 17);
  const seriesTrending = safeSlice(series, 5, 17);

  const newReleases = [...films, ...series]
    .filter((item) => Number(item.year) > 2020)
    .sort((a, b) => Number(b.year) - Number(a.year))
    .slice(0, 18);

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white">
      <Navbar activePage="home" onSearch={onSearch} searchQuery={searchQuery} />

      {/* FORM TAMBAH FILM */}
      <div className="px-10 pt-6">
        <AddFilmForm onSuccess={refetchFilms} />
      </div>

      {/* LOADING */}
      {isLoading && (
        <div className="px-10 py-6 text-gray-400">
          Loading data...
        </div>
      )}

      {/* SEARCH MODE */}
      {!isLoading && isSearching && (
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">
            Hasil Pencarian: "{searchQuery}"
          </h2>

          {filteredSearch.length === 0 ? (
            <p className="text-gray-400">Tidak ada hasil ditemukan.</p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {filteredSearch.map((item) => (
                <div key={item.id} className="bg-gray-800 p-2 rounded-lg">
                  <img src={item.poster} alt={item.title} />
                  <h3 className="mt-2 font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.year}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* NORMAL MODE */}
      {!isLoading && !isSearching && (
        <div className="px-10 py-12 space-y-12">
          <RowSection title="Melanjutkan Tonton" data={continueWatching} />
          <RowSection title="Top Rating Hari Ini" data={topRating} />
          <RowSection title="Film Trending" data={filmTrending} />
          <RowSection title="Series Trending" data={seriesTrending} />
          <RowSection title="Rilis Baru" data={newReleases} />
        </div>
      )}

      <Footer />
    </div>
  );
};

/*        ROW SECTION SLIDER       */
const RowSection = ({ title, data }) => {
  const sliderRef = useRef(null);

  const scrollBy = (amount) => {
    sliderRef.current?.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <div className="relative group">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>

      {/* ARROW LEFT */}
      <button
        onClick={() => scrollBy(-500)}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/60 text-white px-3 py-6 rounded-r-lg
          hidden md:flex items-center justify-center z-30 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        ❮
      </button>

      {/* ARROW RIGHT */}
      <button
        onClick={() => scrollBy(500)}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/60 text-white px-3 py-6 rounded-l-lg
          hidden md:flex items-center justify-center z-30 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        ❯
      </button>

      {/* SLIDER */}
      <div
        ref={sliderRef}
        className="flex gap-5 overflow-x-scroll scroll-smooth pb-2 scrollbar-none"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {data.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};


/*             CARD                */
const Card = ({ item }) => {
  const isTop10 = Number(item.rating) > 9.0;
  const isNew = Number(item.year) > 2020;

  return (
    <div className="relative min-w-[200px] max-w-[200px] rounded-xl overflow-hidden bg-[#1A1A1A] cursor-pointer">
      <div className="relative group/card">
        <img
          src={item.poster}
          alt={item.title}
          className="w-full h-[300px] object-cover rounded-xl transition-transform duration-300 group-hover/card:scale-105"
        />

        {isNew && (
          <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-md">
            Episode Baru
          </div>
        )}

        {isTop10 && (
          <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded-md">
            Top 10
          </div>
        )}

        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/card:opacity-100 transition p-4 flex flex-col justify-end rounded-xl">
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

export default Home;