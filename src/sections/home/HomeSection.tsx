import type { FC } from "react";

export const HomeSection: FC = () => {
  return (
    <section
      id="home"
      className="min-h-[66vh] flex flex-col justify-center items-center relative overflow-hidden p-4"
      style={{
        backgroundImage: 'url("/landscape.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none"></div>

      <div className="text-center z-10 text-white">
        <h2 className="font-cursive text-2xl m-0 mb-4 font-medium text-center drop-shadow-md">
          Nos casamos
        </h2>

        <h1 className="font-cursive-bold text-5xl md:text-7xl leading-tight m-0 text-center drop-shadow-lg">
          Ferran & María
        </h1>

        <div className="w-16 h-1 my-8 mx-auto bg-white rounded-full opacity-80 shadow-sm"></div>

        <div className="font-body text-xl font-semibold tracking-wider uppercase mt-6 drop-shadow-md">
          15 de Mayo, 2027
        </div>
        <div className="font-body text-lg opacity-90 mt-2 drop-shadow-md">
          Manso Esmandía, Cardedeu
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center">
          <a
            href="#details"
            className="inline-block px-8 py-3 text-lg font-cursive font-bold rounded-lg transition-transform duration-200 cursor-pointer no-underline text-center border-2 border-white text-white bg-black/20 hover:-translate-y-0.5 hover:bg-white/20 backdrop-blur-sm shadow-md"
          >
            Ver detalles
          </a>
          <a
            href="#rsvp"
            className="inline-block px-8 py-3 text-lg font-cursive font-bold rounded-lg transition-transform duration-200 cursor-pointer no-underline text-center bg-primary text-white border-2 border-primary shadow-[4px_4px_0_0_rgba(140,125,112,0.9)] hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_rgba(140,125,112,0.9)]"
          >
            Confirmar asistencia
          </a>
        </div>
      </div>
    </section>
  );
};
