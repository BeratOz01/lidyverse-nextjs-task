import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension";

import likes from "./likes/reducer";
import cart from "./cart/reducer";
import market from "./market/reducers";

const combinedReducer = combineReducers({
  likes,
  cart,
  market,
});

const initStore = () => {
  return legacy_createStore(
    combinedReducer,
    composeWithDevTools(applyMiddleware())
  );
};

export const wrapper = createWrapper(initStore);
