import type { RsvpFormData } from "../../types";

export const buildInitialFormData = (): RsvpFormData => ({
  fullName: "",
  email: "",
  attending: true,
  busNeeded: false,
  dietaryRestrictions: "",
  otherComments: "",
});
