// src/pages/Register.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar';
import AuthCard from '../components/authcard';
import Button from '../components/button';

function Register() {
  const handleRegisterSubmit = (userData) => {
    console.log('Data Register:', userData);
    alert('Registrasi berhasil! (Simulasi)');
    // Di sini nanti bisa ditambahkan logic untuk API call, redirect, dll.
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar di halaman register */}
      {/* <Navbar activePage="" /> */}

      {/* Konten Utama */}
      <div className="container mx-auto pt-16 pb-4 pl-24 pr-24 flex justify-center">
        <AuthCard
          type="register"
          title="Daftar Akun Baru"
          linkText="Sudah punya akun?"
          linkTo="/login"
          onSubmit={handleRegisterSubmit}
        />
      </div>

      {/* Link Lupa Password & SSO */}
      {/* <div className="container mx-auto px-4 mt-8 text-center">
        <Link to="/forgot-password" className="text-blue-500 hover:underline">
          Lupa kata sandi?
        </Link>
        <div className="mt-4">
          <Button variant="outline" className="w-64">
            Daftar dengan Google
          </Button>
        </div>
      </div> */}
    </div>
  );
}

export default Register;