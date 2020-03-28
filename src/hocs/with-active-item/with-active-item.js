import React, {PureComponent} from "react";


const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        active: 0,
      };

      this._handleClickItem = this._handleClickItem.bind(this);
    }

    _handleClickItem(id) {
      this.setState({active: id});
    }

    render() {
      const {active} = this.state;
      return <Component
        {...this.props}
        handleClickItemList = {this._handleClickItem}
        active = {active}
      />;
    }
  }


  WithActiveItem.propTypes = {};

  return WithActiveItem;
};

export default withActiveItem;


