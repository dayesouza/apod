
import React from "react";
import { Link } from "react-router-dom";
import './Home.scss';

export default function Home() {

  return (
    <div className="home">
      <Link className="home-link" to="/apod" >Check today's photo</Link>
    </div>
  );
}