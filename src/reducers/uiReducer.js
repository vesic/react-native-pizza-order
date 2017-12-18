
const TOGGLE_PIZZA_MODAL = 'toggle_pizza_modal'

const defaultState = {
  pizzaModalVisible: false
}

const uiReducer = (state=defaultState, action) => {
  switch (action.type) {
    case TOGGLE_PIZZA_MODAL:
      return { ...state, pizzaModalVisible: !state.pizzaModalVisible }
    default:
      return state;
  }
};

export default uiReducer;