import { createStore } from "redux";

const initialState = {
  courses: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "COURSES":
      //   debugger;
      return { ...state, courses: [...state.courses, ...payload] };
    default:
      return state;
  }
};

export const store = createStore(reducer);
