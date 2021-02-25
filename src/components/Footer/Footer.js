import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <div className="footer t-footer">
      <span className="t-footer-date">
        Dayenne Souza - {new Date().getFullYear()}
      </span>
    </div>
  );
}
