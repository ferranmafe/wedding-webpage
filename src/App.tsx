import { HomeSection } from './components/HomeSection'
import { DetailsSection } from './components/DetailsSection'
import { RsvpSection } from './components/RsvpSection'

function App() {
  return (
    <>
      {/* Simple Sticky Header */}
      <header style={{ 
        position: 'fixed', 
        top: 0, 
        width: '100%', 
        backgroundColor: 'rgba(253, 251, 247, 0.9)', /* Match var(--color-bg) with opacity */
        padding: '1rem',
        borderBottom: '2px dashed var(--color-primary)',
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'center',
        gap: '2rem'
      }}>
        <a href="#home" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', textDecoration: 'none' }}>Inicio</a>
        <a href="#details" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', textDecoration: 'none' }}>Detalles</a>
        <a href="#rsvp" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', textDecoration: 'none' }}>Asistencia</a>
      </header>

      <main style={{ paddingTop: '60px' }}>
        <HomeSection />
        <DetailsSection />
        <RsvpSection />
      </main>
    </>
  )
}

export default App
