"use client";

import { useState } from "react";
import CardDisplay from "../components/CardDisplay";
import CardForm from "../components/CardForm";
import ThankYou from "../components/ThankYouState";
import { createCardFields } from "../components/cardFields";

export default function Home() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvc, setCvc] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{
    name?: string;
    number?: string;
    month?: string;
    year?: string;
    cvc?: string;
  }>({});

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    const fields = createCardFields({
      name,
      number,
      month,
      year,
      cvc,
    });
    const newErrors: Partial<Record<(typeof fields)[number]["key"], string>> =
      {};

    for (const field of fields) {
      const trimmed = field.value.trim();

      if (!trimmed) {
        newErrors[field.key] = field.message;
      } else if (field.numericOnly) {
        const normalized =
          field.key === "number" ? trimmed.replaceAll(" ", "") : trimmed;

        if (!/^\d+$/.test(normalized)) {
          newErrors[field.key] = "Wrong format, numbers only";
        }
      }
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitted(true);
    }
  };
  return (
    <main className="min-h-screen flex flex-col md:flex-row">
      <h1 className="sr-only">Interactive Card Details Form</h1>
      <div className=" w-full md:w-auto md:shrink-0 md:self-stretch flex flex-col justify-between">
        <CardDisplay
          name={name}
          number={number}
          month={month}
          year={year}
          cvc={cvc}
        />
      </div>

      <div className="flex-1 flex items-center justify-center">
        {isSubmitted ? (
          <ThankYou />
        ) : (
          <CardForm
            setName={setName}
            name={name}
            setNumber={setNumber}
            number={number}
            setMonth={setMonth}
            month={month}
            setYear={setYear}
            year={year}
            setCvc={setCvc}
            cvc={cvc}
            handleSubmit={handleSubmit}
            errors={errors}
          />
        )}
      </div>
    </main>
  );
}
