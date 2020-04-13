import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../hooks/Context";
import { ButtonContainer } from "./styled/StyledNavbar";
import ProductList from "./ProductList";
import _ from "lodash";

export default function Details(props) {
  const productId = parseInt(props.match.params["productId"]);
  const { products } = useContext(ProductContext);
  const product = products.find((item) => item.id === productId);
  const { title, company, price, info, img, inCart } = product;
  return !product ? (
    <div />
  ) : (
    <div className="container py-5">
      <div className="row">
        <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
          <h1>{title}</h1>
        </div>
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <img src={`/${img}`} alt="prodcut" className="img-fluid" />
          </div>
          <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
            <h2>model: {title}</h2>
            <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
              made by: {company}
            </h4>
            <h4 className="text-blue">
              <strong>
                Price: <span>$</span>
                {price}
              </strong>
            </h4>
            <p className="text-capitalize font-weight-bold mt-3 mb-0">
              Some info about Product:
            </p>
            <p className="text-muted lead">{info}</p>
            <div>
              <Link to="/">
                <ButtonContainer>Back to Products</ButtonContainer>
              </Link>
              <ProductContext.Consumer>
                {(value) => {
                  return (
                    <ButtonContainer
                      styledCart
                      // disabled={inCart ? true : false}
                      onClick={() => {
                        value.handleCart(productId);
                        value.openModal(productId);
                      }}
                    >
                      {inCart ? "In Cart" : "Add to Cart"}
                    </ButtonContainer>
                  );
                }}
              </ProductContext.Consumer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
