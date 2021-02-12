import React from "react";
import Star from "elements/star";
import TestimonyAccent from "assets/images/testimonial-landingpages-frame.jpg";
import Button from "elements/button";
import Fade from "react-reveal/Fade";

const Testimony = ({ data }) => {
  return (
    <Fade bottom>
      <section className="container">
        <div className="row align-itmes-center">
          <div className="col-auto" style={{ marginRight: "60" }}>
            <div
              className="testimonial-hero"
              style={{ margin: "30px 0 0 30px" }}
            >
              <img
                src={`https://adminbwa-staycation.herokuapp.com/${data.imageUrl}`}
                alt="Testimonial"
                className="position-absolute"
                style={{ zIndex: "1" }}
              />

              <img
                src={TestimonyAccent}
                alt="Testimonial frame"
                className="position-absolute"
                style={{ margin: "-30px 0 0 -30px" }}
              />
            </div>
          </div>
          <div className="col">
            <h4 style={{ marginBottom: 40 }}>{data.name}</h4>

            <Star value={data.rate} width={35} height={35} spacing={4}></Star>

            <h5 className="h2 font-weight line-heght-2 my-3">{data.content}</h5>

            <span className="text-gray-500">
              {data.familyName}, {data.familyOccupation}
            </span>

            <div className="">
              <Button
                className="btn px-5"
                style={{ marginTop: "40px" }}
                hasShadow
                isPrimary
                type="link"
                href={`/testimonial/${data._id}`}
              >
                Read Their Story
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default Testimony;
