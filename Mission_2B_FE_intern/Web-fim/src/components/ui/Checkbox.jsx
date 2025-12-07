import React from "react";

export default function Checkbox({ label, checked, onChange }) {
  return (
    <label className="inline-flex items-center gap-2 text-sm text-gray-300">
      <input type="checkbox" checked={checked} onChange={onChange} className="w-4 h-4" />
      <span>{label}</span>
    </label>
  );
}
