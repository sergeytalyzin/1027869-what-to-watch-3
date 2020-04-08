import React from "react";
import {Route, Redirect} from "react-router-dom";
import {AppRoute} from "../../const";
import {AuthorizationStatus} from "../../reducer/user/user.js";



const PrivateRoute = ({component: Component, render, auth , ...rest}) => {
  return (
    <Route
      videoSrc={activeFilm.videoLink}
      posterSrc={activeFilm.src}
      render={props => auth === AuthorizationStatus.AUTH ? (
        render()
      ):(
        <Redirect to={AppRoute.SIGN_IN} />
      )}
    />
  );
};

export default PrivateRoute;
