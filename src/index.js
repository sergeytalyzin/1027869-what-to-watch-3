import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import App from "./components/app/app.jsx";
import {reducer} from "./reducer.js";
import withActiveItem from "./hocs/with-active-item/with-active-item.js";

const AppWrapper = withActiveItem(App);

const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f)=>f);

ReactDOM.render(
    <Provider store={store}>
      <AppWrapper
        active={0}
      />
    </Provider>
    ,
    document.querySelector(`#root`)
);

