type TimelineRowProps = {
  time: string
  activity: string
  detail: string
}

const TimelineRow = ({time, activity, detail}: TimelineRowProps) => {
  return (
    <div className="flex items-center gap-8">
      <div>
        {time}
      </div>
      <div>
        <p>
          {activity}
        </p>
        <p>
          {detail}
        </p>
      </div>
    </div>
  )
}

export const Timeline = () => {
  return (
    <section id="timeline" className="w-full max-w-6xl mx-auto px-4 mt-8 mb-16">
      <div className="text-center mt-8">
        <h3 className="font-cursive-bold text-4xl text-primary m-0">
          El Plan del Dia
        </h3>
      </div>

      <div className="flex flex-col">
        <TimelineRow 
          time="13.00" 
          activity="Recepción" 
          detail="Llegada de los invitados en coche, buses, etc. Bebidas de bienvenida" 
        />
        <div className="border"/>
        
        <TimelineRow 
          time="14.00" 
          activity="Aperitivo" 
          detail="Vinito, comida, charla y diversión" 
        />
        <div className="border"/>
        
        <TimelineRow 
          time="15.00" 
          activity="Banda" 
          detail="Música en vivo para animar la tarde" 
        />
        <div className="border"/>
        
        <TimelineRow 
          time="17.00" 
          activity="Principal" 
          detail="Plato principal y postres" 
        />
        <div className="border"/>
        
        <TimelineRow 
          time="19.00" 
          activity="Fiesta" 
          detail="Baile, copas y celebración" 
        />
        <div className="border"/>
        
        <TimelineRow 
          time="23.00" 
          activity="Fin del evento" 
          detail="Despedida y cierre del recinto" 
        />
      </div>
    </section>
  );
};