import { createStore, combineReducers, applyMiddleware, compose } from "redux";

import thunk from "redux-thunk";
import {
  userListReducer,
  userRegisterReducer,
} from "./reducers/userRegisterReducer";

const initialState = {
  user: {
    userInfo: {
      firstName: "",
    },
  },
  userRegister: {},
};
const reducer = combineReducers({
  userRegister: userRegisterReducer,
  userList: userListReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
