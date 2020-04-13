import React, { useContext } from "react";
import { ProductContext } from "../hooks/Context";

export default function CartColumn() {
  return (
    <div className="container-fuild text-center d-none d-lg-block">
      <div className="row">
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">Product</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">Title</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">Price</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">Product</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">Total</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">Total</p>
        </div>
      </div>
    </div>
  );
}
