export const Details = () => {
  return (
    <section id="details" className="w-full max-w-6xl mx-auto px-4 mt-8 mb-16">
      <div className="mb-10 text-left md:ml-8">
        <h2 className="font-cursive-bold text-5xl text-text-dark relative z-10 m-0 inline-block">
          Los Detalles
          <div className="absolute bottom-1 -left-2 -right-2 h-4 bg-primary z-[-1] opacity-20"></div>
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
        {/* Venue Image */}
        <div className="w-full md:w-1/2">
          <img
            src="/venue.jpg"
            alt="Manso Esmandía Venue"
            className="w-full h-auto object-cover shadow-sm"
            style={{ borderRadius: "2px" }}
          />
        </div>

        {/* Details Text */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center text-center space-y-8">
          <div className="font-body text-text-dark">
            <div className="text-3xl mb-3 font-light">
              Sábado, 15 de Mayo 2027
            </div>
            <div className="text-3xl font-light">13:00 h</div>
          </div>

          <div className="font-body text-lg text-text-dark/90 max-w-sm font-light leading-relaxed">
            Manso Esmandía, C-251, Km. 2, 5<br />
            08440 Cardedeu, Barcelona, Catalunya
          </div>

          <div className="flex flex-col items-center gap-4 font-body text-base">
            <a
              href="https://maps.app.goo.gl/tjN5C19xn6L2gofC6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:opacity-70 transition-opacity"
            >
              Ver en Google Maps
            </a>
            <a
              href="#"
              className="text-primary hover:opacity-70 transition-opacity"
            >
              Añadir al Calendario
            </a>
          </div>

          <a
            href="#rsvp"
            className="mt-6 border border-text-dark text-text-dark px-14 py-3 text-sm font-body uppercase tracking-widest hover:bg-text-dark hover:text-white transition-colors"
          >
            RSVP
          </a>
        </div>
      </div>
    </section>
  );
};
