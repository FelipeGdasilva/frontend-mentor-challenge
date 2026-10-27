import Header from "../components/Header";
import TicketForm from "../components/Form/TicketForm";
import TicketCard from "../components/Ticket/TicketCard";
import Image from "next/image";

export default function Home() {
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

      {/* Conteúdo Principal da Página */}
      {/* <Header /> */}
      {/* <TicketForm /> */}
      <TicketCard />

    </div>
  );
}