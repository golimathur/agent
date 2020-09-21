import React from "react";
import "./index.css";
import App from "./App";
import ReactDOM from "react-dom";
import { Redirect, Router, Switch, Route } from "react-router-dom";
import history from "./history";
import Header from "./component/Header";
import Deadlines from "./component/Deadlines";
import Tasks from "./component/Tasks";
import Reports from "./component/Reports";
import Clients from "./component/Clients";
import Quotes from "./component/Quotes";
import EngagementLetter from "./component/EngagementLetter";
import Validate from "./login/Validate";
import LoginForm from "./login/LoginForm";
import Account from "./signup/Account";
import { Suspense } from "react";
import { Fabric } from "@fluentui/react";

ReactDOM.render(
  <Fabric>
    <Router history={history()}>
      <Switch>
      
       {/* <Route exact path="/" render={() => <App />} /> */}
       <Route exact path="/" render={() => <Validate />} />

        <Route
          exact
          path="/tasks"
          activeClassName="is-active"
          render={() => (
            <Header>
              <Tasks />
            </Header>
          )}
        />

        <Route
          exact
          path="/deadlines"
          render={() => (
            <Header>
              <Deadlines />
            </Header>
          )}
        />
        <Route
          exact
          path="/reports"
          render={() => (
            <Header>
              <Reports />
            </Header>
          )}
        />

        <Route
          exact
          path="/quotes"
          render={() => (
            <Header>
              <Quotes />
            </Header>
          )}
        />

        <Route
          exact
          path="/clients"
          render={() => (
            <Header>
              <Clients />
            </Header>
          )}
        />

        <Route
          exact
          path="/engagement letter"
          render={() => (
            <Header>
              <EngagementLetter />
            </Header>
          )}
        />

        <Route
          exact
          path="/loginform"
          render={() => (
            <Header>
              <LoginForm />
            </Header>
          )}
        />

        {/* <Route
        exact
        path="/account"
        render={() => (
          <Header>
            <Account />
          </Header>
        )}
      /> */}
      </Switch>
    </Router>
  </Fabric>,

  document.getElementById("root")
);
