import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import auth from "../utility/auth";

import ErrorBoundary from "./Common/ErrorBoundary";
import { DividendSchedule, DividendDetail } from "./Dividend";
import MaintainSchedule from "./MaintainSchedule/Container";
import Login from "./User/Login/Login";
import Registration from "./User/Login/Registration";
import ResetPassword from "./User/Login/ResetPassword";
import MyStock from "./User/MyStock";
import ToolPage from "./ToolPage/Page";
import News from "./News/Container";

export default function Routing(props) {
  return (
    <ErrorBoundary>
      <Switch>
        <Route path="/detail/:stockNo/:name?">
          <DividendDetail />
        </Route>
        <Route path="/schedule/maintain">
          <MaintainSchedule />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/registration">
          <Registration />
        </Route>
        <Route path="/resetpassword">
          <ResetPassword />
        </Route>
        <Route path="/news">
          <News />
        </Route>
        <PrivateRoute path="/my/stock">
          <MyStock />
        </PrivateRoute>
        <PrivateRoute path="/tool">
          <ToolPage />
        </PrivateRoute>
        <Route path="/">
          <DividendSchedule />
        </Route>
      </Switch>
    </ErrorBoundary>
  );
}

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        return auth.isLogin ? children : <Redirect to="/login" />;
      }}
    />
  );
}
