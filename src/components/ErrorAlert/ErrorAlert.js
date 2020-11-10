import React from "react";
import "./ErrorAlert.scss";
import { Link } from "react-router-dom";

export default function ErrorAlert(props) {
  return (
    <div className="error">
      <i
        className="error__icon fa fa-exclamation-triangle"
        aria-hidden="true"
      ></i>
      <h3>There was an error with your request</h3>
      <h4> Please try again later</h4>
      <button className="error__btnBack" onClick={() => props.tryAgain()}>
        Try again
      </button>
      <Link to="/" className="error__btnHome">
        Go to Home
      </Link>
      <h3 className="error__date">Or you can try another date</h3>
    </div>
  );
}
