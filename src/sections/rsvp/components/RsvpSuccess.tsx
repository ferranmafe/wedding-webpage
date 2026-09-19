type Props = {
  onSendAnother: () => void;
};

export const RsvpSuccess = ({ onSendAnother }: Props) => {
  return (
    <section
      id="rsvp"
      className="w-full bg-primary text-secondary py-16 md:py-24 px-6 md:px-12"
    >
      <div className="max-w-xl mx-auto flex flex-col items-center">
        {/* Píldora de cabecera */}
        <div className="mb-12 md:mb-16">
          <span className="inline-block border-2 border-secondary px-8 py-2 rounded-full font-bebas-neue tracking-widest text-2xl md:text-3xl uppercase">
            Confirmacion Enviada
          </span>
        </div>

        <p className="font-sans text-secondary/90 text-center mb-10 text-sm sm:text-base tracking-wider uppercase leading-relaxed max-w-sm">
          Gracias por confirmar tu asistencia
        </p>

        <button
          onClick={onSendAnother}
          className="inline-flex items-center justify-center gap-2 border-2 border-secondary text-secondary px-6 py-2.5 rounded-xl font-bebas-neue uppercase tracking-widest text-base sm:text-lg hover:bg-secondary/10 transition-colors cursor-pointer bg-transparent"
        >
          Enviar otra confirmacion
        </button>
      </div>
    </section>
  );
};
