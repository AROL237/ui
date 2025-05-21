import React from "react";

export default function ButtonComponent({ handleClick, className, text }) {
  return (
    <button
      onClick={handleClick}
      className="  bg-black w-full hover:cursor-pointer hover:shadow-black-700 shadow-sm  font-bold rounded-lg h-[53px] max-w-[327px] flex mx-auto items-center justify-center text-neutral-200 capitalize text-md"
    >
      {text}
    </button>
  );
}
