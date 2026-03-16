export const Timeline = () => {
  return (
    <>
      <div className="text-center mt-8">
        <h3 className="font-cursive-bold text-4xl text-primary m-0">
          El Plan del Dia
        </h3>
      </div>
      <div className="w-full max-w-5xl my-12 mx-auto relative px-4">
        {/* Horizontal Line */}
        <div className="absolute top-8 left-12 right-12 h-0.5 bg-primary opacity-30 md:block hidden"></div>

        <div className="flex flex-col md:flex-row justify-between relative gap-12 md:gap-4">
          {/* Item 1: Recepcion */}
          <div className="flex flex-col items-center flex-1 relative text-center">
            <div className="w-4 h-4 bg-primary rounded-full z-10 hidden md:block mt-[1.8rem] mb-6"></div>
            <div className="font-cursive text-2xl text-primary flex items-center justify-center gap-2 mb-2">
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M7 2h10l-2 15H9zM10 2v10M14 2v10M8 17h8v5H8z" />
              </svg>
              13:00
            </div>
            <div className="font-cursive-bold text-3xl text-text-dark mb-2">
              Recepción
            </div>
            <div className="font-body text-sm text-text-dark opacity-80 px-4">
              Bienvenida con vermut y aperitivos (¡Choripán, Empanadas!)
            </div>
          </div>

          {/* Item 2: Asado */}
          <div className="flex flex-col items-center flex-1 relative text-center">
            <div className="w-4 h-4 bg-primary rounded-full z-10 hidden md:block mt-[1.8rem] mb-6"></div>
            <div className="font-cursive text-2xl text-primary flex items-center justify-center gap-2 mb-2">
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  d="M5 12h14M8 12v10M16 12v10M3 8h18M6 4v4M10 4v4M14 4v4M18 4v4"
                  strokeLinecap="round"
                />
              </svg>
              15:00
            </div>
            <div className="font-cursive-bold text-3xl text-text-dark mb-2">
              El Gran Asado
            </div>
            <div className="font-body text-sm text-text-dark opacity-80 px-4">
              Almuerzo argentino con carnes a la parrilla
            </div>
          </div>

          {/* Item 3: Postres y Fiesta */}
          <div className="flex flex-col items-center flex-1 relative text-center">
            <div className="w-4 h-4 bg-primary rounded-full z-10 hidden md:block mt-[1.8rem] mb-6"></div>
            <div className="font-cursive text-2xl text-primary flex items-center justify-center gap-2 mb-2">
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M12 2a10 10 0 0 0-10 10c0 5 10 10 10 10s10-5 10-10A10 10 0 0 0 12 2zm0 14c-2 0-4-2-4-2s1 2 4 2 4-2 4-2-2 2-4 2z" />
              </svg>
              18:00
            </div>
            <div className="font-cursive-bold text-3xl text-text-dark mb-2">
              Sobremesa & Fiesta
            </div>
            <div className="font-body text-sm text-text-dark opacity-80 px-4">
              Postres (Churros, Flancito Mixto), barra libre y baile
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
