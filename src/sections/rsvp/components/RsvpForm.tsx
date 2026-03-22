import { useState, type ChangeEvent, type FormEvent } from "react";
import { TextInput } from "./form/TextInput";
import { TextArea } from "./form/TextArea";
import { RadioInput } from "./form/RadioInput";
import { SendIcon } from "../../../assets/icons/SendIcon";
import { RsvpStates, type RsvpFormData } from "../types";

type RsvpFormProps = {
  setRsvpScreen: (screen: RsvpStates) => void;
};

const buildFormInitialData = (): RsvpFormData => ({
  fullName: "",
  email: "",
  attending: true,
  busNeeded: false,
  dietaryRestrictions: "",
  otherComments: "",
});

const buildRequest = (formData: RsvpFormData): FormData => {
  const request = new FormData();
  request.append("fullName", formData.fullName);
  request.append("email", formData.email);
  request.append("attending", formData.attending.toString());
  request.append(
    "busNeeded",
    (formData.attending ? (formData.busNeeded ?? false) : false).toString(),
  );
  request.append(
    "dietaryRestrictions",
    formData.attending ? (formData.dietaryRestrictions ?? "") : "",
  );
  request.append(
    "otherComments",
    formData.attending ? (formData.otherComments ?? "") : "",
  );
  request.append("sentAt", new Date().toLocaleString());

  return request;
};

const GOOGLE_SHEETS_ID =
  "AKfycbxRN3LYHTBJmnwS3B9b2JsFtSS2a_QeG6G3re03uIPX8xe7zlQ0Z9zaBNg27M7eLSI";
const GOOGLE_SHEETS_URL = `https://script.google.com/macros/s/${GOOGLE_SHEETS_ID}/exec`;

export const RsvpForm = ({ setRsvpScreen }: RsvpFormProps) => {
  const [formData, setFormData] = useState(buildFormInitialData());

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const target = e.target as HTMLInputElement;
    const name = target.name;
    const value =
      target.type === "radio" ? target.value === "true" : target.value;

    console.log("Cambiando valor!", name, value);
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const requestBody = buildRequest(formData);
    console.log(requestBody);

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
    }
  };

  return (
    <section id="rsvp" className="py-16 flex flex-col items-center bg-bg px-4">
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
      </div>
    </section>
  );
};
