// src/pages/homepage.jsx
import React, { useRef } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import FilmCard from "../components/filmcard";
import Button from "../components/button";

function Homepage() {
  // Reference Scroll
  const popularRef = useRef(null);
  const trendingRef = useRef(null);
  const newReleaseRef = useRef(null);

  const scroll = (ref, dir) => {
    if (!ref.current) return;
    const amount = 300;
    ref.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth"
    });
  };

  // Data dummy
  const popularFilms = [
    { id: 1, title: "Inception", poster: "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg", rating: 8.8, year: 2010, type: "Film" },
    { id: 2, title: "Interstellar", poster: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg", rating: 8.6, year: 2014, type: "Film" },
    { id: 3, title: "The Dark Knight", poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg", rating: 9.0, year: 2008, type: "Film" },
    { id: 4, title: "Dune 2", poster: "https://image.tmdb.org/t/p/w500/8b8R8l88QOMo2W8lZokN7k4lnY0.jpg", rating: 8.9, year: 2024, type: "Film" },
    { id: 5, title: "Avengers: Endgame", poster: "https://image.tmdb.org/t/p/w500/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg", rating: 8.4, year: 2019, type: "Film" },
    { id: 6, title: "Avatar", poster: "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg", rating: 7.9, year: 2009, type: "Film" },
    { id: 7, title: "Deadpool", poster: "https://image.tmdb.org/t/p/w500/fSRb7vyIP8rQpL0I47P3qUsEKX3.jpg", rating: 8.0, year: 2016, type: "Film" },
    { id: 8, title: "Venom", poster: "https://image.tmdb.org/t/p/w500/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg", rating: 7.8, year: 2018, type: "Film" },
    { id: 9, title: "Black Panther", poster: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg", rating: 7.3, year: 2018, type: "Film" },
    { id: 10, title: "Frozen", poster: "https://image.tmdb.org/t/p/w500/mbm8k3GFhXS0ROd9AD1gqYbIFbM.jpg", rating: 7.3, year: 2013, type: "Film" },
    { id: 11, title: "Avengers: Endgame", poster: "https://image.tmdb.org/t/p/w500/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg", rating: 8.4, year: 2019, type: "Film" },
    { id: 12, title: "Avatar", poster: "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg", rating: 7.9, year: 2009, type: "Film" },
    { id: 13, title: "Deadpool", poster: "https://image.tmdb.org/t/p/w500/fSRb7vyIP8rQpL0I47P3qUsEKX3.jpg", rating: 8.0, year: 2016, type: "Film" },
    { id: 14, title: "Venom", poster: "https://image.tmdb.org/t/p/w500/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg", rating: 7.8, year: 2018, type: "Film" },
    { id: 15, title: "Black Panther", poster: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg", rating: 7.3, year: 2018, type: "Film" },
    { id: 16, title: "Frozen", poster: "https://image.tmdb.org/t/p/w500/mbm8k3GFhXS0ROd9AD1gqYbIFbM.jpg", rating: 7.3, year: 2013, type: "Film" },
    ];

  const trendingFilms = [
    { id: 17, title: "Dune 2", poster: "https://image.tmdb.org/t/p/w500/8b8R8l88QOMo2W8lZokN7k4lnY0.jpg", rating: 8.9, year: 2024, type: "Film" },
    { id: 18, title: "Avengers: Endgame", poster: "https://image.tmdb.org/t/p/w500/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg", rating: 8.4, year: 2019, type: "Film" },
    { id: 19, title: "Avatar", poster: "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg", rating: 7.9, year: 2009, type: "Film" },
    { id: 20, title: "Deadpool", poster: "https://image.tmdb.org/t/p/w500/fSRb7vyIP8rQpL0I47P3qUsEKX3.jpg", rating: 8.0, year: 2016, type: "Film" },
    { id: 21, title: "Venom", poster: "https://image.tmdb.org/t/p/w500/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg", rating: 7.8, year: 2018, type: "Film" },
    { id: 22, title: "Black Panther", poster: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg", rating: 7.3, year: 2018, type: "Film" },
    { id: 23, title: "Frozen", poster: "https://image.tmdb.org/t/p/w500/mbm8k3GFhXS0ROd9AD1gqYbIFbM.jpg", rating: 7.3, year: 2013, type: "Film" },
    { id: 24, title: "Dune 2", poster: "https://image.tmdb.org/t/p/w500/8b8R8l88QOMo2W8lZokN7k4lnY0.jpg", rating: 8.9, year: 2024, type: "Film" },
    { id: 25, title: "Avengers: Endgame", poster: "https://image.tmdb.org/t/p/w500/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg", rating: 8.4, year: 2019, type: "Film" },
    { id: 26, title: "Avatar", poster: "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg", rating: 7.9, year: 2009, type: "Film" },
    { id: 27, title: "Deadpool", poster: "https://image.tmdb.org/t/p/w500/fSRb7vyIP8rQpL0I47P3qUsEKX3.jpg", rating: 8.0, year: 2016, type: "Film" },
    { id: 28, title: "Venom", poster: "https://image.tmdb.org/t/p/w500/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg", rating: 7.8, year: 2018, type: "Film" },
    { id: 29, title: "Black Panther", poster: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg", rating: 7.3, year: 2018, type: "Film" },
    { id: 10, title: "Frozen", poster: "https://image.tmdb.org/t/p/w500/mbm8k3GFhXS0ROd9AD1gqYbIFbM.jpg", rating: 7.3, year: 2013, type: "Film" },
    ];

  // Hero Banner
  const heroFilm = {
    title: "Deadpool",
    description: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
    year: 2023,
    rating: 8.4,
    type: "Film",
    poster: "https://image.tmdb.org/t/p/w500/fSRb7vyIP8rQpL0I47P3qUsEKX3.jpg",
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar activePage="home" />

      {/* Hero Section */}
      <section className="relative min-h-[700px] flex items-center px-4 md:px-8">
        
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: "url('https://image.tmdb.org/t/p/original/fSRb7vyIP8rQpL0I47P3qUsEKX3.jpg')" }}
        ></div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

        <div className="relative z-10 max-w-[650px] mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {heroFilm.title}
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-8">
            {heroFilm.description}
          </p>

          <div className="flex space-x-4">
            <Button variant="primary" size="lg">Mulai</Button>
            <Button variant="outline" size="lg">Selengkapnya</Button>
          </div>
        </div>

      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">

        {/* Popular */}
        <section className="mb-12 relative">
          <h2 className="text-2xl font-bold mb-6">Film Populer</h2>

          <Button onClick={() => scroll(popularRef, "left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/70 px-3 py-4 rounded-r-lg z-20">
            ◀
          </Button>

          <div className="flex space-x-4 overflow-x-auto no-scrollbar scroll-smooth" ref={popularRef}>
            {popularFilms.map(film => <FilmCard key={film.id} {...film} />)}
          </div>

          <Button onClick={() => scroll(popularRef, "right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/70 px-3 py-4 rounded-l-lg z-20">
            ▶
          </Button>
        </section>

        {/* Trending */}
        <section className="mb-12 relative">
          <h2 className="text-2xl font-bold mb-6">Trending</h2>

          <Button onClick={() => scroll(trendingRef, "left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/70 px-3 py-4 rounded-r-lg z-20">
            ◀
          </Button>

          <div className="flex space-x-4 overflow-x-auto no-scrollbar scroll-smooth" ref={trendingRef}>
            {trendingFilms.map(film => <FilmCard key={film.id} {...film} />)}
          </div>

          <Button onClick={() => scroll(trendingRef, "right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/70 px-3 py-4 rounded-l-lg z-20">
            ▶
          </Button>

        </section>

        {/* New Releases */}
        <section className="mb-12 relative">
          <h2 className="text-2xl font-bold mb-6">New Releases</h2>

          <Button onClick={() => scroll(newReleaseRef, "left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/70 px-3 py-4 rounded-r-lg z-20">
            ◀
          </Button>

          <div className="flex space-x-4 overflow-x-auto no-scrollbar scroll-smooth" ref={newReleaseRef}>
            {trendingFilms.map(film => <FilmCard key={`new-${film.id}`} {...film} />)}
          </div>

          <Button onClick={() => scroll(newReleaseRef, "right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/70 px-3 py-4 rounded-l-lg z-20">
            ▶
          </Button>

        </section>

      </main>

      <Footer />
    </div>
  );
}

export default Homepage;
