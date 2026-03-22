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
    <section id="rsvp" className="py-16 flex flex-col items-center bg-bg px-4">
      <div className="w-full max-w-[600px] mx-auto text-center">
        <h2 className="font-cursive-bold text-5xl md:text-6xl text-primary m-0 mb-4 tracking-wide">
          Confirmar Asistencia
        </h2>
        <Loading
          isLoading={isLoading}
          skeleton={
            <div className="flex flex-row items-center justify-center gap-4">
              <Spinner />
              <p className="font-body text-text-dark text-center opacity-80 text-lg">
                Enviando respuesta...
              </p>
            </div>
          }
        >
          <p className="font-body text-text-dark text-center mb-12 opacity-80 text-lg">
            Por favor, rellenad el formulario para confirmar vuestra asistencia
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-8 text-left"
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
              <label className="block font-cursive text-xl text-primary mb-3">
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
                  <label className="block font-cursive text-xl text-primary mb-3">
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
        </Loading>
      </div>
    </section>
  );
};
