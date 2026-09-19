import { ButtonLink } from "../components/ButtonLink";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen w-full bg-secondary pt-32 md:pt-36 pb-16 px-4 sm:px-8 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12"
    >
      {/* Columna Izquierda: Centrada ópticamente con w-fit */}
      <div className="w-full md:w-1/2 flex justify-center items-center py-4">
        <div className="flex flex-col items-start w-fit">
          <h1 className="font-bebas-neue uppercase text-primary text-7xl sm:text-8xl lg:text-[7.5rem] leading-[0.88] tracking-tight mb-3 flex flex-col items-start">
            <span>María</span>
            <span className="flex items-center gap-3">
              <span className="font-serif italic font-normal text-6xl sm:text-7xl lg:text-8xl -mt-2">&</span>
              <span>Ferran</span>
            </span>
          </h1>

          <span className="font-bebas-neue uppercase text-primary tracking-widest text-2xl sm:text-3xl mb-6">
            ¡Nos casamos!
          </span>

          <div className="grid grid-cols-2 gap-6 text-primary text-xs sm:text-sm tracking-wider uppercase mb-8 w-full max-w-md font-sans">
            <span className="leading-relaxed">
              Y nos encantaría que nos acompañes en este día especial
            </span>
            <span className="leading-relaxed font-medium">
              15 de Mayo de 2027<br />
              Manso Esmandía<br />
              Cardedeu
            </span>
          </div>

          <div className="flex flex-row gap-4 font-bebas-neue uppercase tracking-widest text-lg">
            <ButtonLink variant="primary" href="#rsvp">
              Confirmar asistencia
            </ButtonLink>
            <ButtonLink variant="secondary" href="#details">
              Ver horario
            </ButtonLink>
          </div>
        </div>
      </div>

      {/* Columna Derecha: Tarjeta apaisada con marco */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-2 sm:p-4">
        <div className="w-full max-w-2xl aspect-[4/3] lg:aspect-[16/11] overflow-hidden rounded-3xl border-2 border-primary shadow-md">
          <img
            src="landscape.jpg"
            alt="María y Ferran"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};