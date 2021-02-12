import React, { Component } from "react";
// import InputDate from "elements/Form/inputDate/Index";
import InputNumber from "elements/Form/inputNumber/Index";
import Breadcrumb from "elements/breadcrumbs";

export default class Example extends Component {
  render() {
    const breadcrumb = [
      { pageTitle: "Home", pageRef: "" },
      { pageTitle: "House Details", pageRef: "" },
    ];
    return (
      <div className="container">
        <div
          className="row align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <div className="col-auto">
            <Breadcrumb data={breadcrumb} />
          </div>
        </div>
      </div>
    );
  }
}
