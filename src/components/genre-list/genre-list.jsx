import React from "react";
import PropTypes from "prop-types";


const GenreList = (props) => {
  const {genre, onChangeGenre, key, activeGenreList, handleClickGenreList, onGenreClick} = props;


console.log(`dasdadssadsdadasdasdasdas`,key);
  return (

    <li
      onClick={()=>{
        onGenreClick(genre);
        handleClickGenreList(key);
      }}
      onMouseLeave={onChangeGenre}
      className={`catalog__genres-item ${ activeGenreList && `catalog__genres-item--active`}`}>
      <a href="#" className="catalog__genres-link">{genre}</a>
    </li>

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

export default GenreList;

