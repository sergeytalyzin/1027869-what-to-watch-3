import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";


const data = {
  genre: `Comedy`,
  title: `Terminator`,
  date: 1812,
  listFilms: [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`],
};

ReactDOM.render(
    <App
      title = {data.title}
      date = {data.date}
      genre = {data.genre}
      listFilms = {data.listFilms}
    />,
    document.querySelector(`#root`)
);

