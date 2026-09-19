export const Details = () => {
  return (
    <section
      id="details"
      className="w-full bg-primary text-secondary py-16 md:py-24 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Píldora de cabecera */}
        <div className="mb-12 md:mb-16">
          <span className="inline-block border-2 border-secondary px-8 py-2 rounded-full font-bebas-neue tracking-widest text-2xl md:text-3xl uppercase">
            Los Detalles
          </span>
        </div>

        {/* Contenido en dos columnas */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-10 md:gap-14">
          {/* Columna Izquierda: Imagen con marco */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="w-full max-w-xl aspect-[4/3] overflow-hidden rounded-3xl border-2 border-secondary shadow-md">
              <img
                src={`${import.meta.env.BASE_URL}venue.jpg`}
                alt="Manso Esmandía Venue"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Columna Derecha: Información tipográfica */}
          <div className="w-full md:w-1/2 flex flex-col items-center text-center">
            {/* Fecha y Hora */}
            <h3 className="font-bebas-neue uppercase text-4xl sm:text-5xl lg:text-6xl tracking-wide leading-none mb-3">
              Sábado, 15 de Mayo 2027
            </h3>
            <p className="font-bebas-neue text-2xl sm:text-3xl tracking-widest mb-6">
              13:00 h
            </p>

            {/* Dirección */}
            <p className="text-secondary/90 text-sm sm:text-base font-sans tracking-wider uppercase leading-relaxed max-w-sm mb-8">
              Manso Esmandía, C-251, Km. 2, 5<br />
              08440 Cardedeu, Barcelona, Catalunya
            </p>

            {/* Botonera de acciones */}
            <div className="flex flex-wrap justify-center gap-4 font-bebas-neue uppercase tracking-widest text-base sm:text-lg">
              <a
                href="https://maps.app.goo.gl/tjN5C19xn6L2gofC6"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary text-primary px-6 py-2.5 rounded-xl hover:brightness-95 transition-all"
              >
                Ver en Maps
              </a>
              <a
                href="#"
                className="border-2 border-secondary text-secondary px-6 py-2.5 rounded-xl hover:bg-secondary/10 transition-colors"
              >
                Añadir al Calendario
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};