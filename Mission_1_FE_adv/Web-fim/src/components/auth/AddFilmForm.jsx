import { useState } from 'react';
import { createFilm } from "../../services/api/films";

export default function AddFilmForm({ onSuccess }) {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !image) return;

    await createFilm({ 
        title, 
        poster: image,
        rating: "0",
        year: "2026",
        type: "film" });
    setTitle('');
    setImage('');
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 flex gap-2">
      <input
        className="border border-gray-600 bg-[#1A1A1A] text-white p-2 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
        placeholder="Judul film"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="border border-gray-600 bg-[#1A1A1A] text-white p-2 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
        placeholder="URL gambar"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button className="bg-red-600 hover:bg-red-700 text-white px-4 rounded-md">Add</button>
    </form>
  );
}
