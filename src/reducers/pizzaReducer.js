// import from json
const pizzas = require('../data/pizzas')
const FIlTER_PIZZAS = 'filter_pizzas';
const TOGGLE_PIZZA_MODAL = 'toggle_pizza_modal'

const pizzaReducer = (state=pizzas, action) => {
  switch (action.type) {
    case FIlTER_PIZZAS:
      return pizzas.filter(pizza => pizza.name.toLowerCase().includes(action.payload))
    default:
      return state;
  }
};

export default pizzaReducer;
