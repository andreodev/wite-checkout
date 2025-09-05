import React from "react";

export default function Switch({
  checked,
  onChange,
  label,
  id,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label?: React.ReactNode;
  id?: string;
}) {
  return (
    <label
      htmlFor={id}
      className="flex  select-none cursor-pointer gap-2"
    >
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="sr-only peer"
      />
      <div
        className="
          relative w-11 h-6 rounded-full bg-gray-300 transition-colors duration-200
          peer-checked:bg-[#6D03F5]
          after:content-[''] after:absolute after:top-1 after:left-1
          after:w-4 after:h-4 after:bg-white after:rounded-full
          after:transition-transform after:duration-200
          peer-checked:after:translate-x-5
        "
      />
      {label && <span className="text-gray-700">{label}</span>}
    </label>
  );
}
