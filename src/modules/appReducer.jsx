// import {addProduct} from '../modules/actions'

export const appReducer = (state = {}, { type, product }) => {
      
  const stuffs =(Object.values(state.products));
  // console.log(stuffs[0].inventory)
console.log(state)
  
  switch (type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        inventory:product.inventory--,
        cart:product
      };

    default:
      return state;
  }
};