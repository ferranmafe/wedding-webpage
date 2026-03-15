import type { FC } from "react";
import { MateIcon } from "../assets/icons/MateIcon";
import { DrinkIcon } from "../assets/icons/DrinkIcon";
import { WineIcon } from "../assets/icons/WineIcon";
import { GrillIcon } from "../assets/icons/GrillIcon";

export const Footer: FC = () => {
  return (
    <footer className="w-full bg-bg py-16 flex flex-col items-center justify-center">
      <div className="flex gap-6 text-primary mb-8">
        <MateIcon className="w-8 h-8 opacity-70" />
        <DrinkIcon className="w-8 h-8 opacity-70" />
        <GrillIcon className="w-8 h-8 opacity-70" />
        <WineIcon className="w-8 h-8 opacity-70" />
      </div>

      <div className="text-center">
        <h2 className="font-cursive-bold text-4xl text-primary m-0 mb-4 tracking-wide">
          Ferran & María
        </h2>
        
        <p className="font-cursive text-2xl text-text-dark mb-6 opacity-80">
          15 de Mayo, 2027
        </p>
        
        <p className="font-body text-primary text-sm tracking-wide font-medium flex items-center justify-center gap-1 mb-6">
          Hecho con <span className="text-lg leading-none mt-0.5">♥</span> y mucho asado
        </p>

        <p className="font-cursive text-xl text-primary/50 italic tracking-wide">
          Riquísimo todo, che!
        </p>
      </div>
    </footer>
  );
};
