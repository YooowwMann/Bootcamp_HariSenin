// src/pages/Login.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar';
import AuthCard from '../components/authcard';
import Button from '../components/button';

function Login() {
  const handleLoginSubmit = (userData) => {
    console.log('Data Login:', userData);
    alert('Login berhasil! (Simulasi)');
    // Di sini nanti bisa ditambahkan logic untuk API call, redirect, dll.
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar di halaman login (bisa tidak aktif atau kosong) */}
      {/* <Navbar activePage="" /> */}

      {/* Konten Utama */}
      <div className="container mx-auto pt-16 pb-4 pl-24 pr-24 flex justify-center">
        <AuthCard
          type="login"
          title="Masuk ke Akun"
          linkText="Belum punya akun?"
          linkTo="/register"
          onSubmit={handleLoginSubmit}
        />
      </div>

      {/* Link Lupa Password & SSO */}
      <div className="container mx-auto px-4 text-center">
        <Link to="/forgot-password" className="container mx-auto px-4 mt-8 text-center text-blue-500 hover:underline">
          Lupa kata sandi?
        </Link>
        {/* <div className="mt-4">
          <Button variant="outline" className="w-64">
            Masuk dengan Google
          </Button>
        </div> */}
      </div>
    </div>
  );
}

export default Login;