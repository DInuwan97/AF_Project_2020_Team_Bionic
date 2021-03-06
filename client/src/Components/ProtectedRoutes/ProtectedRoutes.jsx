import React,{useState} from "react";
import { Route, Redirect } from "react-router-dom";
import jwt_decode from 'jwt-decode'

export const ProtectedUpperSalesServicers = ({

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
        console.log('Protected Info : ', decoded);
        if ((decoded.isSalesManager === true && decoded.adminVerification === true) || (decoded.isSalesServicer === true && decoded.salasManagerVerification === true) || decoded.isAdmin === true) {
          if(decoded.isCustomer === false){
            return <Component {...props} />;
          }
          
        } else {
            window.location.href = '/404.html';
            return;
        }
      }}
    />
  );
};


export const ProtectedRoutesCheckedLoggedUser = ({

  component: Component,
  token:token,
  ...rest
}) => {

  // const tokens = localStorage.userLoginToken;
  // const decoded = jwt_decode(tokens);

  return (
    <Route
      {...rest}
      render={props => {
       // console.log('Protected Info : ', decoded.isSalesManager);
        if (token !== null) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
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
      console.log('Protected Info 2 : ', props.match.params.email);
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