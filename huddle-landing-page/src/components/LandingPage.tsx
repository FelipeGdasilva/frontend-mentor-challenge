"use client";
import Image from "next/image";

export default function Huddle() {
  return (
    <main className="bg-huddle-purple min-h-screen">
      <header className="p-8 md:p-12 ">
        <Image
          src="/image/logo.svg"
          alt="logo"
          width={200}
          height={100}
          className="w-32 md:w-48 h-auto"
        />
      </header>
      <section className="grid grid-cols-1 md:grid-cols-12 items-center px-8 md:px-12 gap-8 mt-4">
        <div className="col-span-1 md:col-span-7 relative flex justify-start items-center">
          <Image
            src="/image/illustration-mockups.svg"
            alt="ilustração"
            width={800}
            height={500}
            className="w-full h-auto max-w-none md:w-[125%] md:translate-x-8 md:translate-y-14"
          />
        </div>
      <div className="col-span-1 md:col-span-5 text-white flex flex-col items-center md:items-start text-center md:text-left gap-6 p-4 -mt-6 md:-mt-12 ">
        <h2 className="font-extrabold text-3xl md:text-5xl leading-tight mb-4"> Build The Community{" "}<br className="hidden md:inline"/>Your Fans Will Love</h2>
        <p className="text-2xl font-light opacity-90">
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>
        <button className="bg-white text-purple-700 font-semibold md:w-50 md:h-15 px-10 py-3 rounded-full shadow-lg hover:bg-magenta-500 hover:text-pink-400 transition-all cursor-pointer">Register</button>
      </div>
       </section>
    </main>
  );
}
