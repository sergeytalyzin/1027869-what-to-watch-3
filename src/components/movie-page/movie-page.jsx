import React from "react";
import PropTypes from "prop-types";
import MoviePageOverview from "../movie-page-overview/movie-page-overview.jsx";
import MoviePageReviews from "../movie-page-reviews/movie-page-reviews.jsx";
import MoviePageDetails from "../movie-page-details/movie-page-details.jsx";
import MovieList from "../movie-list/movie-list.jsx";
import Tabs from "../tabs/tabs.jsx";
import {AuthorizationStatus} from "../../reducer/user/user";
import {Link} from "react-router-dom";
import history from "../../history.js";
import {AppRoute} from "../../const";


const TABS = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`,
};

const activeToTab = (tab, film, id) => {
  switch (tab) {
    case TABS.REVIEWS :
      return <MoviePageReviews filmId = {id} film={film}/>;
    case TABS.DETAILS :
      return <MoviePageDetails film={film}/>;
    default :
      return <MoviePageOverview film={film}/>;
  }
};
const MoviePage = (props) => {
  const {authorizationStatus, films, film, activeTab, handleClickTab, onFilmWatch, onActiveFilm, addReviews} = props;
  const {title, genre, date, src, bg, bgSrc, id} = film;
  let moreLikeThisFilms = [];
  moreLikeThisFilms = films.filter((it)=> it.genre === genre && it.id !== id).slice(0, 4);
  return (<React.Fragment>
    <section className="movie-card movie-card--full" style={{backgroundColor: `${bg}`}}>
      <div className="movie-card__hero">
        <div className="movie-card__bg">
          <img src={bgSrc} alt={title}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <a href="main.html" className="logo__link">
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
          <div className="movie-card__desc">
            <h2 className="movie-card__title">{title}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genre}</span>
              <span className="movie-card__year">{date}</span>
            </p>

            <div className="movie-card__buttons">
              <button onClick={()=>{
                onFilmWatch(film);
                history.push(AppRoute.PLAYER);
              }} className="btn btn--play movie-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"/>
                </svg>
                <span>Play</span>
              </button>
              <button
                onClick={()=>{
                  history.push(AppRoute.MY_LIST);
                }}
                className="btn btn--list movie-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"/>
                </svg>
                <span>My list</span>
              </button>
              {authorizationStatus === AuthorizationStatus.AUTH &&
              (<Link to={AppRoute.REVIEW} onClick={(e) => {
                e.preventDefault();
                addReviews();
              }}

              href="#" className="btn movie-card__button">Add review</Link>)}
            </div>
          </div>
        </div>
      </div>

      <div className="movie-card__wrap movie-card__translate-top">
        <div className="movie-card__info">
          <div className="movie-card__poster movie-card__poster--big">
            <img src={src} alt={`${title} poster`} width="218"
              height="327"/>
          </div>

          <div className="movie-card__desc">
            <nav className="movie-nav movie-card__nav">
              {<Tabs activeTab={activeTab} handleClickTab={handleClickTab}/>}
            </nav>
            {activeToTab(activeTab, film, id)}
          </div>
        </div>
      </div>
    </section>

    <div className="page-content">
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>
        <div className="catalog__movies-list">
          {<MovieList films={moreLikeThisFilms} onActiveFilm={onActiveFilm}/>}
        </div>
      </section>

      <footer className="page-footer">
        <div className="logo">
          <a href="main.html" className="logo__link logo__link--light">
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
  </React.Fragment>);
};


MoviePage.propTypes = {
  onActiveFilm: PropTypes.func,
  onFilmWatch: PropTypes.func,
  handleClickTab: PropTypes.func.isRequired,
  films: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        date: PropTypes.number.isRequired,
        src: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        ratingCount: PropTypes.number.isRequired,
        ratingLevel: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        actors: PropTypes.arrayOf.isRequired,
        director: PropTypes.string.isRequired,
      })).isRequired,
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    ratingCount: PropTypes.number.isRequired,
    ratingLevel: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    actors: PropTypes.arrayOf.isRequired,
    director: PropTypes.string.isRequired,
    bg: PropTypes.string.isRequired,
    bgSrc: PropTypes.string,
  }).isRequired,
  activeTab: PropTypes.string.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  addReviews: PropTypes.func.isRequired,
};


export default MoviePage;
