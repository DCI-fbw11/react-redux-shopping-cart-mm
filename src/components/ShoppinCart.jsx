import React from "react";
import { connect } from "react-redux";

const ShoppingCart = props => {
  

  const item = Object.values(props.products);

  return (
    <div>
      <h4>Total:$</h4>
      <br />

      <button
        btn
        btn-danger
        onClick={() => {
          props.checkout();
        }}
      >
        Checkout
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    products: state.products
  };
};
const mapDispatchToProps = dispatch => {
  addProduct: () => dispatch({ type: "ADD_PRODUCT" });
  // eslint-disable-next-line no-labels
  checkout: () => dispatch({ type: "CHECKOUT" });
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCart);
