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

const api = createAPI(()=>{});

const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api))
));

store.dispatch(DataOperation.loadFilms());

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>
    ,
    document.querySelector(`#root`)
);

