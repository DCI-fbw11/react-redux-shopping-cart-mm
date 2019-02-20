import React from "react";
import { connect } from "react-redux";
import { addProduct } from "./../modules/actions";

const ProductList = props => {
  console.log(props);

  const item = Object.values(props.products);

  return (
    <div>
      {item.map((product, i) => (
        <ul>
          <li>
            {" "}
            {product.title} | {product.price} | {product.inventory}
          </li>
          <br />

          <button
            onClick={() => {
              props.addProduct(product);
            }}
          >
            Add to cart
          </button>
        </ul>
      ))}
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
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
