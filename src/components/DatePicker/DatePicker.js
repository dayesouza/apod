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
    <>
      <div>
        <button onClick={() => removeDay()} className="button-date">
          Prev
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
          disabled={props.format(props.startDate) == props.format(new Date())}
          className="button-date"
        >
          Next
        </button>
      </div>
    </>
  );
}
