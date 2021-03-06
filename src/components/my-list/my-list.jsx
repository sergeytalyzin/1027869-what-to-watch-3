import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getFavoriteList} from "../../reducer/data/selectors.js";
import {ActionCreator} from "../../reducer/app-status/app-status.js";
import MovieList from "../movie-list/movie-list.jsx";


const MyList = ({favoriteFilmsList, onActiveFilm}) => {

  return (<div className="user-page">
    <header className="page-header user-page__head">
      <div className="logo">
        <a href="main.html" className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      <h1 className="page-title user-page__title">My list</h1>

      <div className="user-block">
        <div className="user-block__avatar">
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
        </div>
      </div>
    </header>

    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <div className="catalog__movies-list">
        {
          <MovieList films={favoriteFilmsList} onActiveFilm={onActiveFilm}/>
        }
      </div>
    </section>

    <footer className="page-footer">
      <div className="logo">
        <a href="#" className="logo__link logo__link--light">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  </div>);
};


MyList.propTypes = {
  onActiveFilm: PropTypes.func.isRequired,
  favoriteFilmsList: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    posterBig: PropTypes.string.isRequired,
  })).isRequired,
};


const mapStateToProps = (state) => ({
  favoriteFilmsList: getFavoriteList(state),
});

const mapStateToDispatch = (dispatch) => ({
  onActiveFilm(film) {
    dispatch(ActionCreator.activeFilm(film));
  }
});


export {MyList};

export default connect(mapStateToProps, mapStateToDispatch)(MyList);
