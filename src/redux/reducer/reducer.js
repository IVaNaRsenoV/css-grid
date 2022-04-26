const initialState = {
  toggle: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "TOGGLE":
      return { ...state, toggle: payload };
    default:
      return state;
  }
};
