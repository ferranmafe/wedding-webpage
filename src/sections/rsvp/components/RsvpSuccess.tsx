type Props = {
  onSendAnother: () => void;
};

export const RsvpSuccess = ({ onSendAnother }: Props) => {
  return (
    <section id="rsvp" className="py-16 flex flex-col items-center bg-bg px-4">
      <div className="w-full max-w-[600px] mx-auto text-center">
        <h2 className="font-cursive-bold text-5xl md:text-6xl text-primary m-0 mb-4 tracking-wide">
          Confirmacion enviada
        </h2>
        <p className="font-body text-text-dark text-center mb-12 opacity-80 text-lg">
          Gracias por confirmar tu asistencia
        </p>
        <button
          onClick={onSendAnother}
          className="inline-flex items-center justify-center gap-2 px-8 py-3 text-lg font-cursive text-white bg-primary rounded-md transition-opacity hover:opacity-90 cursor-pointer border-none"
        >
          Enviar otra confirmacion
        </button>
      </div>
    </section>
  );
};
