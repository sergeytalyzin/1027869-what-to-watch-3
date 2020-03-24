import React from "react";
import PropTypes from "prop-types";
import {genreType} from "../../const";
let mySet = new Set();

const GenreList = (props) => {
  const {allListFilms, onChangeGenre, onGenreClick, activeGenreList, handleClickGenreList} = props;


  mySet.add(genreType.ALL);
  allListFilms.forEach((it) => mySet.add(it.genre));
  const genreList = Array.from(mySet);

  return (
    <ul className="catalog__genres-list">
      {genreList.map((it, i) => (
        <li
          onClick={()=>{
            onGenreClick(it);
            handleClickGenreList();

          }}
          onMouseLeave={onChangeGenre}
          key={i} className="catalog__genres-item">
          <a href="#" className="catalog__genres-link">{it}</a>
        </li>))}
    </ul>
  );
};

GenreList.propTypes = {
  onChangeGenre: PropTypes.func.isRequired,
  onGenreClick: PropTypes.func.isRequired,
  allListFilms: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
  })).isRequired,
};

export {mySet};
export default GenreList;

