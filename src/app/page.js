"use client";
import React from "react";
import CardDetailsComponent from "@/components/CardDetailsComponent";

export default function Home() {
  const [confirm, setConfirmation] = React.useState(false);
  return (
    <>
      <main className={``}>
        <div className="h-full absolute w-full md:grid md:grid-cols-3">
          <CardDetailsComponent
            setConfirmation={setConfirmation}
            confirm={confirm}
          />
        </div>
      </main>
    </>
  );
}
