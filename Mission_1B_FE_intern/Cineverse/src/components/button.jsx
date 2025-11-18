// src/components/button.jsx
import React from 'react';

function Button({ children, variant = 'primary', size = 'md', onClick, className = '' }) {
  // Base style
  const baseClasses = 'font-medium rounded-lg transition-colors focus:outline-none';

  // Variant styles
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-700 hover:bg-gray-600 text-white',
    outline: 'border border-blue-500 text-blue-500 hover:bg-blue-500/10',
    danger: 'bg-red-600 hover:bg-red-700 text-white'
  };

  // Size styles
  const sizes = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg'
  };

  const finalClass = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button className={finalClass} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;