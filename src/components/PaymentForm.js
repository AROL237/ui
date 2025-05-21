"use client";
import React from "react";
import ButtonComponent from "./ButtonComponent";

export default function PaymentForm({
  cardData,
  setCardData,
  confirm,
  setConfirmation,
}) {
  const handleChange = (event) => {
    const { type, value, name } = event.target;
    let data = value;
    if (name === "number") {
      data = value.replace(/\D/g, "").slice(0, 16);
      setCardData((prev_data) => ({ ...prev_data, [name]: data }));
      return;
    }
    setCardData((prev_data) => ({ ...prev_data, [name]: value }));
  };

  const handleSubmit = () => {
    setConfirmation((old) => !old);
  };
  return (
    <div className=" mx-auto   rounded-lg bg-transparent  md:max-w-[365px]  p-4">
      <div className=" flex flex-col gap-5 uppercase text-md text-neutral-dark-grayish-voilet ">
        <div className="flex flex-col gap-1  ">
          <label
            id="for-owner-name"
            className=" text-gray-900 text-xs font-extrabold "
          >
            Card owner
          </label>
          <input
            type="text"
            name="owner"
            onChange={handleChange}
            value={cardData.owner}
            placeholder="e.g John hamadou"
            className="apearence-none ring-1 rounded p-1"
          />
        </div>
        <div className="flex flex-col gap-1 ">
          <label
            id="for-owner-name uppercase "
            className=" text-gray-900 text-xs font-extrabold "
          >
            Card number
          </label>
          <input
            type="tel "
            name="number"
            onChange={handleChange}
            security="true"
            pattern="\S+\d*"
            placeholder="e.g 0123 4567 8910 1112"
            inputmode="numeric"
            title="Please enter a valid card number"
            value={cardData.number}
            maxLength={16}
            minLength={16}
            className="apearence-none ring-1 rounded p-1"
          />
        </div>
        <div className="">
          <div className=" grid grid-cols-3 ">
            <label
              id="for-owner-name "
              className="col-span-2 text-gray-900 text-xs font-extrabold "
            >
              exp.date (MM/YY)
            </label>
            <label
              id="for-cc"
              className="text-gray-900 text-xs font-extrabold "
            >
              cvc
            </label>
          </div>
          <div className="grid grid-cols-3  ">
            <div className="col-span-2">
              <div className="flex float-left  w-full space-x-2 p-1">
                <div className="flex  flex-row gap-2 w-full">
                  <input
                    type="text"
                    name="expired_month"
                    onChange={handleChange}
                    placeholder="MM"
                    inputMode="numeric"
                    pattern="\d*"
                    title="Please enter a valid month number"
                    value={cardData.expired_month}
                    maxLength={2}
                    minLength={2}
                    className="apearence-none ring-1 px-2 w-[60px]  rounded p-1  "
                  />
                  <input
                    type="text"
                    name="expired_year"
                    onChange={handleChange}
                    value={cardData.expired_year}
                    maxLength={2}
                    inputMode="numeric"
                    pattern="\d*"
                    title="Please enter a valid year number"
                    minLength={2}
                    placeholder="YY"
                    className="apearence-none ring-1 w-[60px]  rounded py-1 px-2"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className=" col-span-1">
                <input
                  type="text"
                  name="cvc"
                  onChange={handleChange}
                  value={cardData.cvc}
                  inputMode="numeric"
                  pattern="\d*"
                  maxLength={3}
                  minLength={3}
                  placeholder="e.g 123"
                  className="flex float-end ring-1 w-full rounded p-1 px-2 "
                />
              </div>
            </div>
          </div>
        </div>
        <ButtonComponent text={"confirm"} handleClick={handleSubmit} />
      </div>
    </div>
  );
}
