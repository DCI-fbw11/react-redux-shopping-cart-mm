import React, { Component } from "react";
import { connect } from "react-redux";

class ShoppingCart extends Component {
  componentWillUpdate() {
    alert("will update");
  }
  componentDidUpdate() {
    alert("did update");
  }
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
            <h5>cart</h5>
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
  cart: state.cart,
  products: state.products
});
// const mapDispatchToProps = dispatch => {
//   addProduct: product => dispatch({ type: "ADD_PRODUCT", payload: product });
//   // eslint-disable-next-line no-labels
//   // checkout: () => dispatch({ type: "CHECKOUT" });
// };
export default connect(
  mapStateToProps,
  null
)(ShoppingCart);
