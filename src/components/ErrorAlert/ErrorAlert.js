import React from "react";
import "./ErrorAlert.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ErrorAlert({ tryAgain }) {
  return (
    <div className="error t-error-alert">
      <i
        className="error__icon fa fa-exclamation-triangle"
        aria-hidden="true"
      ></i>
      <h3>There was an error with your request</h3>
      <button
        className="error__btnBack t-try-again-btn"
        onClick={() => tryAgain()}
      >
        Try again
      </button>
      <Link to="/" className="error__btnHome t-go-home">
        Go to Home
      </Link>
      <h3 className="error__date">Try another date</h3>
    </div>
  );
}

ErrorAlert.propTypes = {
  tryAgain: PropTypes.func.isRequired,
};

export default ErrorAlert;
