import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Breadcrumb from ".";

const setup = () => {
  const breadcrumbList = [
    { pageTitle: "Home", pageRef: "" },
    { pageTitle: "House Details", pageRef: "" },
  ];

  const { container } = render(
    <Router>
      <Breadcrumb data={breadcrumbList} />
    </Router>
  );

  const breadcrumb = container.querySelector(".breadcrumb");

  return {
    breadcrumb,
  };
};

test("Should have <ol> with className .breadcrumb and have test Home & House Details", () => {
  const { breadcrumb } = setup();

  expect(breadcrumb).toBeInTheDocument();
  expect(breadcrumb).toHaveTextContent("Home");
  expect(breadcrumb).toHaveTextContent("House Details");
});
