import React from "react";
import "./Header.css";
import { useSelector } from "react-redux";

const Header = () => {

  const {cartList} = useSelector(state=>state.cart)

  
  
  // total Count
  const total = cartList.reduce((a, v)=> (a += v.count), 0)
  
  return (
    <header>
      <div className="container">
        <h1>E-Cart</h1>
        <div className="right-view">
          <div className="cart-count-view">{total}</div>
          <svg
            width="32"
            height="32"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2ZM0 0v2h2l3.6 7.6L4.2 12c-.1.3-.2.7-.2 1 0 1.1.9 2 2 2h12v-2H6.4c-.1 0-.2-.1-.2-.2v-.1l.9-1.7h7.4c.8 0 1.4-.4 1.7-1l3.6-6.5c.2-.2.2-.3.2-.5 0-.6-.4-1-1-1H4.2l-.9-2H0Zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Z"
              fill="#ffffff"
              fill-rule="evenodd"
              class="fill-000000"
            ></path>
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
