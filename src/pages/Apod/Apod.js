import React, { Component } from "react";
import "./Apod.scss";
import Img from "../../components/Img/Img";
import Video from "../../components/Video/Video";
import Loading from "../../components/Loading/Loading";
import NasaAPI from "../../services/NasaAPI";
import DatePickerComponent from "../../components/DatePicker/DatePicker";
import ErrorAlert from "../../components/ErrorAlert/ErrorAlert";

export default class Apod extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoData: null,
      date: new Date(),
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData(date = this.formatDate(this.state.date)) {
    NasaAPI.getAPOD(date)
      .then((data) => this.setState({ photoData: data, error: null }))
      .catch((error) => this.setState({ error }))
      .finally((_) => this.toggleLoading());
  }

  toggleLoading = () => {
    this.setState({ loading: !this.state.loading });
  };

  handleChange = (date) => {
    this.toggleLoading();
    this.setState({ date }, () => {
      this.getData(this.formatDate(date));
    });
  };

  tryAgain = () => {
    this.toggleLoading();
    this.getData(this.state.date);
  };

  formatDate(date) {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  }

  render() {
    if (this.state.loading) return <Loading />;
    if (this.state.error) return <ErrorAlert tryAgain={this.tryAgain} />;
    return (
      <div className="nasa-photo">
        <div className="media">
          {this.state.photoData.media_type === "image" ? (
            <Img
              url={this.state.photoData.url}
              alt={this.state.photoData.title}
            />
          ) : (
            <Video url={this.state.photoData.url} />
          )}
        </div>
        <div className="info">
          <div className="choose-date">
            <DatePickerComponent
              startDate={this.state.date}
              handleChange={this.handleChange}
              format={this.formatDate}
            />
          </div>
          <h1>{this.state.photoData.title}</h1>
          <p className="explanation">{this.state.photoData.explanation}</p>
        </div>
      </div>
    );
  }
}
