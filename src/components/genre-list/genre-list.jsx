import React from "react";
import PropTypes from "prop-types";
import {genreType} from "../../const";

const GenreList = (props) => {
  const {films, onGenreClick} = props;

  let mySet = new Set();
  mySet.add(genreType.ALL);
  films.forEach((it) => mySet.add(it.genre));
  const genreList = Array.from(mySet);

  return (
    <ul className="catalog__genres-list">
      {genreList.map((it, i) => (
        <li onClick={()=>onGenreClick(it)} key={i} className="catalog__genres-item catalog__genres-item--active">
          <a href="#" className="catalog__genres-link">{it}</a>
        </li>))}
    </ul>
  );
};

GenreList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
  })).isRequired,
};

export default GenreList;

