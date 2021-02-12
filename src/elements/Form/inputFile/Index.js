import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

const File = (props) => {
  const [fileName, setfileName] = useState("");

  const {
    // value,
    placeholder,
    name,
    accept,
    prepend,
    append,
    outerClassName,
    inputClassName,
  } = props;

  const refInputFile = useRef(null);

  const onChange = (e) => {
    setfileName(e.target.value);
    props.onChange({
      target: {
        name: e.target.name,
        value: e.target.files,
      },
    });
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
          accept={accept}
          ref={refInputFile}
          type="file"
          name={name}
          className="d-none"
          value={fileName}
          placeholder={placeholder}
          onChange={onChange}
        />

        <input
          placeholder={placeholder}
          defaultValue={fileName}
          className={["form-control", inputClassName].join(" ")}
          onClick={() => refInputFile.current.click()}
        />
        {append && (
          <div className="input-group-append bg-gray-900">
            <span className="input-group-text">{append}</span>
          </div>
        )}

        {/* {hasError && <span className="error-helper">{hasError}</span>} */}
      </div>
    </div>
  );
};

File.defaultProps = {
  placeholder: "Browse a file...",
};

File.propTypes = {
  name: PropTypes.string.isRequired,
  accept: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  prepend: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  append: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  placeholder: PropTypes.string,
  outerClassName: PropTypes.string,
  inputClassName: PropTypes.string,
};

export default File;
