export const appReducer = (state, { type, product }) => {
  switch (type) {
    case "ADD_PRODUCT":
      console.log(products);
      return [...state, products.price:products.price++];

    default:
      return state;
  }
};
