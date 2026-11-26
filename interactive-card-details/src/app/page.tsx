"use client";

import { useState } from "react";
import CardDisplay from "../components/CardDisplay";
import CardForm from "../components/CardForm";
import ThankYou from "../components/ThankYouState";


export default function Home() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [cvc, setCvc] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.SubmitEvent) =>{
    e.preventDefault();

    if(name.trim() && number.trim() && month.trim() && year.trim() && cvc.trim()){
         setIsSubmitted(true);
    }else{
        alert("Por favor, Preencher todos os campos obrigatórios!")
    }
  }
  

  return (
    <div className="flex flex-col gap-5 md:flex-row items-cente">
      <CardDisplay
       name={name}
       number={number}
       month={month}
       year={year}
       cvc ={cvc}
       />
       
      {isSubmitted ? <ThankYou/> : <CardForm
       setName={setName}
       name={name}
       setNumber={setNumber}
       number={number}
       setMonth= {setMonth}
       month={month}
       setYear={setYear}
       year={year}
       setCvc={setCvc}
       cvc= {cvc}
       handleSubmit={handleSubmit}
      />
      }
    </div>
    
  );
}

