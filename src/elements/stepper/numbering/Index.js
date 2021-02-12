import React from "react";
import PropTypes from "prop-types";
import "./Index.scss";
import Fade from "react-reveal";

const Numbering = ({ style, className, data, current }) => {
  const KeysOfData = Object.keys(data);
  return (
    <Fade>
      <ol className={["stepper", className].join(" ")} style={style}>
        {KeysOfData.map((list, index) => {
          let isActive = list === current ? "active" : "";
          if (index + 1 === KeysOfData.length) {
            isActive = "";
            return null;
          }

          return (
            <li key={`list-${index}`} className={[isActive].join(" ")}>
              {index + 1}
            </li>
          );
        })}
      </ol>
    </Fade>
  );
};

Numbering.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object,
  current: PropTypes.string,
};

export default Numbering;
