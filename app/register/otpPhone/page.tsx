"use client";
import registerIcon from "@/assets/auth/register-icon.svg";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import AuthCard from "@/components/molecules/AuthCard";
import OtpInput from "@/components/atoms/OtpInput";
import Button from "@/components/atoms/Button";

export default function OtpPhone() {
  const [otp, setOtp] = useState("");
  const [equalPasswords] = useState(true);
  const [accepted] = useState(false);


  

  return (
    <div className="min-h-svh">
      <section className="relative mx-auto w-full px-4 sm:px-6 lg:px-8 py-4">
        <div className="relative w-full h-64 sm:h-72 md:h-[420px] lg:h-[520px] rounded-2xl bg-gradient-to-r from-[#6D03F5] to-[#40028F] overflow-hidden z-0">
          <Image
            src={registerIcon}
            alt="Registrar"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
          />
          <div className="relative z-10 mt-20 flex h-full justify-center text-center px-4 pointer-events-none">
            <div className="max-w-xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
                Validação <br /> de telefone
              </h1>
            </div>
          </div>
        </div>

        <div className="relative z-20 w-full md:-mt-48 lg:-mt-64 xl:-mt-72">
          <AuthCard
            title="O código de confirmação foi enviado para"
            value={"+55 21999456565 "}
            subtitle="Verifique seu telefone e preencha  com o código enviado"
            font="text-[30px]"
            className="text-[#3D4045]"
          >
            {/* Input de código de verificação */}
            <OtpInput value={otp} onChange={setOtp} length={6} />
            <div className="text-center">
              <p className="text-sm text-[#A0AEC0]">
                Não recebeu o código?
                <Link
                  href="/login"
                  className="text-[#6D03F5] ml-1 font-bold hover:underline"
                >
                  Enviar novamente
                </Link>
              </p>
            </div>
           <Button
              disabled={otp.length < 6 }
              mtButton="large"
            >
              Avançar
            </Button>
          </AuthCard>
        </div>
      </section>
    </div>
  );
}
