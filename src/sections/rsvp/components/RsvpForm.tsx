import { useState, type ChangeEvent, type FormEvent } from "react";
import { TextInput } from "./form/TextInput";
import { TextArea } from "./form/TextArea";
import { RadioInput } from "./form/RadioInput";
import { buildInitialFormData } from "./form/buildInitialFormData";
import { buildRequest } from "./form/buildRequest";
import { SendIcon } from "../../../assets/icons/SendIcon";
import { RsvpStates } from "../types";
import { Spinner } from "../../../assets/icons/Spinner";
import { Loading } from "./Loading";

const GOOGLE_SHEETS_URL = `https://script.google.com/macros/s/${import.meta.env.VITE_GOOGLE_SHEETS_ID}/exec`;

type RsvpFormProps = {
  setRsvpScreen: (screen: RsvpStates) => void;
};

export const RsvpForm = ({ setRsvpScreen }: RsvpFormProps) => {
  const [formData, setFormData] = useState(buildInitialFormData());
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const target = e.target as HTMLInputElement;
    const name = target.name;
    const value =
      target.type === "radio" ? target.value === "true" : target.value;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);
    const requestBody = buildRequest(formData);

    try {
      const res = await fetch(GOOGLE_SHEETS_URL, {
        method: "POST",
        body: requestBody,
      });
      if (res.ok) {
        setRsvpScreen(RsvpStates.SUCCESS);
      } else {
        console.log("Request Failed:", res);
        setRsvpScreen(RsvpStates.ERROR);
      }
    } catch (e) {
      console.error("Error during fetch:", e);
      setRsvpScreen(RsvpStates.ERROR);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="rsvp"
      className="w-full bg-primary text-secondary py-16 md:py-24 px-6 md:px-12"
    >
      <div className="max-w-xl mx-auto flex flex-col items-center">
        {/* Píldora de cabecera */}
        <div className="mb-12 md:mb-16">
          <span className="inline-block border-2 border-secondary px-8 py-2 rounded-full font-bebas-neue tracking-widest text-2xl md:text-3xl uppercase">
            Confirmar Asistencia
          </span>
        </div>

        <Loading
          isLoading={isLoading}
          skeleton={
            <div className="flex flex-row items-center justify-center gap-4">
              <Spinner />
              <p className="font-sans text-secondary/90 text-center text-lg tracking-wider uppercase">
                Enviando respuesta...
              </p>
            </div>
          }
        >
          <p className="font-sans text-secondary/90 text-center mb-12 text-sm sm:text-base tracking-wider uppercase leading-relaxed max-w-sm">
            Por favor, rellenad el formulario para confirmar vuestra asistencia
          </p>

          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col gap-8 text-left"
          >
            {/* Nombre */}
            <TextInput
              label="Nombre completo"
              name="fullName"
              value={formData.fullName}
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
              <label className="block font-bebas-neue text-xl tracking-wider uppercase text-secondary mb-3">
                Vas a asistir? *
              </label>
              <div className="flex flex-col sm:flex-row gap-6">
                <RadioInput
                  label="Si, ahi estare!"
                  name="attending"
                  value="true"
                  checked={formData.attending}
                  onChange={handleChange}
                />
                <RadioInput
                  label="No puedo asistir"
                  name="attending"
                  value="false"
                  checked={!formData.attending}
                  onChange={handleChange}
                />
              </div>
            </div>

            {formData.attending && (
              <>
                {/* Bus Needed Radio */}
                <div className="w-full">
                  <label className="block font-bebas-neue text-xl tracking-wider uppercase text-secondary mb-3">
                    Necesitas transporte?
                  </label>
                  <div className="flex flex-col sm:flex-row gap-6">
                    <RadioInput
                      label="Si, necesito transporte"
                      name="busNeeded"
                      value="true"
                      checked={formData.busNeeded}
                      onChange={handleChange}
                    />
                    <RadioInput
                      label="No, gracias"
                      name="busNeeded"
                      value="false"
                      checked={!formData.busNeeded}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Dietary Restrictions Textarea */}
                <TextArea
                  label="Restricciones alimentarias"
                  name="dietaryRestrictions"
                  value={formData.dietaryRestrictions || ""}
                  onChange={handleChange}
                  placeholder="Si tienes alguna restriccion alimentaria, por favor indicalo aqui..."
                  rows={4}
                />
              </>
            )}

            {/* Message Textarea */}
            <TextArea
              label="Tienes alguna pregunta o comentario?"
              name="otherComments"
              value={formData.otherComments || ""}
              onChange={handleChange}
              placeholder="Dejanos un mensaje..."
              rows={4}
            />

            {/* Submit Button */}
            <div className="mt-4 flex justify-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-secondary text-primary px-8 py-2.5 rounded-xl font-bebas-neue uppercase tracking-widest text-base sm:text-lg hover:brightness-95 transition-all cursor-pointer border-none"
              >
                <SendIcon />
                Enviar confirmacion
              </button>
            </div>
          </form>
        </Loading>
      </div>
    </section>
  );
};
