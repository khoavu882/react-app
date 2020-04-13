import React from "react";
import { Link } from "react-router-dom";

export default function CartTotal(props) {
  const { cartSubtotal, cartTax, cartTotal, clearCart } = props.value;
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
          <Link to="/cart">
            <button
              className="btn btn-danger text-uppercase mb-3 px-5"
              type="button"
              onClick={() => clearCart()}
            >
              Clear Cart
            </button>
          </Link>
          <h5>
            <span className="text-title">Subtotal:</span>
            <strong>$ {cartSubtotal}</strong>
          </h5>
          <h5>
            <span className="text-title">Tax:</span>
            <strong>$ {cartTax}</strong>
          </h5>
          <h5>
            <span className="text-title">Total:</span>
            <strong>$ {cartTotal}</strong>
          </h5>
        </div>
      </div>
    </div>
  );
}
