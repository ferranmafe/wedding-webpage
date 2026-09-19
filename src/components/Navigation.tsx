import { useState } from "react";

const NavLink = ({
  href,
  children,
  isButton = false,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  isButton?: boolean;
  onClick?: () => void;
}) => {
  return (
    <li className={isButton ? "w-full md:w-auto flex justify-center" : ""}>
      <a
        href={href}
        onClick={onClick}
        className={
          isButton
            ? "whitespace-nowrap inline-block max-w-xs text-center py-2.5 px-5 w-4/5 md:w-auto text-xl md:text-lg tracking-widest bg-primary text-secondary rounded-xl hover:bg-primary-hover shadow-sm transition-all"
            : "whitespace-nowrap inline-block py-1 px-2 text-xl md:text-lg tracking-widest text-primary hover:text-primary-hover font-medium transition-colors"
        }
      >
        {children}
      </a>
    </li>
  );
};

export const Navigation = () => {
  // Only used on mobile
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <>
      <header className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] max-w-7xl bg-secondary border-2 border-primary rounded-2xl px-6 py-3.5 md:px-8 md:py-4 font-bebas-neue uppercase flex justify-between items-center shadow-md">
        {/* 1. Logo / Identidad */}
        <a href="#home" className="group flex flex-col">
          <span className="text-primary group-hover:text-primary-hover text-2xl md:text-3xl tracking-wider leading-none transition-colors">
            María & Ferran
          </span>
          <span className="hidden md:inline text-primary/80 group-hover:text-primary-hover text-xs md:text-sm tracking-wider mt-0.5 transition-colors">
            Nos casamos - 15 Mayo 2027
          </span>
        </a>

        {/* 2. Enlaces escritorio */}
        <nav aria-label="Navegación principal" className="hidden md:flex">
          <ul className="flex flex-row items-center gap-6 md:gap-8">
            <NavLink href="#home">Inicio</NavLink>
            <NavLink href="#details">Detalles</NavLink>
            <NavLink href="#timeline">Plan del día</NavLink>
            <NavLink href="#rsvp" isButton>Confirmar</NavLink>
          </ul>
        </nav>

        {/* 3. Menú móvil */}
        <button
          type="button"
          aria-label="Abrir menú"
          className="block md:hidden p-1 text-primary hover:text-primary-hover transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {
            menuOpen ? <CrossIcon/> : <HamburguerIcon/>
          }
        </button>
      </header>
      
      {
        menuOpen && 
        <nav aria-label="Navegación principal" className="uppercase font-bebas-neue tracking-wider fixed z-50 top-24 left-4 right-4 border-2 bg-secondary border-primary rounded-2xl md:hidden py-4 px-5">
          <ul className="flex flex-col items-center gap-2">
            <NavLink href="#home" onClick={() => setMenuOpen(false)}>Inicio</NavLink>
            <NavLink href="#details" onClick={() => setMenuOpen(false)}>Detalles</NavLink>
            <NavLink href="#timeline" onClick={() => setMenuOpen(false)}>Plan del día</NavLink>
            <NavLink href="#rsvp" isButton onClick={() => setMenuOpen(false)}>Confirmar</NavLink>
          </ul>
        </nav>
      }

    </>
  );
};

const CrossIcon = () => {
  return (
    <svg
      className="w-7 h-7"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

const HamburguerIcon = () => {
  return (
    <svg
      className="w-7 h-7"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
        d="M5 7h14M5 12h14M5 17h14"
      />
    </svg>
  )
}