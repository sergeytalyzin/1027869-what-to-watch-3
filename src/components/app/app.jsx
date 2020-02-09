import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";
const App = (props) => {
  const {listFilms, title, genre, date} = props;
  return (
    <Main
      title ={title}
      genre = {genre}
      date = {date}
      listFilms = {listFilms}
    />
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  listFilms: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default App;
