import React from "react";

export default function Default(props) {
  return (
    <div className="container d-flex justify-content-center">
      <div className="row">
        <div className="col-10 mx-auto col-lg-2">
          <img src="img/404.png" alt="404" />
        </div>
        <div className="col-10 mx-auto col-lg-2 text-center text-title text-uppercase">
          <h5>{props.location.pathname}</h5>
        </div>
      </div>
    </div>
  );
}
