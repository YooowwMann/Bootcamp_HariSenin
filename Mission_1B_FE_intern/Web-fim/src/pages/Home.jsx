import React, { useRef } from "react";
import Navbar from "../components/auth/Navbar";
import Footer from "../components/auth/Footer";
import popularFilms from "../utils/popularFilms";
import popularSeries from "../utils/popularSeries";

// Helper slice
const safeSlice = (arr, start, end) => arr.slice(start, Math.min(end, arr.length));

const Home = () => {
  // CONTINUE WATCHING (FILM + SERIES)
  const continueWatching = [
    ...safeSlice(popularFilms, 0, 4),
    ...safeSlice(popularSeries, 0, 4),
  ];

  // TOP RATING FILM & SERIES
  const topRating = [
    ...popularFilms.filter(f => Number(f.rating) > 9),
    ...popularSeries.filter(s => Number(s.rating) > 9),
  ]
    .sort((a, b) => Number(b.rating) - Number(a.rating))
    .slice(0, 18);

  // TRENDING FILM
  const filmTrending = safeSlice(popularFilms, 5, 17);

  // RILIS BARU (Film + Series)
  const newReleases = [
    ...popularFilms.filter(f => Number(f.year) > 2020),
    ...popularSeries.filter(s => Number(s.year) > 2020),
  ]
    .sort((a, b) => Number(b.year) - Number(a.year))
    .slice(0, 18);

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white">
      <Navbar activePage="home" />

      {/* HERO */}
      <div className="relative w-full h-[500px]">
        <img
          src="https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg"
          className="w-full h-full object-cover opacity-80"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/40 to-transparent" />

        <div className="absolute bottom-20 left-12 max-w-xl">
          <h1 className="text-4xl font-bold mb-4">Stranger Things</h1>
          <p className="text-gray-300 mb-6">
            Sebuah benda tak dikenal mengambil alih dunia. Dalam kepanikan,
            Departemen Pertahanan merekrut para pelajar untuk membentuk pasukan tempur garis depan.
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

      {/* CONTENT */}
      <div className="px-10 py-12 space-y-12">

        {/* CONTINUE WATCHING */}
        <RowSection title="Melanjutkan Tonton Film & Series" data={continueWatching} />

        {/* TOP RATING COMBINED */}
        <RowSection title="Top Rating Film dan Series Hari ini" data={topRating} />

        {/* TRENDING FILM */}
        <RowSection title="Film Trending" data={filmTrending} />

        {/* RILIS BARU */}
        <RowSection title="Rilis Baru" data={newReleases} />
      </div>

      <Footer />
    </div>
  );
};


/*ROW*/
const RowSection = ({ title, data }) => {
  const sliderRef = useRef(null);

  const scrollBy = (amount) => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({ left: amount, behavior: "smooth" });
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
        <style>{`::-webkit-scrollbar { display: none; }`}</style>

        {data.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};


/*CARD*/
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
          loading="lazy"
        />

        {/* BADGES */}
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

        {/* HOVER OVERLAY ONLY ON CARD */}
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
