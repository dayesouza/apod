import React, { Component } from "react";
import Loading from "../../components/Loading/Loading";
import NasaAPI from "../../services/NasaAPI";
import DatePickerComponent from "../../components/DatePicker/DatePicker";
import ErrorAlert from "../../components/ErrorAlert/ErrorAlert";
import ReactPlayer from "react-player";
import { formatDate } from "../../helpers/date";
import "./Apod.scss";

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

  getData(date = formatDate(this.state.date)) {
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
    this.setState({ error: null });
    this.setState({ date }, () => {
      this.getData(formatDate(date));
    });
  };

  tryAgain = () => {
    this.toggleLoading();
    this.getData(this.state.date);
  };

  render() {
    const { loading, error } = this.state;
    if (loading) return <Loading />;
    return (
      <div className="apod">
        {!error && (
          <>
            <h1 className="apod__title">Astronomical Picture Of the Day</h1>
            <div className="apod__media">
              {this.state.photoData.media_type === "image" ? (
                <img
                  src={this.state.photoData.url}
                  alt={this.state.photoData.title}
                  className="photo"
                />
              ) : (
                <ReactPlayer url={this.state.photoData.url} />
              )}
            </div>
          </>
        )}
        {error && <ErrorAlert tryAgain={this.tryAgain} />}
        <div className="apod__info">
          {!error && (
            <>
              <h1 className="apod__info__title">
                {this.state.photoData.title}
              </h1>
              <p className="explanation">{this.state.photoData.explanation}</p>
            </>
          )}
          <div
            className={
              error
                ? "apod__info__date apod__info__date--error"
                : "apod__info__date"
            }
          >
            <DatePickerComponent
              startDate={this.state.date}
              handleChange={this.handleChange}
            />
          </div>
        </div>
      </div>
    );
  }
}
