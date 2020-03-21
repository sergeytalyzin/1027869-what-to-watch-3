import React from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";



const ShowMore = (props) => {
  return (
    <div className="catalog__more">
      {/* eslint-disable-next-line react/prop-types */}
      <button onClick={()=>props.onButtonClick(props.genre)} className="catalog__button" type="button">Show more</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  genre: state.genre,
});

export {ShowMore};
export default connect(mapStateToProps)(ShowMore);
