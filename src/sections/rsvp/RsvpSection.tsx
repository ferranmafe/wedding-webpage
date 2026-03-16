import { useState } from "react";
import type { FC, FormEvent, ChangeEvent } from "react";

export const RsvpSection: FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    attending: "yes",
    dietary: "",
    song: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("RSVP Submitted:", formData);
    alert(
      "¡Gracias por confirmar! Tu respuesta ha sido enviada con éxito. (Demo only)"
    );
  };

  return (
    <section id="rsvp" className="py-8 min-h-screen flex flex-col justify-center items-center bg-bg px-4">
      <div className="border-4 border-primary p-8 my-8 mx-auto w-full max-w-[800px]" style={{ borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px' }}>
        <h2 className="font-cursive-bold text-4xl text-primary text-center m-0 mb-2">Confirmación de Asistencia</h2>
        <p className="font-cursive text-xl text-text-dark text-center mb-8">
          Por favor, confírmanos tu asistencia antes del 15 de Abril de 2027.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-[500px] mx-auto text-left">
          <div className="w-full">
            <label htmlFor="name" className="block font-cursive text-2xl text-text-dark mb-2">
              Tu(s) Nombre(s)
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 text-lg font-body border-2 border-primary bg-bg rounded-[4px_12px_4px_12px] shadow-[2px_2px_0_0_#D05A45] focus:outline-none focus:shadow-[4px_4px_0_0_#D05A45] transition-shadow"
              placeholder="Ej. Martín y Sofía"
            />
          </div>

          <div className="w-full">
            <label className="block font-cursive text-2xl text-text-dark mb-2">¿Asistirás?</label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 font-body text-lg cursor-pointer">
                <input
                  type="radio"
                  name="attending"
                  value="yes"
                  checked={formData.attending === "yes"}
                  onChange={handleChange}
                  className="w-4 h-4 accent-primary"
                />
                ¡Sí, allí estaremos!
              </label>
              <label className="flex items-center gap-2 font-body text-lg cursor-pointer">
                <input
                  type="radio"
                  name="attending"
                  value="no"
                  checked={formData.attending === "no"}
                  onChange={handleChange}
                  className="w-4 h-4 accent-primary"
                />
                No podremos asistir
              </label>
            </div>
          </div>

          <div className="w-full">
            <label htmlFor="dietary" className="block font-cursive text-2xl text-text-dark mb-2">
              Alergias / Restricciones Alimentarias
            </label>
            <textarea
              id="dietary"
              name="dietary"
              rows={3}
              value={formData.dietary}
              onChange={handleChange}
              className="w-full px-4 py-3 text-lg font-body border-2 border-primary bg-bg rounded-[4px_12px_4px_12px] shadow-[2px_2px_0_0_#D05A45] focus:outline-none focus:shadow-[4px_4px_0_0_#D05A45] transition-shadow resize-y"
              placeholder="Ej. Sofía es intolerante a la lactosa"
            ></textarea>
          </div>

          <div className="w-full">
            <label htmlFor="song" className="block font-cursive text-2xl text-text-dark mb-2">
              Recomiéndanos una canción
            </label>
            <input
              type="text"
              id="song"
              name="song"
              value={formData.song}
              onChange={handleChange}
              className="w-full px-4 py-3 text-lg font-body border-2 border-primary bg-bg rounded-[4px_12px_4px_12px] shadow-[2px_2px_0_0_#D05A45] focus:outline-none focus:shadow-[4px_4px_0_0_#D05A45] transition-shadow"
              placeholder="Ej. Tusa - Karol G"
            />
          </div>

          <div className="text-center mt-4">
            <button type="submit" className="inline-block px-8 py-3 text-lg font-cursive font-bold rounded-lg transition-transform duration-200 cursor-pointer text-center bg-primary text-white border-2 border-primary shadow-[4px_4px_0_0_#8C7D70] hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_#8C7D70]">
              Enviar Confirmación
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
