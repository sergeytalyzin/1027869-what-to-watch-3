import React from "react";
import PropTypes from "prop-types";
import {genreType} from "../../const";


const GenreList = (props) => {
  const {allListFilms, onChangeGenre, active, handleClickItem, onGenreClick} = props;

  let mySet = new Set();
  mySet.add(genreType.ALL);
  allListFilms.forEach((it) => mySet.add(it.genre));
  const genreListAll = Array.from(mySet);

  return (
    <ul className="catalog__genres-list">
      {genreListAll.map((it, i) => {
        return (<li key={i}
          onClick={(evt)=>{
            evt.preventDefault();
            onGenreClick(it);
            handleClickItem(i);
            onChangeGenre();
          }}

          className={`catalog__genres-item ${ active === i && `catalog__genres-item--active`}`}>
          <a href="#" className="catalog__genres-link">{it}</a>
        </li>);
      })
      }
    </ul>
  );
};

GenreList.propTypes = {
  active: PropTypes.number.isRequired,
  handleClickItem: PropTypes.func.isRequired,
  onChangeGenre: PropTypes.func.isRequired,
  onGenreClick: PropTypes.func.isRequired,
  allListFilms: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
  })).isRequired,
};

export default GenreList;

