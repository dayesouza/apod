import React from "react";
import "./Home.scss";
import astronaut from "../../assets/img/astronaut.svg";
import CardLink from "../../components/CardLink/CardLink";

export default function Home() {
  const description = `A different astronomy and space science
    related image each day, and a brief explanation.`;

  return (
    <div className="home">
      <div className="home__entry">
        <blockquote className="home__entry__quote">
          The stars don’t look bigger, but they do look brighter.
          <p>
            <br /> - Sally Ride
          </p>
        </blockquote>
        <CardLink
          title="NASA APOD"
          description={description}
          link="apod"
        ></CardLink>
      </div>
      <div className="home__image">
        <img src={astronaut} alt="and astronaut flying trought space" />
      </div>
      {/* <h1 style={{ textAlign: 'center' }}>NASA's resources</h1>
      <Link className="home-link" to="/apod" >Astronomy Picture of the Day</Link> */}
    </div>
  );
}
