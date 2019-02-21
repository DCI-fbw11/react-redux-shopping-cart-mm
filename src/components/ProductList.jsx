import React from "react";
import { connect } from "react-redux";
import { addProduct } from "./../modules/actions";

const ProductList = props => {
  

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

const mapStateToProps = state => ({
  
     products:state.products,
     cart:state.cart
  
});
const mapDispatchToProps = dispatch => ({
  addProduct: (product) => dispatch({ type: "ADD_PRODUCT",product })
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);


  