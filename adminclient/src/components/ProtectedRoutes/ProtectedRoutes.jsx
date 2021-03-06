import React,{useState} from "react";
import { Route, Redirect } from "react-router-dom";
import jwt_decode from 'jwt-decode'

export const ProtectedRoutesAdmin = ({

  component: Component,
  token:token,
  ...rest
}) => {

  const tokens = localStorage.userLoginToken;
  const decoded = jwt_decode(tokens);

  return (
    <Route
      {...rest}
      render={props => {
        if (decoded.isAdmin) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/404NotFound",
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }}
    />
  );
};


export const ProtectedRoutesIsSalesManager = ({

  component: Component,
  token:token,
  ...rest
}) => {

  const tokens = localStorage.userLoginToken;
  const decoded = jwt_decode(tokens);

  return (
    <Route
      {...rest}
      render={props => {
        if (decoded.isSalesManager) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/404NotFound",
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }}
    />
  );
};

export const ProtectedRoutesIsCurrentSalaseManager = ({

  component: Component,
  token:token,
  ...rest
}) => {

  const tokens = localStorage.userLoginToken;
  const decoded = jwt_decode(tokens);

  return (
    <Route
      {...rest}
      render={props => {
        if (decoded.email !== props.match.params.email) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/MyProfile",
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }}
    />
  );
};