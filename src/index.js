import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import App from "./components/app/app.jsx";
import thunk from "redux-thunk";
import {createAPI} from "./api.js";
import reducer from "./reducer/reducer.js";
import {Operation as DataOperation} from "./reducer/data/data.js";
import {Operation as UserOperation, ActionCreators, AuthorizationStatus} from "./reducer/user/user.js";

const onUnAuthorized = () => {
  store.dispatch(ActionCreators.requireAuthorization(AuthorizationStatus.NO_AUTH));
};


const api = createAPI(onUnAuthorized);

const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api))
));

store.dispatch(DataOperation.loadFilms());
store.dispatch(DataOperation.promoFilm());
store.dispatch(UserOperation.checkAuth());
store.dispatch(DataOperation.loadFavoriteFilms());


ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>
    ,
    document.querySelector(`#root`)
);

