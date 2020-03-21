import React from "react";
import PropTypes from "prop-types";
import MovieList from "../movie-list/movie-list.jsx";
import GenreList from "../genre-list/genre-list.jsx";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";
import ShowMore from "../show-more/show-more.jsx";


const Main = (props) => {
  const {films, onTitleClick, allListFilms, onGenreClick, onClickShowMore} = props;
  const {title, genre, date, id} = films[0];
  return (<React.Fragment>
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel"/>
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header movie-card__head">
        <div className="logo">
          <a className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="user-block">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
          </div>
        </div>
      </header>

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218"
              height="327"/>
          </div>

          <div className="movie-card__desc">
            <h2 onClick = {()=>onTitleClick(id)} className="movie-card__title">{title}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genre}</span>
              <span className="movie-card__year">{date}</span>
            </p>

            <div className="movie-card__buttons">
              <button className="btn btn--play movie-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <button className="btn btn--list movie-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"></use>
                </svg>
                <span>My list</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <GenreList allListFilms={allListFilms} onGenreClick ={onGenreClick}/>

        <div className="catalog__movies-list">
          <MovieList
            onTitleClick = {onTitleClick}
            films = {films}
          />
        </div>

        {(allListFilms.length > films.length) ?
          <ShowMore onButtonClick={onClickShowMore}/>
          :
          ``}
      </section>

      <footer className="page-footer">
        <div className="logo">
          <a className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  </React.Fragment>
  );
};
Main.propTypes = {
  onGenreClick: PropTypes.func.isRequired,
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  })).isRequired,
  allListFilms: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  })).isRequired,
  onTitleClick: PropTypes.func.isRequired,
};


const mapStateToProps = (state) => ({
  films: state.listFilms,
  allListFilms: state.allListFilms,
});

const mapStateToDispatch = (dispatch) =>({
  onGenreClick(type) {
    dispatch(ActionCreator.setGenre(type));
  },
  onClickShowMore(type) {
    dispatch(ActionCreator.onClickShowMore(type));
  }
});


export {Main};

export default connect(mapStateToProps, mapStateToDispatch)(Main);
