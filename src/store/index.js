import { createStore,applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { list } from "./reducer-module/list";
import { httpdata } from "./reducer-module/httpdata";
// 合并 reducers
let combineReducers = (reducers) => { 
  return (state={}, action) => { 
    let obj = {}; 
    for (let key in reducers) {
      obj[key] = reducers[key](state[key], action); 
    }
    return obj;
  }
}
let reducer = combineReducers({
  list,httpdata
})
export default createStore(reducer,applyMiddleware(thunk));