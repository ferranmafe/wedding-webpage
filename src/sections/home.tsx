import { ButtonLink } from "../components/ButtonLink";

export const Home = () => {
  return (
    <section
      id="home"
      className="flex p-4"
    >
      <div className="flex-1 flex items-center justify-center bg-secondary">
        <div>
          <div>
            Nos casamos!
          </div>
          <div>
            Ferran y María
          </div>
          <div>
            <b>Fecha</b>  15 de mayo de 2027
          </div>
          <div>
            <b>Lugar</b> Manso Esmandía, Cardedeu
          </div>
          <div className="flex">
            <ButtonLink variant="primary" href="#rsvp">Confirmar asistencia</ButtonLink>
            <div className="ml-2"/>
            <ButtonLink variant="secondary" href="#details">Ver horario</ButtonLink>
          </div>
        </div>
      </div>

      <div className="flex-1 flex items-center">
        <img src="landscape.jpg" />
      </div>
    </section>
  );
};
