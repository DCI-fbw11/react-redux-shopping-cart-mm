export const appReducer = (state = {}, { type, product }) => {
  switch (type) {
    case "ADD_PRODUCT":
      const currentQuantitiy = state[product.price] || 0;
      return {
        ...state,
        [product.price]: currentQuantitiy + 1
      };

    default:
      return state;
  }
};
