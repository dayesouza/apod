
import React from "react";
import { Link } from "react-router-dom";
import './Home.scss';

export default function Home() {

  return (
    <div className="home">
      <h1 style={{ textAlign: 'center' }}>NASA's resources</h1>
      <Link className="home-link" to="/apod" >Astronomy Picture of the Day</Link>
    </div>
  );
}