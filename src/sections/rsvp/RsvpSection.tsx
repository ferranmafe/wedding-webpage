import { useState } from "react";
import type { FC, FormEvent, ChangeEvent } from "react";
import { TextInput } from "./components/TextInput";
import { TextArea } from "./components/TextArea";
import { RadioInput } from "./components/RadioInput";
import { SendIcon } from "../../assets/icons/SendIcon";

export const RsvpSection: FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    attending: "yes",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("RSVP Submitted:", formData);
    alert(
      "¡Gracias por confirmar! Tu respuesta ha sido enviada con éxito. (Demo only)",
    );
  };

  return (
    <section
      id="rsvp"
      className="py-16 min-h-screen flex flex-col items-center bg-bg px-4"
    >
      <div className="w-full max-w-[600px] mx-auto text-center">
        <h2 className="font-cursive-bold text-5xl md:text-6xl text-primary m-0 mb-4 tracking-wide">
          Confirmar Asistencia
        </h2>
        <p className="font-body text-text-dark text-center mb-12 opacity-80 text-lg">
          Por favor, rellenad el formulario para confirmar vuestra asistencia
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-8 text-left">
          {/* Nombre */}
          <TextInput
            label="Nombre"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Tu nombre"
            required
          />

          {/* Email */}
          <TextInput
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="tu@email.com"
            required
          />

          {/* Attendance Radio */}
          <div className="w-full">
            <label className="block font-cursive text-xl text-primary mb-3">
              Vas a asistir? *
            </label>
            <div className="flex flex-col sm:flex-row gap-6">
              <RadioInput
                label="Si, ahi estare!"
                name="attending"
                value="yes"
                checked={formData.attending === "yes"}
                onChange={handleChange}
              />
              <RadioInput
                label="No puedo asistir"
                name="attending"
                value="no"
                checked={formData.attending === "no"}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Message Textarea */}
          <TextArea
            label="Mensaje para los novios"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Dejanos un mensaje..."
            rows={4}
          />

          {/* Submit Button */}
          <div className="mt-4">
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 text-lg font-cursive text-white bg-primary rounded-md transition-opacity hover:opacity-90 cursor-pointer border-none"
            >
              <SendIcon />
              Enviar confirmacion
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
