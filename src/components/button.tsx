import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  type?: "button" | "submit";
};

export function Button({
  children,
  type = "button",
  variant = "primary",
}: ButtonProps) {
  const base =
    "px-6 py-3 rounded-lg font-semibold transition-colors duration-200 cursor-pointer";

  const variants = {
    primary: `bg-(--color-primary-base)
      text-(--color-white)
      hover:bg-(--color-primary-dark)`,
    secondary: `bg-(--color-primary-light)
      text-(--color-black)
      hover:bg-(--color-primary-base)
      hover:text-(--color-white)`,
  };

  return (
    <button type={type} className={`${base} ${variants[variant]}`}>
      {children}
    </button>
  );
}
