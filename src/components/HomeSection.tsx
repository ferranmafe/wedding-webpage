import type { FC } from "react";

export const HomeSection: FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden p-4 bg-bg"
    >
      {/* Background Icons */}
      <svg
        className="bg-icon absolute top-[15%] left-[10%] w-10 opacity-70 pointer-events-none text-primary"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M12 2a10 10 0 0 0-10 10c0 5 10 10 10 10s10-5 10-10A10 10 0 0 0 12 2zm0 14c-2 0-4-2-4-2s1 2 4 2 4-2 4-2-2 2-4 2z" />
      </svg>
      <svg
        className="bg-icon absolute top-[60%] left-[8%] w-6 opacity-70 pointer-events-none text-primary"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M7 2h10l-2 15H9zM10 2v10M14 2v10M8 17h8v5H8z" />
      </svg>
      <svg
        className="bg-icon absolute top-[20%] right-[10%] w-6 opacity-70 pointer-events-none text-primary"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M6 2h12v7c0 3-3 5-6 8v5H8v-5c-3-3-6-5-6-8V2z" />
        <path d="M6 5h12" />
      </svg>
      <svg
        className="bg-icon absolute top-[65%] right-[12%] w-11 opacity-70 pointer-events-none text-primary"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M12 2C6 2 2 8 2 12c0 4 4 10 10 10s10-6 10-10C22 8 18 2 12 2zm-5 12h10M7 16h10" />
      </svg>
      {/* Sparkles */}
      <div className="absolute top-[12%] left-[25%] text-2xl opacity-70 pointer-events-none text-primary">✨</div>
      <div className="absolute top-[55%] left-[30%] text-base opacity-70 pointer-events-none text-primary">✨</div>
      <div className="absolute top-[75%] right-[35%] text-2xl opacity-70 pointer-events-none text-primary">✨</div>
      <div className="absolute top-[25%] right-[8%] text-base opacity-70 pointer-events-none text-primary">✨</div>

      <div className="text-center z-10">
        <h2 className="font-cursive text-2xl text-text-dark m-0 mb-4 font-medium text-center">Nos casamos</h2>

        <h1 className="font-cursive-bold text-5xl md:text-6xl text-primary leading-tight m-0 text-center">Ferran & María</h1>

        <div className="w-16 h-1 my-8 mx-auto bg-primary rounded-full opacity-60"></div>

        <div className="font-body text-lg font-semibold tracking-wider uppercase mt-6">15 de Mayo, 2027</div>
        <div className="font-body text-base opacity-80 mt-1">Manso Esmandía, Cardedeu</div>

        <div className="flex gap-4 mt-8 justify-center">
          <a href="#details" className="inline-block px-8 py-3 text-lg font-cursive font-bold rounded-lg transition-transform duration-200 cursor-pointer no-underline text-center border-2 border-primary text-primary bg-transparent hover:-translate-y-0.5 hover:bg-primary/5">
            Ver detalles
          </a>
          <a href="#rsvp" className="inline-block px-8 py-3 text-lg font-cursive font-bold rounded-lg transition-transform duration-200 cursor-pointer no-underline text-center bg-primary text-white border-2 border-primary shadow-[4px_4px_0_0_#8C7D70] hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_#8C7D70]">
            Confirmar asistencia
          </a>
        </div>
        <div className="mt-2 font-cursive text-lg text-text-dark">
          Riquísimo todo, che!
        </div>
      </div>
    </section>
  );
};
