import React from 'react';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick = {e => props.removeFeature(e, props.feature)} className="button">X</button>
      {props.feature}
    </li>
  );
};

export default AddedFeature;
