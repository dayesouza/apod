import React from "react";
import DatePicker from "react-date-picker";
import "./DatePicker.scss";

export default function DatePickerComponent(props) {
  const addDay = () => {
    const date = new Date(props.startDate);
    date.setDate(date.getDate() + 1);
    props.handleChange(date);
  };

  const removeDay = () => {
    const date = new Date(props.startDate);
    date.setDate(date.getDate() - 1);
    props.handleChange(date);
  };

  return (
    <div className="divDatePicker">
      <button onClick={() => removeDay()} className="divDatePicker__button">
        <i class="fa fa-angle-left" aria-hidden="true"></i>
      </button>
      <DatePicker
        calendarIcon={null}
        clearIcon={null}
        value={props.startDate}
        onChange={props.handleChange}
        maxDate={new Date()}
      />
      <button
        onClick={() => addDay()}
        disabled={props.format(props.startDate) === props.format(new Date())}
        className="divDatePicker__button"
      >
        <i class="fa fa-angle-right" aria-hidden="true"></i>
      </button>
    </div>
  );
}
