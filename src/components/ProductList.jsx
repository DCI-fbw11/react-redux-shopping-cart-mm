import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addProduct } from "./../modules/actions";

class ProductList extends Component {
  render() {
    const items = Object.values(this.props.products);

    return (
      <div>
        <ul>
          {items.map((product, i) => (
            <div>
              <li key={i}>
                {product.title} | {product.price} | {product.inventory}
              </li>
              <br />
              <button
                onClick={() => {
                  this.props.addProduct(product);
                }}
              >
                Add to cart
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
  inventory: state.inventory
  // cart:state.cart
});
const mapDispatchToProps = dispatch => ({
  addProduct: product => dispatch({ type: "ADD_PRODUCT", payload: product })
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
