import Image from "next/image";

interface CardDisplayProps {
  name: string;
  number: string;
  month: string;
  year: string;
  cvc: string;
}

export default function CardDisplay({
  name,
  number,
  month,
  year,
  cvc,
}: CardDisplayProps) {
  return (
    <section className="relative w-full h-60 md:w-96 md:h-screen overflow">
      <Image
        src="/images/bg-main-mobile.png"
        alt="Fundo mobile"
        fill
        sizes="(max-width: 767px) 100vw, 1px"
        className="object-cover md:hidden z-0"
      />

      <Image
        src="/images/bg-main-desktop.png"
        alt="Fundo desktop"
        fill
        loading="eager"
        sizes="(min-width: 768px) 24rem, 100vw"
        className="hidden object-cover md:block z-0"
      />

      <div className="relative w-80 md:w-96 md:left-36  translate-x-4 mt-20 top-10 z-20">
        <Image
          src="/images/bg-card-front.png"
          alt="Frente do cartão"
          height={145}
          width={247}
          className="w-full h-auto z-0"
        />

        <Image
          src="/images/card-logo.svg"
          alt=""
          width={84}
          height={47}
          className="absolute top-5 left-5 w-12 md:w-14 h-auto"
        />

        <span className="absolute top-5 translate-y-20 translate-x-12 md:translate-x-20 tracking-widest text-lg md:text-xl text-white z-10">
          {number || "0000 0000 0000 0000"}
        </span>

        <span className="absolute top-5 md:top-9 translate-y-32 translate-x-5 text-xs uppercase text-white z-10">
          {name || "JANE APPLESEED"}
        </span>

        <span className="absolute top-5 md:top-9 translate-y-32 translate-x-60 md:translate-x-75 text-xs text-white z-10">
          {month || "00"}/{year || "00"}
        </span>
      </div>

      <div className="relative w-80 md:w-96 translate-x-10  md:ml-20 md:mt-15 bottom-58  md:bottom-auto mb-29 z-10">
        <Image
          src="/images/bg-card-back.png"
          alt="Verso do cartão"
          height={145}
          width={247}
          className="w-full h-auto"
        />

        <span className="absolute top-5 translate-y-15 md:translate-y-19 translate-x-60 md:translate-x-75 text-xs text-white z-10">
          {cvc || "000"}
        </span>
      </div>
    </section>
  );
}
