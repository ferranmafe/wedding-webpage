import type { RsvpFormData } from "../../types";

export const buildRequest = (formData: RsvpFormData): FormData => {
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
