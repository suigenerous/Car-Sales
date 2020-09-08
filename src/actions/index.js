const ADD_FEATURE = "ADD_FEATURE"; 
const REMOVE_FEATURE = "REMOVE_FEATURE";

export const addFeature = (feature) => {
  // action creator returns object w/ type and payload
  return {
    // the actual action
    type: ADD_FEATURE,
    payload: feature
  };
};

export const removeFeature = (feature) => {
  return {
    type: REMOVE_FEATURE,
    payload: feature
  };
};