import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";
import {thunk} from "redux-thunk";
import apodReducer from "./apod/reducer";
import marsReducer from "./marsRover/reducer";
import epicReducer from "./epic/reducer";
import neoReducer from "./neo/reducer";
import filterReducer from "./filters/reducer";

const reducer = combineReducers({
  apod: apodReducer,
  mars: marsReducer,
  epic: epicReducer,
  neo: neoReducer,
  filters: filterReducer,
});

const middleware = [thunk];

// ✅ Safe DevTools support in development only
const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? require("redux-devtools-extension").composeWithDevTools
    : compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
