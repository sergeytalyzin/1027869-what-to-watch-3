import React from 'react';
import PropTypes from "prop-types";


const ShowMore = (props) => {
  return (
    <div className="catalog__more">
      <button onClick={()=>props.onButtonClick()} className="catalog__button" type="button">Show more</button>
    </div>
  );
};

ShowMore.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};

export default ShowMore;



