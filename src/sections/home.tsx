import { ButtonLink } from "../components/ButtonLink";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen w-full bg-secondary pt-32 md:pt-36 pb-16 px-4 sm:px-8 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12"
    >
      {/* Columna Izquierda: Centrada ópticamente con w-fit */}
      <div className="w-full md:w-1/2 flex justify-center items-center py-4">
        <div className="flex flex-col items-start w-full max-w-md">
          <h1 className="font-bebas-neue uppercase text-primary text-7xl sm:text-8xl lg:text-[7.5rem] leading-[0.88] tracking-tight mb-3 flex flex-col w-full">
            <div className="flex flex-col w-full mx-auto md:mx-0 max-w-80 md:max-w-full ">
              <div className="w-full flex justify-between select-none font-bebas-neue" aria-label="Ferran">
                {Array.from("FERRAN").map((char, index) => (
                  <span key={index} className="font-bebas-neue" aria-hidden="true">
                    {char}
                  </span>
                ))}
              </div>
              <div className="w-full flex justify-between items-center select-none font-bebas-neue" aria-label="& María">
                <span className="font-serif italic font-normal text-6xl sm:text-7xl lg:text-8xl -mt-2" aria-hidden="true">
                  &
                </span>
                {Array.from("MARÍA").map((char, index) => (
                  <span key={index} className="font-bebas-neue" aria-hidden="true">
                    {char}
                  </span>
                ))}
              </div>
            </div>
          </h1>

          <div
            className="flex w-full max-w-80 mx-auto md:mx-0 md:max-w-full justify-between font-bebas-neue font-bold uppercase text-primary text-3xl sm:text-4xl mb-6 select-none"
            aria-label="¡Nos casamos!"
          >
            {Array.from("¡Nos casamos!").map((char, index) => (
              <span key={index} aria-hidden="true">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-2 text-center items-center gap-6 text-primary text-xs sm:text-sm tracking-wider uppercase mb-8 w-full font-sans">
            <span className="block w-full leading-relaxed">
              Y nos encantaría que nos acompañes en este día especial
            </span>
            <span className="block w-full leading-relaxed font-medium">
              15 de Mayo de 2027<br />
              Manso Esmandía<br />
              Cardedeu
            </span>
          </div>

          <div className="flex flex-row gap-4 font-bebas-neue uppercase tracking-widest text-lg w-full">
            <ButtonLink variant="primary" href="#rsvp" className="flex-1">
              Confirmar asistencia
            </ButtonLink>
            <ButtonLink variant="secondary" href="#details" className="flex-1">
              Ver horario
            </ButtonLink>
          </div>
        </div>
      </div>

      {/* Columna Derecha: Tarjeta apaisada con marco */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-2 sm:p-4">
        <div className="w-full max-w-2xl aspect-[4/3] lg:aspect-[16/11] overflow-hidden rounded-3xl border-2 border-primary shadow-md">
          <img
            src={`${import.meta.env.BASE_URL}landscape.jpg`}
            alt="María y Ferran"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};