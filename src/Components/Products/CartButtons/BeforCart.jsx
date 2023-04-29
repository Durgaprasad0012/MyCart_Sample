import React from "react";
// Dispatch
import { useDispatch } from "react-redux";
// import actions
import { AddToCart } from "../../../Redux/Cart";
import "./CartButtons.css";

const BeforCart = ({ products }) => {
  const dispatch = useDispatch();
  return (
    <div className="befor-cart">
      <button className="add-to-cart" onClick={() => dispatch(AddToCart(products))}>
        Add to Cart
      </button>
    </div>
  );
};

export default BeforCart;
