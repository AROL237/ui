import React from "react";

export default function InputComponent({ type }) {
  return (
    <input
      type={type | "text"}
      className={`${className} px-2 md:px-3 py-1 md:py-2`}
    />
  );
}
