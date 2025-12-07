import React, { useEffect, useState } from "react";
import Navbar from "../components/auth/Navbar";
import Footer from "../components/auth/Footer";
import popularFilms from "../utils/popularFilms";
import popularSeries from "../utils/popularSeries";
import { PencilIcon } from "@heroicons/react/24/solid";

const Profile = () => {
  const [user, setUser] = useState({ username: "", email: "" });

  // Load session dari localStorage
  useEffect(() => {
    const session = JSON.parse(localStorage.getItem("session"));
    if (session) {
      setUser({
        username: session.username || "",
        email: session.email || "",
      });
    }
  }, []);

  // Save perubahan ke localStorage (optional)
  const handleSave = () => {
    const session = { username: user.username, email: user.email };
    localStorage.setItem("session", JSON.stringify(session));
    alert("Profile berhasil diperbarui!");
  };

  // Ambil daftar saya (7 item saja)
  const myList = [...popularFilms.slice(0, 4), ...popularSeries.slice(0, 3)];

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white">
      <Navbar activePage="profile" showSearch={false} />

      <div className="px-10 py-12 flex gap-10">
        {/* LEFT SECTION */}
        <div className="w-1/2">
          <h1 className="text-3xl font-semibold mb-10">Profil Saya</h1>

          {/* Foto */}
          <div className="flex items-center gap-6 mb-8">
            <img
              src="../src/assets/react.svg"
              alt="avatar"
              className="w-24 h-24 rounded-full bg-gray-600 object-cover"
            />
            <div>
              <button className="px-4 py-2 bg-gray-800 rounded-lg border border-gray-600">
                Ubah Foto
              </button>
              <p className="text-xs text-gray-400 mt-1">Maksimal 2MB</p>
            </div>
          </div>

          {/* INPUT USERNAME */}
          <label className="text-sm text-gray-300">Nama Pengguna</label>
          <div className="relative mb-5">
            <input
              type="text"
              value={user.username}
              onChange={(e) =>
                setUser({ ...user, username: e.target.value })
              }
              className="w-full bg-[#1A1A1A] border border-gray-700 rounded-lg p-3 mt-1"
            />
            <PencilIcon className="w-5 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>

          {/* INPUT EMAIL */}
          <label className="text-sm text-gray-300">Email</label>
          <div className="relative mb-5">
            <input
              type="email"
              value={user.email}
              onChange={(e) =>
                setUser({ ...user, email: e.target.value })
              }
              className="w-full bg-[#1A1A1A] border border-gray-700 rounded-lg p-3 mt-1"
            />
            <PencilIcon className="w-5 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>

          {/* INPUT PASSWORD */}
          <label className="text-sm text-gray-300">Kata Sandi</label>
          <div className="relative mb-5">
            <input
              type="password"
              value="*********"
              disabled
              className="w-full bg-[#1A1A1A] border border-gray-700 rounded-lg p-3 mt-1"
            />
            <PencilIcon className="w-5 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>

          {/* BUTTON SIMPAN */}
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-blue-600 rounded-lg mt-3"
          >
            Simpan
          </button>
        </div>

        {/* RIGHT SECTION */}
        <div className="w-1/2">
          {/* BOX BELUM BERLANGGANAN */}
          <div className="bg-[#1A1A1A] rounded-2xl p-6 mb-10 border border-gray-700">
            <h2 className="text-lg font-semibold mb-2">
              Saat ini anda belum berlangganan
            </h2>
            <p className="text-sm text-gray-300 mb-4">
              Dapatkan Akses Tak Terbatas ke Ribuan Film dan Series Kesukaan Kamu!
            </p>
            <button className="px-4 py-2 bg-blue-600 rounded-lg">
              Mulai Berlangganan
            </button>
          </div>

          {/* DAFTAR SAYA */}
          <div className="flex justify-between mb-5">
            <h2 className="text-xl font-semibold">Daftar Saya</h2>
            <p className="text-sm text-gray-400 cursor-pointer hover:text-gray-200">
              Lihat Semua
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {myList.map((item) => {
                const isTop10 = Number(item.rating) > 9;
                const isNewEpisode = Number(item.year) > 2020;

                return (
                <div
                    key={item.id}
                    className="relative rounded-xl overflow-hidden bg-[#1A1A1A] cursor-pointer"
                >
                    {/* Poster */}
                    <img
                    src={item.poster}
                    alt={item.title}
                    className="w-full h-[180px] object-cover rounded-xl hover:scale-105 transition"
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
                    <div className="absolute inset-0 bg-black/30 p-3 opacity-0 hover:opacity-100 transition flex flex-col justify-end rounded-xl">
                    <h3 className="text-sm font-semibold line-clamp-2">{item.title}</h3>
                    <p className="text-gray-300 text-xs mb-2">
                        ⭐ {item.rating} • {item.year}
                    </p>

                    <button className="bg-white text-black text-sm px-4 py-1 rounded-md">
                        Play
                    </button>
                    </div>
                </div>
                );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Profile;
