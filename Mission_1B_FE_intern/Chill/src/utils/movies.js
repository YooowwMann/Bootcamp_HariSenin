const movies = {
  hero: {
    id: 999,
    title: "Guardian of The Galaxy Vol. 3",
    year: 2023,
    rating: "PG-13",
    runtime: "2h 30m",
    genres: ["Action", "Sci-Fi"],
    image: "/src/assets/images/hero-guardian.jpg",
    backdrop: "/src/assets/images/hero-backdrop.jpg",
    desc: "Masih gerah karena kehilangan Gamora, Peter Quill..."
  },
  sections: [
    {
      id: "continue",
      title: "Melanjutkan Tonton Series",
      items: [
        { id: 1, title: "Brooklyn 9-9", image: "/src/assets/images/1.jpg" },
        { id: 2, title: "The Office", image: "/src/assets/images/2.jpg" },
        { id: 3, title: "The Boys", image: "/src/assets/images/3.jpg" },
        { id: 4, title: "Arcane", image: "/src/assets/images/4.jpg" },
        { id: 5, title: "Stranger Things", image: "/src/assets/images/5.jpg" }
      ]
    },
    {
      id: "chill",
      title: "Series Persembahan Chill",
      items: [
        { id: 11, title: "The Sea", image: "/src/assets/images/11.jpg" },
        { id: 12, title: "Big Hero", image: "/src/assets/images/12.jpg" },
        { id: 13, title: "Lost", image: "/src/assets/images/13.jpg" },
        { id: 14, title: "Mystery", image: "/src/assets/images/14.jpg" }
      ]
    },
    {
      id: "top",
      title: "Top Rating Series Hari ini",
      items: [
        { id: 21, title: "Sonic", image: "/src/assets/images/21.jpg" },
        { id: 22, title: "Jurassic World", image: "/src/assets/images/22.jpg" },
        { id: 23, title: "All of Us Are Dead", image: "/src/assets/images/23.jpg" },
        { id: 24, title: "Big Hero 6", image: "/src/assets/images/24.jpg" }
      ]
    },
    {
      id: "trending",
      title: "Series Trending",
      items: [
        { id: 31, title: "Tomorrow War", image: "/src/assets/images/31.jpg" },
        { id: 32, title: "Guardians", image: "/src/assets/images/32.jpg" },
        { id: 33, title: "A Man Called Otto", image: "/src/assets/images/33.jpg" }
      ]
    },
    {
      id: "new",
      title: "Rilis Baru",
      items: [
        { id: 41, title: "New 1", image: "/src/assets/images/41.jpg" },
        { id: 42, title: "New 2", image: "/src/assets/images/42.jpg" },
        { id: 43, title: "New 3", image: "/src/assets/images/43.jpg" }
      ]
    }
  ]
};

export default movies;
