import { combineReducers } from "redux";

import product_reducer from "./reducers/product_reducer";
import cart_reducer from "./reducers/cart_reducer";

const rootReducer = combineReducers({
  products: product_reducer,
  cart: cart_reducer,
});

export default rootReducer;
