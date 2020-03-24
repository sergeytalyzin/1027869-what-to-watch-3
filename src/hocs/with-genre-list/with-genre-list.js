import React, {PureComponent} from "react";
import {mySet} from "../../components/genre-list/genre-list.jsx";
let xyu = {};
console.log(`11111`, mySet);
const genreList = Array.from(mySet);

  genreList.map((it) => xyu.it = false);
  console.log(xyu);

const withActiveGenreList = (Component) => {
  class WithActiveGenreList extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {active: false};
      this._handleClickGenreList = this._handleClickGenreList.bind(this);
    }

    _handleClickGenreList() {
      this.setState({active: !this.state.active});
    }

    render() {
      const {active} = this.state;
      return <Component
        {...this.props}
        activeGenreList = {active}
        handleClickGenreList = {this._handleClickGenreList}
      />;
    }
  }


  WithActiveGenreList.propTypes = {};
  return WithActiveGenreList;
};

export default withActiveGenreList;
