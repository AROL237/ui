"use client";
import Image from "next/image";
import React from "react";
import ButtonComponent from "./ButtonComponent";

export default function ConfirmationComponent({ setConfirmation }) {
  const handleSubmit = () => {
    setConfirmation((old) => !old);
  };
  return (
    <>
      <div className=" bg-gradient-to-br rounded-full from-5%  from-[#6448FD] to-100% to-[#650996] h-[78px] w-[78px] flex justify-center items-center ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-7 text-neutral-200 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 12.75 6 6 9-13.5"
          />
        </svg>
      </div>
      <div className="flex flex-col gap-2  items-center ">
        <span className="font-extrabold tracking-widest text-2xl uppercase">
          thank you
        </span>
        <span className="text-sm text-neutral-dark-grayish-voilet ">
          We've added your card details
        </span>
      </div>
      <ButtonComponent text={"continue"} handleClick={handleSubmit} />
    </>
  );
}
