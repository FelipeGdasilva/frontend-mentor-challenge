"use client";
import Image from "next/image";

export default function OrderSummary() {
  return (
    <main className="min-h-screen bg-[#e0e8ff] flex flex-col justify-center items-center p-4">
      <section className="bg-white rounded-2xl max-w-sm overflow-hidden shadow-lg text-center">
        <Image
          src="./image/illustration-hero.svg"
          alt="illustration"
          width={500}
          height={400}
        />

        <div className="py-8 px-6 flex flex-col items-center text-center gap-4">
          <h2 className="text-2xl text-[#1f2e55] font-bold">Order Summary</h2>

          <p className="text-sm text-[#7280a7]">
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>

          <div className="w-full bg-[#f5f7ff] p-4 rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Image
                src="./image/icon-music.svg"
                alt="music icon"
                width={48}
                height={48}
              />
              <div className="text-left">
                <h3 className="font-bold text-[#1f2e55]">Annual Plan</h3>
                <p className="text-sm text-[#7280a7]">$59.99/year</p>
              </div>
            </div>

            <a
              href="#"
              className="text-xs font-bold text-[#3829e0] underline hover:text-[#766cf1] hover:no-underline"
            >
              Change
            </a>
          </div>

          <button className="w-full py-3 bg-[#3829e0] hover:bg-[#766cf1] text-white font-bold rounded-xl shadow-lg shadow-indigo-500/20 transition-colors mt-2">
            Proceed to Payment
          </button>

          <button className="text-sm font-bold text-[#7280a7] hover:text-[#1f2e55] transition-colors">
            Cancel Order
          </button>
        </div>
      </section>

      <div className="text-xs text-center text-[#7280a7] mt-6">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          className="text-[#3829e0] font-bold hover:underline"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://github.com/teu-usuario"
          target="_blank"
          className="text-[#3829e0] font-bold hover:underline"
        >
          Felipe Gomes da Silva
        </a>
        .
      </div>
    </main>
  );
}
