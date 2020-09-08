import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { connect } from 'react-redux';
import { addFeature, removeFeature } from './actions'

const App = (props) => {

  const addFeatureHandler = (e, feature) => {
    e.preventDefault();
    props.addFeature(feature);
    // return props.addFeature(feature);
    // return props.addFeature(feature);
  };

  const removeFeatureHandler = (e, feature) => {
    e.preventDefault();
    props.removeFeature(feature);
  }

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} addFeatureHandler = {addFeatureHandler} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );

};

const mapStateToProps = state => {

  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    additionalFeatures: state.additionalFeatures

  }
}
export default connect(mapStateToProps, {addFeature, removeFeature})(App)
