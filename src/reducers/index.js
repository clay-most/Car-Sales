import { ADD_FEATURE, REMOVE_FEATURE } from "../actions/index";

const initialState = {
  additionalPrice: 0,
  car: {
    price: 979080,
    name: "Cool Car",
    image:
      "https://cars.usnews.com/static/images/Auto/izmo/i106121435/2019_chevrolet_traverse_angularfront.jpg",
    features: []
  },
  additionalFeatures: [
    { id: 1, name: "Cool Thing", price: 67609 }
  ]
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FEATURE:
      return {
        ...state,
        additionalPrice: state.additionalPrice + action.payload.price,
        car: {
          ...state.car,
          features: [...state.car.features, action.payload]
        },
        additionalFeatures: state.additionalFeatures.filter(
          item => item.id !== action.payload.id
        )
      };
    case REMOVE_FEATURE:
      return {
        ...state,
        additionalPrice: state.additionalPrice - action.payload.price,
        car: {
          ...state.car,
          features: state.car.features.filter(
            item => item.id !== action.payload.id
          )
        },
        additionalFeatures: [...state.additionalFeatures, action.payload]
      };
    default:
      return state;
  }
};
