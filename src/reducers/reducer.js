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
        case ('ADD_FEATURE'):
            // console.log(action.payload);
            const newStateObj = {...state, car: {...state.car, features: [...state.car.features, action.payload]}};
            // console.log(newStateObj)
            return newStateObj; // action1
        case ('ACTION_2'):
            return state; // action2   
        case ('ACTION_3'):
            return state; // action3  
        default:
            return state;
    }
    
}

export default reducer;