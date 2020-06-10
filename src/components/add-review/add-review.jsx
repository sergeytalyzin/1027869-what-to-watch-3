import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";
import history from "../../history";
import {AppRoute} from "../../const.js";


const LENGHT = {
  MIN: 50,
  MAX: 400
};


class AddReview extends PureComponent {
  constructor(props) {
    super(props);

    this.ratingRef = createRef();
    this.commentRef = createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(filmId) {
    const {id} = this.props.activeFilm;
    const {onSubmit} = this.props;
    onSubmit(filmId, {
      rating: this.ratingRef.current.elements.rating.value,
      comment: this.commentRef.current.value
    });
    history.push(`${AppRoute.MOVIE_PAGE}/${id}`);
  }

  render() {
    const {src, bgSrc, title, id} = this.props.activeFilm;


    return (<section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={bgSrc} alt={title}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <a href="#" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href="#" className="breadcrumbs__link">{title}</a>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
            </div>
          </div>
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={src} alt={title} width="218"
            height="327"/>
        </div>
      </div>

      <div className="add-review">
        <form action="#" className="add-review__form" ref={this.ratingRef} onSubmit={(evt)=>{
          evt.preventDefault();
          this.handleSubmit(id);
        }}>
          <div className="rating">
            <div className="rating__stars">
              <input className="rating__input" id="star-1" type="radio" name="rating" defaultValue={1}/>
              <label className="rating__label" htmlFor="star-1">Rating 1</label>

              <input className="rating__input" id="star-2" type="radio" name="rating" defaultValue={2}/>
              <label className="rating__label" htmlFor="star-2">Rating 2</label>

              <input className="rating__input" id="star-3" type="radio" name="rating" defaultValue={3} defaultChecked={true}/>
              <label className="rating__label" htmlFor="star-3">Rating 3</label>

              <input className="rating__input" id="star-4" type="radio" name="rating" defaultValue={4}/>
              <label className="rating__label" htmlFor="star-4">Rating 4</label>

              <input className="rating__input" id="star-5" type="radio" name="rating" defaultValue={5}/>
              <label className="rating__label" htmlFor="star-5">Rating 5</label>
            </div>
          </div>

          <div className="add-review__text">
            <textarea
              ref={this.commentRef}
              minLength={LENGHT.MIN}
              maxLength={LENGHT.MAX}
              className="add-review__textarea" name="review-text" id="review-text"
              placeholder="Review text"/>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit">Post</button>
            </div>

          </div>
        </form>
      </div>

    </section>);

  }

}

AddReview.propTypes = {
  onSubmit: PropTypes.func,
  activeFilm: PropTypes.shape({
    title: PropTypes.string,
    src: PropTypes.string.isRequired,
    bgSrc: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  }),
};

export default AddReview;
