import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo dan Deskripsi */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-blue-500 text-xl font-bold mb-3">🎬CHILL</h3>
            <p className="text-gray-400 mb-4">
              Temukan film dan series favoritmu sekarang!
            </p>
            <p className="text-gray-500 text-sm">
              © 2025 🎬CHILL. All rights reserved.
            </p>
          </div>

          {/* Kolom 1: Genre */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Genre</h4>
            <ul className="space-y-2">
              <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Aksi</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Drama</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Komedi</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Sains & Alam</Link></li>
            </ul>
          </div>

          {/* Kolom 2: Bantuan */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Bantuan</h4>
            <ul className="space-y-2">
              <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Kontak Kami</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Privasi</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Syarat & Ketentuan</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;