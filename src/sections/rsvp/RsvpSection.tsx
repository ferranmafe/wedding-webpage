import { useState } from "react";
import { RsvpSuccess } from "./components/RsvpSuccess";
import { RsvpError } from "./components/RsvpError";
import { RsvpStates } from "./types";
import { RsvpForm } from "./components/RsvpForm";

export const RsvpSection = () => {
  const [rsvpScreen, setRsvpScreen] = useState<RsvpStates>(RsvpStates.FORM);

  if (rsvpScreen === RsvpStates.SUCCESS) {
    return <RsvpSuccess onSendAnother={() => setRsvpScreen(RsvpStates.FORM)} />;
  }

  if (rsvpScreen === RsvpStates.ERROR) {
    return <RsvpError onSendAnother={() => setRsvpScreen(RsvpStates.FORM)} />;
  }

  return <RsvpForm setRsvpScreen={setRsvpScreen} />;
};
