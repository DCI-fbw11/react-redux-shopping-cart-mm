import React from "react";
import { connect } from "react-redux";
import { checkout, addProduct } from "./../modules/actions";

const ShoppingCart = props => {
  const item = Object.values(props.products);

  return (
    <div>
      <h4>Total:$</h4>
      <br />

      <button
      // onClick={() => {
      //   props.checkout();
      // }}
      >
        Checkout
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    products: state.products
    // cart: state.cart
  };
};
// const mapDispatchToProps = dispatch => {
//   addProduct: product => dispatch({ type: "ADD_PRODUCT", payload: product });
//   // eslint-disable-next-line no-labels
//   // checkout: () => dispatch({ type: "CHECKOUT" });
// };
export default connect(
  mapStateToProps,
  null
)(ShoppingCart);
