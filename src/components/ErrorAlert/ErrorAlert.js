import React from "react";
import "./ErrorAlert.scss";

export default function ErrorAlert(props) {
  return (
    <div className="error">
      <h3>Error: Try again later</h3>
      <button className="btn-primary" onClick={() => props.tryAgain()}>
        Try again
      </button>
      <button className="btn-back" onClick={() => window.history.back()}>
        Go Back
      </button>
    </div>
  );
}
