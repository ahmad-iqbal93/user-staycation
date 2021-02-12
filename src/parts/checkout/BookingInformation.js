import React from "react";
import Fade from "react-reveal/Fade";
import Text from "elements/Form/inputText/Index";

const BookingInformation = (props) => {
  const { data, ItemDetails, checkout } = props;

  return (
    <Fade>
      <div className="container" style={{ marginBottom: 30 }}>
        <div className="row justify-content-center align-items-center">
          <div className="col-5 border-right py-5" style={{ paddingRight: 80 }}>
            <Fade delay={300}>
              <div className="card">
                <figure className="img-wrapper" style={{ height: 270 }}>
                  <img
                    src={`https://adminbwa-staycation.herokuapp.com/${ItemDetails.imageId[0].imageUrl}`}
                    alt={ItemDetails.title}
                    className="img-cover"
                  />
                </figure>
                <div className="row align-items-center">
                  <div className="col">
                    <div className="meta-wrapper">
                      <h5>{ItemDetails.title}</h5>
                      <span className="text-gray-500">
                        {ItemDetails.city}, {ItemDetails.country}
                      </span>
                    </div>
                  </div>
                  <div className="col-auto">
                    <span>
                      ${+checkout.duration * ItemDetails.price} USD
                      <span className="text-gray-500"> per </span>
                      {checkout.duration} {ItemDetails.unit}
                      {+checkout.duration > 1 ? "s" : ""}
                    </span>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
          <div className="col-5 py-5" style={{ paddingLeft: 80 }}>
            <Fade delay={600}>
              <label htmlFor="firstName">First Name</label>
              <Text
                id="firstName"
                name="firstName"
                value={data.firstName}
                onChange={props.onChange}
              ></Text>

              <label htmlFor="firstName">Last Name</label>
              <Text
                id="lastName"
                name="lastName"
                value={data.lastName}
                onChange={props.onChange}
              ></Text>

              <label htmlFor="email">Email Address</label>
              <Text
                id="email"
                name="email"
                type="email"
                value={data.email}
                onChange={props.onChange}
              ></Text>

              <label htmlFor="phone">Phone Number</label>
              <Text
                id="phone"
                name="phone"
                type="tel"
                value={data.phone}
                onChange={props.onChange}
              ></Text>
            </Fade>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default BookingInformation;
