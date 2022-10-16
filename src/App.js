import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Interesting from "././components/Interesting/Interesting";
import Signs from "././components/Signs/Signs";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <div className="wrapper">
            <div className="Main">
              <Route exact path="/" render={() => <Main />} />
            </div>
            <div className="mainInformation"></div>
            <Route exact path="/interesting" render={() => <Interesting />} />
            <Route exact path="/signs" render={() => <Signs />} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
