import React from "react";
import DatePicker from "react-date-picker";
import PropTypes from "prop-types";
import { formatDate } from "../../helpers/date";
import "./DatePicker.scss";

function DatePickerComponent({ startDate, handleChange }) {
  const addDay = () => {
    if (formatDate(startDate) === formatDate(new Date())) {
      return;
    }
    const date = new Date(startDate);
    date.setDate(date.getDate() + 1);
    handleChange(date);
  };

  const removeDay = () => {
    const date = new Date(startDate);
    date.setDate(date.getDate() - 1);
    handleChange(date);
  };

  return (
    <div className="divDatePicker t-div-datepicker">
      <button
        onClick={() => removeDay()}
        className="divDatePicker__button t-remove-day"
      >
        <i className="fa fa-angle-left" aria-hidden="true"></i>
      </button>
      <DatePicker
        calendarIcon={null}
        clearIcon={null}
        value={startDate}
        onChange={handleChange}
        maxDate={new Date()}
      />
      <button
        onClick={() => addDay()}
        disabled={formatDate(startDate) === formatDate(new Date())}
        className="divDatePicker__button t-add-day"
      >
        <i className="fa fa-angle-right" aria-hidden="true"></i>
      </button>
    </div>
  );
}

DatePickerComponent.propTypes = {
  startDate: PropTypes.instanceOf(Date).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default DatePickerComponent;
