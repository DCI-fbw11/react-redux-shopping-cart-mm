export const appReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      console.log(action.payload);
      return {
        ...state,
        products: {
          ...state.products,
          [action.payload.updatedItemFromProducts.id]:
            action.payload.updatedItemFromProducts
        },
        cart: {
          ...state.cart,
          [action.payload.updatedItemFromCart.id]:
            action.payload.updatedItemFromCart
        }
      };
    case "REMOVE_ALL":
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload)
      };
    case "REMOVE_ONE":
      // get the product from payload and then make the inventory --
      // set the new product to place in the cart array here, object?
      let { id, title, price, inventory } = action.payload;

      let newCartItem = {
        id,
        title,
        price,
        inventory: inventory - 1
      };

      return {
        ...state,
        cart: [
          ...state.cart.filter(item => {
            if (action.payload.id !== item.id) {
              return item;
            }
          }),
          newCartItem
        ]
      };
    default:
      return state;
  }
};
