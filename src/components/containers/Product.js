import React from "react";
import { ProductWrapper } from "./styled/StyledProduct";
import { Link } from "react-router-dom";
import { ProductContext } from "../hooks/Context";
import Details from "./Details";
import PropTypes from "prop-types";

export default function Product(props) {
  const { id, title, img, price, inCart } = props.product;
  return (
    <ProductWrapper className="col-9 mx-auto col-md-6, col-lg-4 my-3">
      <div className="card">
        <ProductContext.Consumer>
          {value => {
            return (
              <div className="img-container p-5">
                <Link
                  to={{
                    pathname: `/details/${props.product.id}`,
                    search: `?${props.product.id}`
                  }}
                  components={Details}
                >
                  <img src={img} alt="product" className="card-in-top" />
                </Link>
                <button
                  className="cart-btn"
                  disabled={inCart ? true : false}
                  onClick={() => {
                    value.handleCart(id);
                    value.openModal(id);
                  }}
                >
                  {inCart ? (
                    <p className="text-capitalize mb-0" disabled>
                      In Cart
                    </p>
                  ) : (
                    <span>
                      <i className="fas fa-cart-plus"></i>
                    </span>
                  )}
                </button>
              </div>
            );
          }}
        </ProductContext.Consumer>

        <div className="card-footer d-flex justify-content-between">
          <p className="align-self-center mb-0">{title}</p>
          <h5 className="text-blue font-italic mb-0">
            <span className="mr-1">${price}</span>
          </h5>
        </div>
      </div>
    </ProductWrapper>
  );
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
};
