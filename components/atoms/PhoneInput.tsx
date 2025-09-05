import Image from "next/image";
import { forwardRef } from "react";
import { ArrowBottom } from "../Icons";
import brasilIcon from "@/assets/flags/brasil.png";

export type PhoneInputProps = {
  id?: string;
  label?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string | null;
  className?: string;
};

const PhoneInput = forwardRef<HTMLInputElement, PhoneInputProps>(
  (
    {
      id = "telefone",
      label = "Telefone",
      value,
      onChange,
      placeholder = "(11) 99999-9999",
      required,
      disabled,
      error,
      className = "",
    },
    ref
  ) => {
    const hasError = Boolean(error);

    return (
      <div className={`space-y-2 ${className}`}>
        <label htmlFor={id} className="text-sm font-medium text-slate-700 ml-1">
          {label}
         </label>

        <div className="flex items-center gap-2 mt-2">
          <div className="flex items-center h-11 rounded-2xl border border-slate-200 bg-white px-3 ">
            <span className="mr-2">
              <Image
                src={brasilIcon}
                alt="BR"
                width={24}
                height={16}
              />
            </span>
            <div></div>
            <span className="font-medium text-slate-700">+55</span>
            <span className="ml-2 text-[#3D4045]">
              <ArrowBottom />
            </span>
          </div>
          <input
            ref={ref}
            id={id}
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder={placeholder}
            value={value}
            onChange={(e) => {
              const raw = e.target.value.replace(/\D/g, "");
              let formatted = raw;
              if (formatted.length > 0) {
                formatted = formatted.replace(/(\d{2})(\d)/, "($1) $2");
              }
              if (formatted.length > 9) {
                formatted = formatted.replace(
                  /(\(\d{2}\) \d{5})(\d{4})/,
                  "$1-$2"
                );
              } else if (formatted.length > 8) {
                formatted = formatted.replace(
                  /(\(\d{2}\) \d{4})(\d{4})/,
                  "$1-$2"
                );
              }
              onChange(formatted);
            }}
            required={required}
            disabled={disabled}
            aria-invalid={hasError}
            aria-describedby={hasError ? `${id}-error` : undefined}
            className={`h-11 flex-1 rounded-2xl border bg-white px-4 text-sm
              outline-none transition
              focus:ring-1
              ${
                hasError
                  ? "border-red-300 focus:border-red-400 focus:ring-red-400"
                  : "border-slate-200 focus:border-slate-400 focus:ring-slate-400"
              }
              ${disabled ? "opacity-60 cursor-not-allowed" : ""}`}
          />
        </div>

        {/* Erro */}
        {hasError && (
          <p id={`${id}-error`} className="text-sm text-red-600">
            {error}
          </p>
        )}
      </div>
    );
  }
);

PhoneInput.displayName = "PhoneInput";
export default PhoneInput;
