import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Operation} from "../../reducer/data/data.js";
import {connect} from "react-redux";
import {getReviews} from "../../reducer/data/selectors.js";
import {formatDateForReview} from "../../utils.js";


class MoviePageReviews extends PureComponent {
  constructor(props) {
    super(props);
    this.props.loadReviews(this.props.filmId);
  }
  render() {
    const comment = this.props.reviews;
    let size = 3;
    let newArrayComment = [];
    for (let i = 0; i < Math.ceil(comment.length / size); i++) {
      newArrayComment[i] = comment.slice((i * size), (i * size) + size);
    }

    return (
      <div className="movie-card__reviews movie-card__row">
        {newArrayComment && newArrayComment.map((it, i)=>(
          <div key={i} className="movie-card__reviews-col">{
            it.map((com, j) => <div key={j} className="review">
              <blockquote className="review__quote">
                <p className="review__text">{com.reviewComment}</p>

                <footer className="review__details">
                  <cite className="review__author">{com.reviewUserName}</cite>
                  <time className="review__date" dateTime="2016-12-24">{formatDateForReview(com.reviewDate)}</time>
                </footer>
              </blockquote>
              <div className="review__rating">{com.reviewRating}</div>
            </div>)
          }</div>
        )) }
      </div>
    );
  }
}


MoviePageReviews.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
    posterBig: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    ratingCount: PropTypes.number.isRequired,
    ratingLevel: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    actors: PropTypes.arrayOf.isRequired,
    director: PropTypes.string.isRequired,
    runTime: PropTypes.number.isRequired,
  }).isRequired,
};

export {MoviePageReviews};

const mapStateToProps = (state) => ({
  reviews: getReviews(state)
});

const mapDispatchToProps = (dispatch) => ({
  loadReviews: (id) => {
    dispatch(Operation.loadReviews(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviePageReviews);
