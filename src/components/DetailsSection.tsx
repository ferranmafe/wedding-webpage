
import type { FC } from 'react';

export const DetailsSection: FC = () => {
  return (
    <section id="details" className="py-4" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'var(--color-bg)' }}>
      
      <div className="text-center" style={{ marginTop: '2rem' }}>
        <h2 className="title-primary" style={{ fontSize: 'var(--text-3xl)' }}>Los Detalles</h2>
        <p className="subtitle" style={{ fontSize: 'var(--text-lg)', marginTop: '0.5rem' }}>
          Todo lo que necesitas saber sobre nuestra celebracion de asado y vermut
        </p>
      </div>

      <div className="details-grid" style={{ width: '100%' }}>
        {/* Location Card */}
        <div className="details-card">
          <div className="card-header">
            <svg className="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            Lugar
          </div>
          <div className="card-content">
            <strong>Manso Esmandía</strong>
            C-251, Km. 2, 5<br/>
            08440 Cardedeu, Barcelona, Catalunya
            <br/>
            <a href="https://maps.app.goo.gl/tjN5C19xn6L2gofC6" target="_blank" rel="noopener noreferrer" className="link-primary">
              Ver en Google Maps
            </a>
          </div>
        </div>

        {/* Date Card */}
        <div className="details-card">
          <div className="card-header">
            <svg className="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
            </svg>
            Cuando
          </div>
          <div className="card-content">
            <strong>Sabado, 15 de Mayo 2027</strong>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', marginTop: '0.5rem', opacity: 0.8 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              A partir de las 13:00h
            </div>
          </div>
        </div>
      </div>

      <div className="text-center" style={{ marginTop: '2rem' }}>
        <h3 className="title-primary" style={{ fontSize: 'var(--text-2xl)' }}>El Plan del Dia</h3>
      </div>

      {/* Vertical Timeline */}
      <div className="timeline">
        
        {/* Item 1: Recepcion */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <div className="timeline-time">
              13:00
              <svg className="timeline-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M7 2h10l-2 15H9zM10 2v10M14 2v10M8 17h8v5H8z" />
              </svg>
            </div>
            <div className="timeline-title">Recepcion</div>
            <div className="timeline-desc">Bienvenida con vermut y aperitivos (¡Choripán, Empanadas!)</div>
          </div>
        </div>

        {/* Item 2: Asado */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <div className="timeline-time">
              15:00
              <svg className="timeline-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                 <path d="M5 12h14M8 12v10M16 12v10M3 8h18M6 4v4M10 4v4M14 4v4M18 4v4" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="timeline-title">El Gran Asado</div>
            <div className="timeline-desc">Almuerzo argentino con carnes a la parrilla</div>
          </div>
        </div>

        {/* Item 3: Postres y Fiesta */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <div className="timeline-time">
              18:00
              <svg className="timeline-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2a10 10 0 0 0-10 10c0 5 10 10 10 10s10-5 10-10A10 10 0 0 0 12 2zm0 14c-2 0-4-2-4-2s1 2 4 2 4-2 4-2-2 2-4 2z" />
              </svg>
            </div>
            <div className="timeline-title">Sobremesa & Fiesta</div>
            <div className="timeline-desc">Postres (Churros, Flancito Mixto), barra libre y baile</div>
          </div>
        </div>

      </div>

    </section>
  );
};
