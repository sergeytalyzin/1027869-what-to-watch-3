import React, {PureComponent} from "react";


const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        active: 0,
      };

      this._handleClickItemList = this._handleClickItemList.bind(this);
    }

    _handleClickItemList(id) {
      this.setState({active: id});
    }

    render() {
      const {active} = this.state;
      return <Component
        {...this.props}
        handleClickItemList = {this._handleClickItemList}
        active = {active}
      />;
    }
  }


  WithActiveItem.propTypes = {};

  return WithActiveItem;
};

export default withActiveItem;


