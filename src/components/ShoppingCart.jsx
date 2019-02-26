import React, { Component } from "react";
import { connect } from "react-redux";

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
)(ShoppingCart);
