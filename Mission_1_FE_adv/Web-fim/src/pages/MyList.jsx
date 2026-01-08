// import React from "react";
// import Navbar from "../components/auth/Navbar";
// import Footer from "../components/auth/Footer";
// import popularFilms from "../utils/popularFilms";
// import popularSeries from "../utils/popularSeries";

// const MyList = () => {
//   // Gabungkan film + series
//   const allData = [...popularFilms.slice(0, 23), ...popularSeries.slice(0, 22)];

//   return (
//     <div className="min-h-screen bg-[#0F0F0F] text-white">
//       <Navbar activePage="mylist" showSearch={false} />

//       <div className="px-10 py-12">
//         <h1 className="text-3xl font-semibold mb-10">Daftar Saya</h1>

//         {/* GRID */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-6">
//           {allData.map((item) => (
//             <Card item={item} key={item.id} />
//           ))}
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };


// /*CARD COMPONENT*/
// const Card = ({ item }) => {
//   const isTop10 = Number(item.rating) > 9.0;
//   const isNewEpisode = Number(item.year) > 2020;

//   return (
//     <div
//       className="relative rounded-xl overflow-hidden bg-[#1A1A1A] cursor-pointer group"
//       role="article"
//       aria-label={item.title}
//     >
//       {/* Poster */}
//       <img
//         src={item.poster}
//         alt={item.title}
//         className="w-full h-[280px] object-cover rounded-xl group-hover:scale-105 transition"
//       />

//       {/* Tags */}
//       {isNewEpisode && (
//         <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-md">
//           Episode Baru
//         </div>
//       )}

//       {isTop10 && (
//         <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded-md">
//           Top 10
//         </div>
//       )}

//       {/* Hover Overlay */}
//       <div className="absolute inset-0 bg-black/30 p-3 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end rounded-xl">
//         <h3 className="text-sm font-semibold line-clamp-2">{item.title}</h3>
//         <p className="text-gray-300 text-xs mb-2">
//           ⭐ {item.rating} • {item.year}
//         </p>

//         <button className="bg-white text-black text-sm px-4 py-1 rounded-md">
//           Play
//         </button>
//       </div>
//     </div>
//   );
// };

// export default MyList;
import React from "react";
import Navbar from "../components/auth/Navbar";
import Footer from "../components/auth/Footer";
import { useFilms } from "../hooks/useFilms";
import useSeries from "../hooks/useSeries";

const MyList = () => {
  const { films, loading: filmsLoading } = useFilms();
  const { series, loading: seriesLoading } = useSeries();

  // Loading state
  if (filmsLoading || seriesLoading) {
    return (
      <div className="min-h-screen bg-[#0F0F0F] text-white flex items-center justify-center">
        Loading...
      </div>
    );
  }

  // 🔥 Gabungkan film + series dari API
  const allData = [...films, ...series];

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white">
      <Navbar activePage="mylist" showSearch={false} />

      <div className="px-10 py-12">
        <h1 className="text-3xl font-semibold mb-10">Daftar Saya</h1>

        {allData.length === 0 ? (
          <p className="text-gray-400">Belum ada film atau series di daftar.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-6">
            {allData.map((item) => (
              <Card item={item} key={item.id} />
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

/* ================= CARD ================= */
const Card = ({ item }) => {
  const isTop10 = Number(item.rating) > 9.0;
  const isNewEpisode = Number(item.year) > 2020;

  return (
    <div className="relative rounded-xl overflow-hidden bg-[#1A1A1A] cursor-pointer group">
      <img
        src={item.poster}
        alt={item.title}
        className="w-full h-[280px] object-cover rounded-xl group-hover:scale-105 transition"
      />

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

      <div className="absolute inset-0 bg-black/30 p-3 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end rounded-xl">
        <h3 className="text-sm font-semibold line-clamp-2">{item.title}</h3>
        <p className="text-gray-300 text-xs mb-2">
          ⭐ {Number(item.rating).toFixed(1)} • {item.year}
        </p>

        <button className="bg-white text-black text-sm px-4 py-1 rounded-md">
          Play
        </button>
      </div>
    </div>
  );
};

export default MyList;
