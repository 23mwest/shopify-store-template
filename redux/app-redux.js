import { createStore, applyMiddleware } from 'redux'; 
import thunkMiddleWare from 'redux-thunk';
// reducer

const initialState = {
  cartItems: 0
}

const ADD_ITEM = 'ADD_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';

function itemsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      let count = state.cartItems + 1;
      return {
        cartItems: count
      }

    default:
      return state
  }
}

const store = createStore(itemsReducer, applyMiddleware(thunkMiddleWare));
export { store };