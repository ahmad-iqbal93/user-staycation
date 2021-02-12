import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Index.scss";

const Text = (props) => {
  const {
    value,
    type,
    placeholder,
    name,
    prepend,
    append,
    outerClassName,
    inputClassName,
    errorResponse,
  } = props;

  const [hasError, setHasError] = useState(null);
  let pattern = "";
  if (type === "email") pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (type === "tel") pattern = "[0-9]*";

  const onChange = (e) => {
    const target = {
      target: {
        name: name,
        value: e.target.value,
      },
    };

    if (type === "email") {
      if (!pattern.test(e.target.value)) setHasError(errorResponse);
      else setHasError(null);
    }

    if (type === "tel") {
      if (e.target.validity.valid) props.onChange(target);
    } else {
      props.onChange(target);
    }
  };

  return (
    <div className={["input-text mb-3", outerClassName].join(" ")}>
      <div className="input-group">
        {prepend && (
          <div className="input-group-prepend bg-gray-900">
            <span className="input-group-text">{prepend}</span>
          </div>
        )}

        <input
          type={type}
          name={name}
          pattern={pattern}
          className={["form-control", inputClassName].join(" ")}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
        {append && (
          <div className="input-group-append bg-gray-900">
            <span className="input-group-text">{append}</span>
          </div>
        )}

        {hasError && <span className="error-helper">{hasError}</span>}
      </div>
    </div>
  );
};

Text.defaultProps = {
  type: "text",
  pattern: "",
  placholder: "Please type here...",
  errorResponse: "Please match the requested format",
};

Text.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  onChange: PropTypes.func.isRequired,
  prepend: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  append: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  type: PropTypes.string,
  placeholder: PropTypes.string,
  outerClassName: PropTypes.string,
  inputClassName: PropTypes.string,
};

export default Text;
