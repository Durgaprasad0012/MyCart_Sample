import React, { useMemo } from "react";
import AfterCart from "./AfterCart";
import BeforCart from "./BeforCart";
import { useSelector } from "react-redux";

const CartButtons = ({ products }) => {
  const { cartList } = useSelector((state) => state.cart);

//   UseMemo to avoid re-render the same code
  const cartCount = useMemo(()=>{
    return cartList?.find((item) => item?.id === products?.id)?.count;
  }, [cartList])
  return (
    <div>
      {cartCount > 0 ? (
        <AfterCart productID={products?.id} cartCount = {cartCount} />
      ) : (
        <BeforCart products={products} />
      )}
    </div>
  );
};

export default CartButtons;
