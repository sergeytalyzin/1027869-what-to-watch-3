import React from "react";
import PropTypes from 'prop-types';
import {Route, Redirect} from "react-router-dom";
import {AppRoute} from "../../const";
import {AuthorizationStatus} from "../../reducer/user/user.js";



const PrivateRoute = (props) => {
 const {auth, render, component:Component} = props;
  return (
    <Route
      {...props}
      render={(routeProps) => auth === AuthorizationStatus.AUTH ? (
        render(routeProps)
      ) : (
        <Redirect to={AppRoute.SIGN_IN} />
      )}
    />
  );
};

PrivateRoute.propTypes = {
  auth: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};
export default PrivateRoute;
