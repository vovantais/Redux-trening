import { combineReducers } from 'redux';
import {
   ADD_POST,
   REMOVE_POST,
   ADD_SECCUSS,
}
   from "./actions-types";

const PostReducers = (prevState = [], action) => {
   const [...state] = prevState;
   switch (action.type) {
      case ADD_POST:
         state.push(action.payload)
         return state;
      case REMOVE_POST:
         state.pop();
         return state;
      default:
         return prevState;
   }
}
const FetchReducer = (prevState = [], action) => {
   const [...state] = prevState;
   switch (action.type) {
      case ADD_SECCUSS:
         state.push(...action.payload);
         return state;
      default:
         return prevState;
   }

}

const reducers = combineReducers({
   post: PostReducers,
   fetch: FetchReducer,
});

export default reducers;