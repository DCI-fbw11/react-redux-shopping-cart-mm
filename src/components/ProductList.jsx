import React, { Component } from "react";
import { connect } from "react-redux";
<<<<<<< HEAD
import products from "../products.json";
=======
<<<<<<< HEAD

class ProductList extends Component {
  addProduct = e => {
    // this is is the identifier
    let itemId = e.target.parentNode.id;
    let itemFromProducts = this.props.products[itemId];

    let updatedItemFromProducts = {
      id: itemFromProducts.id,
      title: itemFromProducts.title,
      price: itemFromProducts.price,
      inventory: itemFromProducts.inventory - 1
    };
    // done with products object, i have my payload to send for the products

    // now deciding if there is already an item in the cart of the type we clicked on
    let inventoryToUpdate;
    if (this.props.cart[itemId]) {
      inventoryToUpdate = this.props.cart[itemId].inventory + 1;
    } else {
      inventoryToUpdate = 1;
    }

    let updatedItemFromCart = {
      id: itemFromProducts.id,
      title: itemFromProducts.title,
      price: itemFromProducts.price,
      inventory: inventoryToUpdate
    };
    // done with cart object, i have my payload to send for the cart

    this.props.addProduct({ updatedItemFromProducts, updatedItemFromCart });
  };

  render() {
    const items = Object.values(this.props.products);
    // const cartItems = Object.values(this.props.cart);
=======
import { bindActionCreators } from "redux";
import { addProduct } from "./../modules/actions";
>>>>>>> 268078a1f6f831650c1521f83a65e003dd95134c

class ProductList extends Component {
  addProduct = e => {
    // this is is the identifier
    let itemId = e.target.parentNode.id;

    let itemFromProducts = this.props.products[itemId];

    let updatedItemFromProducts = {
      id: itemFromProducts.id,
      title: itemFromProducts.title,
      price: itemFromProducts.price,
      inventory: itemFromProducts.inventory - 1
    };
    // done with products object, i have my payload to send for the products

    // now deciding if there is already an item in the cart of the type we clicked on
    let inventoryToUpdate;
    if (this.props.cart[itemId]) {
      inventoryToUpdate = this.props.cart[itemId].inventory + 1;
    } else {
      inventoryToUpdate = 1;
    }

    let updatedItemFromCart = {
      id: itemFromProducts.id,
      title: itemFromProducts.title,
      price: itemFromProducts.price,
      inventory: inventoryToUpdate
    };
    // done with cart object, i have my payload to send for the cart

    this.props.addProduct({
      updatedItemFromProducts,
      updatedItemFromCart
    });
  };

  render() {
    const items = Object.values(this.props.products);
<<<<<<< HEAD
    // const cartItems = Object.values(this.props.cart);
=======
>>>>>>> 13bf2670d2c4cf5c2f03637290344eee5ad1bd2e
>>>>>>> 268078a1f6f831650c1521f83a65e003dd95134c

    return (
      <div>
        <ul>
          {items.map((product, i) => (
<<<<<<< HEAD
            <div key={i} id={product.id}>
              <li>
                {product.title} | {product.price} |{product.inventory}
=======
<<<<<<< HEAD
            <div key={i} id={product.id}>
              <li>
                {product.title} | {product.price} |{product.inventory}
              </li>
              <br />
              <button
                onClick={this.addProduct}
                // when you click the button you put the product as a parameter inside the addProduct function

                disabled={product.inventory < 1 ? true : false}
              >
                click to add
=======
            <div>
              <li key={i}>
                {product.title} | {product.price} | {product.inventory}
>>>>>>> 268078a1f6f831650c1521f83a65e003dd95134c
              </li>
              <br />
              <button
                onClick={this.addProduct}
                disabled={product.inventory < 1 ? true : false}
              >
<<<<<<< HEAD
                click to add
=======
                Add to cart
>>>>>>> 13bf2670d2c4cf5c2f03637290344eee5ad1bd2e
>>>>>>> 268078a1f6f831650c1521f83a65e003dd95134c
              </button>
              <br />
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products,
<<<<<<< HEAD
  cart: state.cart,
  inventory: state.cart.inventory
=======
<<<<<<< HEAD
  cart: state.cart,
  inventory: state.cart.inventory
=======
  inventory: state.inventory
  // cart:state.cart
>>>>>>> 13bf2670d2c4cf5c2f03637290344eee5ad1bd2e
>>>>>>> 268078a1f6f831650c1521f83a65e003dd95134c
});
const mapDispatchToProps = dispatch => ({
  addProduct: product => dispatch({ type: "ADD_PRODUCT", payload: product })
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
