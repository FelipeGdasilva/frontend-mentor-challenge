import Image from "next/image";

export default function CardDisplay() {
  return (
    <section className=" relative w-full h-60 md:w-96 md:h-screen">
      <Image
        src="/images/bg-main-mobile.png"
        alt="fundo mobile"
        fill
        className="object-cover md:hidden"
      />

      <Image
        src="/images/bg-main-desktop.png"
        alt="fundo desktop"
        fill
        className="hidden object-cover md:block"
      />
      <div className=" absolute md:left-36  translate-x-10 mt-20 top-10  -bottom-10 z-10">
        <Image
          src="/images/bg-card-front.png"
          alt="card front"
          height={245}
          width={447}
          className=" w-80 md:w-96  max-w-none h-auto"
        />
      </div>

      <div className=" md:translate-x-10 md:mt-85 md:ml-10  translate-x-10 ml-10 z-10">
        <Image
          src="/images/bg-card-back.png"
          alt="card back"
          height={245}
          width={447}
          className=" w-80 md:w-96  max-w-none h-auto"
        />
      </div>
    </section>
  );
}
