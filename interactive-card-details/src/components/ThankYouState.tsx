 "use client";
import Image from "next/image";

export default function ThankYou() {
  return (
    <main className="flex flex-col md:flex-row">
      <section className="relative w-full h-60 md:w-96 md:h-screen">
        <div>
          <span className="absolute top-5 translate-y-20 translate-x-12 md:translate-x-20 tracking-widest text-lg md:text-xl text-white z-10">
            0000 0000 0000 0000
          </span>

          <span className="absolute top-5 md:top-9 translate-y-32 translate-x-5 text-xs uppercase text-white z-10">
            JANE APPLESEED
          </span>

          <span className="absolute top-5 md:top-9 translate-y-32 translate-x-60 md:translate-x-75 text-xs text-white z-10">
            00/00
          </span>
        </div>

        <div>
          <span className="absolute top-5 translate-y-15 md:translate-y-19 translate-x-60 md:translate-x-75 text-xs text-white z-10">
            000
          </span>
        </div>
      </section>
      <div className="flex-1 flex flex-col items-center justify-center gap-2 mt-20 md:mt-20 ">
        <Image
          src="/images/icon-complete.svg"
          alt="Confirmation icon"
          height={50}
          width={50}
          className="w-20 h-20 m-5"
        />
        <h1 className="text-3xl font-semibold tracking-widest p-1">
          THANK YOU!
        </h1>
        <p className="text-gray-400 font-light tracking-widest ">
          We've added your card details
        </p>
        <button
          type="button"
          className="w-full max-w-sm bg-purple-950 py-3 rounded-lg text-white font-medium hover:bg-gray-400  cursor-pointer mt-10"
        >
          Continue
        </button>
      </div>
    </main>
  );
}
