import React, { useEffect, useState } from "react";
import Loading from "../../components/Loading/Loading";
import NasaAPI from "../../services/NasaAPI";
import DatePickerComponent from "../../components/DatePicker/DatePicker";
import ErrorAlert from "../../components/ErrorAlert/ErrorAlert";
import ReactPlayer from "react-player";
import { formatDate } from "../../helpers/date";
import "./Apod.scss";

function Apod() {

  const [photoData, setPhotoData] = useState(null);
  const [date, setDate] = useState(new Date());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const toggleLoading = () => {
    console.log("ÜE Loading", loading)
    setLoading(!loading);
  };
  
  const getData = (newDate) => {
    NasaAPI.getAPOD(newDate)
      .then((data) => {
        setPhotoData(data);
        setError(null);
      })
      .catch((error) => setError(error))
      .finally((_) => toggleLoading());
  }

  useEffect(() => {
    getData();
  },[])

  const handleChange = (changedDate) => {
    toggleLoading();
    setError(null);
    console.log(changedDate)
    setDate(getData(formatDate(changedDate)));
  };

  const tryAgain = () => {
    toggleLoading();
    getData(date);
  };

    if (loading) return <Loading />;
    return (
      <div className="apod">
        {!error && (
          <>
            <h1 className="apod__title">Astronomical Picture Of the Day</h1>
            <div className="apod__media">
              {photoData.media_type === "image" ? (
                <img
                  src={photoData.url}
                  alt={photoData.title}
                  className="photo"
                />
              ) : (
                <ReactPlayer url={photoData.url} />
              )}
            </div>
          </>
        )}
        {error && <ErrorAlert tryAgain={tryAgain} />}
        <div className="apod__info">
          {!error && (
            <>
              <h1 className="apod__info__title">
                {photoData.title}
              </h1>
              <p className="explanation">{photoData.explanation}</p>
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
              startDate={date}
              handleChange={handleChange}
            />
          </div>
        </div>
      </div>
    );
}

export default Apod;