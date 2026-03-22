import type { FC } from "react";

export const Footer: FC = () => {
  return (
    <footer className="w-full bg-bg py-8 flex flex-col items-center justify-center border-t border-primary/10">
      <div className="text-center">
        <h2 className="font-cursive-bold text-2xl text-primary m-0 mb-2 tracking-wide">
          Ferran & María
        </h2>

        <p className="font-cursive text-xl text-text-dark mb-3 opacity-80">
          15 de Mayo, 2027
        </p>

        <p className="font-body text-primary text-xs tracking-wide font-medium flex items-center justify-center gap-1 mb-3">
          Hecho con <span className="text-sm leading-none mt-0.5">♥</span> y
          mucho asado
        </p>
      </div>
    </footer>
  );
};
