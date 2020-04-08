import React from "react";
import {Route, Redirect} from "react-router-dom";
import {AppRoute} from "../../const";
import {AuthorizationStatus} from "../../reducer/user/user.js";



const PrivateRoute = ({component: Component, auth , ...rest}) => {
  return (
    <Route
      {...rest}
      render={props => auth === AuthorizationStatus.AUTH ? (
        <Component {...props}/>
      ):(
        <Redirect to={AppRoute.SIGN_IN} />
      )}
    />
  );
};

export default PrivateRoute;
