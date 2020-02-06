import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const genre = `Comedy`;
const title = `Terminator`;
const date = 1812;

ReactDOM.render(
    <App
      title = {title}
      date = {date}
      genre = {genre}
    />,
    document.querySelector(`#root`)
);

