import { SEND_FORM_DATA } from "../types/actionTypes";

export const sendFormData = (name, email, text) => ({
  type: SEND_FORM_DATA,
  payload: {
    name,
    email,
    text,
  },
});
