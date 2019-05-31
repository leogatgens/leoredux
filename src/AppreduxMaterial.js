import React from "react";
import { Header } from "./componentMaterialUI/Header";
import Footer from "./componentMaterialUI/Footer";
import TabPrincipal from "./componentMaterialUI/TabPrincipal";
import "./App.css";
import { Continents } from "./data";
import * as actions from "./redux/actions/actions";
import { connect } from "react-redux";

class App extends React.Component {


  
  handleIndexChange = index => {
    this.props.dispatch(actions.CambiarFondo('white'));
    this.props.dispatch(actions.RequestContinents(index));
  };

  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <div
          style={{
            background: this.props.mapProps.Uireducer.colorDivPrincipal,
            height: 470
          }}
        >
          <Header />
          <TabPrincipal />
          <Footer
            data={Continents}
            handleIndexChange={this.handleIndexChange}
            selectedIndex={this.props.mapProps.countryreducer.selectedTabIndex}
          />
        </div>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    mapProps: state
  };
}
export default connect(mapStateToProps)(App);
