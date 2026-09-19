import type { FC } from "react";

export const Footer: FC = () => {
  return (
    <footer className="w-full bg-secondary text-primary pt-12 pb-6 md:pt-16 md:pb-8 px-6 flex flex-col items-center justify-center">
      <div className="max-w-3xl w-full flex flex-col items-center text-center">
        {/* Nombres */}
        <h2 className="font-bebas-neue uppercase text-4xl sm:text-5xl md:text-6xl tracking-wider text-primary leading-none mb-2">
          Ferran & María
        </h2>

        {/* Fecha */}
        <p className="font-bebas-neue text-2xl sm:text-3xl tracking-widest text-primary/80 mb-6">
          15 de Mayo, 2027
        </p>

        {/* Enlaces de navegación */}
        <nav aria-label="Navegación del pie de página" className="mb-8">
          <ul className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 font-bebas-neue uppercase tracking-widest text-lg sm:text-xl">
            <li>
              <a
                href="#home"
                className="hover:text-primary-hover transition-colors"
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#details"
                className="hover:text-primary-hover transition-colors"
              >
                Detalles
              </a>
            </li>
            <li>
              <a
                href="#timeline"
                className="hover:text-primary-hover transition-colors"
              >
                Plan del día
              </a>
            </li>
            <li>
              <a
                href="#rsvp"
                className="hover:text-primary-hover transition-colors"
              >
                Confirmar
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};
