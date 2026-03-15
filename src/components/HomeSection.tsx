import type { FC } from "react";
import { MateIcon } from "../assets/icons/MateIcon";
import { DrinkIcon } from "../assets/icons/DrinkIcon";
import { WineIcon } from "../assets/icons/WineIcon";
import { GrillIcon } from "../assets/icons/GrillIcon";

export const HomeSection: FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden p-4 bg-bg"
    >
      {/* Background Icons */}
      <MateIcon className="bg-icon absolute top-[15%] left-[10%] w-10 opacity-70 pointer-events-none text-primary" />
      <DrinkIcon className="bg-icon absolute top-[60%] left-[8%] w-6 opacity-70 pointer-events-none text-primary" />
      <WineIcon className="bg-icon absolute top-[20%] right-[10%] w-6 opacity-70 pointer-events-none text-primary" />
      <GrillIcon className="bg-icon absolute top-[65%] right-[12%] w-11 opacity-70 pointer-events-none text-primary" />

      <div className="text-center z-10">
        <h2 className="font-cursive text-2xl text-text-dark m-0 mb-4 font-medium text-center">
          Nos casamos
        </h2>

        <h1 className="font-cursive-bold text-5xl md:text-6xl text-primary leading-tight m-0 text-center">
          Ferran & María
        </h1>

        <div className="w-16 h-1 my-8 mx-auto bg-primary rounded-full opacity-60"></div>

        <div className="font-body text-lg font-semibold tracking-wider uppercase mt-6">
          15 de Mayo, 2027
        </div>
        <div className="font-body text-base opacity-80 mt-1">
          Manso Esmandía, Cardedeu
        </div>

        <div className="flex gap-4 mt-8 justify-center">
          <a
            href="#details"
            className="inline-block px-8 py-3 text-lg font-cursive font-bold rounded-lg transition-transform duration-200 cursor-pointer no-underline text-center border-2 border-primary text-primary bg-transparent hover:-translate-y-0.5 hover:bg-primary/5"
          >
            Ver detalles
          </a>
          <a
            href="#rsvp"
            className="inline-block px-8 py-3 text-lg font-cursive font-bold rounded-lg transition-transform duration-200 cursor-pointer no-underline text-center bg-primary text-white border-2 border-primary shadow-[4px_4px_0_0_#8C7D70] hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_#8C7D70]"
          >
            Confirmar asistencia
          </a>
        </div>
      </div>
    </section>
  );
};
