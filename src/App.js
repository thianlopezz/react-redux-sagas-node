import React, { Component } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import HelloWorld from "./pages/helloWorld";

class App extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" component={() => <Redirect to="/hello" />} />
          <Route exact path="/hello" component={HelloWorld} />
          <Route
            component={() => {
              return <h1>404 NOT FOUND</h1>;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(props => <App {...props} />);
