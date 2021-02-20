import { createStore, combineReducers, applyMiddleware, compose } from "redux";

import thunk from "redux-thunk";
import { userRegisterReducer } from "./reducers/userRegisterReducer";

const initialState = {
  userInfo: [],
};
const reducer = combineReducers({
  userRegister: userRegisterReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
