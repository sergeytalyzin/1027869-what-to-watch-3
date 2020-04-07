import React from "react";
import PropTypes from "prop-types";
import MovieList from "../movie-list/movie-list.jsx";
import GenreList from "../genre-list/genre-list.jsx";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/app-status/app-status.js";
import ShowMore from "../show-more/show-more.jsx";
import withActiveItem from "../../hocs/with-active-item/with-active-item.js";
import {getAllFilms, getFilmsToRender} from "../../reducer/data/selectors.js";
import {getFilmsToShowCount} from "../../reducer/app-status/selectors.js";
import {AuthorizationStatus} from "../../reducer/user/user";
import {Link} from "react-router-dom";
import history from "../../history.js";
import {AppRoute} from "../../const.js";



const GenreListWrapper = withActiveItem(GenreList);


const Main = (props) => {
  const {films, allListFilms, promoFilm, onGenreClick, onChangeGenre,
    showedFilmsAmount, onClickShowMore, onClickActiveFilm,
    authorizationStatus, onFilmWatch, filmsLength, onSignInClick} = props;
  const {title, genre, date, bgSrc, src} = promoFilm;

  return (<React.Fragment>
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={bgSrc} alt={title}/>
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
          {authorizationStatus === AuthorizationStatus.AUTH ? (
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
            </div>
          ) :
            (
              <Link
                to={AppRoute.SIGN_IN}
              //   onClick={(evt)=>{
              //   evt.preventDefault();
              //   onSignInClick();
              // }}
              href="#" className="user-block__link">Sign in</Link>
            )}
        </div>
      </header>

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src={src} alt={title} width="218"
              height="327"/>
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{title}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genre}</span>
              <span className="movie-card__year">{date}</span>
            </p>

            <div className="movie-card__buttons">
              <button onClick={()=>{
                onFilmWatch(films[0]);
                history.push(AppRoute.PLAYER);
              }} className="btn btn--play movie-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"/>
                </svg>
                <span>Play</span>
              </button>
              <button className="btn btn--list movie-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"/>
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

        <GenreListWrapper
          onChangeGenre={onChangeGenre}
          onGenreClick={onGenreClick}
          allListFilms={allListFilms}
          active={0}
        />

        <div className="catalog__movies-list">
          <MovieList
            onActiveFilm = {onClickActiveFilm}
            films = {films}
          />
        </div>

        {(filmsLength >= showedFilmsAmount) &&
          <ShowMore onButtonClick={onClickShowMore}/>}
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

  onSignInClick: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  showedFilmsAmount: PropTypes.number,
  filmsLength: PropTypes.number,
  onChangeGenre: PropTypes.func.isRequired,
  onGenreClick: PropTypes.func.isRequired,
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  })).isRequired,
  promoFilm: PropTypes.shape({
    title: PropTypes.string,
    genre: PropTypes.string,
    date: PropTypes.number,
    id: PropTypes.number,
    bgSrc: PropTypes.string,
    src: PropTypes.string,
  }).isRequired,
  allListFilms: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  })).isRequired,
  onClickShowMore: PropTypes.func.isRequired,
  onClickActiveFilm: PropTypes.func.isRequired,
  onFilmWatch: PropTypes.func,
};


const mapStateToProps = (state) => ({
  allListFilms: getAllFilms(state),
  filmsLength: getFilmsToRender(state).length,
  showedFilmsAmount: getFilmsToShowCount(state),
});

const mapStateToDispatch = (dispatch) =>({
  onGenreClick(genre) {
    dispatch(ActionCreator.changeGenre(genre));
  },
  onClickShowMore() {
    dispatch(ActionCreator.incrementShowed());
  },
  onChangeGenre() {
    dispatch(ActionCreator.resetShowed());
  },
  onClickActiveFilm(film) {
    dispatch(ActionCreator.activeFilm(film));
  },
});


export {Main};

export default connect(mapStateToProps, mapStateToDispatch)(Main);
