import Image from "next/image";

export default function Huddle() {
  return (
    <div className="bg-huddle-purple min-h-screen bg-huddle">
      <header className="p-8 md:p-12 ">
        <Image
          src="/image/logo.svg"
          alt="Huddle"
          width={200}
          height={100}
          className="w-32 md:w-48 h-auto"
        />
      </header>
      <main>
    <section className="flex flex-col md:flex-row items-center justify-between px-10 md:px-16 gap-16 mt-16 w-full max-w-1400px mx-auto">
  
  
  <div className="w-full md:w-7/12 flex justify-center">
    <Image
      src="/image/illustration-mockups.svg"
      alt="Ilustração do Huddle"
      width={800}
      height={500}
      className="w-full h-auto md:max-w-850px md:scale-108 md:-translate-y-5 md:translate-x-10"
    />
  </div>

  
  <div className="w-full md:w-5/12 text-white flex flex-col items-center md:items-start text-center md:text-left gap-6 px-6 md:px-12 md:max-w-550px">
    <h1 className="font-extrabold text-3xl md:text-5xl leading-tight font-poppins">
      Build The Community <br className="hidden md:inline" />
      Your Fans Will Love
    </h1>
    <p className="text-xl md:text-2xl font-light opacity-90 font-open-sans">
      Huddle re-imagines the way we build communities. You have a voice,
      but so does your audience. Create connections with your users as you
      engage in genuine discussion.
    </p>
    <button className="bg-white text-huddle-purple font-semibold px-10 py-3 rounded-full shadow-lg hover:bg-huddle-magenta hover:text-white transition-all cursor-pointer">
      Register
    </button>
  </div>

</section>
  
      </main>
      <footer className="w-full flex justify-center md:justify-end gap-4 mt-8 md:mt-0 p-4">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 border border-white rounded-full flex items-center justify-center text-white hover:text-huddle-magenta hover:border-huddle-magenta transition-all duration-300"
          aria-label="Facebook"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
          </svg>
        </a>

        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 border border-white rounded-full flex items-center justify-center text-white hover:text-huddle-magenta hover:border-huddle-magenta transition-all duration-300"
          aria-label="Twitter"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 border border-white rounded-full flex items-center justify-center text-white hover:text-huddle-magenta hover:border-huddle-magenta transition-all duration-300"
          aria-label="Instagram"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </a>
      </footer>
    </div>
  );
}
