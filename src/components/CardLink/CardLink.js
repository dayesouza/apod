import React from "react";
import PropTypes from "prop-types";
import "./CardLink.scss";
import { useHistory } from "react-router-dom";

function CardLink({ link, title, description }) {
  const history = useHistory();

  return (
    <div className="card t-card-link" onClick={() => history.push(link)}>
      <div>
        <h3>{title}</h3>
        <span>{description}</span>
      </div>
      <div className="card__icon">
        <i className="fa fa-angle-right" aria-hidden="true"></i>
      </div>
    </div>
  );
}

CardLink.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CardLink;
