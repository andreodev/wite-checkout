import React from "react";

export default function AuthCard({
  title,
  subtitle,
  children,
  className = "",
  font = "",
  value = "",
}: {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
    font?: string
  value?: string | number
}) {
  return (
    <div
      className={`rounded-2xl shadow-[#0000000D]   w-full max-w-[455px] mx-auto bg-white ${className}`}
    >
      <div className="p-6 md:p-8 ">
        {(title || subtitle) && (
          <div className="text-center mb-6">
            {title && (
              <h2
                className={`${
                  font || "text-[45px]"
                } font-medium text-[#3D4045]`}
              >
                {title} <br /> {value}
              </h2>
            )}
            {subtitle && (
              <p className="text-gray-400 mt-12 max-w-sm">{subtitle}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </div>
  );
}
