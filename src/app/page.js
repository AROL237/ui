"use client";
import React from "react";
import ConfirmationComponent from "@/components/ConfirmationComponent";
import CardDetailsComponent from "@/components/CardDetailsComponent";
import PaymentForm from "@/components/PaymentForm";

export default function Home() {
  const [confirm, setConfirmation] = React.useState();
  return (
    <>
      <main className={`flex `}>
        <CardDetailsComponent
          setConfirmation={setConfirmation}
          confirm={confirm}
        />
      </main>
    </>
  );
}
