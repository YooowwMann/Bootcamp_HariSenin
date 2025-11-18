// src/components/Modal.jsx
import React from 'react';

function Modal({ isOpen, onClose, children, title }) {
  if (!isOpen) return null; // Jika tidak terbuka, jangan render apa-apa

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      {/* Modal Container */}
      <div className="bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-xl font-bold text-white">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl"
          >
            &times;
          </button>
        </div>
        {/* Content */}
        <div className="p-4 overflow-y-auto flex-grow">
          {children}
        </div>
        {/* Footer Placeholder (opsional) */}
        {/* <div className="p-4 border-t border-gray-700">
          <button onClick={onClose} className="bg-blue-600 text-white px-4 py-2 rounded">Tutup</button>
        </div> */}
      </div>
    </div>
  );
}

export default Modal;