import React, { useContext } from "react";
import Title from "./Title";
import Product from "./Product";
import { ProductContext } from "../hooks/Context";

export default function ProductList(props) {
  const { products, setProducts } = useContext(ProductContext);
  return (
    <div className="py-5">
      <div className="container">
        <Title name="our" title="products" />
        <div className="row">
          {products.map((product, i) => (
            <Product key={i} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
