import React from 'react';
import DatePicker from 'react-date-picker';
import './DatePicker.scss';

export default function DatePickerComponent(props) {

  return (
    <div>
      <DatePicker
        clearIcon={null}
        value={props.startDate}
        onChange={props.handleChange}
      />
    </div>

  )
}