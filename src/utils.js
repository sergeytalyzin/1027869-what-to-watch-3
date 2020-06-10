import {MONTHS} from "./const.js";

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const formatDateForReview = (date) => {
  const _date = new Date(date);
  const day = _date.getDate();
  const month = MONTHS[_date.getMonth()];
  const year = _date.getFullYear();
  return `${month} ${day}, ${year}`;
};

export const getTextRating = (rating) => {
  switch (true) {
    case (rating < 3):
      return `Bad`;
    case (rating < 5):
      return `Normal`;
    case (rating < 8):
      return `Good`;
    case (rating < 10):
      return `Very good`;
    case rating = 10:
      return `Awesome`;
    default:
      break;
  }
  return null;
};
