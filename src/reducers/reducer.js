const ADD_FEATURE = "ADD_FEATURE"; 
const REMOVE_FEATURE = "REMOVE_FEATURE";

const initialState = {

    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };


function reducer(state = initialState, action) {
    // debugger;
    switch (action.type){
        case ('ADD_FEATURE'):{
            const newPrice = state.additionalPrice + action.payload.price;
            const newStateObj = {...state, additionalPrice: newPrice, car: {...state.car, features: [...state.car.features, action.payload]}};
            return newStateObj; 
        }
        case ('REMOVE_FEATURE'):{
            const newPrice = state.additionalPrice - action.payload.price;
            const newFeaturesArr = state.car.features.filter(f => f !== action.payload);
            const newStateObj = {...state, additionalPrice: newPrice, car: {...state.car, features: newFeaturesArr}};
            return newStateObj; // action2   
        }
        default:
            return state;
    }
    
}

export default reducer;