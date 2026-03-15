import { useState } from 'react';
import type { FC, ChangeEvent, FormEvent } from 'react';

export const RsvpSection: FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    attending: 'yes',
    dietary: '',
    song: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('RSVP Enviado:', formData);
    alert('¡Gracias por confirmar tu asistencia! (Revisa la consola para los datos)');
  };

  return (
    <section id="rsvp" className="py-4" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <div className="hand-drawn-border" style={{ width: '100%' }}>
        <h2 className="text-center">Confirmación de Asistencia</h2>
        <p className="text-center" style={{ fontFamily: 'var(--font-display-alt)', fontSize: 'var(--text-lg)' }}>
          ¡Por favor confírmanos tu asistencia!
        </p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px', margin: '0 auto', fontFamily: 'var(--font-display-alt)', fontSize: 'var(--text-lg)' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="name">Nombre(s):</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required 
              value={formData.name}
              onChange={handleChange}
              style={{ padding: '0.5rem', border: '2px solid var(--color-primary)', borderRadius: '4px', backgroundColor: 'transparent', color: 'var(--color-primary)', fontFamily: 'inherit', fontSize: 'inherit' }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="attending">¿Asistirás?</label>
            <select 
              id="attending" 
              name="attending" 
              value={formData.attending}
              onChange={handleChange}
              style={{ padding: '0.5rem', border: '2px solid var(--color-primary)', borderRadius: '4px', backgroundColor: 'transparent', color: 'var(--color-primary)', fontFamily: 'inherit', fontSize: 'inherit' }}
            >
              <option value="yes">¡Sí, no me lo pierdo!</option>
              <option value="no">No, lamentablemente.</option>
            </select>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="dietary">Alergias o Dietas Especiales:</label>
            <textarea 
              id="dietary" 
              name="dietary" 
              rows={2}
              value={formData.dietary}
              onChange={handleChange}
              style={{ padding: '0.5rem', border: '2px solid var(--color-primary)', borderRadius: '4px', backgroundColor: 'transparent', color: 'var(--color-primary)', fontFamily: 'inherit', fontSize: 'inherit', resize: 'vertical' }}
            ></textarea>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="song">Pide una Canción:</label>
            <input 
              type="text" 
              id="song" 
              name="song" 
              value={formData.song}
              onChange={handleChange}
              style={{ padding: '0.5rem', border: '2px solid var(--color-primary)', borderRadius: '4px', backgroundColor: 'transparent', color: 'var(--color-primary)', fontFamily: 'inherit', fontSize: 'inherit' }}
            />
          </div>

          <button type="submit" style={{ marginTop: '1rem' }}>Enviar RSVP</button>
        </form>
      </div>
    </section>
  );
};
