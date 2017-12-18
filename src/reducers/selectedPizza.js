const pizzas = require('../data/pizzas')
const SELECT_PIZZA = 'select_pizza';

const selectedPizzaReducer = (state={}, action) => {
  switch (action.type) {
    case SELECT_PIZZA:
      return pizzas.filter(pizza => pizza.id === action.payload)[0]
    default:
      return state;
  }
};

export default selectedPizzaReducer;
