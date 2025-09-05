"use client"
import registerIcon from "@/assets/auth/register-icon.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import PhoneInput from "@/components/atoms/PhoneInput";
import AuthCard from "@/components/molecules/AuthCard";
import LabeledInput from "@/components/atoms/Input";
import PasswordField from "@/components/atoms/InputPassword";
import Switch from "@/components/atoms/Switch";

export default function RegisterPage() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
  });

  const [telefone, setTelefone] = useState("");
  const [erroTelefone, setErroTelefone] = useState<string | null>(null);

  const [equalPasswords, setEqualPasswords] = useState(true);
  const [isPasswordValid] = useState(true); 
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    setEqualPasswords(
      form.confirmarSenha === "" || form.senha === form.confirmarSenha
    );
  }, [form.senha, form.confirmarSenha]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // validação simples de telefone
    const onlyDigits = telefone.replace(/\D/g, "");
    if (onlyDigits.length < 10) {
      setErroTelefone("Telefone inválido");
      return;
    }
    setErroTelefone(null);

    if (!equalPasswords) return;

    console.log("OK", { ...form, telefone });
  }

  return (
    <div className="min-h-svh">
      <section className="relative mx-auto w-full px-4 sm:px-6 lg:px-8 py-4">
        <div className="relative w-full h-64 sm:h-72 md:h-[420px] lg:h-[520px] rounded-2xl bg-gradient-to-b from-[#6D03F5] to-[#40028F] overflow-hidden z-0">
          <Image
            src={registerIcon}
            alt="Registrar"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
          />
          <div className="relative z-10 mt-20 flex h-full justify-center text-center px-4 pointer-events-none">
            <div className="max-w-xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
                Bem-vindo!
              </h1>
              <p className="mt-2 text-sm sm:text-base md:text-lg text-white/90">
                Crie sua conta em poucos minutos e envie seus documentos para o
                nosso time de verificação
              </p>
            </div>
          </div>
        </div>

        <div className="relative z-20 w-full md:-mt-48 lg:-mt-64 xl:-mt-72">
          <AuthCard
            title="Crie sua conta"
            font="text-[30px]"
            className="text-[#3D4045]"
          >
            <form onSubmit={handleSubmit}>
              <LabeledInput
                label="Nome"
                type="text"
                placeholder="Nome completo"
                value={form.nome}
                onChange={(e) =>
                  setForm((f) => ({ ...f, nome: e.target.value }))
                }
                required
              />

              <LabeledInput
                label="E-mail"
                placeholder="Digite seu e-mail"
                type="email"
                value={form.email}
                onChange={(e) =>
                  setForm((f) => ({ ...f, email: e.target.value }))
                }
                required
              />

              <PhoneInput
                value={telefone}
                onChange={setTelefone}
                required
                error={erroTelefone}
              />

              <PasswordField
                label="Senha"
                placeholder="Digite sua senha"
                value={form.senha}
                onChange={(e) =>
                  setForm((f) => ({ ...f, senha: e.target.value }))
                }
                required
                invalidHint={
                  !isPasswordValid && (
                    <p className="text-[13px] text-[#989898] mt-2">
                      *A senha deve conter no mínimo 8 caracteres, incluindo
                      maiúsculas, minúsculas, números e um destes (., -, !, @,
                      #)
                    </p>
                  )
                }
              />

              <PasswordField
                label="Confirme sua senha"
                placeholder="Confirme sua senha"
                value={form.confirmarSenha}
                onChange={(e) =>
                  setForm((f) => ({ ...f, confirmarSenha: e.target.value }))
                }
                required
              />
              {!equalPasswords && (
                <p className="text-[13px] text-red-600 -mt-3 mb-3">
                  As senhas precisam ser iguais
                </p>
              )}

              <div className="mb-6 flex justify-center items-center">
                <Switch
                  checked={accepted}
                  onChange={setAccepted}
                  label={
                    <span className="text-sm text-[#3D4045]">
                      Li e aceito os{" "}
                      <button
                        type="button"
                        className="text-[#6D03F5] hover:underline font-medium"
                      >
                        Termos de Uso
                      </button>
                    </span>
                  }
                />
              </div>
              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className={`w-full h-12  ${
                  !accepted ? "cursor-not-allowed" : "cursor-pointer"
                } rounded-xl bg-[#6D03F5] text-white font-semibold shadow-sm transition duration-200 hover:bg-[#430397] active:scale-[0.98] disabled:opacity-60`}
                disabled={!accepted || !equalPasswords}
              >
                Criar conta
              </motion.button>

              <div className="text-center mt-4">
                <p className="text-sm text-slate-600">
                  Já tem uma conta?{" "}
                  <Link
                    href="/login"
                    className="text-[#6D03F5] font-medium hover:underline"
                  >
                    Entrar
                  </Link>
                </p>
              </div>
            </form>
          </AuthCard>
        </div>
      </section>
    </div>
  );
}
