import React from "react";

type Props = {
  right?: React.ReactNode;
  children: React.ReactNode;
};

export default function AuthLayout({ right, children }: Props) {
  return (
    <div className="min-h-screen flex">
      <div className="flex-[3] py-11 px-10 flex items-center justify-center">
        {children}
      </div>
      <div className="flex-[2] h-[872px] bg-gradient-to-b from-[#6D03F5] to-[#40028F] flex items-center justify-center rounded-bl-2xl overflow-hidden">
        {right}
      </div>
    </div>
  );
}
