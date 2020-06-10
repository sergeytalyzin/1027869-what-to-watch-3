import React, {PureComponent} from "react";


const TABS = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`,
};

const withActiveTab = (Component) => {
  class WithActiveTab extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        active: TABS.OVERVIEW,
      };
      this._handleClickTab = this._handleClickTab.bind(this);
    }

    _handleClickTab(tab) {
      this.setState({active: tab});
    }

    render() {
      const {active} = this.state;
      return <Component
        {...this.props}
        activeTab = {active}
        handleClickTab = {this._handleClickTab}
      />;
    }
  }


  WithActiveTab.propTypes = {};
  return WithActiveTab;
};

export default withActiveTab;

