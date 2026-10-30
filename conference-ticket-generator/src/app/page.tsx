"use client";

import { useState } from "react";
import Header from "../components/Header";
import TicketForm from "../components/Form/TicketForm";
import TicketCard from "../components/Ticket/TicketCard";
import Image from "next/image";

export default function Home() {
  const [nome, setNome] = useState("");
  const [github, setGithub] = useState("");
  const [avatar, setAvatar] = useState("");
  const [ticketGerado, setTicketGerado] = useState(false);

  const gerarTicket = (e: React.SubmitEvent) => {
    e.preventDefault();

    if (!nome || !github || !avatar) {
      alert("Por favor, preencha todos os campos obrigatórios!");
    } else {
      setTicketGerado(true);
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-x-hidden p-6">
      
      <Image
        src="/assets/images/pattern-squiggly-line-top.svg"
        alt=""
        width={350}
        height={250}
        className="absolute top-0 right-0 pointer-events-none -z-10 hidden md:block"
      />
      <Image
        src="/assets/images/pattern-squiggly-line-bottom-desktop.svg"
        alt=""
        width={500}
        height={300}
        className="absolute bottom-0 left-0 pointer-events-none -z-10 hidden md:block"
      />

      
      {!ticketGerado ? (
        <>
          <Header />
          <TicketForm
            nome={nome}
            setNome={setNome}
            github={github}
            setGithub={setGithub}
            avatar={avatar}
            setAvatar={setAvatar}
            geraticket={gerarTicket}
          />
        </>
      ) : (
       <div className="flex flex-col items-center gap-3 w-full max-w-xl text-center mt-4">

  <div className="flex items-center gap-2">
    <Image src="/assets/images/logo-mark.svg" alt="Logo" width={30} height={30} />
    <span className="font-bold text-xl text-white">Coding Conf</span>
  </div>

  
  <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
    Congrats,{" "}
    <span className="bg-linear-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
      {nome}
    </span>
    ! Your ticket is ready.
  </h1>

  
  <p className="text-neutral-300 text-base md:text-lg max-w-md">
    We've emailed your ticket to your email and updates will be sent in the run up to the event.
  </p>

  
  <div className="mt-2 w-full flex justify-center">
    <TicketCard
      nome={nome}
      github={github}
      avatar={avatar}
      numero="#04815"
    />
  </div>
</div>
      )}
    </div>
  );
}