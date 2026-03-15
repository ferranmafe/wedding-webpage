import { HomeSection } from './components/HomeSection'
import { DetailsSection } from './components/DetailsSection'
import { RsvpSection } from './components/RsvpSection'

function App() {
  return (
    <>
      <header style={{ 
        position: 'fixed', 
        top: 0, 
        width: '100%', 
        backgroundColor: 'rgba(252, 249, 242, 0.95)', /* var(--color-bg) */
        padding: '1rem 2rem',
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
      }}>
        {/* Top Left Title */}
        <div style={{ 
          fontFamily: 'var(--font-cursive-bold)', 
          fontSize: 'var(--text-xl)', 
          color: 'var(--color-primary)' 
        }}>
          Asado y vermut
        </div>

        {/* Top Right Navigation */}
        <nav style={{ display: 'flex', gap: '2rem' }}>
          <a href="#home" style={{ 
            fontFamily: 'var(--font-cursive)', 
            fontSize: 'var(--text-lg)', 
            color: 'var(--color-text-dark)', 
            textDecoration: 'none',
            fontWeight: 600
          }}>Inicio</a>
          <a href="#details" style={{ 
            fontFamily: 'var(--font-cursive)', 
            fontSize: 'var(--text-lg)', 
            color: 'var(--color-text-dark)', 
            textDecoration: 'none',
            fontWeight: 600
          }}>Detalles</a>
          <a href="#rsvp" style={{ 
            fontFamily: 'var(--font-cursive)', 
            fontSize: 'var(--text-lg)', 
            color: 'var(--color-text-dark)', 
            textDecoration: 'none',
            fontWeight: 600
          }}>Confirmar</a>
        </nav>
      </header>

      <main style={{ paddingTop: '80px' }}>
        <HomeSection />
        <DetailsSection />
        <RsvpSection />
      </main>
    </>
  )
}

export default App
