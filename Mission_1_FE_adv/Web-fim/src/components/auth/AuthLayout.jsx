import React from "react";

export default function AuthLayout({ children, bgImage }) {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage: bgImage ? `url(${bgImage})` : "none",
        backgroundColor: "#000",
      }}
    >
      {/* Overlay hitam transparan */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Konten form */}
      <div className="relative z-10 w-full max-w-md px-6 py-8">
        <div className="bg-[#141518]/90 backdrop-blur-md border border-gray-800 rounded-2xl shadow-2xl p-6">
          {/* Logo */}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold tracking-wide">
              🎬 <span className="text-white">CHILL</span>
            </h1>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
}
