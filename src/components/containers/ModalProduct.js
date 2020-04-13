import React from "react";
import { ProductContext } from "../hooks/Context";
import { ButtonContainer } from "./styled/StyledNavbar";
import { Link } from "react-router-dom";
import { ModalContainer } from "./styled/StytedModalProduct";

export default function ModalProduct() {
  return (
    <ProductContext.Consumer>
      {(value) => {
        console.log(value);
        const { modalProduct, modalOpen } = value;
        const { id, img, title, price } = modalProduct;

        if (!modalOpen) {
          return null;
        } else {
          return (
            <ModalContainer>
              <div className="container">
                <div className="row">
                  <div
                    id="modal"
                    className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize"
                  >
                    <h5>Item add in Cart</h5>
                    <img src={`/${img}`} alt="modal" className="img-fluid" />
                    <h5>{title}</h5>
                    <h5>$ {price}</h5>
                    <h5>
                      <Link to="/">
                        <ButtonContainer onClick={() => value.closeModal()}>
                          Continue Shopping
                        </ButtonContainer>
                      </Link>
                      <Link to="/cart">
                        <ButtonContainer
                          styledCart
                          onClick={() => value.closeModal()}
                        >
                          Go to Cart
                        </ButtonContainer>
                      </Link>
                    </h5>
                  </div>
                </div>
              </div>
            </ModalContainer>
          );
        }
      }}
    </ProductContext.Consumer>
  );
}
