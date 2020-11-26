import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";

function PrivateRoute({ component: Component, ...rest }: RouteProps) {
  if (!Component) return null;
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("user") ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
}
export default PrivateRoute;
