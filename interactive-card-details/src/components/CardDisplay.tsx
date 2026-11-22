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
      <div className=" relative md:left-36  translate-x-10 mt-20 top-10  -bottom-10 z-20">
        <Image
          src="/images/bg-card-front.png"
          alt="card front"
          height={245}
          width={447}
          className=" w-80 md:w-96  max-w-none h-auto"
        />
        <Image
          src="/images/card-logo.svg"
          alt="logo do card"
          width={84}
          height={47}
          className="absolute top-5 left-5 w-12 md-14 h-auto"
        />
        <span className="absolute  top-5 translate-y-25 translate-x-18 text-xl text-white z-10">
          0000 0000 0000 0000
        </span>
        <span className="absolute top-5 translate-y-38 translate-x-5 text-xs text-white z-10">
          JANE APPLESEED
        </span>
        <span className="absolute top-5 translate-y-38 translate-x-76 text-xs text-white z-10">
          00/00
        </span>
      </div>

      <div className=" relative md:translate-x-10 md:mt-28  md:ml-20   translate-x-10 ml-10  z-10">
        <Image
          src="/images/bg-card-back.png"
          alt="card back"
          height={245}
          width={447}
          className=" w-80 md:w-96  max-w-none h-auto"
        />
        <span className="absolute top-5 translate-y-15 translate-x-60 md:translate-x-75  md:translate-y-19 text-xs text-white z-10">
          000
        </span>
      </div>
    </section>
  );
}
