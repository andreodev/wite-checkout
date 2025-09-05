import { forwardRef } from "react";

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
        {/* Label */}
        <label htmlFor={id} className="text-sm font-medium text-slate-700">
          {label}
          {required && <span className="text-red-600"> *</span>}
        </label>

        {/* Input wrapper */}
        <div className="relative">
          {/* Ícone telefone (SVG inline Lucide) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.81.37 1.6.72 2.34a2 2 0 0 1-.45 2.18L8.13 9.51a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.18-.45c.74.35 1.53.6 2.34.72a2 2 0 0 1 1.72 2z"
            />
          </svg>

          {/* Input */}
          <input
            ref={ref}
            id={id}
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            required={required}
            disabled={disabled}
            aria-invalid={hasError}
            aria-describedby={hasError ? `${id}-error` : undefined}
            className={`h-11 w-full rounded-2xl border bg-white pl-10 pr-3 text-sm
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
