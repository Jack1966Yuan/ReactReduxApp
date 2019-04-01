import { FETCH_POSTS, NEW_POST } from '../actions/type';

const initialState = {
  items: [],
  item: {},
  log: {
     count: 0,
     date: new Date()
  }
}

export default function postReducer(state = initialState, action) {
     switch(action.type) {
         case FETCH_POSTS:
           return {
               ...state,
               items: action.payload
           }
         case NEW_POST:
           return {
               ...state,
               item: action.payload
           }
         default:
            return state;
     }
}