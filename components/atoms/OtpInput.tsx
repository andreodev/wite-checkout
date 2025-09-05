import React from "react";

interface OtpInputProps {
  value: string;
  onChange: (value: string) => void;
  length?: number;
}

const OtpInput: React.FC<OtpInputProps> = ({ value, onChange, length = 6 }) => {
  const inputs = Array.from({ length });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
    const val = e.target.value.replace(/[^0-9A-Za-z]/g, "").slice(0, 1);
  const newValueArr = value.split("");
  newValueArr[idx] = val;
  const newValue = newValueArr.join("");
  onChange(newValue);
    // focus próximo
    if (val && idx < length - 1) {
      const next = document.getElementById(`otp-input-${idx + 1}`);
      if (next) (next as HTMLInputElement).focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, idx: number) => {
    if (e.key === "Backspace" && !value[idx] && idx > 0) {
      const prev = document.getElementById(`otp-input-${idx - 1}`);
      if (prev) (prev as HTMLInputElement).focus();
    }
  };

  return (
    <div
      style={{
        display: "flex",
        gap: 16,
        justifyContent: "center",
        margin: "24px 0",
      }}
    >
      {inputs.map((_, idx) => (
        <input
          key={idx}
          id={`otp-input-${idx}`}
          type="text"
          inputMode="text"
          maxLength={1}
          value={value[idx] || ""}
          onChange={(e) => handleChange(e, idx)}
          onKeyDown={(e) => handleKeyDown(e, idx)}
          style={{
            width: 48,
            height: 48,
            borderRadius: 12,
            border: "2px solid #E3EAF7",
            textAlign: "center",
            fontSize: 24,
            fontWeight: "bold",
            outline: "none",
            background: value[idx] ? "#6D03F5" : "#fff",
            color: value[idx] ? "#fff" : "#E3EAF7",
            transition: "all 0.2s",
          }}
        />
      ))}
    </div>
  );
};

export default OtpInput;
