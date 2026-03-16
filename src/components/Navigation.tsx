import type { FC } from "react";

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <a
      href={href}
      className="font-cursive text-lg text-text-dark no-underline font-semibold"
    >
      {children}
    </a>
  );
};

export const Navigation: FC = () => {
  return (
    <header className="fixed top-0 w-full bg-[#fcf9f2] px-8 py-4 z-[1000] flex justify-between items-center shadow-sm">
      <div className="font-cursive-bold text-xl text-primary">
        Asado y vermut
      </div>

      <nav className="flex gap-8">
        <NavLink href="#home">Inicio</NavLink>
        <NavLink href="#details">Detalles</NavLink>
        <NavLink href="#rsvp">Confirmar</NavLink>
      </nav>
    </header>
  );
};
