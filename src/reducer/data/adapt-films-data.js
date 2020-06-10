import {extend} from "../../utils.js";

export default (data) => {
  const newData = data.map((film)=>{
    const newFilm = extend(film, {
      title: film.name,
      src: film.poster_image,
      date: film.released,
      posterBig: film.preview_image,
      ratingLevel: film.rating,
      ratingCount: film.scores_count,
      actors: film.starring,
      previewVideoLink: film.preview_video_link,
      runTime: film.run_time,
      bg: film.background_color,
      bgSrc: film.background_image,
      videoLink: film.video_link,
      isFavorite: film.is_favorite
    }
    );
    delete newFilm.name;
    delete newFilm.poster_image;
    delete newFilm.released;
    delete newFilm.preview_image;
    delete newFilm.scores_count;
    delete newFilm.starring;
    delete newFilm.preview_video_link;
    delete newFilm.run_time;
    delete newFilm.background_image;
    delete newFilm.is_favorite;
    return newFilm;
  });
  return newData;
};

export const adaptFilm = (film) => {
  return {
    id: film.id,
    title: film.name,
    src: film.poster_image,
    genre: film.genre,
    date: film.released,
    posterBig: film.preview_image,
    rating: film.rating,
    ratingLevel: film.rating,
    ratingCount: film.scores_count,
    description: film.description,
    actors: film.starring,
    director: film.director,
    previewVideoLink: film.preview_video_link,
    runTime: film.run_time,
    bg: film.background_color,
    bgSrc: film.background_image,
    videoLink: film.video_link,
    isFavorite: film.is_favorite
  };
};

export const adaptReview = (reviews) => {
  return (
    reviews.map((review) => {
      return {
        reviewId: review.id,
        reviewRating: review.rating,
        reviewComment: review.comment,
        reviewDate: review.date,
        reviewUserId: review.user.id,
        reviewUserName: review.user.name
      };
    })
  );
};
