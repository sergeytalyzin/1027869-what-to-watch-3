import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Operation as DataOperation} from "../../reducer/data/data";
import {getFavoriteList} from "../../reducer/data/selectors.js";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";
import withActiveItem from "../../hocs/with-active-item/with-active-item.js";
import {ActionCreator} from "../../reducer/app-status/app-status.js";
import MovieList from "../movie-list/movie-list.jsx";



const MyList = ({favoriteFilmsList, onActiveFilm }) => {

  console.log(favoriteFilmsList);
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
          // favoriteFilmsList.map((film, i) =>(<article key={i} className="small-movie-card catalog__movies-card">
          //   <div className="small-movie-card__image">
          //     <img src={film.posterBig}
          //       alt={film.title} width="280" height="175"/>
          //   </div>
          //   <h3 className="small-movie-card__title">
          //     <Link className="small-movie-card__link" href="#">{film.title}></Link>
          //   </h3>
          // </article>))
          // favoriteFilmsList.map((it)=>{
          //   return (
          //     <SmallMovieCardWrapper
          //       onActiveFilm = {props.onActiveFilm}
          //       film = {it}
          //       key = {it.id}
          //       active={{}}
          //     />
          //   );
          // })
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
