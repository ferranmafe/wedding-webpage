
import type { FC } from "react";

export const DetailsSection: FC = () => {
  return (
    <section
      id="details"
      className="py-8 min-h-screen flex flex-col items-center bg-bg-alt"
    >
      <div className="text-center mt-8">
        <h2 className="font-cursive-bold text-5xl text-primary m-0">Los Detalles</h2>
        <p className="font-cursive text-2xl text-text-dark font-medium mt-2">
          Todo lo que necesitas saber sobre nuestra celebracion de asado y
          vermut
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl my-12 px-4">
        {/* Location Card */}
        <div className="border-2 border-primary p-8 relative bg-bg" style={{ borderRadius: '8px 2px 10px 3px / 2px 10px 3px 8px' }}>
          <div className="flex items-center gap-2 font-cursive text-3xl text-primary mb-4">
            <svg
              className="w-7 h-7"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            Lugar
          </div>
          <div className="font-body text-base text-text-dark">
            <strong className="block font-semibold mb-1">Manso Esmandía</strong>
            C-251, Km. 2, 5<br />
            08440 Cardedeu, Barcelona, Catalunya
            <br />
            <a
              href="https://maps.app.goo.gl/tjN5C19xn6L2gofC6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-cursive text-xl underline decoration-wavy inline-block mt-4"
            >
              Ver en Google Maps
            </a>
          </div>
        </div>

        {/* Date Card */}
        <div className="border-2 border-primary p-8 relative bg-bg" style={{ borderRadius: '8px 2px 10px 3px / 2px 10px 3px 8px' }}>
          <div className="flex items-center gap-2 font-cursive text-3xl text-primary mb-4">
            <svg
              className="w-7 h-7"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
              />
            </svg>
            Cuando
          </div>
          <div className="font-body text-base text-text-dark">
            <strong className="block font-semibold mb-1">Sabado, 15 de Mayo 2027</strong>
            <div className="flex items-center gap-1 mt-2 opacity-80">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              A partir de las 13:00h
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-8">
        <h3 className="font-cursive-bold text-4xl text-primary m-0">El Plan del Dia</h3>
      </div>

      {/* Vertical Timeline */}
      <div className="max-w-[600px] my-12 mx-auto relative py-8 w-full">
        {/* Timeline Line */}
        <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-primary -translate-x-1/2 opacity-30"></div>

        {/* Item 1: Recepcion */}
        <div className="flex justify-center items-center relative mb-12 w-full">
          <div className="w-4 h-4 bg-primary rounded-full absolute left-1/2 -translate-x-1/2 z-10"></div>
          <div className="w-1/2 px-8 flex flex-col text-right items-end pr-12">
            <div className="font-cursive text-2xl text-primary flex items-center gap-4 flex-row">
              13:00
              <svg
                className="w-8 h-8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M7 2h10l-2 15H9zM10 2v10M14 2v10M8 17h8v5H8z" />
              </svg>
            </div>
            <div className="font-cursive-bold text-3xl text-text-dark my-2">Recepcion</div>
            <div className="font-body text-sm text-text-dark opacity-80">
              Bienvenida con vermut y aperitivos (¡Choripán, Empanadas!)
            </div>
          </div>
          <div className="w-1/2"></div>
        </div>

        {/* Item 2: Asado */}
        <div className="flex justify-center items-center relative mb-12 w-full">
          <div className="w-4 h-4 bg-primary rounded-full absolute left-1/2 -translate-x-1/2 z-10"></div>
          <div className="w-1/2"></div>
          <div className="w-1/2 px-8 flex flex-col text-left items-start pl-12">
            <div className="font-cursive text-2xl text-primary flex items-center gap-4 space-x-reverse flex-row-reverse -ml-12 pl-12">
              15:00
              <svg
                className="w-8 h-8 mr-4"
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
            </div>
            <div className="font-cursive-bold text-3xl text-text-dark my-2">El Gran Asado</div>
            <div className="font-body text-sm text-text-dark opacity-80">
              Almuerzo argentino con carnes a la parrilla
            </div>
          </div>
        </div>

        {/* Item 3: Postres y Fiesta */}
        <div className="flex justify-center items-center relative mb-12 w-full">
          <div className="w-4 h-4 bg-primary rounded-full absolute left-1/2 -translate-x-1/2 z-10"></div>
          <div className="w-1/2 px-8 flex flex-col text-right items-end pr-12">
            <div className="font-cursive text-2xl text-primary flex items-center gap-4 flex-row">
              18:00
              <svg
                className="w-8 h-8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M12 2a10 10 0 0 0-10 10c0 5 10 10 10 10s10-5 10-10A10 10 0 0 0 12 2zm0 14c-2 0-4-2-4-2s1 2 4 2 4-2 4-2-2 2-4 2z" />
              </svg>
            </div>
            <div className="font-cursive-bold text-3xl text-text-dark my-2">Sobremesa & Fiesta</div>
            <div className="font-body text-sm text-text-dark opacity-80">
              Postres (Churros, Flancito Mixto), barra libre y baile
            </div>
          </div>
          <div className="w-1/2"></div>
        </div>
      </div>
    </section>
  );
};
