import React from "react";

export default function Input({label, type="text", value, onChange, placeholder}) {
    return(
        <div className="flex flex-col gap-2">
            {label && <label className="text-sm text-gray-300">{label}</label>}
            <Input className="bg-[#0f1114] border border-gray-700 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            />
        </div>
    );
}