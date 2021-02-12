import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

import { DateRange } from "react-date-range";

import "./Index.scss";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import formatDate from "utils/formatDate";
import ic_calender from "assets/images/icons/ic_calender.svg";

const InputDate = (props) => {
  const { value, placeholder, name } = props;
  const [isShowed, setIsShowed] = useState(false);

  const datePickerChange = (value) => {
    const target = {
      target: {
        value: value.selection,
        name: name,
      },
    };
    props.onChange(target);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const refDate = useRef(null);
  const handleClickOutside = (event) => {
    if (refDate && !refDate.current.contains(event.target)) {
      setIsShowed(false);
    }
  };

  const check = (focus) => {
    focus.indexOf(1) < 0 && setIsShowed(false);
  };

  const displayDate = `${value.startDate ? formatDate(value.startDate) : ""}${
    value.endDate ? " - " + formatDate(value.endDate) : ""
  }`;

  return (
    <div
      ref={refDate}
      className={["input-date mb-3", props.outerClassName].join(" ")}
    >
      <div className="input-group">
        <div className="input-group-prepend bg-gray-900">
          <span className="input-group-text">
            <img src={ic_calender} alt="icon Calender" />
          </span>
        </div>

        <input
          readOnly
          value={displayDate}
          placeholder={placeholder}
          onClick={() => setIsShowed(!isShowed)}
          type="text"
          className="form-control"
        />

        {isShowed && (
          <div className="date-range-wrapper">
            <DateRange
              editableDateInputs={true}
              onChange={datePickerChange}
              moveRangeOnFirstSelection={false}
              moveRangeFocusChange={check}
              ranges={[value]}
            />
          </div>
        )}
      </div>
    </div>
  );
};

InputDate.propTypes = {
  value: PropTypes.object,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  outerClassName: PropTypes.string,
};

export default InputDate;
