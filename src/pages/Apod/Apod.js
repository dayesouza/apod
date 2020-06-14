
import React, { useState, useEffect, Component } from "react";
import './Apod.scss';
import Img from "../../components/Img/Img";
import Video from "../../components/Video/Video";
import Loading from "../../components/Loading/Loading";
import NasaAPI from "../../services/NasaAPI";

export default class Apod extends Component {

  constructor(props) {
    super(props);
    this.state = {
      photoData: null,
      loading: true
    }
  }

  componentDidMount() {
    NasaAPI.getAPOD()
      .then(data => this.setState({ photoData: data }))
      .finally(_ => this.toggleLoading());
  }


  toggleLoading = () => {
    console.log('toggle')
    this.setState({ loading: !this.state.loading });
  }

  render() {
    if (this.state.loading) return <Loading />;
    return (
      <div className="nasa-photo">
        <div className="media">
          {this.state.photoData.media_type === "image" ? (
            <Img url={this.state.photoData.url} alt={this.state.photoData.title} />
          ) : (
              <Video url={this.state.photoData.url} />
            )}
        </div>
        <div className="info">
          <h1>{this.state.photoData.title}</h1>
          <p className="date">{this.state.photoData.date}</p>
          <p className="explanation">{this.state.photoData.explanation}</p>
        </div>
      </div>
    );
  }
}