import React from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  hint?: React.ReactNode;
};

export default function LabeledInput({
  label,
  hint,
  className = "",
  ...rest
}: Props) {
  return (
    <div className="mb-5">
      <label className="text-sm font-medium text-[#3D4045] mb-2 block">
        {label}
      </label>
      <input
        {...rest}
        className={`text-sm border p-3 w-full rounded-2xl border-gray-200 focus:outline-none focus:ring-0 focus:border-gray-200 ${className}`}
      />
      {hint}
    </div>
  );
}
