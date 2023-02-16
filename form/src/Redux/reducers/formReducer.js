import { SEND_FORM_DATA } from "../types/actionTypes";

const initialState = {
  form: {
    name: "",
    email: "",
    text: "",
  },
};

export const formReducer = (state = initialState.form, action) => {
  switch (action.type) {
    case SEND_FORM_DATA:
      return {
        name: action.payload.name,
        email: action.payload.email,
        text: action.payload.text,
      };
    default:
      return state;
  }
};
