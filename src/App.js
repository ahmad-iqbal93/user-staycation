import "assets/scss/style.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import LandingPage from "pages/LandingPage";
// import Example from "pages/Example";
import DetailsPage from "pages/DetailsPage";
import Checkout from "pages/Checkout";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* <Route path="/example" component={Example} /> */}
          <Route path="/checkout" component={Checkout} />
          <Route path="/properties/:id" component={DetailsPage} />
          <Route path="/" component={LandingPage} />
        </Switch>
      </Router>

      <ToastContainer />
    </div>
  );
}

export default App;
