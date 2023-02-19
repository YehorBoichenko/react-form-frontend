import { SEND_FORM_DATA } from "../types/actionTypes";

export const sendFormData = (user) => ({
  type: SEND_FORM_DATA,
  payload: { user: user },
});
