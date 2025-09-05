import React, { useState } from "react";
import { Eye, EyeClosed } from "lucide-react";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  invalidHint?: React.ReactNode;
};

export default function PasswordField({ label, invalidHint, ...rest }: Props) {
  const [show, setShow] = useState(false);

  return (
    <div className="mb-5">
      <label className="text-sm font-medium text-[#3D4045] mb-2 block">
        {label}
      </label>
      <div className="relative">
        <input
          {...rest}
          type={show ? "text" : "password"}
          className="text-sm border p-3 w-full rounded-2xl border-gray-200 focus:outline-none focus:ring-0 focus:border-gray-200 pr-10"
        />
        <button
          type="button"
          onClick={() => setShow((v) => !v)}
          className="absolute inset-y-0 right-3 flex items-center text-gray-500"
          aria-label={show ? "Ocultar senha" : "Mostrar senha"}
        >
          {show ? (
            <EyeClosed className="h-5 w-5" />
          ) : (
            <Eye className="h-5 w-5" />
          )}
        </button>
      </div>
      {invalidHint}
    </div>
  );
}
