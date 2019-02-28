import React, { Component } from "react";
import { connect } from "react-redux";
import { addProduct } from "./../modules/actions";

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
    const cart = Object.values(this.props.cart);
    const totalApadate = cart.map(x => x.price * x.inventory);
    const reducer = (a, b) => a + b;
    return (
      <div>
        <h4>
          Total:${totalApadate.length > 0 ? totalApadate.reduce(reducer) : 0}
        </h4>
        <br />
        <div>
          <ul>
            <div>
              {Object.values(this.props.cart).map((product, i) => (
                <li key={i}>
                  {product.title}||{product.price}||{product.inventory}
                  <br />
                  <button
                    onClick={() => {
                      this.props.removeOne(product.id);
                    }}
                  >
                    Remove Item
                  </button>
                  <button
                    onClick={() => {
                      this.props.removeAll(product.id);
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
  products: state.products,
  cart: state.cart,
  total: state.total
});
const mapDispatchToProps = dispatch => ({
  removeAll: product => dispatch({ type: "REMOVE_ALL", payload: product }),
  removeOne: product => dispatch({ type: "REMOVE_ONE", payload: product }),
  totalApadate: product => dispatch({ type: "TOTAL_APDATE", payload: product }),

  checkout: product => dispatch({ type: "CHECKOUT", payload: product })
});
export default connect(
  mapStateToProps,
<<<<<<< HEAD
  mapDispatchToProps
=======
  null
>>>>>>> 13bf2670d2c4cf5c2f03637290344eee5ad1bd2e
>>>>>>> 268078a1f6f831650c1521f83a65e003dd95134c
)(ShoppingCart);
