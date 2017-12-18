import { combineReducers } from "redux";
import pizzas from "./pizzaReducer";
import ui from './uiReducer';
import selected from './selectedPizza';
import cart from './cartReducer';

export default combineReducers({
  pizzas,
  ui,
  selected,
  cart
});
