import React from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";


const ShowMore = (props) => {
  return (
    <div className="catalog__more">
      <button onClick={()=>props.onButtonClick(props.genre)} className="catalog__button" type="button">Show more</button>
    </div>
  );
};

ShowMore.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
  genre: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  genre: state.genre,
});

export {ShowMore};
export default connect(mapStateToProps)(ShowMore);


