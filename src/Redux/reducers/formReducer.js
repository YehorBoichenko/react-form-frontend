import { SEND_FORM_DATA } from "../types/actionTypes";

const initialState = {
  form: {
    name: "",
    email: "",
    message: "",
  },
};

export const formReducer = (state = initialState.form, action) => {
  switch (action.type) {
    case SEND_FORM_DATA:
      return {
        user: {
          name: action.payload.name,
          email: action.payload.email,
          message: action.payload.message,
        },
      };
    default:
      return state;
  }
};
