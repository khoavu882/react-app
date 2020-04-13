import React, { useContext } from "react";
import { ProductContext } from "../hooks/Context";

export default function CartItem(props) {
  const { cart } = useContext(ProductContext);
  const item = cart.find((item) => item.id === props.itemID);
  const { title, price, img, count, inCart, total } = item;
  const { increment, decrement, removeItem } = props.value;
  return (
    <div className="row my-1 text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={`/${img}`}
          alt="item"
          style={{ width: "5rem", height: "5rem" }}
        />
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span>product: {title}</span>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span>price: ${price}</span>
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <span
            className="btn btn-black mx-1"
            onClick={() => decrement(props.itemID)}
          >
            -
          </span>
          <span className="btn btn-black mx-1">{count}</span>
          <span
            className="btn btn-black mx-1"
            onClick={() => increment(props.itemID)}
          >
            +
          </span>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <div onClick={() => removeItem(props.itemID)}>
          <span className="badge badge-warning">Delete</span>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <strong>Item Total: $ {total}</strong>
      </div>
    </div>
  );
}
