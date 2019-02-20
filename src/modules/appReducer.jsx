export const appReducer = (state, { type, product }) => {
  switch (type) {
    case "ADD_PRODUCT":
      console.log(product);
      return state;

    default:
      return state;
  }
};
