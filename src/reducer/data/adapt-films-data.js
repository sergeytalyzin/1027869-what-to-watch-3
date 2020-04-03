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
    return newFilm;
  });
  return newData;
};
