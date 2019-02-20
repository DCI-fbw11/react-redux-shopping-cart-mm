import React from "react";
import { connect } from "react-redux";

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
            btn
            btn-danger
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
export default connect(mapStateToProps)(ProductList);
