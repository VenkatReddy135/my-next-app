const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();
/////////   1)Action    ///////////////

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKES_RESTOCKED = "CAKES_RESTOCKED";
const ICECREAMS_ORDERED = "ICECREAMS_ORDERED";
const ICECREAMS_RESTOCKED = "ICECREAMS_RESTOCKED";

/////////   2)Action Creators  ///////////

function orderCake(qt = 1) {
  return {
    type: CAKE_ORDERED,
    payload: qt,
  };
}

function restokedCakes(qt = 1) {
  return {
    type: CAKES_RESTOCKED,
    payload: qt,
  };
}

function orderIcecreams(qt = 1) {
  return {
    type: ICECREAMS_ORDERED,
    payload: qt,
  };
}

function restokedIceCreams(qt = 1) {
  return {
    type: ICECREAMS_RESTOCKED,
    payload: qt,
  };
}

/////////     3)Initial State  //////////////

const initialCakeState = {
  noOfCakes: 10,
};
const initialIceCreamState = {
  noOfIceCreams: 20,
};

///////////  4)Reducer==>(previousState, action) => newState////////////////

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        noOfCakes: state.noOfCakes - action.payload,
      };
    case CAKES_RESTOCKED:
      return {
        ...state,
        noOfCakes: state.noOfCakes + action.payload,
      };
    default:
      return state;
  }
};

const icecreamsReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case ICECREAMS_ORDERED:
      return {
        ...state,
        noOfIceCreams: state.noOfIceCreams - action.payload,
      };
    case ICECREAMS_RESTOCKED:
      return {
        ...state,
        noOfIceCreams: state.noOfIceCreams + action.payload,
      };
    default:
      return state;
  }
};

////// 5)Creating a store,checking state,disptach action,subscribe and unsubscribe  ////////

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCreams: icecreamsReducer,
});
const store = createStore(rootReducer, applyMiddleware(logger));
console.log("initialState", store.getState());

const unsubscribe = store.subscribe(() => {});
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(restokedCakes(3));
store.dispatch(orderIcecreams());
store.dispatch(orderIcecreams());
store.dispatch(restokedIceCreams(2));
unsubscribe();
