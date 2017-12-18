const ADD_PIZZA = 'add_pizza';
const CLEAR_CART = 'clear_cart';

const cartReducer = (state=[], action) => {
  switch (action.type) {
    case ADD_PIZZA:
      return [
          ...state,
          action.payload
      ]
    case CLEAR_CART:
      return []
    default:
      return state;
  }
};

export default cartReducer;
