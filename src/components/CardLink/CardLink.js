import React from "react";
import PropTypes from "prop-types";
import "./CardLink.scss";
import { withRouter } from "react-router-dom";

function CardLink({ link, title, description, history }) {
  return (
    <div className="card" onClick={() => history.push(link)}>
      <div>
        <h3>{title}</h3>
        <span>{description}</span>
      </div>
      <div className="card__icon">
        <i class="fa fa-angle-right" aria-hidden="true"></i>
      </div>
    </div>
  );
}

CardLink.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
};

export default withRouter(CardLink);
