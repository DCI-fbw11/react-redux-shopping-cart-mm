export const appReducer = (state, action) => {
  // const stuffs =(Object.values(state.products));
  // console.log(stuffs[0].inventory)

  switch (action.type) {
    case "ADD_PRODUCT":
      var newCart = state.cart;
      newCart.push(action.payload);
      // alert("new product added to cart" + JSON.stringify(state));
      return {
        ...state,
        inventory: action.payload.inventory--,
        cart: newCart
      };

    default:
      return state;
  }
};
