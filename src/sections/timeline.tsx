type TimelineRowProps = {
  time: string;
  activity: string;
  detail: string;
};

const TimelineRow = ({ time, activity, detail }: TimelineRowProps) => {
  return (
    <div className="py-6 sm:py-8 flex flex-row items-baseline gap-6 sm:gap-12">
      <div className="w-24 sm:w-32 shrink-0">
        <span className="font-bebas-neue text-4xl sm:text-5xl leading-none tracking-tight text-primary">
          {time}
        </span>
      </div>
      <div className="flex flex-col items-start text-left">
        <p className="font-bebas-neue text-2xl sm:text-3xl uppercase tracking-wide leading-tight mb-1 text-primary">
          {activity}
        </p>
        <p className="font-sans text-xs sm:text-sm tracking-wider uppercase text-primary/80 leading-relaxed">
          {detail}
        </p>
      </div>
    </div>
  );
};

export const Timeline = () => {
  return (
    <section
      id="timeline"
      className="w-full bg-secondary text-primary py-16 md:py-24 px-6 md:px-12"
    >
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        {/* Cabecera en formato píldora */}
        <div className="mb-14 md:mb-18">
          <span className="inline-block border-2 border-primary px-8 py-2 rounded-full font-bebas-neue tracking-widest text-2xl md:text-3xl uppercase text-primary">
            El Plan del Día
          </span>
        </div>

        {/* Lista con divisores continuos */}
        <div className="w-full flex flex-col border-t border-b border-primary/20">
          <TimelineRow
            time="13:00"
            activity="Recepción"
            detail="Llegada de los invitados en coche, buses, etc. Bebidas de bienvenida"
          />
          <div className="border-t border-primary/20" />

          <TimelineRow
            time="14:00"
            activity="Aperitivo"
            detail="Vinito, comida, charla y diversión"
          />
          <div className="border-t border-primary/20" />

          <TimelineRow
            time="15:00"
            activity="Banda"
            detail="Música en vivo para animar la tarde"
          />
          <div className="border-t border-primary/20" />

          <TimelineRow
            time="17:00"
            activity="Principal"
            detail="Plato principal y postres"
          />
          <div className="border-t border-primary/20" />

          <TimelineRow
            time="19:00"
            activity="Fiesta"
            detail="Baile, copas y celebración"
          />
          <div className="border-t border-primary/20" />

          <TimelineRow
            time="23:00"
            activity="Fin del evento"
            detail="Despedida y cierre del recinto"
          />
        </div>
      </div>
    </section>
  );
};