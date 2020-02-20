import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";


const titleHandler = () => {
  return `привет`;
};
const App = ({films}) => {
  return (
    <Main
      films = {films}
      onTitleClick={titleHandler}
    />
  );
};

App.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
  })).isRequired,
};

export default App;
