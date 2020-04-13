import React, { useContext } from "react";
import { ProductContext } from "../hooks/Context";
import Title from "./Title";
import CartColumn from "./CartColumn";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";

export default function Cart(props) {
  return (
    <ProductContext.Consumer>
      {(value) => {
        console.log(value.cart);
        if (value.cart.length > 0) {
          return (
            <div>
              <Title name="your" title="cart" />
              <CartColumn />
              {value.cart.map((item, i) => (
                <CartItem key={i} itemID={item.id} value={value} />
              ))}
              <CartTotal value={value} />
            </div>
          );
        } else {
          return (
            <div className="container mt-5">
              <div className="row">
                <div className="col-10 mx-auto text-center text-title">
                  <h1>Your cart is empty</h1>
                </div>
              </div>
            </div>
          );
        }
      }}
    </ProductContext.Consumer>
  );
}
