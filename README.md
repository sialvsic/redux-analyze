# redux-analyze

## Redux 设计思想

## Redux 优势

## Redux 核心组成
- Store 
- Action
- Reducer

API
**store**
- getState()
- subscribe(listener)
- dispatch(action)

**Other**
- createStore(reducer, [preloadedState], enhancer)
- combineReducers(reducers)
- bindActionCreators
- compose
- applyMiddleware
- middleware

## Teach Path
- Store(createStore)   <== Now
- combineReducers(reducers)
- bindActionCreators(actionCreators, dispatch)
- compose(...functions)
- applyMiddleware  && createStore-enhancer
- logger
- thunk

## Learn Path
Redux -> Redux thunk -> React Redux -> React


