import { useState } from "react";
import FormInput from "./input.tsx";
import { formatBRLFromCents, parseBRLToCents } from "../helpers/money.ts";

type MoneyInputProps = {
  label: string;
  value?: number; // em centavos
  onChange?: (valueInCents: number) => void;
};

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

    setDisplayValue(formatBRLFromCents(cents));
    onChange?.(cents);
    setCents(cents);
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
