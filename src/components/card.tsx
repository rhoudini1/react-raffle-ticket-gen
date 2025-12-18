import React from "react";

interface CardProps extends React.ComponentProps<"div"> {
  as?: keyof React.JSX.IntrinsicElements;
  variant?: "white" | "none";
}

export default function Card({
  as = "div",
  children,
  variant = "none",
  className,
  ...props
}: CardProps) {
  const baseClassName = "rounded-xl shadow-sm p-6 space-y-4";

  const variants = {
    none: "bg-gray-100",
    white: "bg-white",
  };

  return React.createElement(
    as,
    {
      className: `${baseClassName} ${variants[variant]} ${className}`,
      ...props,
    },
    children
  );
}
