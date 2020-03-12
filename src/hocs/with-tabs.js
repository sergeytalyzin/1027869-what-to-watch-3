import React, {PureComponent} from "react";
import Tabs from "../components/tabs/tabs.jsx";

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
    }
    render() {
      const {active} = this.state;
      return <Component
        {...this.props}
        activeTab = {active}
        tabs = {() => {
          return (<Tabs
            activeTab = {active}
            handleClickTab = {(tab)=>{
              this.setState({active: tab});
            }}
          />);
        }}
      />;
    }
  }


  WithActiveTab.propTypes = {};
  return WithActiveTab;
};

export default withActiveTab;

