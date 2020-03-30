import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        active: this.props.active,
      };

      this._handleClickItem = this._handleClickItem.bind(this);
    }

    _handleClickItem(activeItem) {
      this.setState({active: activeItem});
    }

    render() {
      const {active} = this.state;
      return <Component
        {...this.props}
        handleClickItem= {this._handleClickItem}
        active = {active}
      />;
    }
  }


  WithActiveItem.propTypes = {
    active: PropTypes.any,
  };

  return WithActiveItem;
};

export default withActiveItem;


