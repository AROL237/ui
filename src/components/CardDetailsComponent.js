"use client";
import React from "react";
import PaymentForm from "./PaymentForm";
import ConfirmationComponent from "./ConfirmationComponent";

export default function CardDetailsComponent({ confirm, setConfirmation }) {
  const [cardData, setCardData] = React.useState({
    owner: "",
    number: "",
    expired_month: "",
    expired_year: "",
    arr_number: ["0000", "0000", "0000", "0000"],
    cvc: "",
  });

  function convertCardNumberToString() {
    let str_num = cardData.number.toString();
    if (str_num.length < 16) {
      let num = 16 - str_num.length;
      let zero = "";
      for (let index = 0; index < num; index++) {
        zero.concat("0");
      }
      str_num = zero.concat(str_num);
    }
    if (str_num.length === 0) {
      str_num = "0000000000000000";
    }
    setCardData((data) => {
      return {
        ...data,
        arr_number: str_num.match(/.{1,4}/g) || [],
        // arr_number: [
        //   str_num.substring(0, 4),
        //   str_num.substring(4, 8),
        //   str_num.substring(8, 12),
        //   str_num.substring(12, 16),
        // ],
      };
    });
  }
  React.useEffect(() => {
    if (cardData.number.toString().length < 15) {
      let num = 15 - cardData.arr_number.length;
      let zero = "";
      for (let index = 0; index < num; index++) {
        zero.concat("0");
      }
    }
    convertCardNumberToString();
  }, [cardData.number]);

  React.useEffect(() => {}, [confirm]);

  return (
    <>
      <div className="h-full absolute w-full md:grid md:grid-cols-3  ">
        <div
          id="bg-main-mobile"
          className="h-[240px] pt-[32px] w-full md:col-span-1  md:h-full  md:w-full "
        >
          <div className="  flex h-full w-full  px-3 xs:justify-centers sm:justify-center md:flex md:flex-col md:translate-x-1/4   md:gap-[35px]   ">
            {/* desktop-view card font */}
            <div
              className="w-[286px] h-[157px]   absolute z-10  translate-y-[94px] md:translate-0  rounded-lg md:relative md:h-[246px] md:w-[447px]  md:rounded-xl"
              id="card-front"
            >
              <div className="flex flex-col justify-between p-3 md:p-[28px]  h-full text-gray-300  font-semibold text-md tracking-widest   md:flex md:flex-col md:text-2xl   md:tracking-widest">
                <div className=" card-logo  h-[35px] w-[63px] md:w-[63px]"></div>
                <div className="flex flex-col gap-3  md:gap-0">
                  <div className=" flex flex-row gap-2  md:gap-3 ">
                    {cardData.arr_number.map((value, index) => {
                      return <div key={index}>{value}</div>;
                    })}
                  </div>
                  <div className="text-[9px] uppercase md:text-[11px]  grid grid-cols-4 md:pt-6">
                    <div className="card-owner-name font-normal col-span-3 line-clamp-2">
                      {cardData.owner ? cardData.owner : "John Doe"}
                    </div>
                    <div className="card-card-date col-span-1 flex float-end font-extrabold justify-end md:text-center ">
                      {cardData.expired_month ? cardData.expired_month : "00"}/
                      {cardData.expired_year ? cardData.expired_year : "00"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* desktop-view card back */}
            <div
              className="h-[158px] px-[26px] w-[286px]  absolute md:relative translate-x-[57px] rounded-lg md:h-[246px] md:w-[447px] md:translate-x-[93px] md:px-[41px] "
              id="card-back"
            >
              <div className=" flex translate-y-[69px] text-neutral-200 px-2 font-light text-[12px] w-full flex-row-reverse  md:translate-y-[110px] md:text-[15px]  ">
                <span className="px-[16px] tracking-widest">
                  {cardData.cvc ? cardData : "000"}
                </span>
              </div>
            </div>
          </div>

          {/* <CardDetailsComponent /> */}
        </div>
        <div
          id="form-entry-section"
          className="bg-neutral-50 m-auto w-full h-full justify-between  items-center content-center  md:col-span-2"
        >
          <div className=" items-center mx-auto justify-center content-center  flex flex-col gap-6    md:p-0 ">
            {!confirm ? (
              <PaymentForm
                setCardData={setCardData}
                cardData={cardData}
                setConfirmation={setConfirmation}
                confirm={confirm}
              />
            ) : (
              <ConfirmationComponent
                setConfirmation={setConfirmation}
                confirm={confirm}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
