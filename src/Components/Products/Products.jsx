import React from "react";
import products from "../../API/Products.json";
import BeforCart from "./CartButtons/BeforCart";
import AfterCart from "./CartButtons/AfterCart";
import { useSelector } from "react-redux";
import "./Products.css";
import CartButtons from "./CartButtons";

const Products = () => {
  const { cartList} = useSelector((state) => state.cart);


  return (
    <section className="container">
      {products?.map((products, key) => (
        <div className="product-container">
          <img src={products?.img} alt={products?.titile} />
          <h3>{products?.titile}</h3>
          <CartButtons products = {products} />
        </div>
      ))}
    </section>
  );
};

export default Products;
