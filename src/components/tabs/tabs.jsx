import React from "react";
import PropTypes from "prop-types";
const TABS = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`,
};


const Tabs = (props) => {
  const {activeTab, handleClickTab} = props;
  return (
    <ul className="movie-nav__list">
      <li onClick= {(evt) => {
        evt.preventDefault();
        handleClickTab(TABS.OVERVIEW);
      }}

      className={`movie-nav__item ${activeTab === TABS.OVERVIEW && `movie-nav__item--active`}`}>
        <a href="#" className="movie-nav__link">Overview</a>
      </li>
      <li onClick= {(evt) => {
        evt.preventDefault();
        handleClickTab(TABS.DETAILS);
      }}
      className={`movie-nav__item ${activeTab === TABS.DETAILS && `movie-nav__item--active`}`}>
        <a href="#" className="movie-nav__link">Details</a>
      </li>
      <li onClick= {(evt) => {
        evt.preventDefault();
        handleClickTab(TABS.REVIEWS);
      }}

      className={`movie-nav__item ${activeTab === TABS.REVIEWS && `movie-nav__item--active`}`}>
        <a href="#" className="movie-nav__link">Reviews</a>
      </li>
    </ul>
  );
};

Tabs.propTypes = {
  activeTab: PropTypes.string.isRequired,
  handleClickTab: PropTypes.func.isRequired,
};

export default Tabs;

