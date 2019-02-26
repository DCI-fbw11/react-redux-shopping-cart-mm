import React, { Component } from "react";
import { connect } from "react-redux";

<<<<<<< HEAD
const ShoppingCart = props => {
  return (
    <div>
      <h4>Total:$</h4>
      <br />
      <div>
        <ul>
          <div>
            {Object.values(props.cart).map((product, i) => (
              <li key={i}>
                {product.title} || {product.price} || {product.inventory}
                <br />
                <button
                  onClick={() => {
                    props.removeOne(product);
                  }}
                >
                  Remove Item
                </button>
                <button
                  onClick={() => {
                    props.removeAll(product.id);
                  }}
                >
                  Remove All
                </button>
              </li>
            ))}
          </div>
        </ul>
      </div>
      <br />
      <button
        onClick={() => {
          props.checkout();
        }}
      >
        Checkout
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  products: state.products,
  cart: state.cart
});
const mapDispatchToProps = {
  removeAll: product => ({ type: "REMOVE_ALL", payload: product }),
  removeOne: product => ({ type: "REMOVE_ONE", payload: product }),
  checkout: () => ({ type: "CHECKOUT" })
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
=======
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
>>>>>>> 13bf2670d2c4cf5c2f03637290344eee5ad1bd2e
)(ShoppingCart);
