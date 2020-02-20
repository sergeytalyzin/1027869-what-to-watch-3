import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import films from "./mocks/films.js";

// const data = {
//   genre: `Comedy`,
//   title: `Terminator`,
//   date: 1812,
//   listFilms: [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`],
// };

ReactDOM.render(
    <App
      films ={films}
    />,
    document.querySelector(`#root`)
);

