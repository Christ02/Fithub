import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './CustomDatePicker.css';

const CustomDatePicker = ({ selectedDate, onChange }) => {
  return (
    <div className="custom-date-picker">
      <DatePicker
        selected={selectedDate}
        onChange={onChange}
        dateFormat="dd/MM/yyyy"
        placeholderText="Select your date of birth"
        maxDate={new Date()}
        showYearDropdown
        showMonthDropdown
        dropdownMode="select"
      />
    </div>
  );
};

export default CustomDatePicker;
