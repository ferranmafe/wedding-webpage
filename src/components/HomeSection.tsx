
import type { FC } from 'react';

export const HomeSection: FC = () => {
  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative', overflow: 'hidden', padding: '1rem' }}>
      
      {/* Background Icons (Approximate placement) */}
      <svg className="bg-icon" style={{ top: '15%', left: '10%', width: '40px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2a10 10 0 0 0-10 10c0 5 10 10 10 10s10-5 10-10A10 10 0 0 0 12 2zm0 14c-2 0-4-2-4-2s1 2 4 2 4-2 4-2-2 2-4 2z" />
      </svg>
      <svg className="bg-icon" style={{ top: '60%', left: '8%', width: '25px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M7 2h10l-2 15H9zM10 2v10M14 2v10M8 17h8v5H8z" />
      </svg>
      <svg className="bg-icon" style={{ top: '20%', right: '10%', width: '25px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M6 2h12v7c0 3-3 5-6 8v5H8v-5c-3-3-6-5-6-8V2z" />
        <path d="M6 5h12" />
      </svg>
      <svg className="bg-icon" style={{ top: '65%', right: '12%', width: '45px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2C6 2 2 8 2 12c0 4 4 10 10 10s10-6 10-10C22 8 18 2 12 2zm-5 12h10M7 16h10" />
      </svg>
      {/* Sparkles */}
      <div className="bg-icon" style={{ top: '12%', left: '25%', fontSize: '1.5rem' }}>✨</div>
      <div className="bg-icon" style={{ top: '55%', left: '30%', fontSize: '1rem' }}>✨</div>
      <div className="bg-icon" style={{ top: '75%', right: '35%', fontSize: '1.5rem' }}>✨</div>
      <div className="bg-icon" style={{ top: '25%', right: '8%', fontSize: '1rem' }}>✨</div>


      <div style={{ textAlign: 'center', zIndex: 10 }}>
        <h2 className="subtitle">Nos casamos</h2>
        
        <h1 className="title-primary">Ferran & María</h1>
        
        <div className="wavy-divider"></div>

        <div className="date-text">15 de Mayo, 2027</div>
        <div className="location-text">Manso Esmandía, Cardedeu</div>

        <div className="btn-group">
          <a href="#details" className="btn btn-outline">Ver detalles</a>
          <a href="#rsvp" className="btn btn-solid">Confirmar asistencia</a>
        </div>
        <div style={{ marginTop: '0.5rem', fontFamily: 'var(--font-cursive)', fontSize: 'var(--text-lg)', color: 'var(--color-text-dark)' }}>
          Riquísimo todo, che!
        </div>
      </div>
    </section>
  );
};


