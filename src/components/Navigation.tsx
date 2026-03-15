import type { FC } from "react";

export const Navigation: FC = () => {
  return (
    <header className="fixed top-0 w-full bg-[#fcf9f2]/95 px-8 py-4 z-[1000] flex justify-between items-center shadow-sm">
      <div className="font-cursive-bold text-xl text-primary">
        Asado y vermut
      </div>

      <nav className="flex gap-8">
        <a
          href="#home"
          className="font-cursive text-lg text-text-dark no-underline font-semibold"
        >
          Inicio
        </a>
        <a
          href="#details"
          className="font-cursive text-lg text-text-dark no-underline font-semibold"
        >
          Detalles
        </a>
        <a
          href="#rsvp"
          className="font-cursive text-lg text-text-dark no-underline font-semibold"
        >
          Confirmar
        </a>
      </nav>
    </header>
  );
};
