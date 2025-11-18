// src/components/AuthCard.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './button'; // Import Button yang sudah kita buat

function AuthCard({ type = 'login', onSubmit, title, linkText, linkTo }) {
  const [formData, setFormData] = useState({
    name: '', // Hanya untuk register
    email: '',
    phone: '', // Hanya untuk register
    password: '',
    confirmPassword: '' // Hanya untuk register
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validasi sederhana untuk register
    if (type === 'register' && formData.password !== formData.confirmPassword) {
      alert('Konfirmasi password tidak cocok!');
      return;
    }
    // Panggil fungsi submit dari props dengan data
    if (onSubmit) onSubmit(formData);
  };

  return (
    <div className="bg-gray-800 p-8 rounded-xl shadow-lg max-w-md w-full">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Input Nama (hanya untuk register) */}
        {type === 'register' && (
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
              Nama Lengkap
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Masukkan nama kamu"
              required={type === 'register'}
            />
          </div>
        )}

        {/* Input Email (untuk login & register) */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="contoh@email.com"
            required
          />
        </div>

        {/* Input Phone (hanya untuk register) */}
        {type === 'register' && (
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
              Nomor HP
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="081234567890"
              required={type === 'register'}
            />
          </div>
        )}

        {/* Input Password (untuk login & register) */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
            Kata Sandi
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="••••••••"
            required
          />
        </div>

        {/* Input Confirm Password (hanya untuk register) */}
        {type === 'register' && (
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-1">
              Konfirmasi Kata Sandi
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
              required={type === 'register'}
            />
          </div>
        )}

        {/* Tombol Submit */}
        <Button type="submit" className="w-full py-3">
          {type === 'login' ? 'Masuk' : 'Daftar'}
        </Button>
      </form>

      {/* Link Bawah */}
      <div className="mt-6 text-center">
        <p className="text-gray-400">
          {linkText}{' '}
          <Link to={linkTo} className="text-blue-500 hover:underline">
            Di sini
          </Link>
        </p>
      </div>

      {/* SSO Placeholder (hanya untuk login) */}
      {type === 'login' && (
        <>
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-700"></div>
            <span className="mx-4 text-gray-500 text-sm">Atau</span>
            <div className="flex-grow border-t border-gray-700"></div>
          </div>
          <Button variant="outline" className="w-full py-3">
            Masuk dengan Google
          </Button>
        </>
      )}
    </div>
  );
}

export default AuthCard;