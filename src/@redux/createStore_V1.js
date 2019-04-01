const INIT = `@@redux/INIT`;

function createStore_V1(reducers, initialState) {
  let store = {};
  let state;
  let listeners = [];

  store.subscribe = function(fn) {
    if(typeof fn === 'function') {
      listeners.push(fn)
    }
  };

  store.getState = function() {
    return state;
  };

  store.dispatch = function(action) {
    state = reducers(state, action);
    listeners.forEach((listener) => {
      listener();
    })
  };

  if(initialState === undefined) {
    store.dispatch({ type: INIT });
  }

  return store
}

module.exports = createStore_V1;


// let store = createStore(reducers, applyMiddleware(thunk));
