import React from "react";

export default function Button({ children, onClick, variant = "primary", type = "button" }) {
  const base = "px-4 py-2 rounded-md font-medium";
  const styles =
    variant === "primary"
      ? "bg-blue-600 hover:bg-blue-700 text-white"
      : "bg-transparent border border-gray-600 text-gray-200 hover:bg-gray-800";
  return (
    <button type={type} onClick={onClick} className={`${base} ${styles}`}>
      {children}
    </button>
  );
}
