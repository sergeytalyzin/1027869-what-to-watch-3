import React, {PureComponent} from "react";
import GenreList from "../../components/genre-list/genre-list.jsx";
import PropTypes from "prop-types";

const withActiveGenreList = (Component) => {
  class WithActiveGenreList extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        active: -1,
      };

      this._handleClickGenreList = this._handleClickGenreList.bind(this);
    }

    _handleClickGenreList(id) {
      this.setState({active: id});
    }

    render() {
      const {active} = this.state;
      console.log(active);
      return <Component
        {...this.props}
        genreList = {(genre, id) => {
          return (
            <GenreList
              key={id}
              genre ={genre}
              activeGenreList = {active === id}
              handleClickGenreList = {this._handleClickGenreList}
              onChangeGenre={this.props.onChangeGenre(genre)}
              onGenreClick={this.props.onGenreClick}
            />
          );
        }}
      />;
    }
  }


  WithActiveGenreList.propTypes = {
    onChangeGenre: PropTypes.func.isRequired,
    onGenreClick: PropTypes.func.isRequired,
  };

  return WithActiveGenreList;
};

export default withActiveGenreList;




