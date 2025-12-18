import React, { useState } from "react";
import FormInput from "./input.tsx";
import { formatBRLFromCents, parseBRLToCents } from "../helpers/money.ts";

interface MoneyInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  value?: number; // em centavos
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function MoneyInput({
  label,
  value = 0,
  onChange,
}: MoneyInputProps) {
  const [cents, setCents] = useState(0);
  const [displayValue, setDisplayValue] = useState(formatBRLFromCents(value));

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const rawValue = e.target.value;
    const cents = parseBRLToCents(rawValue);
    const formatted = formatBRLFromCents(cents);

    setDisplayValue(formatted);
    setCents(cents);

    if (onChange) {
      const syntheticEvent = {
        ...e,
        target: {
          ...e.target,
          value: formatted,
        },
      } as React.ChangeEvent<HTMLInputElement>;

      onChange(syntheticEvent);
    }
  }

  return (
    <FormInput
      label={label}
      value={displayValue}
      onChange={handleChange}
      inputMode="numeric"
      placeholder="R$ 0,00"
      style={{ color: cents === 0 ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,1)" }}
    />
  );
}
