import React from "react";
import {Route, Redirect} from "react-router-dom";
import {AppRoute} from "../../const";
import {AuthorizationStatus} from "../../reducer/user/user.js";
import {connect} from "react-redux"
import {getFilmActive, getFilmToWatch} from "../../reducer/app-status/selectors.js";
import {getAuthorizationStatus} from "../../reducer/user/selectors.js";





const PrivateRoute = ({component: Component, render, auth, activeFilm, ...rest}) => {
  console.log(render());
  return (
    <Route
      render={props => auth === AuthorizationStatus.AUTH ? (
        render(activeFilm)
      ):(
        <Redirect to={AppRoute.SIGN_IN} />
      )}
    />
  );
};




const mapStateToProps = (state) => ({
  activeFilm: getFilmActive(state),
  filmToWatch: getFilmToWatch(state),
  authorizationStatus: getAuthorizationStatus(state),
});



export {PrivateRoute};

export default connect(mapStateToProps)(PrivateRoute);
