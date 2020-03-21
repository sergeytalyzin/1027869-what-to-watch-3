import React from 'react';


const ShowMore = (props) => {
  return (
    <div className="catalog__more">
      <button onClick={props.onButtonClick} className="catalog__button" type="button">Show more</button>
    </div>
  );
};

export default ShowMore;
