"use client";

import { useEffect, useState } from "react";
import loginW from "@/assets/auth/login-icon.svg";
import { motion } from "framer-motion";
import AuthLayout from "@/components/organisms/Layouts/AuthLayout";
import Image from "next/image";
import AuthCard from "@/components/molecules/AuthCard";
import LabeledInput from "@/components/atoms/Input";
import PasswordField from "@/components/atoms/InputPassword";
import Switch from "@/components/atoms/Switch";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [savePassword, setSavePassword] = useState(false);
  const [isLoading] = useState(false);

  useEffect(() => {
    const savedEmail = localStorage.getItem("savedEmail");
    const savedPassword = localStorage.getItem("savedPassword");
    if (savedEmail) setEmail(savedEmail);
    if (savedPassword) {
      setSenha(savedPassword);
      setSavePassword(true);
    }
  }, []);

  return (
    <AuthLayout
      right={
        <Image
          src={loginW}
          alt="Logo"
          className="w-[1920px] h-[875px] object-cover"
        />
      }
    >
      <AuthCard
        title={
          <span className="bg-gradient-to-r from-[#6D03F5] to-[#40028F] bg-clip-text text-transparent">
            Entre na sua conta
          </span>
        }
        subtitle="Preencha com seu e-mail e senha"
      >
        <form>
          <LabeledInput
            label="E-mail"
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <PasswordField
            label="Senha"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />

          <div className="mb-6">
            <Switch
              checked={savePassword}
              onChange={setSavePassword}
              label="Lembrar de mim"
            />
          </div>

          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={isLoading}
            className="w-full cursor-pointer bg-[#6D03F5] text-white p-4 font-bold rounded-xl transition duration-200 hover:bg-[#430397] active:scale-95 disabled:opacity-60"
          >
            {isLoading ? "Entrando..." : "Entrar"}
          </motion.button>

          <div className="mt-3 text-gray-400 cursor-pointer">
            Esqueceu sua senha?
          </div>

          <div className="text-center mt-4">
            <p className="text-gray-400">
              Não tem uma conta?{" "}
              <a href="/register" className="text-[#6D03F5] font-medium">
              Registre-se
              </a>
            </p>
          </div>
        </form>
      </AuthCard>
    </AuthLayout>
  );
}
