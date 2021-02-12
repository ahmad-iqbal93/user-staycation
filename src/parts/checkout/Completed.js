import React from "react";
import Fade from "react-reveal";
import Completedilustration from "../../assets/images/ilu_web 1.svg";

const Completed = () => {
  return (
    <Fade>
      <div className="container" style={{ marginBottom: 30 }}>
        <div className="row justify-content-center text-center">
          <div className="col-4">
            <img
              src={Completedilustration}
              className="img-fluid"
              alt="Completed Ilustration"
            />
            <p className="text-gray-500">
              We will inform you via email later once the transaction has been
            </p>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Completed;
