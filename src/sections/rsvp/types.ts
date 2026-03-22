export const RsvpStates = {
  FORM: "FORM",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
} as const;

export type RsvpStates = (typeof RsvpStates)[keyof typeof RsvpStates];

export type RsvpFormData = {
  fullName: string;
  email: string;
  attending: boolean;
  busNeeded?: boolean;
  dietaryRestrictions?: string;
  otherComments?: string;
};
