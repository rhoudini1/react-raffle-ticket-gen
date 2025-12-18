import React from "react";

interface FormInputProps {
  label?: string;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  hideLabel?: boolean;
}

export default function FormInput({
  label,
  type = "text",
  placeholder,
  hideLabel = false,
}: FormInputProps) {
  return (
    <div className="space-y-2 w-full">
      {label && (
        <label className={`font-semibold block ${hideLabel ? "sr-only" : ""}`}>
          {label}
        </label>
      )}

      <input
        type={type}
        placeholder={placeholder}
        className="
          w-full rounded-md px-4 py-2
          border border-(--color-gray-300)
          text-(--color-gray-900)
          focus:outline-none
          focus:ring-2 focus:ring-(--color-primary-light)
          focus:border-(--color-primary-base)
        "
      />
    </div>
  );
}
