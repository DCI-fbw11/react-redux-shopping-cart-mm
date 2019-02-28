<<<<<<< HEAD
import products from "../products.json";
=======
export const appReducer = (state, action) => {
<<<<<<< HEAD
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
=======
  // const stuffs =(Object.values(state.products));
  // console.log(stuffs[0].inventory)
>>>>>>> 268078a1f6f831650c1521f83a65e003dd95134c

const initeState = {
  products,
  cart: [],
  total: 0
};
export const appReducer = (state = initeState, action) => {
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

        cart: Object.values(state.cart).filter(
          item => item.id !== action.payload
        )
      };
    case "REMOVE_ONE":
      return {
        ...state,
        cart: Object.values(state.cart)
          .map(item =>
            item.id === action.payload
              ? { ...item, inventory: item.inventory - 1 }
              : item
          )
          .filter(item => item.inventory > 0)
      };

<<<<<<< HEAD
    case "CHECKOUT":
      return {
        ...state,
        cart: {}
      };
    case "TOTAL-APDATE":
      return {
        ...state
      };
=======
>>>>>>> 13bf2670d2c4cf5c2f03637290344eee5ad1bd2e
>>>>>>> 268078a1f6f831650c1521f83a65e003dd95134c
    default:
      return state;
  }
};
