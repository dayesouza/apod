import React from "react";
import { ReactComponent as Drawing } from "../../assets/img/taken.svg";
import "./NotFound.scss";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notFound t-not-found">
      <div className="notFound__drawing">
        <Drawing />
      </div>
      <div className="notFound__text">
        <div className="notFound__text__div">
          <h1>We are sorry!</h1>

          <h4>It looks like this page has been taken.</h4>
          <Link className="notFound__btnHome" to="/">
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
