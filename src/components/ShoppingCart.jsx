import React, { Component } from "react";
import { connect } from "react-redux";

class ShoppingCart extends Component {
  render() {
    return (
      <div>
        <h4>Total:$</h4>
        <br />
        <div>
          {this.props.cart ? (
            // this.props.cart.map(product => {
            //   return <li>1</li>;
            // })
            <h5>hi</h5>
          ) : (
            <h5>null</h5>
          )}
        </div>
        <button
          onClick={() => {
            this.props.checkout();
          }}
        >
          Checkout
        </button>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  cart: state.cart
});
const mapDispatchToProps = dispatch => {
  addProduct: product => dispatch({ type: "ADD_PRODUCT", payload: product });

  checkout: () => dispatch({ type: "CHECKOUT" });
};
export default connect(
  mapStateToProps,
  null
)(ShoppingCart);
